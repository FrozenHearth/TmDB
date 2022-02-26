import "../styles/layout/rating.scss";
import RatingStar from "../assets/icons/star.svg";

export default function Rating({ ratingText }) {
  return (
    <div className="rating">
      <img src={RatingStar} alt="rating star" />
      <span className="rating__text">{ratingText}</span>
    </div>
  );
}
