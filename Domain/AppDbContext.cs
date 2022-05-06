using Microsoft.EntityFrameworkCore;
using NailMasterApi.Domain.Entities;
using NailMasterApi.Entities;

namespace NailMasterApi.Domain
{
    public class AppDbContext : DbContext
    {
        public DbSet<PriceList> PriceLists { get; set; }
        public DbSet<WorkImage> WorkImages { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> appDbContext) : base(appDbContext) {}
    }
}
