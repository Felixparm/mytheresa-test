import React from 'react';
import { renderToString } from 'react-dom/server';
import { QueryClient, QueryClientProvider, dehydrate } from '@tanstack/react-query';
import { HydrationBoundary } from '@tanstack/react-query';
import { StaticRouter } from 'react-router';
import HomePage from './pages/HomePage';

export async function render(url: string) {
  const queryClient = new QueryClient();
  const dehydratedState = dehydrate(queryClient);

  const appHtml = renderToString(
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <StaticRouter location={url}>
          <HomePage />
        </StaticRouter>
      </HydrationBoundary>
    </QueryClientProvider>
  );

  return { html: appHtml, state: dehydratedState };
}