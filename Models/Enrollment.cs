
using System.ComponentModel.DataAnnotations;

namespace Universidad.Models
{
    public enum Grade
    {
        A, B, C, D, E, F,
        None
    }
    public class Enrollment
    {
        [Key]

        public int EnrollmentID { get; set; }

        [Required(ErrorMessage = "El curso es obligatorio")]
        public int CourseId { get; set; }

        [Required(ErrorMessage = "El Estudiante es obligatorio")]
        public int StudentId { get; set; }

        [Required(ErrorMessage = "El grado es obligatorio")]
        [RegularExpression(@"[A-F]$", ErrorMessage = "Grado debe ser de A hasta F")]
        [EnumDataType(typeof(Grade), ErrorMessage = "El valor de grado no es válido")]
        public Grade? Grade { get; set; }

        public Student? Student { get; set; }

        public Course? Course { get; set; }
    }
}
