using AutoMapper;
using LocationsApi.Dtos;
using LocationsApi.Models;

namespace LocationsApi.Mapper
{
    public class LocationProfile : Profile
    {
        public LocationProfile()
        {
            CreateMap<Location, LocationDto>().ReverseMap();
            CreateMap<LocationAvailabilityDto, LocationAvailability>()
                .ForMember(x => x.DayOfWeek, x => x.MapFrom(y => (int)y.DayOfWeek))
                .ForMember(x => x.OpeningTime, x => x.MapFrom(y => y.OpeningTime.TotalMinutes))
                .ForMember(x => x.ClosingTime, x => x.MapFrom(y => y.ClosingTime.TotalMinutes));

            CreateMap<LocationAvailability, LocationAvailabilityDto>()
                .ForMember(x => x.DayOfWeek, x => x.MapFrom(y => (DayOfWeek)y.DayOfWeek))
                .ForMember(x => x.OpeningTime, x => x.MapFrom(y => TimeSpan.FromMinutes(y.OpeningTime)))
                .ForMember(x => x.ClosingTime, x => x.MapFrom(y => TimeSpan.FromMinutes(y.ClosingTime)));
        }
    }
}
