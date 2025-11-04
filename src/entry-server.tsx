import React from 'react';
import { renderToString } from 'react-dom/server';
import { QueryClient, QueryClientProvider, dehydrate } from '@tanstack/react-query';
import { HydrationBoundary } from '@tanstack/react-query';
import { StaticRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage/DetailPage';
import NotFoundPage from './pages/NotFoundPage';

export async function render(url: string) {
  const queryClient = new QueryClient();
  const dehydratedState = dehydrate(queryClient);

  const appHtml = renderToString(
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </StaticRouter>
      </HydrationBoundary>
    </QueryClientProvider>
  );

  return { html: appHtml, state: dehydratedState };
}