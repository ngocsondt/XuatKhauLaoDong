
import React from 'react';
import { Program } from '../types';

interface ProgramModalProps {
  program: Program;
  onClose: () => void;
}

const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-[850px] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full p-1 flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Header Image */}
        <div className="relative h-[240px] md:h-[300px] w-full">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `linear-gradient(to bottom, rgba(63, 30, 174, 0.3), rgba(63, 30, 174, 0.8)), url('${program.image}')` 
            }}
          />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Phổ biến nhất</span>
              <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Thu nhập cao</span>
            </div>
            <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight">{program.country} - {program.title}</h1>
            <p className="text-white/90 text-sm md:text-lg mt-1">Kiến tạo sự nghiệp quốc tế của bạn tại {program.country}</p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
          {/* Details Column */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">info</span>
              <h3 className="text-primary text-xl font-bold">Thông tin chi tiết</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-white/5">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">schedule</span>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Thời gian</p>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">{program.details.duration}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-white/5">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">location_on</span>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Địa điểm</p>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">{program.details.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-white/5">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">verified_user</span>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Yêu cầu</p>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">{program.requirements.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px bg-slate-100 dark:bg-white/10" />

          {/* Benefits Column */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              <h3 className="text-primary text-xl font-bold">Quyền lợi nổi bật</h3>
            </div>
            
            <div className="space-y-5">
              {program.benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="material-symbols-outlined text-accent text-xl mt-0.5">check_circle</span>
                  <div>
                    <p className="text-slate-900 dark:text-slate-100 font-bold leading-tight">{benefit}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Cam kết hỗ trợ tối đa bởi đội ngũ Global Dreams.</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-accent text-xl mt-0.5">translate</span>
                <div>
                  <p className="text-slate-900 dark:text-slate-100 font-bold leading-tight">Đào tạo ngôn ngữ</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Các khóa đào tạo chuyên sâu trước khi xuất cảnh.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 md:p-8 pt-0 flex flex-col items-center gap-4">
          <button 
            className="w-full bg-accent hover:bg-accent/90 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 group"
          >
            Đăng ký tham gia ngay
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-medium transition-colors"
          >
            Để sau, tôi muốn xem các chương trình khác
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramModal;
