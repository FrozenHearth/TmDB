import "../styles/layout/detailsCard.scss";

export default function DetailsCard({ imgSrc, title }) {
  return (
    <div className="details__card">
      <div className="details__card--banner">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="details__card--title">
        <div className="font-bold">{title}</div>
      </div>
    </div>
  );
}
