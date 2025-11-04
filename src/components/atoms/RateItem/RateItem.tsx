import './RateItem.scss';

interface RateItemProps {
  voteAverage: number;
  voteNumber: number;
}

const RateItem = ({ voteAverage, voteNumber }: RateItemProps) => {
  const percentage = Math.round(voteAverage * 10);
  
  const getRateClass = (percentage: number) => {
    if (percentage >= 80) return 'rate-green';
    if (percentage >= 60) return 'rate-light-green';
    if (percentage >= 40) return 'rate-yellow';
    if (percentage >= 20) return 'rate-orange';
    return 'rate-red';
  };

  return (
    <div className="rate-item">
      <span className={getRateClass(percentage)}>{percentage}%</span> 
      <span className="vote-count">{voteNumber} votes</span>
    </div>
  );
};

export default RateItem;