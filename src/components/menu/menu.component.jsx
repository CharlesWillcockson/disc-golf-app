import PageItem from "../page-item/page-item.component";
import "./menu.styles.scss";

const Menu = ({ pages }) => {
  return (
    <div className="menu-container">
      {pages.map((page) => (
        <PageItem key={page.id} page={page} />
      ))}
    </div>
  );
};

export default Menu;
