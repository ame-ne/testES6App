using Microsoft.EntityFrameworkCore;

namespace testES6App.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<QuestionEntity> QuestionEntities { get; set; }
    }
}
