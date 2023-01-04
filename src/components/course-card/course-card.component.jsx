import "./course-card.styles.scss";
import Button from "../button/button.component";

const CourseCard = ({ course }) => {
  const { name, imageUrl, holes } = course;
  return (
    <div className="course-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="holes">{holes}</span>
      </div>
      <Button buttonType="inverted">Go to course</Button>
    </div>
  );
};

export default CourseCard;
