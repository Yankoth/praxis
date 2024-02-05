using AutoMapper;
using FluentValidation;
using LocationsApi.Dtos;
using LocationsApi.Models;
using LocationsApi.Repositories.Interfaces;
using LocationsApi.Services;
using Moq;
using NUnit.Framework.Internal;
using System.Linq;

namespace LocationsApi.Tests.Services
{
    [TestFixture]
    public class LocationsServiceTests
    {
        [Test]
        public async Task GetLocationsFromCSV_ValidCSV_ShouldRead()
        {
            var testData = "Location,DayOfWeek,OpeningTime,ClosingTime\n" +
                           "Location1,0,10:00:00,23:00:00\n" +
                           "Location2,0,10:00:00,13:00:00\n" +
                           "Location5,0,11:00:00,13:00:00\n" +
                           "Location7,1,09:00:00,12:00:00\n";
            var stream = new MemoryStream(System.Text.Encoding.UTF8.GetBytes(testData));

            var mapperMock = new Mock<IMapper>();
            var locationRepositoryMock = new Mock<ILocationsRepository>();
            var locationAvailabilitiesRepositoryMock = new Mock<ILocationAvailabilitiesRepository>();
            var locationValidatorMock = new Mock<IValidator<LocationDto>>(); 

            var locationsService = new LocationsService(
                mapperMock.Object, locationRepositoryMock.Object, locationAvailabilitiesRepositoryMock.Object, locationValidatorMock.Object);

            var locations = await locationsService.GetLocationsFromCSV(stream);

            Assert.Greater(locations.Count, 0);
        }

        [Test]
        public async Task GetLocationsFromCSV_InvalidCSV_ShouldThrow()
        {
            var testData = "LocayOfWeek,OpeningTimingTime\n" +
                           "Locatio,10:00:00,25:00:00\n" +
                           "Location2,1,27:0000:00\n";
            var stream = new MemoryStream(System.Text.Encoding.UTF8.GetBytes(testData));

            var mapperMock = new Mock<IMapper>();
            var locationRepositoryMock = new Mock<ILocationsRepository>();
            var locationAvailabilitiesRepositoryMock = new Mock<ILocationAvailabilitiesRepository>();
            var locationValidatorMock = new Mock<IValidator<LocationDto>>();

            var locationsService = new LocationsService(
                mapperMock.Object, locationRepositoryMock.Object, locationAvailabilitiesRepositoryMock.Object, locationValidatorMock.Object);

            Assert.ThrowsAsync<CsvHelper.HeaderValidationException>(async () =>
            {
                await locationsService.GetLocationsFromCSV(stream);
            });
        }
    }
}
