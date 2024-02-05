using LocationsApi.Models;

namespace LocationsApi.Repositories.Interfaces
{
    public interface ILocationsRepository : IRepository<Location>
    {
        Task AddRange(List<Location> locations);
    }
}
