namespace LocationsApi.Dtos
{
    public class LocationDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public List<LocationAvailabilityDto> LocationAvailability { get; set; } = new List<LocationAvailabilityDto>();
    }
}
