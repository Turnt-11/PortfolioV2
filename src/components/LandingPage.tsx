import React, { useState, useEffect } from 'react';
import SpaceBackground from './SpaceBackground';
import Portfolio from './Portfolio';
import AudioPlayer from './AudioPlayer';

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Set loading to false after a short delay to ensure initial content renders
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Short delay to ensure content is ready
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background */}
      <div className="fixed inset-0">
        <SpaceBackground />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-20">
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="text-xl text-white">Loading amazing content...</div>
          </div>
        ) : (
          <Portfolio />
        )}
      </div>

      <AudioPlayer />
    </div>
  );
} 