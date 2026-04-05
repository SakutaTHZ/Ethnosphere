import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RotateCcw, CheckCircle2, AlertCircle } from 'lucide-react';
import { type QuizQuestion } from '../types';
import { cn } from '../lib/utils';

interface QuizSectionProps {
  questions: QuizQuestion[];
}

export const QuizSection = ({ questions }: QuizSectionProps) => {
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
