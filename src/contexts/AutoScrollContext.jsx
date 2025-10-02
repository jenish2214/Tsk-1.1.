import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AutoScrollContext = createContext();

export const useAutoScroll = () => {
  const context = useContext(AutoScrollContext);
  if (!context) {
    throw new Error('useAutoScroll must be used within an AutoScrollProvider');
  }
  return context;
};

export const AutoScrollProvider = ({ children }) => {
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
  const [pauseTimer, setPauseTimer] = useState(null);

  // Function to pause auto-scroll when button is clicked
  const pauseAutoScroll = useCallback((duration = 5000) => {
    setIsAutoScrollEnabled(false);
    
    // Clear existing timer
    if (pauseTimer) {
      clearTimeout(pauseTimer);
    }
    
    // Set new timer to resume auto-scroll after specified duration
    const newTimer = setTimeout(() => {
      setIsAutoScrollEnabled(true);
    }, duration);
    
    setPauseTimer(newTimer);
  }, [pauseTimer]);

  // Function to resume auto-scroll immediately
  const resumeAutoScroll = useCallback(() => {
    if (pauseTimer) {
      clearTimeout(pauseTimer);
      setPauseTimer(null);
    }
    setIsAutoScrollEnabled(true);
  }, [pauseTimer]);

  // Function to permanently disable auto-scroll
  const disableAutoScroll = useCallback(() => {
    if (pauseTimer) {
      clearTimeout(pauseTimer);
      setPauseTimer(null);
    }
    setIsAutoScrollEnabled(false);
  }, [pauseTimer]);

  // Global button click handler
  useEffect(() => {
    const handleGlobalClick = (event) => {
      // Check if clicked element is a button or has button-like behavior
      const target = event.target;
      const isButton = target.tagName === 'BUTTON' || 
                      target.closest('button') || 
                      target.getAttribute('role') === 'button' ||
                      target.classList.contains('cursor-pointer');
      
      if (isButton) {
        pauseAutoScroll();
      }
    };

    // Add global click listener
    document.addEventListener('click', handleGlobalClick);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleGlobalClick);
      if (pauseTimer) {
        clearTimeout(pauseTimer);
      }
    };
  }, [pauseAutoScroll, pauseTimer]);

  const value = {
    isAutoScrollEnabled,
    pauseAutoScroll,
    resumeAutoScroll,
    disableAutoScroll
  };

  return (
    <AutoScrollContext.Provider value={value}>
      {children}
    </AutoScrollContext.Provider>
  );
};
