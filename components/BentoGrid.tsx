
import React, { useRef } from 'react';
import { GlassCard } from './GlassCard';

export const BentoGrid: React.FC = () => {
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const researchVideoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = (ref: React.RefObject<HTMLVideoElement>) => {
    if (ref.current) {
      ref.current.play().catch(err => console.log("Video play interrupted", err));
    }
  };

  const handleMouseLeave = (ref: React.RefObject<HTMLVideoElement>) => {
    if (ref.current) {
      ref.current.pause();
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[320px]">
      
      {/* 1. AI Content Project (Big Left) - Background Video enlarged and full bleed */}
      <GlassCard 
        className="md:col-span-8 md:row-span-2 flex flex-col overflow-hidden group p-0 border-purple-500/20 hover:border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all cursor-pointer relative" 
        useBreathing={true}
      >
        <div 
          className="w-full h-full relative overflow-hidden"
          onMouseEnter={() => handleMouseEnter(mainVideoRef)}
          onMouseLeave={() => handleMouseLeave(mainVideoRef)}
        >
          {/* Background Video - Scaled up by default (110%) to ensure "enlarged" look and allow for cropping */}
          <video 
            ref={mainVideoRef}
            className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-[1500ms] ease-in-out group-hover:scale-125"
            loop 
            muted 
            playsInline
            poster="https://images.unsplash.com/photo-1614728263952-84ea206f25ab?auto=format&fit=crop&q=80&w=1200"
          >
            <source src="https://raw.githubusercontent.com/xuerendeng/Test/main/hover1.mp4" type="video/mp4" />
          </video>
          
          {/* Text Content Overlay - Higher contrast gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-10 flex flex-col justify-end transition-opacity duration-500">
             <div className="space-y-4 relative z-10">
                <span className="inline-flex px-5 py-1.5 rounded-full bg-purple-600/30 backdrop-blur-xl border border-purple-500/30 text-[11px] font-bold tracking-widest uppercase text-purple-200">
                  主创 / 产品负责人
                </span>
                <h3 className="text-4xl font-bold text-white transition-colors duration-500 group-hover:text-purple-300">
                  AI短片多模态生成
                </h3>
                <p className="text-zinc-300 max-w-xl text-sm leading-relaxed">
                  实践验证多模态 AI 在影视级内容生产中的可行性，构建标准化生成流程与质量评估体系。
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                   <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-yellow-500/30 text-[10px] text-zinc-100 font-medium">
                      <span className="text-yellow-500">🏆</span> 大学生数字媒体科技作品及创意全国一等奖
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-purple-500/30 text-[10px] text-zinc-100 font-medium">
                      <span className="text-purple-400">🏅</span> Silicon Valley AI Film Festival 入围
                   </div>
                </div>
             </div>
             <div className="absolute bottom-10 right-10 text-zinc-500 text-[10px] z-10">2024 - 2025</div>
          </div>
        </div>
      </GlassCard>

      {/* 2. Visual AI Research - Full Bleed background video style */}
      <GlassCard 
        className="md:col-span-4 md:row-span-1 flex flex-col justify-end relative overflow-hidden group p-0 border-purple-500/20 hover:border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.1)] bg-zinc-900/50 transition-all cursor-pointer"
      >
        <div 
          className="w-full h-full relative"
          onMouseEnter={() => handleMouseEnter(researchVideoRef)}
          onMouseLeave={() => handleMouseLeave(researchVideoRef)}
        >
          <video 
            ref={researchVideoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:opacity-80"
            loop 
            muted 
            playsInline
            poster="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"
          >
            <source src="https://raw.githubusercontent.com/xuerendeng/Test/main/AI%20Smokefinal.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 z-10 p-6 space-y-3 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end">
            <span className="inline-flex w-fit px-4 py-1 rounded-full bg-purple-600/30 backdrop-blur-xl border border-purple-500/30 text-[10px] font-bold text-purple-200">第一作者</span>
            <h3 className="text-xl font-bold text-white transition-colors duration-500 group-hover:text-purple-300">视觉生成 AI 学术研究</h3>
            <p className="text-zinc-400 text-[11px] leading-relaxed line-clamp-2">
              发表论文《Analysis of Advanced Smoke Simulation Based on AI Super-Resolution》...
            </p>
            <div className="text-zinc-500 text-[9px] pt-1">2025.11</div>
          </div>
        </div>
      </GlassCard>

      {/* 3. Short Video Growth */}
      <GlassCard className="md:col-span-4 md:row-span-1 flex flex-col justify-end relative overflow-hidden group border-purple-500/20 hover:border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.1)] bg-zinc-900/50 transition-all cursor-pointer p-6">
        <div className="absolute inset-0 opacity-40 transition-transform duration-1000 ease-in-out group-hover:scale-110 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="growth" />
        </div>
        <div className="relative z-10 space-y-3">
          <span className="inline-flex px-4 py-1 rounded-full bg-purple-600/30 backdrop-blur-xl border border-purple-500/30 text-[10px] font-bold text-purple-200">产品负责人</span>
          <h3 className="text-xl font-bold text-white transition-colors duration-500 group-hover:text-purple-300">短视频账号数据驱动增长</h3>
          <p className="text-zinc-400 text-[11px] leading-relaxed">
            从 0 到 1 搭建两个直播切片账号，转化率提升 25%，项目周期内收入 4 万元。
          </p>
          <div className="text-zinc-500 text-[9px] pt-1">2024.09 - 2024.11</div>
        </div>
      </GlassCard>

      {/* 4. VFX Portfolio (Bottom Large) */}
      <GlassCard className="md:col-span-12 md:row-span-1 p-0 overflow-hidden relative group border-purple-500/20 hover:border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all cursor-pointer">
        <div className="absolute inset-0 bg-zinc-800 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-50 transition-transform duration-1000 ease-in-out group-hover:scale-110" alt="vfx" />
        </div>
        <div className="absolute inset-0 p-10 flex flex-col justify-center bg-gradient-to-r from-black/90 via-black/30 to-transparent">
           <span className="inline-flex w-fit px-5 py-1.5 rounded-full bg-purple-600/30 backdrop-blur-xl border border-purple-500/30 text-[11px] font-bold mb-4 text-purple-200">VFX ARTIST</span>
           <h3 className="text-3xl font-bold text-white mb-3 transition-colors duration-500 group-hover:text-purple-300">2D/3D 影视特效作品集</h3>
           <p className="text-zinc-300 max-w-2xl text-sm leading-relaxed">
              掌握 Houdini、Maya 等管线，擅长物理仿真与后期合成。产出多部获奖短片，编导剪一体机。
           </p>
           <div className="absolute right-10 bottom-10 text-zinc-500 text-[10px]">2024 - 2025</div>
        </div>
      </GlassCard>

    </div>
  );
};
