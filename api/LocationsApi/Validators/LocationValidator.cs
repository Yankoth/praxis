using FluentValidation;
using LocationsApi.Dtos;

namespace LocationsApi.Validators
{
    public class LocationValidator : AbstractValidator<LocationDto>
    {
        public LocationValidator()
        {
            RuleFor(location => location.Name)
                .NotEmpty()
                .MaximumLength(100);

            RuleFor(location => location.LocationAvailability)
                .Must(availabilities =>
                {
                    if (availabilities == null || !availabilities.Any())
                    {
                        return true;
                    }

                    return availabilities.Select(av => av.DayOfWeek).Distinct().Count() == availabilities.Count;
                })
                .WithMessage("Days Of Week in availability must be distinct.");

            RuleForEach(location => location.LocationAvailability)
                .SetValidator(new LocationAvailabilityValidator());
        }
    }
}
