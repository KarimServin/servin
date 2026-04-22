import React, { useState, useEffect, useRef } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  AnimatePresence 
} from "motion/react";
import { 
  MessageCircle, 
  Code2, 
  ShoppingBag, 
  Terminal, 
  Zap,
  MoreHorizontal
} from "lucide-react";

const WHATSAPP_LINK = `https://wa.me/543424216870?text=Hola+Karim!+Me+gustaría+consultar+por+tus+servicios.`;
export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="h-screen w-screen relative overflow-hidden select-none font-sans bg-black [isolation:isolate]"
    >      {/* Diagonal Inversion Scanner - Wider and CSS-animated for maximum performance */}
      <div 
        className="absolute inset-0 z-5 pointer-events-none will-change-transform animate-scanner"
        style={{
          background: "linear-gradient(105deg, transparent 5%, rgba(200,200,200,0.3) 15%, white 30%, white 70%, rgba(200,200,200,0.3) 85%, transparent 95%)",
        }}
      />

      {/* Content wrapper - Single point of blending */}
      <div className="relative z-10 w-full h-full pointer-events-none mix-blend-difference">
        {/* Interactive Background Elements - in white so they flip to black over white bg */}
        <AntigravityScene mouseX={mouseX} mouseY={mouseY} />

        {/* Navigation - Ultra Minimalist and Clear */}
        <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-12 py-8 md:py-8 flex flex-col items-center pointer-events-auto">
          {/* Brand Center */}
          <span translate="no" className="font-brand text-[60px] md:text-[90px] tracking-tighter uppercase whitespace-nowrap text-white font-black leading-none">SERVIN</span>
          
          {/* Location Subtitle */}
          <div className="text-[14px] md:text-[16px] tracking-[0.8em] uppercase font-mono opacity-50 text-white text-center mt-2 ml-[0.8em]">
            SANTA FE
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-12 text-left">
          <div className="max-w-5xl w-full flex flex-col items-start translate-y-0 md:translate-y-0 overflow-visible">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="text-[clamp(3.7rem,15vw,7rem)] md:text-[6.5vw] font-black tracking-[-0.06em] leading-[0.85] mb-4 md:mb-6 text-white will-change-transform"
            >
              ANALISTA DE <br/>SISTEMAS <span className="opacity-30 font-light text-[0.8em]">()</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="max-w-md text-[12px] md:text-[15px] tracking-[0.2em] uppercase leading-relaxed opacity-80 font-medium text-white"
            >
              Desarrollo web y sistemas de información.
            </motion.div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button - Enhanced Button Style */}
      <motion.a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
        className="fixed bottom-10 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-3 bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] pointer-events-auto group transition-all duration-300 hover:bg-[#25D366] hover:text-white border-2 border-transparent hover:border-white/20"
      >
        <div className="relative">
          <MessageCircle size={20} className="relative z-10 group-hover:animate-pulse" />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-current rounded-full blur-md -z-0 opacity-0 group-hover:opacity-100"
          />
        </div>
        <span className="text-[14px] font-black tracking-[0.3em] uppercase">Contactar</span>
      </motion.a>
    </div>
  );
}

function AntigravityScene({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
  const elements = [
    { id: 1, type: 'text', content: 'E-commerce', x: 15, y: 20, mass: 1 },
    { id: 2, type: 'icon', icon: ShoppingBag, x: 80, y: 25, mass: 1.5 },
    { id: 5, type: 'icon', icon: Code2, x: 85, y: 75, mass: 0.8 },
  ];

  return (
    <>
      <ParticleField mouseX={mouseX} mouseY={mouseY} />
      
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-current rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-current rounded-full blur-[100px] opacity-10"></div>
      </motion.div>
      
      {elements.map((el) => (
        <PhysicsElement 
          key={el.id} 
          {...el} 
          mouseX={mouseX} 
          mouseY={mouseY} 
        />
      ))}
    </>
  );
}

function ParticleField({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      shape: 'circle' | 'square';
      flickerSpeed: number;
    }

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    let particles: Particle[] = [];
    const particleCount = isMobile ? 18 : 80; 
    const connectionDist = isMobile ? 70 : 250;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.1,
          shape: Math.random() > 0.8 ? 'square' : 'circle',
          flickerSpeed: Math.random() * 0.05 + 0.01
        });
      }
    };

    let animationId: number;
    let time = 0;
    let lastTime = 0;
    const fpsLimit = isMobile ? 30 : 60;
    const frameInterval = 1000 / fpsLimit;

    const animate = (now: number) => {
      animationId = requestAnimationFrame(animate);
      
      const delta = now - lastTime;
      if (delta < frameInterval) return;
      lastTime = now - (delta % frameInterval);

      time += 0.01;
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const curMouseX = mouseX.get();
      const curMouseY = mouseY.get();

      // Draw particles and connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Mouse interaction (simplified for mobile)
        const mdx = p1.x - curMouseX;
        const mdy = p1.y - curMouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        
        if (mdist < 150) {
          const force = (150 - mdist) / 150;
          p1.x += (mdx / mdist) * force * (isMobile ? 1 : 2);
          p1.y += (mdy / mdist) * force * (isMobile ? 1 : 2);
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / connectionDist) * (isMobile ? 0.5 : 0.8)})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const currentOpacity = p.opacity * (0.7 + Math.sin(time / p.flickerSpeed) * 0.3);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        
        ctx.beginPath();
        if (p.shape === 'square') {
          ctx.rect(p.x - p.size/2, p.y - p.size/2, p.size, p.size);
        } else {
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        }
        ctx.fill();
      });
    };

    window.addEventListener('resize', resize);
    resize();
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [mouseX, mouseY]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}

