using NailMasterApi.Entities;

namespace NailMasterApi.Domain.Abstract
{
    public interface IPriceListsRepository
    {
        Task<IEnumerable<PriceList>> GetAll();
        Task<PriceList> GetById(int id);
    }
}
