import './Card.scss';

const CardLoading = () => {
  return (
    <div className="card card--loading">
      <div className="card__image card__image--skeleton" />
      <div className="card__content">
        <div className="rate-item rate-item--skeleton" />
      </div>
    </div>
  );
};

export default CardLoading;