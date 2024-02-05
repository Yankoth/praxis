using FluentValidation;
using FluentValidation.Results;
using LocationsApi.Dtos;
using LocationsApi.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace LocationsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ILocationsService _locationsService;
        private readonly IValidator<LocationDto> _validator;

        public LocationController(ILocationsService locationsService, IValidator<LocationDto> validator)
        {
            _locationsService = locationsService;
            _validator = validator;
        }

        [HttpGet]
        public async Task<ActionResult<List<LocationDto>>> GetAll()
        {
            var dtos = await _locationsService.GetAll();

            return Ok(dtos);
        }

        [HttpGet("Available")]
        public async Task<ActionResult<List<LocationDto>>> GetAllAvailable([FromQuery] DayOfWeek dayOfWeek, [FromQuery] TimeSpan openingTime, [FromQuery] TimeSpan closingTime)
        {
            var dtos = await _locationsService.GetAllAvailable(dayOfWeek, openingTime, closingTime);

            return Ok(dtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LocationDto>> Find(int id)
        {
            var dto = await _locationsService.Find(id);

            if (dto == null)
            {
                return NotFound();
            }

            return Ok(dto);
        }

        [HttpPost]
        public async Task<ActionResult<LocationDto>> Post(LocationDto dto)
        {
            ValidationResult result = await _validator.ValidateAsync(dto);

            if (!result.IsValid)
            {
                return BadRequest(result.Errors);
            }

            dto = await _locationsService.Add(dto);

            if (dto == null)
            {
                return BadRequest();
            }

            return Ok(dto);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<LocationDto>> Put(int id, LocationDto dto)
        {
            ValidationResult result = await _validator.ValidateAsync(dto);

            if (!result.IsValid)
            {
                return BadRequest(result.Errors);
            }

            if (id != dto.Id)
            {
                return BadRequest();
            }

            var updatedDto = await _locationsService.Update(dto);

            if (updatedDto == null)
            {
                return NotFound();
            }

            return Ok(updatedDto);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<LocationDto>> Delete(int id)
        {
            var dto = await _locationsService.Delete(id);

            if (dto == null)
            {
                return NotFound();
            }

            return Ok(dto);
        }

        [HttpPost("upload")]
        public async Task<ActionResult<LocationDto>> Upload(IFormFile file)
        {
            if (file.ContentType != "text/csv")
            {
                return BadRequest("Invalid CSV file.");
            }

            var result = await _locationsService.AddFromCSV(file.OpenReadStream());

            if (!result)
            {
                return BadRequest("This CSV file cannot be processed.");
            }

            return Ok();
        }
    }
}
