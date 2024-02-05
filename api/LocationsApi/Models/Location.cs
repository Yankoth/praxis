namespace LocationsApi.Models
{
    public class Location : IModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public virtual List<LocationAvailability> LocationAvailability { get; set; } = new List<LocationAvailability>();
    }
}
