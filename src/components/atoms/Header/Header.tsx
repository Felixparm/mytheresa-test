import './Header.scss';

interface HeaderProps {
  title?: string;
  isLoading?: boolean;
 onClickRedirection?: () => void;
 labelRedirection?: string;
}

const Header = ({ title, onClickRedirection,labelRedirection, isLoading }: HeaderProps) => {
  return (
    <header className="movie-header">
      <div className="header-content">
        <div className="logo-title">
          <span className="cinema-logo">🎬</span>
          {isLoading ? <div className='title--loading' /> : <h1 className="title">{title}</h1>}
        </div>
        <div>
          {labelRedirection &&
            <div onClick={onClickRedirection} className="logo-title--return">
              <h1 className="title">{"❮❮ back"}</h1>
            </div>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;