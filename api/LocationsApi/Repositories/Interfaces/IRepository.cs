using System.Linq.Expressions;

namespace LocationsApi.Repositories.Interfaces
{
    public interface IRepository<TEntity> where TEntity : class
    {
        Task<List<TEntity>> GetAll();
        Task<List<TEntity>> GetAll(Expression<Func<TEntity, bool>> predicate);
        Task<TEntity?> Find(int id);
        Task<TEntity?> Get(Expression<Func<TEntity, bool>> predicate);
        Task<TEntity?> GetById(int id);
        Task<TEntity> Add(TEntity entity);
        Task<TEntity> Update(TEntity entity);
        Task<TEntity?> Delete(int id);
        IRepository<TEntity> Includes(params string[] includes);
    }
}
