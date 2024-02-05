using AutoMapper;
using CsvHelper;
using FluentValidation;
using FluentValidation.Results;
using LocationsApi.Dtos;
using LocationsApi.Models;
using LocationsApi.Repositories.Interfaces;
using LocationsApi.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace LocationsApi.Services
{
    public class LocationsService : ILocationsService
    {
        private readonly IMapper _mapper;
        private readonly ILocationsRepository _locationRepository;
        private readonly ILocationAvailabilitiesRepository _locationAvailabilitiesRepository;
        private readonly IValidator<LocationDto> _locationValidator;

        public LocationsService(
            IMapper mapper,
            ILocationsRepository locationRepository,
            ILocationAvailabilitiesRepository locationAvailabilitiesRepository,
            IValidator<LocationDto> locationValidator)
        {
            _mapper = mapper;
            _locationRepository = locationRepository;
            _locationAvailabilitiesRepository = locationAvailabilitiesRepository;
            _locationValidator = locationValidator;
        }

        public async Task<LocationDto?> Find(int id)
        {
            var location = await _locationRepository.Includes("LocationAvailability").GetById(id);

            if (location != null)
            {
                return _mapper.Map<LocationDto>(location);
            }

            return null;
        }

        public async Task<List<LocationDto>> GetAll()
        {
            var locations = await _locationRepository.Includes("LocationAvailability").GetAll();

            return _mapper.Map<List<LocationDto>>(locations);
        }

        public async Task<List<LocationDto>> GetAllAvailable(DayOfWeek dayOfWeek, TimeSpan openingTime, TimeSpan closingTime)
        {
            var locations = await _locationRepository
                .GetAll(x => x.LocationAvailability
                    .Any(availability =>
                        (DayOfWeek)availability.DayOfWeek == dayOfWeek &&
                        availability.OpeningTime < closingTime.TotalMinutes &&
                        availability.ClosingTime > openingTime.TotalMinutes));

            return _mapper.Map<List<LocationDto>>(locations);
        }

        public async Task<LocationDto> Add(LocationDto dto)
        {
            var location = _mapper.Map<Location>(dto);

            location = await _locationRepository.Add(location);

            return _mapper.Map<LocationDto>(location);
        }

        public async Task<LocationDto?> Delete(int id)
        {
            var location = await _locationRepository.Delete(id);

            if (location != null)
            {
                return _mapper.Map<LocationDto>(location);
            }

            return null;
        }

        public async Task<LocationDto?> Update(LocationDto dto)
        {
            var location = await _locationRepository.Find(dto.Id);

            if (location != null)
            {
                _mapper.Map(dto, location);

                await ResetLocationAvailabilities(location.Id);
                location = await _locationRepository.Update(location);

                return _mapper.Map<LocationDto>(location);
            }

            return null;
        }

        public async Task<bool> AddFromCSV(Stream file)
        {
            try
            {
                var locations = await GetLocationsFromCSV(file);
                await _locationRepository.AddRange(locations);

                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Location>> GetLocationsFromCSV(Stream file)
        {
            using (var reader = new StreamReader(file))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                var records = await csv.GetRecordsAsync<LocationCsvDto>().ToListAsync();

                var locationDtoDict = new Dictionary<string, LocationDto>();

                foreach (var record in records)
                {
                    if (!locationDtoDict.ContainsKey(record.Location))
                    {
                        locationDtoDict[record.Location] = new LocationDto { Name = record.Location };
                    }

                    locationDtoDict[record.Location].LocationAvailability.Add(new LocationAvailabilityDto
                    {
                        DayOfWeek = record.DayOfWeek,
                        OpeningTime = record.OpeningTime,
                        ClosingTime = record.ClosingTime
                    });
                }

                var locations = new List<Location>();

                foreach (var locationDto in locationDtoDict.Values)
                {
                    await _locationValidator.ValidateAndThrowAsync(locationDto);
                    locations.Add(_mapper.Map<Location>(locationDto));
                }

                return locations;
            }
        }

        private async Task ResetLocationAvailabilities(int locationId)
        { 
            var locationAvailabilities = await _locationAvailabilitiesRepository.GetAll(x => x.LocationId == locationId);

            foreach (var locationAvailability in locationAvailabilities)
            {
                await _locationAvailabilitiesRepository.Delete(locationAvailability.Id);
            }
        }
    }
}
