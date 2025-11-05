import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage/DetailPage';
import NotFoundPage from './pages/NotFoundPage';

const queryClient = new QueryClient();

const dehydratedState = (window as any).__REACT_QUERY_STATE__;

hydrateRoot(
  document.getElementById('root')!,
  <QueryClientProvider client={queryClient}>
    <HydrationBoundary state={dehydratedState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HydrationBoundary>
  </QueryClientProvider>
)