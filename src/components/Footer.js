import "../styles/layout/footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  const navItems = [
    { name: "Movies", link: "/movies" },
    { name: "People", link: "/people" },
  ];
  return (
    <ul className="tmdb__footer">
      {navItems.map((item, index) => (
        <li key={index} className="font-bold">
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
