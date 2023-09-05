using System.ComponentModel.DataAnnotations;

namespace Universidad.Models
{
    public class Student
    {
        [Key]
        public int StudentId { get; set; }

        [StringLength(50, ErrorMessage = "La nombre no debe ser tan extenso, maximo 50 caracteres")]
        [Required(ErrorMessage = "El nombre es obligatorio")]
        [RegularExpression(@"^[a-zA-Z\s]*$", ErrorMessage = "Hay valores no permitidos")]
        public string LastName { get; set; }

        [StringLength(50, ErrorMessage = "La apellido no debe ser tan extenso, maximo 50 caracteres")]
        [Required(ErrorMessage = "El apellido es obligatorio")]
        [RegularExpression(@"^[a-zA-Z\s]*$", ErrorMessage = "Hay valores no permitidos")]
        public string FirstName { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Required(ErrorMessage = "La fecha de incripcion")]
        public DateTime EnrollmentDate { get; set; }

        public ICollection<Enrollment>? Enrollment { get; set; }
    }
}
