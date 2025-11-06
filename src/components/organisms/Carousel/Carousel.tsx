import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Carousel.scss';

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
  isLoading?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ children, className = '', isLoading = false }) => {

  const getItemsPerPage = useCallback(() => {
    const containerWidth = typeof window !== 'undefined' ? window.innerWidth - 112 : 1200; 
    const cardWidth = 190;
    const minGap = 16;

    let newItemsPerPage = Math.floor((containerWidth + minGap) / (cardWidth + minGap));
    return Math.max(1, Math.min(newItemsPerPage, 6));
  }, []);

  const [itemsPerPage, setItemsPerPage] = useState<number>(getItemsPerPage());
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getItemsPerPage]);

  const totalPages = useMemo(() => Math.ceil(children.length / itemsPerPage), [children.length, itemsPerPage]);
  const maxIndex = totalPages - 1;

  useEffect(() => {
    if (currentIndex >= totalPages) {
      setCurrentIndex(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const translateX = -(currentIndex * 100);
  const canGoPrev = !isLoading && currentIndex > 0;
  const canGoNext = !isLoading && currentIndex < maxIndex;

  const pages = useMemo(() => {
    return Array.from({ length: totalPages }, (_, pageIndex) => {
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
    });
  }, [children, itemsPerPage, totalPages]);

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
          style={{
            transform: `translateX(${translateX}%)`,
            transition: 'transform 0.4s ease', 
          }}
        >
          {pages}
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
