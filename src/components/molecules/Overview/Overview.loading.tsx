import React from 'react';
import './Overview.scss';

const OverviewLoading: React.FC = () => {
  return (
    <div className="overview overview--loading">
      <div className="overview__skeleton-line overview__skeleton-line--title" />
      <div className="overview__skeleton-line" />
      <div className="overview__skeleton-line" />
      <div className="overview__skeleton-line overview__skeleton-line--short" />
    </div>
  );
};

export default OverviewLoading;