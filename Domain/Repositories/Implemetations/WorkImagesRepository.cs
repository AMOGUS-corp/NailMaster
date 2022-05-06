using Microsoft.EntityFrameworkCore;
using NailMasterApi.Domain.Abstract;
using NailMasterApi.Domain.Entities;

namespace NailMasterApi.Domain.Repositories.Implemetations
{
    public class WorkImagesRepository : IWorkImagesRepository
    {
        private readonly AppDbContext _dbContext;

        public WorkImagesRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<WorkImage>> GetAll()
        {
            return await _dbContext.WorkImages.ToListAsync();
        }
    }
}
