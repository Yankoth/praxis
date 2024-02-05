namespace LocationsApi.Dtos
{
    public class LocationAvailabilityDto
    {
        public DayOfWeek DayOfWeek { get; set; }
        public TimeSpan OpeningTime { get; set; }
        public TimeSpan ClosingTime { get; set; }
    }
}
