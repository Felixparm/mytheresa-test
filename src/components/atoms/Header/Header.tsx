import './Header.scss';

const Header = () => {
  return (
    <header className="movie-header">
      <div className="header-content">
        <div className="logo-title">
          <span className="cinema-logo">🎬</span>
          <h1 className="title">MovieApp</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;