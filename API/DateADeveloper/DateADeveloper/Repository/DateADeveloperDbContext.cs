using DateADeveloper.DTO;
using Microsoft.EntityFrameworkCore;

namespace DateADeveloper.Repository
{
    public class DateADeveloperDbContext : DbContext
    {
        public DateADeveloperDbContext(DbContextOptions<DateADeveloperDbContext> options)
            : base(options)
        {
        }
        public DbSet<Profile> Profile { get; set; }

}
}
