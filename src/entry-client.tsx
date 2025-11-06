import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage/DetailPage';
import ErrorPage from './pages/ErrorPage';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from './pages/Error/FallBackError';

const queryClient = new QueryClient();

const dehydratedState = (window as any).__REACT_QUERY_STATE__;

hydrateRoot(
  document.getElementById('root')!,
  <ErrorBoundary FallbackComponent={Fallback}>
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<DetailPage />} />
            <Route path="*" element={<ErrorPage errorStatus='404' />} />
          </Routes>
        </BrowserRouter>
      </HydrationBoundary>
    </QueryClientProvider>
  </ErrorBoundary>
)