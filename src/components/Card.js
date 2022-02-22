import "../styles/layout/card.scss";

export function Card({ cardImg, cardTitle, onClick }) {
  return (
    <div onClick={onClick} className="card">
      <img className="card__img" src={cardImg} alt="" />
      <div className="card__footer">
        <span className="card__footer--text font-semibold">{cardTitle}</span>
      </div>
    </div>
  );
}
