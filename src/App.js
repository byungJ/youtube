import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';


const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <SearchHeader/>
      <QueryClientProvider client={queryClient}>
        <Outlet/>
      </QueryClientProvider>
    </div>
  );
}

