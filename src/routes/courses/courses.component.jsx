import { useContext } from "react";
import { CoursesContext } from "../../contexts/courses.context";
import CourseCard from "../../components/course-card/course-card.component";
import "./courses.styles.scss";

const Courses = () => {
  const { courses } = useContext(CoursesContext);
  return (
    <div className="courses-container">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
