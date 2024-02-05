using LocationsApi.Context;
using LocationsApi.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

var dbString = builder.Configuration.GetConnectionString("LocalDatabase");
builder.Services.AddDbContext<LocalDbContext>(options => options.UseSqlite(dbString));

builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());
builder.Services.AddRepositories();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
