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
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="h-screen w-screen relative overflow-hidden select-none font-sans bg-black"
    >
      {/* Colossal analytical scan layer - Surgical precision and premium motion */}
      <motion.div 
        animate={{ 
          x: ["-350%", "-12%", "12%", "350%"],
          y: ["-350%", "-12%", "12%", "350%"],
        }}
        transition={{ 
          duration: 12, 
          times: [0, 0.15, 0.85, 1],
          repeat: Infinity, 
          repeatDelay: 0.5,
          ease: [0.45, 0, 0.55, 1],
        }}
        className="absolute w-[600vw] h-[600vh] z-0 top-[-250vh] left-[-250vw] opacity-95 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, 
            transparent 25%, 
            rgba(255,255,255,0.5) 28%, 
            white 35%, 
            white 65%, 
            rgba(255,255,255,0.5) 72%, 
            transparent 75%
          )`
        }}
      />

      {/* Content wrapper with mix-blend-difference to handle auto-contrast without grays */}
      <div className="relative z-10 w-full h-full mix-blend-difference pointer-events-none">
        {/* Interactive Background Elements - in white so they flip to black over white bg */}
        <AntigravityScene mouseX={mouseX} mouseY={mouseY} />

        {/* Navigation - Ultra Minimalist and Clear */}
        <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-12 py-8 md:py-8 flex flex-col items-center pointer-events-auto">
          {/* Brand Center */}
          <span className="font-brand text-[48px] md:text-[40px] tracking-tighter uppercase whitespace-nowrap text-white font-black leading-none">SERVIN</span>
          
          {/* Location Subtitle */}
          <div className="text-[9px] md:text-[10px] tracking-[0.6em] uppercase font-mono opacity-40 text-white text-center mt-1.5 ml-[0.6em]">
            SANTA FE
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-12 text-left">
          <div className="max-w-5xl w-full flex flex-col items-start translate-y-0 md:translate-y-0 overflow-visible">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
              className="text-[clamp(3.7rem,15vw,7rem)] md:text-[6.5vw] font-black tracking-[-0.06em] leading-[0.85] mb-4 md:mb-6 text-white"
            >
              ANALISTA DE <br/>SISTEMAS <span className="opacity-30 font-light text-[0.8em]">()</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
              className="max-w-md text-[10px] md:text-[12px] tracking-[0.2em] uppercase leading-relaxed opacity-80 font-medium text-white"
            >
              Desarrollo web y sistemas de información.
            </motion.div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button - Enhanced and Centered for All Devices */}
      <motion.a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-10 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-4 bg-white text-black px-8 py-3 md:px-10 md:py-4 rounded-full shadow-[0_20px_50px_rgba(255,255,255,0.2)] pointer-events-auto group mix-blend-difference transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)]"
      >
        <MessageCircle size={22} className="flex-none group-hover:scale-110 transition-transform" />
        <span className="text-[12px] font-black tracking-[0.4em] uppercase">WhatsApp</span>
      </motion.a>
    </div>
  );
}

function AntigravityScene({ mouseX, mouseY }: { mouseX: number, mouseY: number }) {
  // A much smaller, more curated set of elements that don't crowd the text
  const elements = [
    { id: 1, type: 'text', content: 'E-commerce', x: 15, y: 20, mass: 1 },
    { id: 2, type: 'icon', icon: ShoppingBag, x: 80, y: 25, mass: 1.5 },
    { id: 5, type: 'icon', icon: Code2, x: 85, y: 75, mass: 0.8 },
  ];

  return (
    <>
      <ParticleField />
      
      {/* Subtle background circles for some depth without clutter - cycling opacity */}
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

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
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

    let particles: Particle[] = [];
    const particleCount = 80; // Reduced count to improve network line performance
    const connectionDist = 150;

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
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.5 + 0.2,
          shape: Math.random() > 0.8 ? 'square' : 'circle',
          flickerSpeed: Math.random() * 0.05 + 0.01
        });
      }
    };

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'white';
      ctx.fillStyle = 'white';

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            ctx.globalAlpha = (1 - dist / connectionDist) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Subtle flicker
        const currentOpacity = p.opacity * (0.6 + Math.sin(time / p.flickerSpeed) * 0.4);
        ctx.globalAlpha = currentOpacity;
        
        ctx.beginPath();
        if (p.shape === 'square') {
          ctx.rect(p.x - p.size/2, p.y - p.size/2, p.size, p.size);
        } else {
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        }
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-80"
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
    const updatePhysics = () => {
      if (!elementRef.current) return;
      
      const elRect = elementRef.current.getBoundingClientRect();
      const elCenterX = elRect.left + elRect.width / 2;
      const elCenterY = elRect.top + elRect.height / 2;

      const dx = elCenterX - mouseX;
      const dy = elCenterY - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const maxDist = 300;
      const force = Math.max(0, (maxDist - distance) / maxDist);
      const repulsion = force * 180 * (1 / mass);

      if (distance < maxDist) {
        mX.set((dx / distance) * repulsion);
        mY.set((dy / distance) * repulsion);
      } else {
        mX.set(0);
        mY.set(0);
      }
    };

    updatePhysics();
  }, [mouseX, mouseY, mass, mX, mY]);

  const floatingY = useMotionValue(0);
  useEffect(() => {
    let start = Date.now();
    const animate = () => {
      const time = (Date.now() - start) / 1000;
      floatingY.set(Math.sin(time * 1.5 + x * y) * 12);
      requestAnimationFrame(animate);
    };
    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
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
