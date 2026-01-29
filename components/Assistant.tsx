
import React, { useState } from 'react';
import { getProgramRecommendation } from '../services/gemini';

const Assistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    setRecommendation(null);
    const res = await getProgramRecommendation(input);
    setRecommendation(res || null);
    setLoading(false);
  };

  return (
    <div className="bg-primary/5 dark:bg-white/5 rounded-3xl p-8 mt-12 border border-primary/20">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h3 className="text-2xl font-black flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">auto_fix_high</span>
          AI Pathfinder - Tìm kiếm lộ trình ước mơ
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          Hãy mô tả nguyện vọng của bạn (VD: "Tôi muốn đi Nhật lao động ngành cơ khí" hoặc "Tôi muốn du học thạc sĩ tại Hàn"), AI của chúng tôi sẽ gợi ý hướng đi phù hợp.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Mô tả nguyện vọng của bạn tại đây..."
            className="flex-1 px-5 py-4 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-primary focus:border-primary shadow-sm"
          />
          <button 
            type="submit"
            disabled={loading}
            className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 shadow-lg shadow-primary/20"
          >
            {loading ? 'Đang phân tích...' : 'Khám phá ngay'}
          </button>
        </form>

        {recommendation && (
          <div className="mt-6 p-6 bg-white dark:bg-slate-900 rounded-2xl border-l-4 border-accent text-left animate-in slide-in-from-top-2 duration-300 shadow-xl">
            <p className="text-lg leading-relaxed italic text-slate-800 dark:text-slate-200">
              "{recommendation}"
            </p>
            <p className="mt-3 text-sm text-primary font-bold">--- Gợi ý từ Gemini AI assistant ---</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assistant;
