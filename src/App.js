import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { YoutubeApiProvider } from './context/YoutubApiContext';


const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <SearchHeader/>
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet/>
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

