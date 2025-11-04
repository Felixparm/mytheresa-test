import React, { useState, useEffect } from 'react';
import './Carousel.scss';

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ children, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const containerWidth = window.innerWidth - 112; // Account for arrows and gaps
      const cardWidth = 190;
      const minGap = 16;
      
      let newItemsPerPage = Math.floor((containerWidth + minGap) / (cardWidth + minGap));
      newItemsPerPage = Math.max(1, Math.min(newItemsPerPage, 6));
      
      setItemsPerPage(newItemsPerPage);
      
      const newTotalPages = Math.ceil(children.length / newItemsPerPage);
      if (currentIndex >= newTotalPages) {
        setCurrentIndex(Math.max(0, newTotalPages - 1));
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, [children.length, currentIndex]);

  const totalPages = Math.ceil(children.length / itemsPerPage);
  const maxIndex = totalPages - 1;

  const goToNext = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  const translateX = -(currentIndex * 100);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-arrow-placeholder">
        {canGoPrev && (
          <button className="carousel-arrow carousel-arrow--prev" onClick={goToPrev}>
            &#8249;
          </button>
        )}
      </div>
      
      <div className="carousel-container">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {Array.from({ length: totalPages }, (_, pageIndex) => {
            const startIndex = pageIndex * itemsPerPage;
            const pageItems = children.slice(startIndex, startIndex + itemsPerPage);
            const placeholdersNeeded = itemsPerPage - pageItems.length;
            const placeholders = Array.from({ length: placeholdersNeeded }, (_, i) => (
              <div key={`placeholder-${pageIndex}-${i}`} className="carousel-placeholder" />
            ));
            return (
              <div key={pageIndex} className="carousel-page">
                {pageItems}
                {placeholders}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="carousel-arrow-placeholder">
        {canGoNext && (
          <button className="carousel-arrow carousel-arrow--next" onClick={goToNext}>
            &#8250;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;