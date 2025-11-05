import { useNavigate } from 'react-router';
import './Header.scss';

interface HeaderProps {
  title?: string;
  isLoading?: boolean;
  isReturnButton?: boolean
}

const Header = ({ title, isReturnButton, isLoading }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="movie-header">
      <div className="header-content">
        <div className="logo-title">
          <span className="cinema-logo">🎬</span>
          {isLoading ? <div className='title--loading' /> : <h1 className="title">{title}</h1>}
        </div>
        <div>
          {isReturnButton &&
            <div onClick={() => navigate("/")} className="logo-title--return">
              <h1 className="title">{"❮❮ back"}</h1>
            </div>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;