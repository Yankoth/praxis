namespace LocationsApi.Models
{
    public class LocationAvailability : IModel
    {
        public int Id { get; set; }
        public int DayOfWeek { get; set; }
        public int OpeningTime { get; set; }
        public int ClosingTime { get; set; }
        public int LocationId { get; set; }
    }
}
