using FluentValidation;
using LocationsApi.Dtos;

namespace LocationsApi.Validators
{
    public static class ValidatorInjection
    {
        public static void AddValidators(this IServiceCollection services)
        {
            services.AddScoped<IValidator<LocationDto>, LocationValidator>();
            services.AddScoped<IValidator<LocationAvailabilityDto>, LocationAvailabilityValidator>();
        }
    }
}
