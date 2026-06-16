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

// Detect mobile once at module level — avoids per-render detection
const IS_MOBILE = /iPhone|iPad|iPod|Android/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '');

export default function App() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const [effectsLoaded, setEffectsLoaded] = useState(false);

  useEffect(() => {
    if (IS_MOBILE) return; // Skip heavy deferred effects on mobile entirely
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

  const handleTouchMove = (e: React.TouchEvent) => {
    mouseX.set(e.touches[0].clientX);
    mouseY.set(e.touches[0].clientY);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="min-h-screen w-full overflow-x-hidden pb-[env(safe-area-inset-bottom)] relative select-none font-sans bg-bg text-ink [isolation:isolate]"
    >
      {/* Noise Overlay — desktop only (GPU cost on mobile not worth it) */}
      {!IS_MOBILE && (
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-[0.015] mix-blend-multiply"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      )}

      {/* Ambient Color Glows — reduced blur on desktop, hidden on mobile */}
      {!IS_MOBILE && (
        <>
          <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-green/8 blur-[80px] pointer-events-none z-0" />
          <div className="fixed top-[30%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-cyan/5 blur-[80px] pointer-events-none z-0" />
          <div className="fixed bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-brand-indigo/8 blur-[100px] pointer-events-none z-0" />
        </>
      )}

      {/* Content wrapper */}
      <div className="relative z-10 w-full min-h-screen pointer-events-none">
        {/* Interactive Background Elements — desktop only */}
        {!IS_MOBILE && (
          <div
            className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-[1500ms] ease-out ${effectsLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            {effectsLoaded && <AntigravityScene mouseX={mouseX} mouseY={mouseY} />}
          </div>
        )}

        {/* Navigation - Solid, Centered */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#f8fafc] border-b border-slate-200 shadow-sm pointer-events-auto">
          <div className="flex flex-col items-center py-3">
            <ScrambleText text="SERVIN" />
            <span className="text-[9px] tracking-[0.35em] uppercase font-mono text-slate-400 mt-0.5">
              Santa Fe, Argentina
            </span>
          </div>
        </nav>

        {/* Main Hero Area */}
        <section className="w-full flex flex-col items-center justify-center px-6 pt-24 pb-6 md:p-12 md:pt-28 text-left min-h-[100svh]">
          <div className="max-w-5xl w-full flex flex-col items-start translate-y-0 md:translate-y-0 overflow-visible">
            {IS_MOBILE ? (
              <h1 className="font-display text-[clamp(3.7rem,15vw,7rem)] font-extrabold tracking-tight leading-[0.85] mb-6 text-slate-900">
                ANALISTA DE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-brand-green">SISTEMAS</span> <span className="text-brand-green font-mono font-light text-[0.8em]">[ ]</span>
              </h1>
            ) : (
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                className="font-display text-[clamp(3.7rem,15vw,7rem)] md:text-[6.5vw] font-extrabold tracking-tight leading-[0.85] mb-6 text-slate-900 will-change-transform"
              >
                ANALISTA DE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-brand-green">SISTEMAS</span> <span className="text-brand-green font-mono font-light text-[0.8em]">[ ]</span>
              </motion.h1>
            )}
            {IS_MOBILE ? (
              <p className="max-w-xl text-[12px] md:text-[14px] tracking-[0.1em] uppercase leading-relaxed text-slate-600 font-medium">
                Soluciones de software a medida, e-commerce y facturación automática para simplificar el día a día de PyMEs y emprendedores locales.
              </p>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="max-w-xl text-[12px] md:text-[14px] tracking-[0.1em] uppercase leading-relaxed text-slate-600 font-medium"
              >
                Soluciones de software a medida, e-commerce y facturación automática para simplificar el día a día de PyMEs y emprendedores locales.
              </motion.p>
            )}
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-24 relative z-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-[12px] tracking-[0.6em] uppercase text-muted font-mono">Servicios</h2>
              <span className="text-[10px] tracking-widest text-brand-green uppercase font-mono">[ 9 soluciones ]</span>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-brand-green/30 via-slate-200 to-slate-100" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Desarrollo Web" 
              desc="Sitios y aplicaciones web rápidas para posicionar tu marca y captar más clientes en la región."
              index={0}
            />
            <ServiceCard 
              title="E-commerce" 
              desc="Tu local abierto las 24 horas. Tiendas online integradas con medios de pago y logística de envíos."
              index={1}
            />
            <ServiceCard 
              title="Páginas Institucionales" 
              desc="Presencia profesional, limpia y confiable para empresas, cooperativas e instituciones locales."
              index={2}
            />
            <ServiceCard 
              title="Sistemas de Gestión" 
              desc="Automatizá tu stock, tus ventas y tus clientes con un software a medida diseñado según tu flujo diario."
              index={3}
            />
            <ServiceCard 
              title="Facturación (ARCA)" 
              desc="Facturá en segundos sin entrar a la web de AFIP. Conectamos tus sistemas para emitir comprobantes de forma automática."
              index={4}
            />
            <ServiceCard 
              title="Integraciones" 
              desc="Unimos tus sistemas existentes con Mercado Pago, APIs externas o planillas de cálculo. Todo coordinado en un solo lugar."
              index={5}
            />
            <ServiceCard 
              title="Análisis de Datos" 
              desc="Entendé tus ventas, tus gastos y tus márgenes reales con tableros de control simples, interactivos y automatizados."
              index={6}
            />
            <ServiceCard 
              title="Aplicaciones IA y RAG" 
              desc="Asistentes virtuales entrenados con tus manuales de producto para automatizar la atención al cliente sin perder ventas."
              index={7}
            />
            <ServiceCard 
              title="Asesoramiento Técnico" 
              desc="Te ayudamos a elegir computadoras, servidores o infraestructura de red adecuada sin gastar de más. Inversión inteligente."
              index={8}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full px-6 md:px-12 py-14 md:py-20 mt-16 md:mt-20 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-[10px] tracking-[0.2em] uppercase font-mono relative z-10">
          <div className="opacity-40">© 2026 KARIM SERVIN</div>
          <div className="flex items-center gap-2 text-brand-green font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            Disponible para Proyectos
          </div>
          <div className="opacity-40">SANTA FE, ARGENTINA</div>
        </footer>
      </div>

      {/* WhatsApp Floating Button - Green Background and Pop design */}
      <div 
        className="fixed z-50 pointer-events-none"
        style={{ 
          bottom: 'max(2.5rem, calc(1.5rem + env(safe-area-inset-bottom)))',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        <MagneticButton 
          href={WHATSAPP_LINK}
          id="btn-contacto-whatsapp"
          aria-label="Contactar a Karim Servin por WhatsApp"
          title="Contactar a Karim Servin por WhatsApp"
          className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 md:px-10 md:py-5 rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.3)] pointer-events-auto group transition-all duration-300 hover:bg-[#22c35e] hover:shadow-[0_20px_50px_rgba(37,211,102,0.5)] hover:scale-[1.03] border border-white/10"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110"
          >
            {/* White speech bubble */}
            <path 
              fill="currentColor" 
              d="M12.004 2C6.48 2 2.004 6.48 2.004 12c0 1.73.44 3.36 1.21 4.8l-1.28 4.78c-.06.24.03.49.22.65.13.11.3.17.47.17.06 0 .12-.01.18-.03l4.9-1.31c1.39.73 2.96 1.14 4.6 1.14 5.52 0 10-4.48 10-10S17.524 2 12.004 2z" 
            />
            {/* Handset shape filled with green to carve it out perfectly */}
            <path 
              fill="#25D366" 
              className="group-hover:fill-[#22c35e] transition-colors duration-300"
              d="M16.564 14.87c-.22.62-1.12 1.14-1.64 1.19-.46.04-.93.04-2.74-.61-2.28-.83-3.76-3.1-3.88-3.25-.11-.15-.93-1.21-.93-2.3 0-1.1.57-1.63.78-1.86.21-.22.45-.28.6-.28.15 0 .3.01.43.01.14 0 .31-.05.49.37.18.44.63 1.53.69 1.64.06.11.09.24.02.39-.07.15-.11.24-.22.37l-.34.39c-.11.13-.23.27-.1.49.13.22.58.95.82 1.37.81 1.39 1.49 1.83 1.74 1.95.25.13.4.1.55-.07.15-.17.64-.74.81-.99.17-.25.34-.21.57-.13.23.08 1.46.69 1.72.82.25.13.42.19.48.29.06.1.06.6-.17 1.22z"
            />
          </svg>
          <span className="text-[13px] md:text-[14px] font-black tracking-[0.3em] uppercase mt-[2px]">Contacto</span>
        </MagneticButton>
      </div>
    </div>
  );
}
function MagneticButton({ children, className, href, ...props }: { children: React.ReactNode, className: string, href: string, [key: string]: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
    const xPos = clientX - (left + width / 2);
    const yPos = clientY - (top + height / 2);
    x.set(xPos * 0.3); // Fuerza magnética
    y.set(yPos * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}

function ScrambleText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const chars = "!<>-_\\\\/[]{}—=+*^?#________";

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isHovering) {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    } else {
      setDisplayText(text);
    }
    return () => clearInterval(interval);
  }, [isHovering, text]);

  return (
    <span 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      translate="no" 
      className="font-mono text-[20px] md:text-[24px] tracking-[0.2em] uppercase whitespace-nowrap text-ink font-bold leading-none cursor-crosshair min-w-[120px] inline-block"
    >
      {displayText}
    </span>
  );
}

function AntigravityScene({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const elements = [
    { id: 1, type: 'text', content: 'E-commerce', x: 15, y: 8, mass: 1 },
    { id: 2, type: 'icon', icon: ShoppingBag, x: 80, y: 12, mass: 1.5 },
    { id: 5, type: 'icon', icon: Code2, x: 85, y: 28, mass: 0.8 },
  ];

  // On mobile, hide text elements to prevent overlap with the title
  const visibleElements = isMobile ? elements.filter(el => el.type !== 'text') : elements;

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleField mouseX={mouseX} mouseY={mouseY} />
      </div>
      

      
      {visibleElements.map((el) => (
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
  // Curated premium accents grouped by category (Frontend/Digital, Backend/Systems, Data/AI/Advice)
  const getAccent = (idx: number) => {
    if (idx < 3) {
      // Group 1: Frontend & Digital (Cyan/Blue gradient)
      return {
        border: "hover:border-brand-cyan/30",
        shadow: "hover:shadow-[0_0_30px_rgba(0,240,255,0.08)]",
        bg: "hover:bg-brand-cyan/[0.015]",
        text: "group-hover:text-brand-cyan",
        dot: "bg-brand-cyan",
        tag: "Canal Digital",
        tagColor: "text-brand-cyan/40 group-hover:text-brand-cyan/60"
      };
    } else if (idx < 6) {
      // Group 2: Systems & Business (Teal/Emerald gradient)
      return {
        border: "hover:border-brand-green/30",
        shadow: "hover:shadow-[0_0_30px_rgba(0,255,135,0.08)]",
        bg: "hover:bg-brand-green/[0.015]",
        text: "group-hover:text-brand-green",
        dot: "bg-brand-green",
        tag: "Sistemas & AFIP",
        tagColor: "text-brand-green/40 group-hover:text-brand-green/60"
      };
    } else {
      // Group 3: Data & Intelligence (Indigo/Violet gradient)
      return {
        border: "hover:border-brand-indigo/30",
        shadow: "hover:shadow-[0_0_30px_rgba(112,0,255,0.08)]",
        bg: "hover:bg-brand-indigo/[0.015]",
        text: "group-hover:text-brand-indigo",
        dot: "bg-brand-indigo",
        tag: "Datos & Automatización",
        tagColor: "text-brand-indigo/40 group-hover:text-brand-indigo/60"
      };
    }
  };

  const accent = getAccent(index);

  const cardClass = `p-8 md:p-10 rounded-2xl border border-slate-200/50 bg-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.015)] backdrop-blur-lg md:backdrop-blur-3xl transition-all duration-500 group cursor-default pointer-events-auto flex flex-col justify-between min-h-[200px] md:min-h-[220px] hover:bg-white hover:border-slate-300 ${accent.border} ${accent.shadow} ${accent.bg}`;

  const cardContent = (
    <>
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className={`text-[9px] tracking-[0.25em] uppercase font-mono ${accent.tagColor} transition-colors duration-500`}>
            {accent.tag}
          </span>
          <span className={`w-1.5 h-1.5 rounded-full ${accent.dot} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>
        <h3 className={`text-xl md:text-2xl font-black tracking-tighter transition-all duration-500 group-hover:translate-x-1 mb-4 text-slate-900 ${accent.text}`}>
          {title}
        </h3>
      </div>
      <p className="text-[11px] md:text-[12px] text-slate-500 leading-relaxed tracking-wider uppercase group-hover:text-slate-800 transition-colors duration-500">
        {desc}
      </p>
    </>
  );

  if (IS_MOBILE) {
    return <div className={cardClass}>{cardContent}</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cardClass}
    >
      {cardContent}
    </motion.div>
  );
}

function ParticleField({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
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
      color?: 'brand-green' | 'base';
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
          size: Math.random() * 1.5 + 0.2,
          speedX: (Math.random() - 0.5) * 0.1,
          speedY: (Math.random() - 0.5) * 0.1,
          opacity: Math.random() * 0.4 + 0.1,
          shape: Math.random() > 0.8 ? 'square' : 'circle',
          flickerSpeed: Math.random() * 0.05 + 0.01,
          color: Math.random() > 0.8 ? 'brand-green' : 'base'
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const curMouseX = mouseX.get();
      const curMouseY = mouseY.get();

      const dynamicConnectionDist = Math.min(250, Math.max(110, canvas.width * 0.15));
      const connectionDistSq = dynamicConnectionDist * dynamicConnectionDist;
      const currentLineWidth = canvas.width < 768 ? 1.1 : 1.2;
      const currentMaxOpacity = canvas.width < 768 ? 0.85 : 0.9;
      const mouseForceMult = isMobileDevice ? 0.5 : 1;

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

        // Las conexiones entre partículas fueron eliminadas para un efecto de "polvo estelar" más limpio
      }

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const currentOpacity = p.opacity * (0.7 + Math.sin(time / p.flickerSpeed) * 0.3);
        if (p.color === 'brand-green') {
          ctx.fillStyle = `rgba(5, 150, 105, ${currentOpacity * 1.5})`;
        } else {
          ctx.fillStyle = `rgba(15, 23, 42, ${currentOpacity * 0.4})`;
        }
        
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
      className="absolute inset-0 z-0 pointer-events-none will-change-transform"
    />
  );
}

function PhysicsElement({ x, y, content, icon: Icon, title, mass, mouseX, mouseY }: any) {
  const elementRef = useRef<HTMLDivElement>(null);
  
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);

  // Viscous drag for a heavier, premium feel
  const springConfig = { damping: 80, stiffness: 40, mass: 3 };
  const springX = useSpring(mX, springConfig);
  const springY = useSpring(mY, springConfig);

  const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (isMobileDevice) return; // Disable interactive physics on mobile for performance

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
      drag={!isMobileDevice}
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
              borderColor: ["rgba(79,70,229,0.35)", "rgba(5,150,105,0.35)", "rgba(2,132,199,0.35)", "rgba(79,70,229,0.35)"],
              backgroundColor: ["rgba(255,255,255,0.7)", "rgba(255,255,255,0.7)"]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="p-6 w-64 shadow-xl backdrop-blur-xl rounded-2xl border"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] tracking-widest uppercase opacity-40 text-slate-900">Core Concept</span>
              <MoreHorizontal size={12} className="opacity-40 text-slate-900" />
            </div>
            <h3 className="text-sm font-bold mb-2 tracking-tight text-slate-900">{title}</h3>
            <p className="text-[11px] opacity-60 leading-relaxed text-slate-600">{content}</p>
          </motion.div>
        ) : Icon ? (
          <motion.div 
            animate={{ 
              borderColor: ["rgba(5,150,105,0.35)", "rgba(2,132,199,0.35)", "rgba(79,70,229,0.35)", "rgba(5,150,105,0.35)"],
              backgroundColor: ["rgba(255,255,255,0.7)", "rgba(255,255,255,0.7)"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="p-4 flex items-center justify-center backdrop-blur-xl rounded-2xl border"
          >
            <Icon size={24} className="opacity-80 text-slate-800" />
          </motion.div>
        ) : (
          <motion.span 
            animate={{ 
              borderColor: ["rgba(2,132,199,0.35)", "rgba(79,70,229,0.35)", "rgba(5,150,105,0.35)", "rgba(2,132,199,0.35)"],
              backgroundColor: ["rgba(255,255,255,0.7)", "rgba(255,255,255,0.7)"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="text-[11px] font-medium tracking-[0.2em] uppercase py-2 px-4 inline-block whitespace-nowrap backdrop-blur-xl rounded-2xl border text-slate-800"
          >
            {content}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
