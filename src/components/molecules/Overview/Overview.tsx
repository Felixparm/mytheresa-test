import React from 'react';
import './Overview.scss';
import Button from '../../atoms/Button/Button';


interface OverviewProps {
  text: string;
  onClickAddButton: () => void;
}

const Overview: React.FC<OverviewProps> = ({ text, onClickAddButton }) => {
  return (
    <div className="overview__container">
      <div>
        <h3>Overview</h3>
        <p className="overview__text">{text}</p>
      </div>
      <div>
        <Button label={'Add to wish list'} onClick={onClickAddButton} />
      </div>
    </div>
  );
};

export default Overview;