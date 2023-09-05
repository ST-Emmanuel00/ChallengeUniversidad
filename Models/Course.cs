using MessagePack;
using System.ComponentModel.DataAnnotations;
using KeyAttribute = System.ComponentModel.DataAnnotations.KeyAttribute;

namespace Universidad.Models
{
    public class Course
    {

        [Key]
        public int CourseId { get; set; }

        [StringLength(50, ErrorMessage = "La titulo no debe ser tan extenso, maximo 50 caracteres")]
        [Required(ErrorMessage = "El titulo del curso es obligatorio")]
        [RegularExpression(@"^[a-zA-Z\s]*$", ErrorMessage = "Hay valores no permitidos")]
        public string Title { get; set; }

        [Range(0, 5, ErrorMessage = "Rango de creditos de 1 a 5 creditos")]
        [Required(ErrorMessage = "Los creditos son obligatorios")]
        [RegularExpression(@"^[0-5]*$", ErrorMessage = "Solo permitimos numeros de 1 a 5")]
        public string Credito { get; set; }

        public ICollection<Enrollment>? Enrollment { get; set; }
    }
}
