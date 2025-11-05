import RateItem from '../../atoms/RateItem';
import LikeButton from '../../atoms/LikeButton/LikeButton';
import './Card.scss';

interface CardProps {
  voteAverage: number;
  voteNumber: number;
  url: string;
  movieId?: number;
  onClick?: () => void;
  onLikeItem?: () => void;
  isSelected?: boolean; 
}

const Card = ({
  voteAverage,
  voteNumber,
  url,
  onClick,
  onLikeItem,
  isSelected = false,
}: CardProps) => {
  return (
    <div className="card" onClick={onClick}>
      
      <img src={url} alt="Movie poster" className="card__image" />
      <div className="card__content">
        <RateItem voteAverage={voteAverage} voteNumber={voteNumber} />
        <LikeButton isLiked={isSelected} onClick={onLikeItem} />
      </div>
    </div>
  );
};

export default Card;
