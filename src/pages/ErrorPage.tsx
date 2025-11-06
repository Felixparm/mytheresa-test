import React from 'react';
import PageTemplate from '../components/templates/PageTemplate';
import './ErrorPage.scss';

interface ErrorPageProps {
  errorStatus: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorStatus }) => {
  console.log('ErrorPage rendered with status:', errorStatus);
  return (
    <PageTemplate headerTitle={`${errorStatus}`}>
      <div className="error-container">
        <h1 className="error-message">
          {errorStatus === '404' ? 'Page not found' : 'Something went wrong'}
        </h1>
      </div>
    </PageTemplate>
  );
};

export default ErrorPage;