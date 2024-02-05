using LocationsApi.Repositories.Interfaces;

namespace LocationsApi.Repositories
{
    public static class RepositoryInjection
    {
        public static void AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<ILocationsRepository, LocationsRepository>();
            services.AddScoped<ILocationAvailabilitiesRepository, LocationAvailabilitiesRepository>();
        }
    }
}
