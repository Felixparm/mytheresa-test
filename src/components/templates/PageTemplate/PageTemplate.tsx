import Header from '../../atoms/Header';
import './PageTemplate.scss';

interface PageTemplateProps {
  children: React.ReactNode;
  headerTitle?: string;
  isLoading?: boolean;
  onClickRedirection?: () => void;
  labelRedirection?: string;
}

const PageTemplate = ({ children, headerTitle, onClickRedirection, labelRedirection, isLoading }: PageTemplateProps) => {
  return (
    <div className="page-template">
      <Header isLoading={isLoading} title={headerTitle} onClickRedirection={onClickRedirection} labelRedirection={labelRedirection} />
      <main className="page-content">
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;