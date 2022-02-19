import "../styles/layout/navbar.scss";
import tmdbLogo from "../assets/icons/tmdbLogo.svg";

export const Navbar = () => {
  const navItems = [
    { name: "Movies", link: "/movies" },
    { name: "People", link: "/people" },
  ];
  return (
    <>
      <nav className="tmdb__navbar">
        <div>
          <img width="175" src={tmdbLogo} alt="tmdb logo" />
        </div>
      </nav>
      <ul className="tmdb__bottom--nav">
        {navItems.map((item, index) => (
          <li key={index} className="font-bold">
            <a>{item.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
