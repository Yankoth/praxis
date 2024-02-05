namespace LocationsApi.Dtos
{
    public class LocationCsvDto
    {
        public string Location { get; set; } = string.Empty;
        public DayOfWeek DayOfWeek { get; set; }
        public TimeSpan OpeningTime { get; set; }
        public TimeSpan ClosingTime { get; set; }
    }
}
