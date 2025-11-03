import Header from '../../atoms/Header';
import './PageTemplate.scss';

interface PageTemplateProps {
  children: React.ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className="page-template">
      <Header />
      <main className="page-content">
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;