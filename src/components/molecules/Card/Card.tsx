import RateItem from '../../atoms/RateItem';
import './Card.scss';

interface CardProps {
  voteAverage: number;
  voteNumber: number;
  url: string;
  movieId?: number;
  onClick?: () => void;
}

const Card = ({ voteAverage, voteNumber, url, onClick }: CardProps) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={url} alt="Movie poster" className="card__image" />
      <div className="card__content">
        <RateItem voteAverage={voteAverage} voteNumber={voteNumber} />
      </div>
    </div>
  );
};

export default Card;