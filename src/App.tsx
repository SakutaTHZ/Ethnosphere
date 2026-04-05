import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { 
  Globe,
  Menu,
  Sun,
  Moon
} from 'lucide-react';
import { ETHNICITIES } from './data/ethnicities';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';

export default function App() {
  const [selectedId, setSelectedId] = useState(ETHNICITIES[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const selectedEthnicity = ETHNICITIES.find(e => e.id === selectedId) || ETHNICITIES[0];

  return (
    <div className="flex h-screen w-screen bg-white dark:bg-slate-950 overflow-hidden font-sans text-slate-900 dark:text-slate-50 transition-colors duration-300">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 z-40 flex items-center px-6 justify-between">
        <div className="flex items-center">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 -ml-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-2 ml-4">
            <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="font-display font-bold text-lg tracking-tight text-slate-900 dark:text-slate-50">EthnoSphere</span>
          </div>
        </div>
        <button 
          onClick={toggleTheme}
          className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
        >
          {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
        </button>
      </div>

      <Sidebar 
        selectedId={selectedId} 
        onSelect={setSelectedId} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <div className="flex-1 flex flex-col pt-16 lg:pt-0">
        <AnimatePresence mode="wait">
          <ContentArea key={selectedId} ethnicity={selectedEthnicity} />
        </AnimatePresence>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
