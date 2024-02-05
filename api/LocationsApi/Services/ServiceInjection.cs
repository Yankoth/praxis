using LocationsApi.Services.Interfaces;

namespace LocationsApi.Services
{
    public static class ServiceInjection
    {
        public static void AddServices(this IServiceCollection services)
        {
            services.AddScoped<ILocationsService, LocationsService>();
        }
    }
}
