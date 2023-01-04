import { useNavigate } from "react-router-dom";
import "./page-item.styles.scss";

const PageItem = ({ page }) => {
  const { image, title, route } = page;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className="page-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="page-body-container">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default PageItem;
