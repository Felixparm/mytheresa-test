import RateItem from '../../atoms/RateItem';
import './Card.scss';

interface CardProps {
  voteAverage: number;
  voteNumber: number;
  url: string;
}

const Card = ({ voteAverage, voteNumber, url }: CardProps) => {
  return (
    <div className="card">
      <img src={url} alt="Movie poster" className="card-image" />
      <div className="card-content">
        <RateItem voteAverage={voteAverage} voteNumber={voteNumber} />
      </div>
    </div>
  );
};

export default Card;