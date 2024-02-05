using FluentValidation;
using LocationsApi.Dtos;

namespace LocationsApi.Validators
{
    public class LocationAvailabilityValidator : AbstractValidator<LocationAvailabilityDto>
    {
        public LocationAvailabilityValidator()
        {
            RuleFor(availability => availability.ClosingTime)
                .NotEmpty();

            RuleFor(availability => availability.DayOfWeek)
                .IsInEnum();

            RuleFor(availability => availability.ClosingTime)
                .GreaterThan(availability => availability.OpeningTime);
        }
    }
}
