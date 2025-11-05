import Header from '../../atoms/Header';
import './PageTemplate.scss';

interface PageTemplateProps {
  children: React.ReactNode;
  headerTitle?: string;
  isReturnButton?: boolean;
  isLoading?: boolean;
}

const PageTemplate = ({ children, headerTitle, isReturnButton, isLoading }: PageTemplateProps) => {
  return (
    <div className="page-template">
      <Header isLoading={isLoading} title={headerTitle} isReturnButton={isReturnButton} />
      <main className="page-content">
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;