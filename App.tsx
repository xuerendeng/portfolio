
import React, { useState, useEffect } from 'react';
import { BentoGrid } from './components/BentoGrid';
import { GlassCard } from './components/GlassCard';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black selection:bg-purple-500 selection:text-white pb-10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 liquid-glass border-b border-white/5 py-3 px-10 flex justify-between items-center h-20">
        {/* Left: Brand with Gradient - White to Gray */}
        <div className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          DENG XUEREN
        </div>
        
        {/* Center: Links */}
        <div className="hidden md:flex gap-12 text-sm font-medium text-zinc-300">
          <a href="#projects" className="hover:text-white transition-colors">项目经历</a>
          <a href="#skills" className="hover:text-white transition-colors">个人能力</a>
          <a href="#about" className="hover:text-white transition-colors">工作背景</a>
          <a href="mailto:xuerendeng3@gmail.com" className="hover:text-white transition-colors">联系方式</a>
        </div>

        {/* Right: Resume Button */}
        <div className="flex items-center">
          <a 
            href="#" 
            className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-all shadow-lg"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-10 md:px-20 overflow-hidden pt-20">
        {/* Background Image with Zoom Animation */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out" 
          style={{ 
            backgroundImage: 'url("https://raw.githubusercontent.com/xuerendeng/Test/main/filmmaker.jpg")', 
            backgroundPosition: '50% 30%',
            transform: `scale(${1 + scrollY * 0.0004})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-6xl space-y-12">
          {/* Main Title - Split into 3 rows */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              AI Visual <br/> 
              Product Manager <br/>
              <span className="text-white/80">& Storyteller</span>
            </h1>
            
            {/* 4 Points - Refined UI: Smaller, Purple Border, Glow */}
            <div className="flex flex-wrap gap-3 pt-4 max-w-4xl">
              {[
                "211 艺术学工学双学位",
                "工业化 AIGC 工作流",
                "数据增长与内容闭环",
                "戛纳短片角入围荣誉"
              ].map((text, i) => (
                <div key={i} className="px-5 py-2 rounded-full border border-purple-500/50 bg-purple-500/5 text-[10px] md:text-xs font-bold text-white shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-xl transition-all">
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Description - Professional & Concise (2-1 Layout) */}
          <div className="max-w-4xl space-y-6 pt-4 text-zinc-200 text-sm md:text-base leading-relaxed font-normal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>
                <p className="whitespace-nowrap">整合 AIGC 多模态内容生产管线与工业级影视特效</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>
                <p className="whitespace-nowrap">电影学审美与计算机技术融通</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group max-w-2xl">
              <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>
              <p className="whitespace-nowrap">深度构建数据驱动的内容增长模型</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto py-24 px-10">
        <div className="mb-12">
           <h2 className="text-5xl font-bold text-white mb-4">项目经历</h2>
           <div className="h-1 w-20 bg-purple-600 rounded-full"></div>
        </div>
        <BentoGrid />
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="max-w-7xl mx-auto py-24 px-10">
        <div className="mb-16 text-center space-y-2">
          <h2 className="text-5xl font-bold text-white tracking-tight">个人能力 & 技能矩阵</h2>
          <p className="text-zinc-500 text-sm">跨领域整合：影视叙事 + AIGC 工具 + 数据化运营</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="bg-zinc-900/40 border-purple-500/10 py-10 px-8 flex flex-col items-center text-center group hover:border-purple-500/30">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-800 shadow-[0_0_20px_rgba(168,85,247,0.3)] mb-8 flex items-center justify-center">
               <div className="w-6 h-6 border-2 border-white/50 rounded-md"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-8 group-hover:text-purple-300 transition-colors">AI 多模态产品</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['Stable Diffusion', 'Midjourney', 'Sora', 'Runway', 'Prompt Engineering'].map(s => (
                <span key={s} className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-[10px] text-zinc-300">{s}</span>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="bg-zinc-900/40 border-purple-500/10 py-10 px-8 flex flex-col items-center text-center group hover:border-purple-500/30">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-800 shadow-[0_0_20px_rgba(168,85,247,0.3)] mb-8 flex items-center justify-center">
               <div className="w-6 h-6 border-2 border-white/50 rounded-md"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-8 group-hover:text-purple-300 transition-colors">数据分析</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['SQL', 'Python (Pandas/NumPy)', 'Excel', 'Figma UX'].map(s => (
                <span key={s} className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-[10px] text-zinc-300">{s}</span>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="bg-zinc-900/40 border-purple-500/10 py-10 px-8 flex flex-col items-center text-center group hover:border-purple-500/30">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-800 shadow-[0_0_20px_rgba(168,85,247,0.3)] mb-8 flex items-center justify-center">
               <div className="w-6 h-6 border-2 border-white/50 rounded-md"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-8 group-hover:text-purple-300 transition-colors">内容制作</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['Houdini', 'Maya', 'DaVinci Resolve', 'PR/PS'].map(s => (
                <span key={s} className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-[10px] text-zinc-300">{s}</span>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Timeline */}
      <section id="about" className="max-w-7xl mx-auto py-24 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-zinc-800 pb-4 mb-10">
               <div className="w-8 h-[2px] bg-white"></div>
               <h2 className="text-2xl font-bold text-white tracking-widest uppercase">教育背景</h2>
            </div>
            <div className="relative pl-8 border-l border-zinc-800 space-y-12">
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-purple-600 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
                <div className="text-purple-500 text-xs mb-2">2023.9 - 2027.6</div>
                <h3 className="text-xl font-bold text-white mb-1">中南财经政法大学 (211)</h3>
                <p className="text-zinc-300 text-sm mb-2">电影学 - 艺术学学士</p>
                <div className="inline-block px-2 py-0.5 bg-white/10 text-[10px] text-zinc-400 mb-3 rounded">GPA: 3.84/4.0 (Top 10%)</div>
                <p className="text-zinc-500 text-xs leading-relaxed">主修影视叙事、视听语言、电影理论。</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-purple-600 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
                <div className="text-purple-500 text-xs mb-2">2025.3 - 2025.12</div>
                <h3 className="text-xl font-bold text-white mb-1">韩国东西大学 (Exchange)</h3>
                <p className="text-zinc-300 text-sm mb-2">Film & VFX - 工学学士 (双学位)</p>
                <p className="text-zinc-500 text-xs leading-relaxed">数字影像技术、VFX 管线与计算机技术协作影像制作，全英授课。</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-zinc-800 pb-4 mb-10">
               <div className="w-8 h-[2px] bg-white"></div>
               <h2 className="text-2xl font-bold text-white tracking-widest uppercase">实习经历</h2>
            </div>
            <div className="relative pl-8 border-l border-zinc-800 space-y-12">
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-700"></div>
                <div className="text-zinc-500 text-xs mb-2">2024.06 - 2024.08</div>
                <h3 className="text-xl font-bold text-white mb-1">武钢集团 (宝武集团)</h3>
                <p className="text-purple-500 text-xs font-bold mb-3">数据分析支持</p>
                <ul className="text-zinc-500 text-xs space-y-2 leading-relaxed">
                  <li>• 独立负责月度经营分析核心板块的数据整理与归因分析。</li>
                  <li>• 参与构建业务数据监控体系，协助管理 39 个对标偏差指标。</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-700"></div>
                <div className="text-zinc-500 text-xs mb-2">2023.06 - 2023.09</div>
                <h3 className="text-xl font-bold text-white mb-1">长江日报社</h3>
                <p className="text-purple-500 text-xs font-bold mb-3">内容产品运营</p>
                <ul className="text-zinc-500 text-xs space-y-2 leading-relaxed">
                  <li>• 策划并落地 3 场百人级媒体活动，保障用户体验。</li>
                  <li>• 分析传播数据链路以支持策略优化。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-7xl mx-auto py-32 px-10 text-center flex flex-col items-center">
        <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-20 leading-tight">期待与你一起，<br/>塑造视觉未来。</h2>
        <div className="w-full h-[1px] bg-zinc-800 mb-16"></div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Main Contact Info - Enlarged */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <a 
              href="mailto:xuerendeng3@gmail.com" 
              className="text-2xl md:text-3xl font-medium text-white hover:text-purple-400 transition-colors lowercase tracking-tight"
            >
              xuerendeng3@gmail.com
            </a>
            <span className="text-2xl md:text-3xl font-medium text-zinc-300 tracking-tight">
              +86 177-2058-6479
            </span>
          </div>

          {/* Social Links - Enlarged */}
          <div className="flex gap-12 text-lg font-medium text-zinc-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">WeChat</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
