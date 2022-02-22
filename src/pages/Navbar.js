import "../styles/layout/navbar.scss";
import tmdbLogo from "../assets/icons/tmdbLogo.svg";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="tmdb__navbar">
        <div onClick={() => navigate("/")}>
          <img width="175" src={tmdbLogo} alt="tmdb logo" />
        </div>
      </nav>
    </>
  );
};
