namespace Universidad.Models
{
    public class Course
    {
        public int CourseId { get; set; }

        public string Title { get; set; }

        public string Credito { get; set; }

        public ICollection<Enrollment>? Enrollment { get; set; }
    }
}
