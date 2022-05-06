using Microsoft.EntityFrameworkCore;
using NailMasterApi.Domain.Abstract;
using NailMasterApi.Entities;

namespace NailMasterApi.Domain.Repositories.Implemetations
{
    public class PriceListsRepository : IPriceListsRepository
    {
        private readonly AppDbContext _dbContext;

        public PriceListsRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<IEnumerable<PriceList>> GetAll()
        {
            return await _dbContext.PriceLists.ToListAsync();
        }

        public async Task<PriceList> GetById(int id)
        {
            return await _dbContext.PriceLists.FindAsync(id);
        }
    }
}
