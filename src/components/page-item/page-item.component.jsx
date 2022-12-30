import "./page-item.styles.scss";

const PageItem = ({ page }) => {
  const { image, title } = page;

  return (
    <div className="page-container">
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
