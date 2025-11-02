import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query'
import HomePage from './pages/HomePage'

const queryClient = new QueryClient();

const dehydratedState = (window as any).__REACT_QUERY_STATE__;

hydrateRoot(
  document.getElementById('root')!,
  <QueryClientProvider client={queryClient}>
    <HydrationBoundary state={dehydratedState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </HydrationBoundary>
  </QueryClientProvider>
)