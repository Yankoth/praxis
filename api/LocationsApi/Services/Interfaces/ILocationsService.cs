using LocationsApi.Dtos;

namespace LocationsApi.Services.Interfaces
{
    public interface ILocationsService
    {
        Task<LocationDto?> Find(int id);
        Task<List<LocationDto>> GetAll();
        Task<List<LocationDto>> GetAllAvailable(DayOfWeek dayOfWeek, TimeSpan openingTime, TimeSpan closingTime);
        Task<LocationDto> Add(LocationDto dto);
        Task<LocationDto?> Delete(int id);
        Task<LocationDto?> Update(LocationDto dto);
        Task<bool> AddFromCSV(Stream file);
    }
}
