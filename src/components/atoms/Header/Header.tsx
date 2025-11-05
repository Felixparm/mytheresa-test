import './Header.scss';

interface HeaderProps {
  title?: string;
  isLoading?: boolean;
}

const Header = ({ title = 'MovieApp' }: HeaderProps) => {
  return (
    <header className="movie-header">
      <div className="header-content">
        <div className="logo-title">
          <span className="cinema-logo">🎬</span>
          <h1 className="title">{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;