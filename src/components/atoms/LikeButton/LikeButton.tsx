interface LikeButtonProps {
  isLiked: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, onClick }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      {isLiked ? '❤️' : '🤍'}
    </div>
  );
};

export default LikeButton;