import "../styles/layout/navbar.scss";
import tmdbLogo from "../assets/icons/tmdbLogo.svg";
import { useState } from "react";
import clsx from "clsx";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="tmdb__navbar">
      <div>
        <img width="175" src={tmdbLogo} alt="tmdb logo" />
      </div>
      <ul
        className={clsx("tmdb__navbar--menu font-bold", {
          menu__mobile: show,
        })}
      >
        <li>
          <a>Movies</a>
        </li>
        <li>
          <a>People</a>
        </li>
      </ul>
      {show && (
        <div className="tmdb__sideNav">
          <div onClick={() => setShow(false)} className="tmdb__sideNav--icon">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
      )}
      <div onClick={() => setShow(true)} className="tmdb__hamburger">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </nav>
  );
};
