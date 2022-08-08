import React from 'react';
import ImageList from 'ImageList/ImageList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ImageList />
    </QueryClientProvider>
  );
}

export default App;
