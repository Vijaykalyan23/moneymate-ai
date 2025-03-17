
import React, { createContext, useContext, useState, useEffect } from 'react';

type ApiKeyContextType = {
  geminiApiKey: string | null;
  setGeminiApiKey: (key: string) => void;
  clearGeminiApiKey: () => void;
};

const ApiKeyContext = createContext<ApiKeyContextType | undefined>(undefined);

export const ApiKeyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [geminiApiKey, setGeminiApiKey] = useState<string | null>(null);

  // Load API key from localStorage on initial render
  useEffect(() => {
    const savedKey = localStorage.getItem('geminiApiKey');
    if (savedKey) {
      setGeminiApiKey(savedKey);
    }
  }, []);

  // Save API key to localStorage whenever it changes
  const handleSetGeminiApiKey = (key: string) => {
    localStorage.setItem('geminiApiKey', key);
    setGeminiApiKey(key);
  };

  const clearGeminiApiKey = () => {
    localStorage.removeItem('geminiApiKey');
    setGeminiApiKey(null);
  };

  return (
    <ApiKeyContext.Provider 
      value={{ 
        geminiApiKey, 
        setGeminiApiKey: handleSetGeminiApiKey,
        clearGeminiApiKey 
      }}
    >
      {children}
    </ApiKeyContext.Provider>
  );
};

export const useApiKey = (): ApiKeyContextType => {
  const context = useContext(ApiKeyContext);
  if (context === undefined) {
    throw new Error('useApiKey must be used within an ApiKeyProvider');
  }
  return context;
};
