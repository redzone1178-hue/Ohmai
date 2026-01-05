import React, { useState, useEffect } from 'react';
import { ViewType } from './types';
import Sidebar from './Sidebar';
import ChatView from './ChatView';
import VoiceView from './VoiceView';
import ImageView from './ImageView';
import VideoView from './VideoView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.CHAT);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const renderView = () => {
    switch (currentView) {
      case ViewType.CHAT: return <ChatView />;
      case ViewType.VOICE: return <VoiceView />;
      case ViewType.IMAGE: return <ImageView />;
      case ViewType.VIDEO: return <VideoView />;
      default: return <ChatView />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Sidebar currentView={currentView} setView={setCurrentView} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-1 h-full overflow-hidden relative">
        {renderView()}
      </main>
    </div>
  );
};

export default App;

