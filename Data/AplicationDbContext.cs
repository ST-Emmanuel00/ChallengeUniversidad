using Microsoft.EntityFrameworkCore;
using Universidad.Models;

namespace Universidad.Data
{
    public class AplicationDbContext : DbContext
    {

        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {


        }

        public DbSet<Student> Student { get; set; }
        public DbSet<Course> Course { get; set; }

        public DbSet<Enrollment> Enrollment { get; set; }

    }
}
