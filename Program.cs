using FastEndpoints;
using FastEndpoints.Security;
using FastEndpoints.Swagger;
using Microsoft.EntityFrameworkCore;
using NailMasterApi.Domain;
using NailMasterApi.Domain.Abstract;
using NailMasterApi.Domain.Repositories.Implemetations;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddFastEndpoints();
builder.Services.AddSwaggerDoc();
builder.Services.AddAuthenticationJWTBearer("TokenSigningKey");
builder.Services.AddAuthorization(opts =>
    opts.AddPolicy("ManagersOnlyPolicy", b =>
        b.RequireRole("Manager")
            .RequireClaim("ManagerID")));

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            builder.AllowAnyMethod()
                .AllowAnyHeader()
                .AllowAnyOrigin();
        });
});

builder.Services.AddDbContext<AppDbContext>(opts =>
    opts.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<IPriceListsRepository, PriceListsRepository>();
builder.Services.AddScoped<IWorkImagesRepository, WorkImagesRepository>();

var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();
app.UseFastEndpoints();
app.UseOpenApi();
app.UseSwaggerUi3(s => s.ConfigureDefaults());

app.Run();
