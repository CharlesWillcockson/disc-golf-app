import { Outlet } from "react-router-dom";
import Menu from "../../components/menu/menu.component";

const Home = () => {
  const pages = [
    {
      id: 1,
      title: "Courses",
      image: "./../assets/discGolfCourse.png",
    },
    {
      id: 2,
      title: "Discs",
      image: "./../assets/PngItem_1.png",
    },
    {
      id: 3,
      title: "Scorecards",
      image: "./../assets/scoreCard.png",
    },
    {
      id: 4,
      title: "Best Scores",
      image: "./../assets/Trophies.png",
    },
    {
      id: 5,
      title: "Gear",
      image: "./../assets/discbag.png",
    },
    {
      id: 6,
      title: "Players",
      image: "./../assets/pngegg.png",
    },
  ];

  return (
    <div>
      <Menu pages={pages} />
      <Outlet />
    </div>
  );
};

export default Home;
