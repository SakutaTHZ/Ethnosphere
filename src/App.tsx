import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Info, 
  MapPin, 
  Languages, 
  Shirt, 
  Home, 
  Volume2, 
  Globe,
  Search,
  Menu,
  X,
  ArrowRight,
  Compass,
  History,
  Sparkles,
  Utensils,
  PartyPopper,
  Lightbulb,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Sun,
  Moon
} from 'lucide-react';
import { GoogleGenAI, Modality } from "@google/genai";
import { ETHNICITIES, type Ethnicity, type QuizQuestion } from './types';
import { cn } from './lib/utils';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// --- Components ---

const Sidebar = ({ 
  selectedId, 
  onSelect, 
  isOpen, 
  onClose,
  theme,
  onToggleTheme
}: { 
  selectedId: string; 
  onSelect: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}) => {
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

const QuizSection = ({ questions }: { questions: QuizQuestion[] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    const correct = index === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(c => c + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="glass-card rounded-3xl p-8 text-center space-y-6">
        <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto">
          <Sparkles className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-slate-50">Quiz Completed!</h3>
        <p className="text-slate-600 dark:text-slate-400">You scored <span className="font-bold text-indigo-600 dark:text-indigo-400">{score}</span> out of <span className="font-bold">{questions.length}</span></p>
        <button 
          onClick={resetQuiz}
          className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 mx-auto"
        >
          <RotateCcw className="w-4 h-4" /> Try Again
        </button>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="glass-card rounded-3xl p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold font-display text-slate-900 dark:text-slate-50">Knowledge Check</h3>
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Question {currentQuestion + 1}/{questions.length}</span>
      </div>

      <div className="space-y-6">
        <p className="text-lg font-medium text-slate-800 dark:text-slate-200">{q.question}</p>
        <div className="grid gap-3">
          {q.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(idx)}
              className={cn(
                "w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between group",
                selectedOption === idx 
                  ? (idx === q.correctAnswer ? "bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/30 text-green-700 dark:text-green-400" : "bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400")
                  : (selectedOption !== null && idx === q.correctAnswer ? "bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/30 text-green-700 dark:text-green-400" : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-500/50 text-slate-700 dark:text-slate-300")
              )}
            >
              <span className="font-medium">{option}</span>
              {selectedOption === idx && (
                idx === q.correctAnswer ? <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" /> : <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              )}
              {selectedOption !== null && idx === q.correctAnswer && idx !== selectedOption && (
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedOption !== null && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className={cn(
              "p-4 rounded-xl text-sm leading-relaxed",
              isCorrect ? "bg-green-50 dark:bg-green-500/10 text-green-800 dark:text-green-300 border border-green-100 dark:border-green-500/20" : "bg-red-50 dark:bg-red-500/10 text-red-800 dark:text-red-300 border border-red-100 dark:border-red-500/20"
            )}>
              <p className="font-bold mb-1">{isCorrect ? "Correct!" : "Incorrect"}</p>
              <p>{q.explanation}</p>
            </div>
            <button 
              onClick={nextQuestion}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContentArea = ({ ethnicity }: { ethnicity: Ethnicity }) => {
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);

  const playLanguageSample = async () => {
    if (isGeneratingAudio) return;
    setIsGeneratingAudio(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Say clearly and authentically in ${ethnicity.languageName}: ${ethnicity.languageSample}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const binary = atob(base64Audio);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const buffer = audioCtx.createBuffer(1, bytes.length / 2, 24000);
        const nowBuffering = buffer.getChannelData(0);
        const dataView = new DataView(bytes.buffer);
        for (let i = 0; i < bytes.length / 2; i++) {
          nowBuffering[i] = dataView.getInt16(i * 2, true) / 32768;
        }
        const source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.start();
      }
    } catch (error) {
      console.error("Audio generation failed:", error);
    } finally {
      setIsGeneratingAudio(false);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto p-6 lg:p-12 space-y-12">
        {/* Hero Section */}
        <motion.section 
          key={ethnicity.id + 'hero'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[400px] rounded-3xl overflow-hidden group shadow-2xl shadow-slate-200 dark:shadow-none"
        >
          <img 
            src={ethnicity.habitatImage} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt={ethnicity.name}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-slate-950 dark:via-slate-950/20" />
          <div className="absolute bottom-8 left-8 right-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest border border-indigo-200 dark:border-indigo-500/30 backdrop-blur-md">
                {ethnicity.region}
              </span>
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold mt-4 mb-2 text-slate-900 dark:text-white">{ethnicity.name}</h1>
              <p className="text-slate-600 dark:text-white/80 max-w-2xl text-lg leading-relaxed">
                {ethnicity.description}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Quick Facts Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Region", value: ethnicity.region, icon: MapPin, color: "text-indigo-600 dark:text-indigo-400" },
            { label: "Language", value: ethnicity.languageName, icon: Languages, color: "text-purple-600 dark:text-purple-400" },
            { label: "Habitat", value: "Traditional", icon: Home, color: "text-emerald-600 dark:text-emerald-400" },
            { label: "Heritage", value: "Indigenous", icon: History, color: "text-orange-600 dark:text-orange-400" },
          ].map((fact, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 flex items-center space-x-3">
              <div className={cn("p-2 rounded-lg bg-slate-50 dark:bg-slate-800", fact.color)}>
                <fact.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{fact.label}</p>
                <p className="text-sm font-bold truncate text-slate-900 dark:text-slate-50">{fact.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Origin & History */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card rounded-3xl p-8 space-y-6">
              <div className="flex items-center space-x-3 text-indigo-600 dark:text-indigo-400">
                <History className="w-6 h-6" />
                <h2 className="text-xl font-bold font-display">Origin & History</h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                {ethnicity.origin}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-400">
                    <Shirt className="w-5 h-5" />
                    <h3 className="font-bold">Traditional Dress</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {ethnicity.clothingImages.map((img, idx) => (
                      <div key={idx} className="aspect-[4/5] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                        <img src={img} className="w-full h-full object-cover" alt="Clothing" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {ethnicity.clothingDescription}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
                    <Home className="w-5 h-5" />
                    <h3 className="font-bold">Habitat & Dwellings</h3>
                  </div>
                  <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <img src={ethnicity.habitatImage} className="w-full h-full object-cover" alt="Habitat" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {ethnicity.habitatDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Festivals & Cuisine */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card rounded-3xl p-8 space-y-4">
                <div className="flex items-center space-x-3 text-pink-600 dark:text-pink-400">
                  <PartyPopper className="w-6 h-6" />
                  <h3 className="text-lg font-bold font-display">Festivals</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {ethnicity.festivals}
                </p>
              </div>
              <div className="glass-card rounded-3xl p-8 space-y-4">
                <div className="flex items-center space-x-3 text-amber-600 dark:text-amber-400">
                  <Utensils className="w-6 h-6" />
                  <h3 className="text-lg font-bold font-display">Cuisine</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {ethnicity.cuisine}
                </p>
              </div>
            </div>

            {/* Interesting Fact */}
            <div className="glass-card rounded-3xl p-8 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-100 dark:border-indigo-500/20">
              <div className="flex items-center space-x-3 text-indigo-600 dark:text-indigo-400 mb-4">
                <Lightbulb className="w-6 h-6" />
                <h3 className="text-lg font-bold font-display">Did You Know?</h3>
              </div>
              <p className="text-indigo-900 dark:text-indigo-200 leading-relaxed italic">
                {ethnicity.interestingFact}
              </p>
            </div>
          </motion.div>

          {/* Language & Quiz */}
          <div className="space-y-8">
            {/* Language */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-3xl p-8 flex flex-col"
            >
              <div className="flex items-center space-x-3 text-purple-600 dark:text-purple-400 mb-6">
                <Languages className="w-6 h-6" />
                <h2 className="text-xl font-bold font-display">Language</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Primary Language</p>
                  <p className="text-2xl font-display font-bold text-slate-900 dark:text-slate-50">{ethnicity.languageName}</p>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 relative group">
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Audio Sample</p>
                  <p className="text-xl italic font-medium mb-6 text-slate-800 dark:text-slate-200">"{ethnicity.languageSample}"</p>
                  <button 
                    onClick={playLanguageSample}
                    disabled={isGeneratingAudio}
                    className={cn(
                      "w-full py-3 rounded-xl flex items-center justify-center space-x-2 transition-all",
                      isGeneratingAudio 
                        ? "bg-slate-200 dark:bg-slate-700 animate-pulse cursor-not-allowed" 
                        : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20"
                    )}
                  >
                    <Volume2 className="w-5 h-5" />
                    <span className="font-bold">{isGeneratingAudio ? "Generating..." : "Listen to Sample"}</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 italic leading-tight">
                  Language samples are generated in real-time using Gemini AI to provide an authentic auditory experience.
                </div>
              </div>
            </motion.div>

            {/* Quiz */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <QuizSection questions={ethnicity.quizQuestions} />
            </motion.div>
          </div>
        </div>

        {/* Places to Visit */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-8 pb-12"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-pink-600 dark:text-pink-400">
              <Compass className="w-7 h-7" />
              <h2 className="text-3xl font-bold font-display">Significant Places</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ethnicity.bestPlaces.map((place, idx) => (
              <div key={idx} className="group glass-card rounded-3xl overflow-hidden flex flex-col border-slate-200 dark:border-slate-800">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={place.image} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt={place.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-slate-50">{place.name}</h3>
                    <MapPin className="w-5 h-5 text-pink-500" />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {place.description}
                  </p>
                  <button className="flex items-center text-indigo-600 dark:text-indigo-400 font-bold text-sm group/btn">
                    Learn more about this site
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

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