function PhysicsElement({ x, y, content, icon: Icon, title, mass, mouseX, mouseY }: any) {
  const elementRef = useRef<HTMLDivElement>(null);
  
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);

  const springConfig = { damping: 45, stiffness: 90 };
  const springX = useSpring(mX, springConfig);
  const springY = useSpring(mY, springConfig);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return; // Disable interactive physics on mobile for performance

    const unsubscribeX = mouseX.on("change", (latestX) => {
      if (!elementRef.current) return;
      // Use cached/estimated position to avoid getBoundingClientRect reflows
      const elCenterX = (x / 100) * window.innerWidth;
      const elCenterY = (y / 100) * window.innerHeight;
      
      const dx = elCenterX - latestX;
      const latestY = mouseY.get();
      const dy = elCenterY - latestY;
      
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 200;
      
      if (distance < maxDist) {
        const force = (maxDist - distance) / maxDist;
        const repulsion = force * 100 * (1 / mass);
        mX.set((dx / distance) * repulsion);
        mY.set((dy / distance) * repulsion);
      } else {
        mX.set(0);
        mY.set(0);
      }
    });

    return () => unsubscribeX();
  }, [mouseX, mouseY, mass, mX, mY, x, y]);

  const floatingY = useMotionValue(0);
  useEffect(() => {
    let start = Date.now();
    let frameId: number;
    const animate = () => {
      const time = (Date.now() - start) / 1000;
      floatingY.set(Math.sin(time * 1.5 + x * y) * 10);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [x, y]);

  return (
    <motion.div
      ref={elementRef}
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        x: springX, 
        y: springY,
      }}
      className="absolute antigravity-element z-20 pointer-events-auto"
    >
      <motion.div style={{ y: floatingY }}>
        {title ? (
          <motion.div 
            animate={{ 
              borderColor: ["rgba(255,255,255,0.1)", "rgba(0,0,0,0.1)", "rgba(255,255,255,0.1)"],
              backgroundColor: ["rgba(255,255,255,0.03)", "rgba(0,0,0,0.03)", "rgba(255,255,255,0.03)"]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="p-6 w-64 shadow-2xl backdrop-blur-xl rounded-2xl border"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] tracking-widest uppercase opacity-40">Core Concept</span>
              <MoreHorizontal size={12} className="opacity-40" />
            </div>
            <h3 className="text-sm font-bold mb-2 tracking-tight">{title}</h3>
            <p className="text-[11px] opacity-60 leading-relaxed">{content}</p>
          </motion.div>
        ) : Icon ? (
          <motion.div 
            animate={{ 
              borderColor: ["rgba(255,255,255,0.1)", "rgba(0,0,0,0.1)", "rgba(255,255,255,0.1)"],
              backgroundColor: ["rgba(255,255,255,0.03)", "rgba(0,0,0,0.03)", "rgba(255,255,255,0.03)"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="p-4 flex items-center justify-center backdrop-blur-xl rounded-2xl border"
          >
            <Icon size={24} className="opacity-80" />
          </motion.div>
        ) : (
          <motion.span 
            animate={{ 
              borderColor: ["rgba(255,255,255,0.1)", "rgba(0,0,0,0.1)", "rgba(255,255,255,0.1)"],
              backgroundColor: ["rgba(255,255,255,0.03)", "rgba(0,0,0,0.03)", "rgba(255,255,255,0.03)"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="text-[11px] font-medium tracking-[0.2em] uppercase py-2 px-4 inline-block whitespace-nowrap backdrop-blur-xl rounded-2xl border"
          >
            {content}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
