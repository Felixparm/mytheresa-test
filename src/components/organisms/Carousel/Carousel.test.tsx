
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';
import { describe, it, expect, beforeEach } from 'vitest';

const setWindowWidth = (width: number) => {
  (window as any).innerWidth = width;
  window.dispatchEvent(new Event('resize'));
};

describe('Carousel component', () => {
  const createChildren = (count: number) =>
    Array.from({ length: count }, (_, i) => <div key={i}>Item {i + 1}</div>);

  beforeEach(() => {
    setWindowWidth(1200);
  });

  it('disables arrows when loading', () => {
    const children = createChildren(5);
    render(<Carousel isLoading>{children}</Carousel>);
    const nextButton = screen.queryByRole('button', { name: /›/ });
    expect(nextButton).not.toBeInTheDocument(); 
  });

  it('renders next/prev arrows when not loading', () => {
    const children = createChildren(12);
    render(<Carousel>{children}</Carousel>);

    const pages = document.querySelectorAll('.carousel-page');
    expect(pages.length).toBe(3);

    const prevButton = screen.queryByRole('button', { name: /‹/ });
    expect(prevButton).not.toBeInTheDocument();

    const nextButton = screen.getByRole('button', { name: /›/ });
    expect(nextButton).toBeInTheDocument();
  });

  it('moves to next page and loops correctly, next arrow should disappear', () => {
    const children = createChildren(10);
    render(<Carousel>{children}</Carousel>);

    const nextButton = screen.getByRole('button', { name: /›/ });
    fireEvent.click(nextButton);

    const track = document.querySelector('.carousel-track') as HTMLElement;
    expect(track.style.transform).toContain('translateX(-100%)');
    expect(nextButton).not.toBeInTheDocument();
  });

  it('resizes and updates items per page, only one element should be shown', () => {
    setWindowWidth(800);
    const children = createChildren(12);
    render(<Carousel>{children}</Carousel>);
    const pages = document.querySelectorAll('.carousel-page');
    expect(pages.length).toBe(4);
  });
});