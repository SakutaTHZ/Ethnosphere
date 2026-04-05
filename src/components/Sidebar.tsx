import React, { useState } from 'react';
import { Search, Globe, X, Moon, Sun } from 'lucide-react';
import { ETHNICITIES } from '../data/ethnicities';
import { cn } from '../lib/utils';

interface SidebarProps {
  selectedId: string;
  onSelect: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Sidebar = ({ 
  selectedId, 
  onSelect, 
  isOpen, 
  onClose,
  theme,
  onToggleTheme
}: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEthnicities = ETHNICITIES.filter(e => 
    e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 transform transition-transform duration-300 lg:relative lg:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-slate-50">EthnoSphere</span>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search cultures..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors text-slate-900 dark:text-slate-50 placeholder:text-slate-400"
          />
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-2">
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 px-2">Global Ethnicities</p>
          {filteredEthnicities.map((e) => (
            <button
              key={e.id}
              onClick={() => {
                onSelect(e.id);
                onClose();
              }}
              className={cn(
                "w-full flex items-center p-3 rounded-xl transition-all group",
                selectedId === e.id 
                  ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20" 
                  : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-transparent"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-lg overflow-hidden mr-3 border border-slate-200 dark:border-slate-700",
                selectedId === e.id ? "border-indigo-200 dark:border-indigo-500/30" : ""
              )}>
                <img src={e.clothingImages[0]} className="w-full h-full object-cover" alt={e.name} referrerPolicy="no-referrer" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold leading-none">{e.name}</p>
                <p className="text-[10px] mt-1 opacity-60">{e.region}</p>
              </div>
            </button>
          ))}
          {filteredEthnicities.length === 0 && (
            <div className="text-center py-10">
              <p className="text-slate-400 dark:text-slate-600 text-xs italic">No cultures found</p>
            </div>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <button 
            onClick={onToggleTheme}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-all"
          >
            <div className="flex items-center space-x-3">
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              <span className="text-sm font-bold">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </div>
            <div className={cn(
              "w-10 h-5 rounded-full relative transition-colors",
              theme === 'light' ? "bg-slate-300" : "bg-indigo-600"
            )}>
              <div className={cn(
                "absolute top-1 w-3 h-3 rounded-full bg-white transition-all",
                theme === 'light' ? "left-1" : "left-6"
              )} />
            </div>
          </button>

          <div className="flex items-center space-x-2 text-slate-400 dark:text-slate-600 text-[10px] uppercase tracking-widest font-bold">
            <span>Powered by</span>
            <div className="px-2 py-0.5 rounded bg-indigo-600 text-white">
              Gemini AI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
