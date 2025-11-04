import Header from '../../atoms/Header';
import './PageTemplate.scss';

interface PageTemplateProps {
  children: React.ReactNode;
  headerTitle?: string;
}

const PageTemplate = ({ children, headerTitle }: PageTemplateProps) => {
  return (
    <div className="page-template">
      <Header title={headerTitle} />
      <main className="page-content">
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;