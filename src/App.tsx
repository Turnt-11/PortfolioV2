import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

// import { supabase } from './utils/supabase';


// Only import AudioPlayer eagerly as it's small
import AudioPlayer from './components/AudioPlayer';

// Lazy load larger components
const LandingPage = lazy(() => import('./components/LandingPage'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Suspense>
      <Toaster position="bottom-right" />
      <AudioPlayer />
    </QueryClientProvider>
  );
}