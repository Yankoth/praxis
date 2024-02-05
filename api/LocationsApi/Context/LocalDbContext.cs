using LocationsApi.Models;
using Microsoft.EntityFrameworkCore;

namespace LocationsApi.Context
{
    public class LocalDbContext : DbContext
    {
        public LocalDbContext(DbContextOptions<LocalDbContext> options) : base(options)
        {
        }

        public DbSet<Location> Locations { get; set; }
    }
}
