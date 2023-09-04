using System.ComponentModel.DataAnnotations;

namespace Universidad.Models
{
    public class Student
    {
        [Key]
        public int StudentId { get; set; }

        public string LastName { get; set; }

        public string FirstName { get; set; }

        public DateTime EnrollmentDate { get; set; }


        public ICollection<Enrollment>? Enrollment { get; set; }
    }
}
