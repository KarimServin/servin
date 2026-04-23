import React, { useState, useEffect, useRef } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
} from "motion/react";
import { 
  MessageCircle, 
  Code2, 
  ShoppingBag, 
  MoreHorizontal
} from "lucide-react";

const WHATSAPP_LINK = `https://wa.me/543424216870?text=Hola+Karim!+Me+gustaría+consultar+por+tus+servicios.`;
export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [effectsLoaded, setEffectsLoaded] = useState(false);

  useEffect(() => {
    // Retrasar efectos pesados para priorizar FCP/LCP en moviles
    const timer = setTimeout(() => {
      setEffectsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Usar clientX/clientY directamente: el canvas y los elementos flotantes
  // usan coordenadas de viewport, no de contenedor. Evita getBoundingClientRect
  // (layout thrashing) y corrige el offset cuando el usuario hace scroll.
  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen w-full relative select-none font-sans bg-black [isolation:isolate]"
    >      {/* Diagonal Inversion Scanner - Wider and CSS-animated for maximum performance */}
      <div 
        className="fixed inset-0 z-5 pointer-events-none will-change-transform animate-scanner"
        style={{
          background: "linear-gradient(105deg, transparent 5%, rgba(200,200,200,0.3) 15%, white 30%, white 70%, rgba(200,200,200,0.3) 85%, transparent 95%)",
        }}
      />

      {/* Content wrapper - Single point of blending */}
      <div className="relative z-10 w-full min-h-screen pointer-events-none mix-blend-difference">
        {/* Interactive Background Elements - in white so they flip to black over white bg */}
        {/* Usar div nativo con CSS transition en vez de motion.div:
            Framer Motion puede agregar transforms internos durante la animación
            de opacity, lo cual rompe el position:fixed de los hijos (canvas, glows) */}
        <div
          className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-[1500ms] ease-out ${effectsLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          {effectsLoaded && <AntigravityScene mouseX={mouseX} mouseY={mouseY} />}
        </div>

        {/* Navigation - Ultra Minimalist and Clear */}
        <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-12 py-8 md:py-8 flex flex-col items-center pointer-events-auto">
          {/* Brand Center */}
          <span translate="no" className="font-brand text-[60px] md:text-[90px] tracking-tighter uppercase whitespace-nowrap text-white font-black leading-none">SERVIN</span>
          
          {/* Location Subtitle */}
          <div className="text-[14px] md:text-[16px] tracking-[0.8em] uppercase font-mono opacity-50 text-white text-center mt-2 ml-[0.8em]">
            SANTA FE
          </div>
        </nav>

        {/* Main Hero Area */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center p-6 md:p-12 text-left">
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
        </section>

        {/* New Services Section */}
        <section className="w-full max-w-7xl mx-auto px-6 py-32 md:py-48 flex flex-col gap-24 relative z-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-[12px] tracking-[0.6em] uppercase opacity-40 font-mono">Servicios</h2>
            <div className="h-[1px] w-full bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <ServiceCard 
              title="Desarrollo Web" 
              desc="Aplicaciones web modernas, escalables y optimizadas para cualquier dispositivo."
              index={0}
            />
            <ServiceCard 
              title="E-commerce" 
              desc="Tiendas online de alto rendimiento diseñadas para maximizar tus ventas."
              index={1}
            />
            <ServiceCard 
              title="Sistemas" 
              desc="Soluciones a medida para la gestión y automatización de procesos complejos."
              index={2}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full px-12 py-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-[10px] tracking-[0.2em] uppercase font-mono relative z-10">
          <div>© 2026 KARIM SERVIN</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Linkedin</a>
            <a href="#" className="hover:text-white transition-colors">Github</a>
          </div>
          <div>SANTA FE, ARGENTINA</div>
        </footer>
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
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleField mouseX={mouseX} mouseY={mouseY} />
      </div>
      
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="fixed inset-0 pointer-events-none z-0"
      >
        <div className="absolute top-1/4 left-1/3 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-current rounded-full blur-[60px] md:blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-current rounded-full blur-[50px] md:blur-[100px] opacity-10"></div>
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

function ServiceCard({ title, desc, index }: { title: string, desc: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-10 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md md:backdrop-blur-3xl hover:border-white/20 transition-colors group cursor-default pointer-events-auto"
    >
      <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
      <p className="text-[11px] md:text-[12px] opacity-40 leading-relaxed tracking-wider uppercase">{desc}</p>
    </motion.div>
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

    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    let particles: Particle[] = [];

    const init = () => {
      particles = [];
      const area = canvas.width * canvas.height;
      const pixelRatio = canvas.width < 768 ? 11000 : 25000;
      const dynamicParticleCount = Math.max(12, Math.min(80, Math.floor(area / pixelRatio)));

      for (let i = 0; i < dynamicParticleCount; i++) {
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

    // Debounce resize para evitar recrear particulas repetidamente
    // (ej: rotacion de pantalla en movil dispara multiples resize)
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const resize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      }, 150);
    };

    // Inicializar inmediatamente la primera vez
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();

    let animationId: number;
    let time = 0;
    let lastTime = 0;
    const fpsLimit = isMobileDevice ? 30 : 60;
    const frameInterval = 1000 / fpsLimit;
    const MOUSE_RADIUS = 150;
    const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;

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

      const dynamicConnectionDist = Math.min(250, Math.max(110, canvas.width * 0.15));
      const connectionDistSq = dynamicConnectionDist * dynamicConnectionDist;
      const currentLineWidth = canvas.width < 768 ? 1.1 : 1.2;
      const currentMaxOpacity = canvas.width < 768 ? 0.85 : 0.9;
      const mouseForceMult = isMobileDevice ? 1 : 2;

      ctx.lineWidth = currentLineWidth;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Mouse interaction - usar distancia al cuadrado para evitar sqrt
        const mdx = p1.x - curMouseX;
        const mdy = p1.y - curMouseY;
        const mdistSq = mdx * mdx + mdy * mdy;
        
        if (mdistSq < MOUSE_RADIUS_SQ && mdistSq > 0) {
          const mdist = Math.sqrt(mdistSq);
          const force = (MOUSE_RADIUS - mdist) / MOUSE_RADIUS;
          p1.x += (mdx / mdist) * force * mouseForceMult;
          p1.y += (mdy / mdist) * force * mouseForceMult;
        }

        // Conexiones entre particulas - sqrt solo cuando estan cerca
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDistSq) {
            const dist = Math.sqrt(distSq);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / dynamicConnectionDist) * currentMaxOpacity})`;
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
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      clearTimeout(resizeTimeout);
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

    const unsubscribeX = mouseX.on("change", (latestX: number) => {
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

  // Use a deterministic seed for the delay based on x and y
  const animationDelay = (x + y) % 3;

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
      <motion.div 
        animate={{ y: [-8, 8, -8] }}
        transition={{ 
          duration: 3 + (x % 2), 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: animationDelay
        }}
      >
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
