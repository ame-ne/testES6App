using System.Linq;

namespace testES6App.Models
{
    public interface ITestService
    {
        IQueryable<QuestionEntity> QuestionEntities { get; }

        int TestInit();
        QuestionEntity GetNext(int id);
    }
}
