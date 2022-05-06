using NailMasterApi.Domain.Entities;

namespace NailMasterApi.Domain.Abstract
{
    public interface IWorkImagesRepository
    {
        Task<IEnumerable<WorkImage>> GetAll();
    }
}
