using LocationsApi.Context;
using LocationsApi.Models;
using LocationsApi.Repositories.Interfaces;

namespace LocationsApi.Repositories
{
    public class LocationAvailabilitiesRepository : Repository<LocationAvailability>, ILocationAvailabilitiesRepository
    {
        public LocationAvailabilitiesRepository(LocalDbContext context) : base(context)
        {
        }
    }
}
