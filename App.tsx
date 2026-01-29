
import React, { useState, useEffect } from 'react';
import { Program } from './types';
import { NAV_LINKS, PROGRAMS } from './constants';
import ProgramModal from './components/ProgramModal';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-100 dark:border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <svg className="size-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="text-xl font-black tracking-tight">Global Dreams</h2>
          </div>
          <nav className="hidden md:flex flex-1 justify-center gap-8">
            {NAV_LINKS.map(link => (
              <button 
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-95"
            >
              Tư vấn ngay
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block">Kiến tạo tương lai</span>
                <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.03em]">
                  Chắp Cánh Ước Mơ <br/><span className="text-primary">Toàn Cầu</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Giải pháp tư vấn du học và xuất khẩu lao động uy tín, chuyên nghiệp. Khởi đầu tương lai vững chắc tại các quốc gia hàng đầu thế giới với lộ trình minh bạch.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('#programs')}
                  className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Khám Phá Ngay
                </button>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                >
                  Nhận Tư Vấn Miễn Phí
                </button>
              </div>
            </div>
            <div className="flex-1 w-full relative group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200 dark:bg-slate-800">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKqTibmBJDNz6a0XZgKpuaIkhJCNdaGZK-NH_HgKG7jQ16oCmhUyhQI6ov-xlQSWiQOGSbQWMCeu61NflHhb_SYGEupi8JRzwBJJjWLV4zJL3qt0qVc-3SgZyyo0wCwduhKwtEeCfh1sQyBIkBnh8M2JorYVPwn0624f5PJMytcmBBBZMWxjr7ik40A7dDQBF6AjoW31RQGGakrUFev6O6KoNnRDxtYOTes-Gs7feXEw76OXBz_Qzc0zJ7xltzuv9X3UABfr06C4Ql" 
                  alt="Global Dreams Success" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
          
          {/* AI Assistant Hook */}
          <Assistant />
        </section>

        {/* Stats Section */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[
              { label: 'Học viên & Lao động', value: '5,000+' },
              { label: 'Tỷ lệ đậu Visa', value: '98%' },
              { label: 'Năm kinh nghiệm', value: '12+' },
              { label: 'Đối tác Toàn cầu', value: '150+' },
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 text-center hover:border-primary/50 transition-colors group">
                <span className="block text-primary text-4xl font-black mb-1 group-hover:scale-110 transition-transform">{stat.value}</span>
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="bg-white dark:bg-slate-900/50 py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3 space-y-6">
                <h2 className="text-4xl font-black leading-tight">Giá trị cốt lõi của <br/> chúng tôi</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Chúng tôi cam kết mang lại những giá trị tốt nhất cho học viên và người lao động, đảm bảo sự an tâm tuyệt đối trên hành trình vươn ra biển lớn.</p>
                <div className="pt-6">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsfUDTBTD3md4Tr__iJDRiP36AHQeas4n1NISDg_ngJzmXn_k2k8f44dl69k2Oks3eTXUOjfI2-T3VMdCHvhqKCNeHcLiGYMRl53MvETuU0c-AQn06v0qKP3k91aWHx5Rajon_zFDwrRsFB8UgMyZIlK8gypRHg0Z4-ar6GAcQDMO_A4z6RBMlzlCj8U2F3zppEEZZBnnfVMwrJvkKLs44xLgf3TJAPD--Rc-cmvkqkofW1d10MAsuRYeMr5XYVbtcu7RScjtTkyFn" 
                    alt="Our Values" 
                    className="rounded-3xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-xl"
                  />
                </div>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: 'support_agent', title: 'Hỗ trợ tận tâm', desc: 'Đồng hành 24/7 xuyên suốt quá trình từ lúc nộp hồ sơ cho đến khi ổn định cuộc sống.' },
                  { icon: 'school', title: 'Đào tạo chuyên sâu', desc: 'Các khóa học ngôn ngữ và kỹ năng được thiết kế riêng theo tiêu chuẩn quốc tế.' },
                  { icon: 'verified_user', title: 'Minh bạch pháp lý', desc: 'Tuân thủ tuyệt đối quy định của pháp luật Việt Nam và quốc gia tiếp nhận.' },
                  { icon: 'speed', title: 'Xử lý nhanh chóng', desc: 'Quy trình tối ưu giúp rút ngắn thời gian xét duyệt và nâng cao tỷ lệ đậu visa.' },
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-background-light dark:bg-slate-800 group hover:bg-primary transition-all duration-500">
                    <div className="w-14 h-14 bg-primary/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                      <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 group-hover:text-white/80 transition-colors">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-24 max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black">Chương trình nổi bật</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">Lựa chọn điểm đến phù hợp nhất với năng lực và nguyện vọng của bạn.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((prog) => (
              <div key={prog.id} className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700 group flex flex-col h-full">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={prog.image} 
                    alt={prog.country} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {prog.tag && (
                    <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      {prog.tag}
                    </span>
                  )}
                </div>
                <div className="p-8 space-y-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">{prog.country}</h3>
                    <span className="text-sm font-medium text-slate-400">{prog.title}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">{prog.description}</p>
                  <ul className="space-y-3">
                    {prog.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => setSelectedProgram(prog)}
                    className="w-full py-4 rounded-2xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all active:scale-95"
                  >
                    Chi tiết chương trình
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-slate-50 dark:bg-slate-900 py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100 dark:border-slate-700">
              <div className="lg:w-1/2 p-10 lg:p-16 space-y-8">
                <div>
                  <h2 className="text-3xl font-black mb-4">Gửi yêu cầu tư vấn</h2>
                  <p className="text-slate-500 dark:text-slate-400">Chúng tôi sẽ liên hệ lại trong vòng 24 giờ làm việc.</p>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input className="w-full px-5 py-4 rounded-xl border-slate-100 dark:border-slate-700 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all" placeholder="Họ và tên" type="text" />
                    <input className="w-full px-5 py-4 rounded-xl border-slate-100 dark:border-slate-700 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all" placeholder="Số điện thoại" type="tel" />
                  </div>
                  <input className="w-full px-5 py-4 rounded-xl border-slate-100 dark:border-slate-700 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all" placeholder="Email (Không bắt buộc)" type="email" />
                  <select className="w-full px-5 py-4 rounded-xl border-slate-100 dark:border-slate-700 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all">
                    <option>Bạn quan tâm đến quốc gia nào?</option>
                    <option>Nhật Bản</option>
                    <option>Hàn Quốc</option>
                    <option>Đức</option>
                    <option>Úc / Canada</option>
                  </select>
                  <textarea className="w-full px-5 py-4 rounded-xl border-slate-100 dark:border-slate-700 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all" placeholder="Lời nhắn của bạn" rows={4} />
                  <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-primary-dark transition-all active:scale-95">Đăng Ký Ngay</button>
                </form>
              </div>
              <div className="lg:w-1/2 bg-primary p-10 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="space-y-10 relative z-10">
                  <h2 className="text-3xl font-black">Thông tin liên hệ</h2>
                  <div className="space-y-8">
                    {[
                      { icon: 'location_on', title: 'Văn phòng chính', val: 'Tòa nhà Global, Quận 1, TP. Hồ Chí Minh' },
                      { icon: 'call', title: 'Hotline 24/7', val: '1900 123 456 - 0987 654 321' },
                      { icon: 'mail', title: 'Email', val: 'contact@globaldreams.edu.vn' },
                    ].map((c, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined">{c.icon}</span>
                        </div>
                        <div>
                          <p className="font-bold text-lg">{c.title}</p>
                          <p className="text-white/80 leading-relaxed">{c.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-12 rounded-[2rem] overflow-hidden h-52 relative border-4 border-white/10 shadow-inner group">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoqqE_W6Tr_z3PycvVuczA1BTIBEOXJt8uZ44EAS81gei9D-Qfi5dT8GaidKvAW2aqx2tpjUc108d0_dZEecRvM5UoZJxI8I7TGllRD-3Ra4V3n9UCy8Jwa_AXD7PuANRWxvr7KEnIiyzRBG-F2qGTZdHYgw2zE3dfpFh_Op8agXqfwfg7aVYK6aqZWvhgVdP_PdC74XfJqzf4pXPG3DLIRXqLAdUD1D7OdcoQGcaNiQcmvJzRfsf75R-_LyAKAzdNdKvS49sBQX7c" 
                    alt="Map" 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="material-symbols-outlined text-5xl text-accent animate-bounce">location_on</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-white/10 pt-20 pb-10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <svg className="size-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="text-xl font-black">Global Dreams</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Cung cấp giải pháp tư vấn du học và xuất khẩu lao động toàn diện, minh bạch và hiệu quả nhất tại Việt Nam.
              </p>
              <div className="flex gap-4">
                {['public', 'thumb_up', 'camera'].map(icon => (
                  <button key={icon} className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                    <span className="material-symbols-outlined text-sm">{icon}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Liên kết nhanh</h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                {['Về chúng tôi', 'Tin tức & Sự kiện', 'Chính sách bảo mật', 'Điều khoản dịch vụ'].map(l => (
                  <li key={l}><button className="hover:text-primary transition-colors">{l}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Chương trình</h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                {['Xuất khẩu lao động Nhật', 'Du học Hàn Quốc', 'Du học nghề Đức', 'Định cư Canada'].map(l => (
                  <li key={l}><button className="hover:text-primary transition-colors">{l}</button></li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold">Bản tin</h4>
              <p className="text-sm text-slate-500">Đăng ký nhận thông tin học bổng và việc làm mới nhất.</p>
              <div className="flex gap-2 p-1 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                <input 
                  className="flex-1 bg-transparent border-none rounded-xl focus:ring-0 text-sm" 
                  placeholder="Email của bạn" 
                  type="email" 
                />
                <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary-dark transition-colors">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 dark:border-white/10 text-center text-sm text-slate-400">
            <p>© 2024 Global Dreams Consultancy. All Rights Reserved. MST: 0102030405</p>
          </div>
        </div>
      </footer>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <ProgramModal 
          program={selectedProgram} 
          onClose={() => setSelectedProgram(null)} 
        />
      )}
    </div>
  );
}

export default App;
