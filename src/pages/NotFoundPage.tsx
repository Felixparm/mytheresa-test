import React from 'react';
import PageTemplate from '../components/templates/PageTemplate';
import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => {
  return (
    <PageTemplate headerTitle="Error 404" isReturnButton>
      <div className="not-found-container">
        <h1 className="error-404">Page not found</h1>
      </div>
    </PageTemplate>
  );
};

export default NotFoundPage;