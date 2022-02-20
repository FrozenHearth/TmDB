import "../styles/layout/navbar.scss";
import tmdbLogo from "../assets/icons/tmdbLogo.svg";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navItems = [
    { name: "Movies", link: "/movies" },
    { name: "People", link: "/people" },
  ];
  const navigate = useNavigate();
  return (
    <>
      <nav className="tmdb__navbar">
        <div onClick={() => navigate("/")}>
          <img width="175" src={tmdbLogo} alt="tmdb logo" />
        </div>
      </nav>
      <ul className="tmdb__bottom--nav">
        {navItems.map((item, index) => (
          <li key={index} className="font-bold">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
