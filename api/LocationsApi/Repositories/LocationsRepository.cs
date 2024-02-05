using LocationsApi.Context;
using LocationsApi.Models;
using LocationsApi.Repositories.Interfaces;

namespace LocationsApi.Repositories
{
    public class LocationsRepository : Repository<Location>, ILocationsRepository
    {
        private readonly LocalDbContext _context;

        public LocationsRepository(LocalDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task AddRange(List<Location> locations)
        {
            await _context.AddRangeAsync(locations);
            await _context.SaveChangesAsync();
        }
    }
}
