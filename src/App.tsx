import React, { useState, useEffect, useRef } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring,
  AnimatePresence
} from "motion/react";
import { 
  Code2, 
  ShoppingBag, 
  MoreHorizontal,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
  TrendingUp,
  Terminal,
  Smartphone,
  Database,
  Sparkles,
  ChevronDown,
  MessageSquare,
  Clock,
  FileText,
  HelpCircle,
  X,
  Server,
  Workflow,
  RotateCcw,
  CreditCard,
  Lock,
  BadgeCheck,
  GraduationCap,
  Briefcase,
  Users,
  Building2
} from "lucide-react";

const WHATSAPP_LINK = `https://wa.me/543424216870?text=Hola+Karim!+Me+gustaría+consultar+por+un+proyecto+de+software/web.`;

// Detect mobile once at module level
const IS_MOBILE = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export default function App() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const [effectsLoaded, setEffectsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "web" | "afip" | "systems">("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    if (IS_MOBILE) return;
    const timer = setTimeout(() => {
      setEffectsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    mouseX.set(e.touches[0].clientX);
    mouseY.set(e.touches[0].clientY);
  };

  // Helper for smooth scrolling without ugly # in URL
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (typeof window !== "undefined" && window.history.pushState) {
        window.history.pushState(null, "", window.location.pathname);
      }
    }
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="min-h-screen w-full overflow-x-hidden relative font-sans bg-[#0A0A0A] text-white selection:bg-white selection:text-black [isolation:isolate]"
    >
      {/* Noise Overlay */}
      {!IS_MOBILE && (
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      )}

      {/* Grid Pattern Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-60" />

      {/* Radial Glass Spotlight */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full min-h-screen">
        
        {/* Antigravity Interactive Scene */}
        {!IS_MOBILE && (
          <div
            className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${effectsLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            {effectsLoaded && <AntigravityScene mouseX={mouseX} mouseY={mouseY} />}
          </div>
        )}

        {/* Header & Navigation — Glassmorphism Header */}
        <header className="fixed top-0 left-0 w-full z-50 pointer-events-auto glass-nav">
          <nav aria-label="Navegación principal" className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
                className="flex items-center gap-3 group text-left cursor-pointer" 
                aria-label="Ir al inicio de Servin"
              >
                <ScrambleText text="servin" />
              </button>
              <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full glass-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-400">
                  Santa Fe, AR
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-6 md:gap-7">
              <button 
                onClick={() => scrollToSection("sobre-mi")} 
                className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Sobre Mí
              </button>
              <button 
                onClick={() => scrollToSection("servicios")} 
                className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection("garantia")} 
                className="hidden md:inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Garantía & Pagos
              </button>
              <button 
                onClick={() => scrollToSection("proceso")} 
                className="hidden lg:inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Proceso
              </button>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-semibold tracking-[0.2em] uppercase px-4 py-2 text-black bg-white hover:bg-neutral-200 transition-all duration-300 rounded-[6px] shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
              >
                Contacto
              </a>
            </div>
          </nav>
        </header>

        <main id="contenido-principal">
          {/* Hero Section */}
          <section className="w-full flex flex-col justify-center px-6 pt-32 pb-16 md:pt-40 md:pb-24 min-h-[90vh] relative z-10">
            <div className="max-w-6xl w-full mx-auto flex flex-col items-start">
              
              {/* Live Availability Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-badge mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-neutral-300 font-medium">
                  DISPONIBLE PARA NUEVOS PROYECTOS 2026
                </span>
              </div>

              {/* Main Headline (H1 for SEO) */}
              {IS_MOBILE ? (
                <h1 className="font-display font-black tracking-tighter leading-[0.92] mb-6 text-white text-[clamp(2.3rem,9vw,4.2rem)]">
                  SOFTWARE & WEB <br />
                  <span className="text-gradient-white">DE ALTO IMPACTO</span> <br />
                  PARA PYMES Y EMPRENDEDORES.
                </h1>
              ) : (
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-[clamp(3.2rem,6.8vw,6.2rem)] font-black tracking-tighter leading-[0.92] mb-8 text-white max-w-5xl"
                >
                  SOFTWARE & WEB <br />
                  <span className="text-gradient-white">DE ALTO IMPACTO</span> <br />
                  PARA PYMES Y EMPRENDEDORES.
                </motion.h1>
              )}

              {/* Subtitle oriented to Business Growth & Guarantee */}
              {IS_MOBILE ? (
                <p className="text-[14px] md:text-[16px] leading-relaxed text-neutral-400 font-normal max-w-2xl mb-10">
                  Diseñamos e implementamos ecosistemas digitales a medida: e-commerce de alta conversión, automatización de facturación ARCA/AFIP y software de gestión sin mensualidades forzosas. Con garantía de satisfacción 100% y flexibilidad de pago por hitos.
                </p>
              ) : (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-2xl text-[15px] md:text-[17px] leading-relaxed text-neutral-400 font-normal mb-10"
                >
                  Diseñamos e implementamos ecosistemas digitales a medida: e-commerce de alta conversión, automatización de facturación ARCA/AFIP y software de gestión sin mensualidades forzosas. Con garantía de satisfacción 100% y flexibilidad de pago por hitos.
                </motion.p>
              )}

              {/* Call To Actions */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pointer-events-auto">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black font-bold tracking-[0.15em] text-xs uppercase px-8 py-4 rounded-xl hover:bg-neutral-200 active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  <span>Iniciar Proyecto</span>
                  <ArrowUpRight size={16} />
                </a>

                <button
                  onClick={() => scrollToSection("sobre-mi")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 glass-button text-neutral-200 font-semibold tracking-[0.15em] text-xs uppercase px-7 py-4 rounded-xl hover:text-white active:scale-[0.98] cursor-pointer"
                >
                  <GraduationCap size={16} className="text-white" />
                  <span>Conocer a Karim (UTN)</span>
                </button>
              </div>

              {/* Trust Metrics Grid — Glass Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-16 pt-10 border-t border-white/10">
                <div className="glass-card p-5 rounded-xl flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-black tracking-tight text-white">UTN</span>
                  <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider">Analista en Sistemas</span>
                </div>
                <div className="glass-card p-5 rounded-xl flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-black tracking-tight text-white">100%</span>
                  <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider">Garantía Devolución</span>
                </div>
                <div className="glass-card p-5 rounded-xl flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-black tracking-tight text-white">Flexibles</span>
                  <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider">Pagos por Hitos</span>
                </div>
                <div className="glass-card p-5 rounded-xl flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-black tracking-tight text-white">ARCA / AFIP</span>
                  <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider">Sync Automática</span>
                </div>
              </div>

            </div>
          </section>

          {/* About Me Section (Sobre Mí) */}
          <section id="sobre-mi" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
            <div className="glass-card p-8 md:p-14 rounded-3xl relative overflow-hidden border border-white/20">
              <div className="shine-line" />

              <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
                
                {/* Left Column: Bio & Identity */}
                <div className="flex-1 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-[11px] tracking-[0.4em] uppercase text-neutral-400 font-mono block">
                      Perfil Profesional
                    </span>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-mono tracking-wider font-bold">
                      <GraduationCap size={13} />
                      <span>EGRESADO UTN</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-badge text-neutral-300 text-[10px] font-mono tracking-wider">
                      <Briefcase size={12} />
                      <span>RELACIÓN DE DEPENDENCIA & CONSULTOR</span>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
                    KARIM SERVIN
                    <span className="block text-lg md:text-2xl font-mono font-semibold text-neutral-400 mt-2">
                      Analista en Sistemas — UTN Santa Fe
                    </span>
                  </h2>

                  <div className="space-y-4 text-neutral-300 text-sm md:text-base leading-relaxed font-normal">
                    <p>
                      Soy Analista en Sistemas egresado de la <strong className="text-white">Universidad Tecnológica Nacional (UTN)</strong>. Actualmente trabajo en <strong className="text-white">relación de dependencia</strong> dentro del sector corporativo de TI, lo que me brinda una visión diaria y profunda de las mejores prácticas en arquitectura, seguridad y escalabilidad tecnológica.
                    </p>
                    <p>
                      De forma paralela, colaboro de manera independiente con diversas <strong className="text-white">empresas, PyMEs y emprendedores</strong> para digitalizar sus procesos operativos clave, eliminar cuellos de botella y potenciar sus márgenes de beneficio.
                    </p>
                    <p>
                      Mi objetivo principal no es solo escribir código, sino proveer <strong className="text-white">herramientas estratégicas e intuitivas</strong> que capaciten a los equipos de trabajo, agilicen las tareas del personal y transformen la tecnología en un motor real de crecimiento para tu negocio.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2.5 bg-white text-black font-bold tracking-[0.15em] text-xs uppercase px-6 py-3.5 rounded-xl hover:bg-neutral-200 transition-all"
                    >
                      <MessageSquare size={15} />
                      <span>Conversar con Karim</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: 4 Strategic Pillars */}
                <div className="w-full lg:w-[420px] shrink-0 grid grid-cols-1 gap-4">
                  <div className="glass-panel p-6 rounded-2xl border border-white/15 flex items-start gap-4">
                    <div className="p-3 rounded-xl glass-badge text-white shrink-0 mt-1">
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">Formación Rigurosa UTN</h3>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        Formación universitaria sólida en ingeniería de software, bases de datos y diseño de arquitecturas robustas.
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border border-white/15 flex items-start gap-4">
                    <div className="p-3 rounded-xl glass-badge text-white shrink-0 mt-1">
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">Experiencia Corporativa Real</h3>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        Trabajo diario en relación de dependencia aplicando estándares empresariales a proyectos de cualquier escala.
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border border-white/15 flex items-start gap-4">
                    <div className="p-3 rounded-xl glass-badge text-white shrink-0 mt-1">
                      <Building2 size={22} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">Digitalización de Procesos</h3>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        Transformación de flujos manuales e ineficientes en sistemas ágiles que aumentan la rentabilidad del negocio.
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border border-white/15 flex items-start gap-4">
                    <div className="p-3 rounded-xl glass-badge text-white shrink-0 mt-1">
                      <Users size={22} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">Empoderamiento de Equipos</h3>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        Herramientas diseñadas para que los empleados las adopten fácilmente y potencien su productividad diaria.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="servicios" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
            <div className="flex flex-col gap-6 mb-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-[11px] tracking-[0.4em] uppercase text-neutral-500 font-mono block mb-2">Soluciones Digitales</span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                    SERVICIOS Y CAPACIDADES
                  </h2>
                </div>
                
                {/* Category Filter Tabs */}
                <div className="flex flex-wrap gap-2 p-1 rounded-xl glass-panel">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`px-4 py-2 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${activeTab === 'all' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
                  >
                    Todos (9)
                  </button>
                  <button
                    onClick={() => setActiveTab("web")}
                    className={`px-4 py-2 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${activeTab === 'web' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
                  >
                    Web & E-Commerce
                  </button>
                  <button
                    onClick={() => setActiveTab("afip")}
                    className={`px-4 py-2 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${activeTab === 'afip' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
                  >
                    AFIP & Integraciones
                  </button>
                  <button
                    onClick={() => setActiveTab("systems")}
                    className={`px-4 py-2 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${activeTab === 'systems' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
                  >
                    Sistemas & IA
                  </button>
                </div>
              </div>
              <div className="h-[1px] w-full bg-white/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeTab === 'all' || activeTab === 'web') && (
                <>
                  <ServiceCard 
                    title="Desarrollo Web de Alta Gama" 
                    tag="Canal Digital"
                    icon={Code2}
                    desc="Sitios optimizados para SEO local y conversión instantánea. Velocidad ultra rápida sin frameworks pesados ni plantillas genéricas."
                    benefits={["Carga en < 1 segundo", "SEO Local Santa Fe", "Diseño Responsive UX/UI"]}
                    index={0}
                  />
                  <ServiceCard 
                    title="E-commerce Sin Comisiones" 
                    tag="Ventas 24/7"
                    icon={ShoppingBag}
                    desc="Tu tienda online propia con catálogo dinámico, pasarelas de pago (Mercado Pago / Transferencia) y cálculo automático de envíos."
                    benefits={["Sin comisiones por venta", "Gestión de Stock", "Checkout Optimizado"]}
                    index={1}
                  />
                  <ServiceCard 
                    title="Portales Institucionales" 
                    tag="Imagen Corporativa"
                    icon={Layers}
                    desc="Presencia digital seria y elegante para empresas, consultoras e instituciones que necesitan generar máxima confianza."
                    benefits={["Glassmorphism UI", "Seguridad Avanzada", "Multi-idioma listo"]}
                    index={2}
                  />
                </>
              )}

              {(activeTab === 'all' || activeTab === 'afip') && (
                <>
                  <ServiceCard 
                    title="Facturación ARCA / AFIP" 
                    tag="Automatización Fiscal"
                    icon={FileText}
                    desc="Conexión directa por API con AFIP para generar Comprobantes Electrónicos (A, B, C) de forma automática con un click o desde tu web."
                    benefits={["Ahorro de 10+ hs/mes", "Facturación en lote", "Cero errores manuales"]}
                    index={3}
                  />
                  <ServiceCard 
                    title="Integración de APIs & Mercado Pago" 
                    tag="Ecosistema Digital"
                    icon={Workflow}
                    desc="Conectamos tu sistema actual con pasarelas de cobro, Webhooks, WhatsApp API, planillas de Google Sheets o CRMs externos."
                    benefits={["Sincronización en tiempo real", "Notificaciones automáticas", "Flujos custom"]}
                    index={4}
                  />
                  <ServiceCard 
                    title="Tableros de Control & Business Intelligence" 
                    tag="Analytics para PyMEs"
                    icon={TrendingUp}
                    desc="Visualizá tus métricas reales de venta, márgenes de ganancia y stock crítico en tableros gráficos en tiempo real."
                    benefits={["Visualización clara", "Exportación a Excel/PDF", "Alertas de inventario"]}
                    index={5}
                  />
                </>
              )}

              {(activeTab === 'all' || activeTab === 'systems') && (
                <>
                  <ServiceCard 
                    title="Sistemas de Gestión a Medida" 
                    tag="Software ERP/CRM"
                    icon={Server}
                    desc="Software diseñado a la medida exacta de tu PyME. Control de inventario, clientes, presupuestos y compras sin pagar licencias mensuales."
                    benefits={["Multi-usuario con roles", "Panel 100% intuitivo", "Base de datos propia"]}
                    index={6}
                  />
                  <ServiceCard 
                    title="Agentes IA & RAG Corporativo" 
                    tag="Inteligencia Artificial"
                    icon={Sparkles}
                    desc="Asistentes virtuales inteligentes entrenados con el catálogo y políticas de tu negocio para responder preguntas frecuentes y vender en WhatsApp."
                    benefits={["Atención 24/7", "Respuestas precisas", "Reducción de soporte"]}
                    index={7}
                  />
                  <ServiceCard 
                    title="Consultoría & Infraestructura" 
                    tag="Asesoramiento Técnico"
                    icon={Cpu}
                    desc="Diagnóstico técnico para equipar tu negocio con servidores, hardware y redes adecuadas sin malgastar presupuesto."
                    benefits={["Inversión inteligente", "Optimización de costos", "Auditoría de software"]}
                    index={8}
                  />
                </>
              )}
            </div>
          </section>

          {/* Why Custom Code Section */}
          <section id="comparativa" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
            <div className="glass-card p-8 md:p-14 rounded-3xl relative overflow-hidden border border-white/15">
              <div className="shine-line" />
              
              <div className="max-w-3xl mb-12">
                <span className="text-[11px] tracking-[0.4em] uppercase text-neutral-400 font-mono block mb-3">
                  Decisión Estratégica para PyMEs y Emprendedores
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">
                  ¿POR QUÉ ELEGIR CÓDIGO PROPIO EN LUGAR DE PLANTILLAS GENÉRICAS?
                </h2>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                  Muchas PyMEs pierden ventas diariamente por sitios lentos, plataformas cerradas que cobran comisiones excesivas o software enlatado que no se adapta a su forma de trabajar.
                </p>
              </div>

              {/* Comparison Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Traditional Platforms */}
                <div className="glass-panel p-6 md:p-8 rounded-2xl border border-red-500/20 bg-red-950/10">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-red-500/20">
                    <h3 className="text-xl font-bold text-neutral-300">Plantillas Genéricas / Wix / Tiendanube</h3>
                    <span className="text-xs font-mono text-red-400 px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20">Lento & Limitado</span>
                  </div>
                  <ul className="space-y-4 text-sm text-neutral-400">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold mt-0.5">✕</span>
                      <span>Comisiones mensuales continuas por cada venta o plugin extra.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold mt-0.5">✕</span>
                      <span>Carga lenta que perjudica el posicionamiento en Google (SEO).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold mt-0.5">✕</span>
                      <span>Imposible de integrar con facturación fiscal ARCA o sistemas locales.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold mt-0.5">✕</span>
                      <span>El diseño se ve exactamente igual a cientos de competidores.</span>
                    </li>
                  </ul>
                </div>

                {/* Servin Solution */}
                <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/30 bg-white/[0.04]">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
                    <h3 className="text-xl font-bold text-white">Desarrollo Servin a Medida</h3>
                    <span className="text-xs font-mono text-white px-2.5 py-1 rounded bg-white/10 border border-white/30">Vanguardia & Escalable</span>
                  </div>
                  <ul className="space-y-4 text-sm text-neutral-200">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-white shrink-0 mt-0.5" />
                      <span><strong>100% Tuyo:</strong> Sin comisiones por venta ni licencias ocultas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-white shrink-0 mt-0.5" />
                      <span><strong>Velocidad Extrema:</strong> Construido con React/Vite para carga instantánea.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-white shrink-0 mt-0.5" />
                      <span><strong>Conexión ARCA/AFIP:</strong> Facturación automática en segundos sin salir de tu panel.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-white shrink-0 mt-0.5" />
                      <span><strong>Diseño Vanguardista:</strong> Estilo glassmorphic exclusivo que destaca tu marca.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* Guarantee & Payment Flexibility Section */}
          <section id="garantia" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
            <div className="flex flex-col gap-4 mb-12">
              <span className="text-[11px] tracking-[0.4em] uppercase text-neutral-500 font-mono block">
                Tranquilidad & Respaldo para tu Inversión
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                GARANTÍA 100% Y FLEXIBILIDADES DE PAGO
              </h2>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-3xl">
                Diseñamos software profesional para hacer crecer tu empresa sin sorpresas ni riesgos. Te brindamos la máxima seguridad financiera y operativa.
              </p>
              <div className="h-[1px] w-full bg-white/10 mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Money Back Guarantee */}
              <div className="glass-card p-8 rounded-2xl border border-white/20 flex flex-col justify-between relative overflow-hidden group hover:border-white/40">
                <div className="shine-line" />
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-white font-semibold px-2.5 py-1 rounded bg-white/10 border border-white/20">
                      Riesgo 0%
                    </span>
                    <div className="p-3 rounded-xl glass-badge text-white">
                      <RotateCcw size={22} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight mb-3 text-white">
                    Te lo dejamos como te gusta o devolvemos tu dinero
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    Fijamos los requerimientos y el diseño previamente. Si el desarrollo final no cumple exactamente con los estándares y funcionalidades acordadas en la propuesta, te reembolsamos el 100% de tu dinero sin complicaciones.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-mono">
                    <CheckCircle2 size={13} className="text-white" />
                    <span>Garantía por contrato/propuesta</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-mono">
                    <CheckCircle2 size={13} className="text-white" />
                    <span>Revisión e hitos de aprobación</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-mono">
                    <CheckCircle2 size={13} className="text-white" />
                    <span>Reembolso total ante incumplimiento</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Flexible Payment Structure */}
              <div className="glass-card p-8 rounded-2xl border border-white/20 flex flex-col justify-between relative overflow-hidden group hover:border-white/40">
                <div className="shine-line" />
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-white font-semibold px-2.5 py-1 rounded bg-white/10 border border-white/20">
                      Liquidez Cuidada
                    </span>
                    <div className="p-3 rounded-xl glass-badge text-white">
                      <CreditCard size={22} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight mb-3 text-white">
                    Esquemas de pago flexibles por hitos
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    Sabemos lo importante que es proteger el flujo de caja de tu PyME o proyecto. Estructuramos planes de pago por etapas (ej. 50% inicial y 50% al finalizar contra entrega, o en cuotas según el proyecto).
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-mono">
                    <CheckCircle2 size={13} className="text-white" />
                    <span>Sin pagos 100% por adelantado</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-mono">
                    <CheckCircle2 size={13} className="text-white" />
                    <span>Abonás contra avance verificable</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-mono">
                    <CheckCircle2 size={13} className="text-white" />
                    <span>Planes a medida de tu negocio</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Full Ownership & No Lock-in */}
              <div className="glass-card p-8 rounded-2xl border border-white/20 flex flex-col justify-between relative overflow-hidden group hover:border-white/40">
                <div className="shine-line" />
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-white font-semibold px-2.5 py-1 rounded bg-white/10 border border-white/20">
                      Sin Cánones Fijos
                    </span>
                    <div className="p-3 rounded-xl glass-badge text-white">
                      <BadgeCheck size={22} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight mb-3 text-white">
                    Propiedad 100% del código y accesos
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    Tu sistema es tuyo para siempre. Te entregamos la totalidad del código fuente, repositorios y credenciales de servidor. Cero comisiones por tus ventas y sin mensualidades forzosas.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-mono">
                    <CheckCircle2 size={13} className="text-white" />
                    <span>Transferencia de código fuente</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-mono">
                    <CheckCircle2 size={13} className="text-white" />
                    <span>Sin comisiones ni porcentaje de ventas</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-mono">
                    <CheckCircle2 size={13} className="text-white" />
                    <span>Sin licencias fijas obligatorias</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Development Workflow / Process */}
          <section id="proceso" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
            <div className="mb-14">
              <span className="text-[11px] tracking-[0.4em] uppercase text-neutral-500 font-mono block mb-2">Metodología Ágil</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                DE LA IDEA AL CÓDIGO EN 4 PASOS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <ProcessStep 
                step="01"
                title="Diagnóstico & Estrategia"
                desc="Analizamos tus flujos de trabajo, requerimientos fiscales y objetivos de venta para definir la arquitectura perfecta."
              />
              <ProcessStep 
                step="02"
                title="Diseño UX/UI Glass"
                desc="Creamos prototipos interactivos vanguardistas centrados en la experiencia del usuario y en maximizar la conversión."
              />
              <ProcessStep 
                step="03"
                title="Desarrollo & Integración"
                desc="Escribimos código limpio, rápido y seguro. Conectamos pasarelas de pago, bases de datos y APIs de ARCA/AFIP."
              />
              <ProcessStep 
                step="04"
                title="Lanzamiento & Soporte"
                desc="Desplegamos el sistema en servidores optimizados y te brindamos capacitación y soporte técnico constante."
              />
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="w-full max-w-5xl mx-auto px-6 md:px-12 py-20 relative z-10">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.4em] uppercase text-neutral-500 font-mono block mb-2">Preguntas Frecuentes</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                DUDAS COMUNES DE PYMES Y EMPRENDEDORES
              </h2>
            </div>

            <div className="space-y-4">
              <FaqItem 
                question="¿Cuál es la formación y trayectoria de Karim Servin?"
                answer="Soy Analista en Sistemas graduado de la UTN (Universidad Tecnológica Nacional). Trabajo en relación de dependencia en el sector corporativo de TI y de forma independiente ayudo a PyMEs y emprendedores a digitalizar sus procesos, brindando herramientas que potencian a sus equipos."
                isOpen={activeFaq === 0}
                onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)}
              />
              <FaqItem 
                question="¿Cómo funciona la garantía de satisfacción y devolución del dinero?"
                answer="Fijamos los objetivos y diseño en la propuesta previa. Si al momento del desarrollo el producto entregado no cumple exactamente con las especificaciones acordadas y no estás conforme con los ajustes, te devolvemos el 100% de lo abonado sin demoras."
                isOpen={activeFaq === 1}
                onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)}
              />
              <FaqItem 
                question="¿Qué flexibilidades y métodos de pago tienen disponibles?"
                answer="Ofrecemos esquemas de pago fraccionados por hitos de avance (ejemplo: 50% al inicio y 50% al finalizar contra entrega), o cuotas acordadas según el tamaño del proyecto. Aceptamos transferencia bancaria y Mercado Pago."
                isOpen={activeFaq === 2}
                onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)}
              />
              <FaqItem 
                question="¿Cuánto tiempo tarda el desarrollo de un sitio o sistema a medida?"
                answer="Dependiendo de la complejidad, una página institucional o landing page toma entre 5 a 10 días hábiles. Un e-commerce completo o sistema con facturación ARCA suele demorar entre 2 a 4 semanas. Trabajamos con entregas semanales para que puedas ver el avance real."
                isOpen={activeFaq === 3}
                onClick={() => setActiveFaq(activeFaq === 3 ? null : 3)}
              />
              <FaqItem 
                question="¿Cómo funciona la integración de facturación automática con AFIP / ARCA?"
                answer="Conectamos tu sistema o tienda mediante Web Services oficiales de AFIP (WSAA / WSFE). Cuando tu cliente realiza una compra o vos emitís una venta en tu panel, el sistema genera la factura electrónica automáticamente y le adjunta el CAE y QR de AFIP."
                isOpen={activeFaq === 4}
                onClick={() => setActiveFaq(activeFaq === 4 ? null : 4)}
              />
            </div>
          </section>

          {/* High Conversion CTA Section */}
          <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
            <div className="glass-card p-10 md:p-20 rounded-3xl text-center relative overflow-hidden border border-white/20">
              <div className="shine-line" />
              <div className="max-w-3xl mx-auto flex flex-col items-center">
                <span className="text-[11px] tracking-[0.4em] uppercase text-neutral-400 font-mono block mb-4">
                  Hablemos de tu negocio
                </span>
                <h2 className="text-3xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                  ¿LISTO PARA LLEVAR TU PROYECTO AL SIGUIENTE NIVEL?
                </h2>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
                  Contanos tu idea o necesidad técnica y te preparamos una propuesta detallada con presupuesto, plazos y garantía escrita sin compromiso.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black font-bold tracking-[0.15em] text-xs uppercase px-10 py-5 rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02]"
                  >
                    <MessageSquare size={18} />
                    <span>Consultar por WhatsApp</span>
                  </a>

                  <button 
                    onClick={() => scrollToSection("garantia")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 glass-button text-neutral-200 font-semibold tracking-[0.15em] text-xs uppercase px-8 py-5 rounded-xl hover:text-white cursor-pointer"
                  >
                    <ShieldCheck size={16} className="text-white" />
                    <span>Conocer Garantías</span>
                  </button>
                </div>

              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full px-6 md:px-12 py-12 border-t border-white/10 relative z-10 bg-[#080808]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] tracking-[0.2em] uppercase font-mono text-neutral-500">
            <div>© 2026 KARIM SERVIN — ANALISTA DE SISTEMAS (UTN)</div>
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              SANTA FE, ARGENTINA & REMOTO
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <button onClick={() => scrollToSection("sobre-mi")} className="hover:text-white transition-colors cursor-pointer">Sobre Mí</button>
              <button onClick={() => scrollToSection("servicios")} className="hover:text-white transition-colors cursor-pointer">Servicios</button>
              <button onClick={() => scrollToSection("garantia")} className="hover:text-white transition-colors cursor-pointer">Garantía</button>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
        </footer>

      </div>

      {/* Floating Glass WhatsApp Pill */}
      <div 
        className="fixed z-50 pointer-events-none"
        style={{ 
          bottom: 'max(2rem, calc(1.5rem + env(safe-area-inset-bottom)))',
          right: 'max(1.5rem, calc(1rem + env(safe-area-inset-right)))'
        }}
      >
        <MagneticButton 
          href={WHATSAPP_LINK}
          id="btn-contacto-whatsapp"
          aria-label="Contactar a Karim Servin por WhatsApp"
          title="Contactar a Karim Servin por WhatsApp"
          className="flex items-center gap-3 bg-neutral-900/90 text-white px-6 py-4 rounded-full border border-white/20 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] pointer-events-auto group transition-all duration-300 hover:border-white/50 hover:bg-black hover:scale-[1.05]"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </div>
          <span className="text-[12px] font-bold tracking-[0.2em] uppercase">Contacto Directo</span>
        </MagneticButton>
      </div>

    </div>
  );
}

/* Service Card Component */
function ServiceCard({ title, tag, icon: Icon, desc, benefits, index }: { title: string, tag: string, icon: any, desc: string, benefits: string[], index: number }) {
  const cardContent = (
    <article className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full min-h-[300px] border border-white/10 relative overflow-hidden group">
      <div className="shine-line" />
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-neutral-400">
            {tag}
          </span>
          <div className="p-2.5 rounded-xl glass-badge text-neutral-300 group-hover:text-white group-hover:border-white/30 transition-all">
            <Icon size={18} />
          </div>
        </div>

        <h3 className="text-xl font-bold tracking-tight mb-3 text-white group-hover:translate-x-0.5 transition-transform">
          {title}
        </h3>

        <p className="text-xs text-neutral-400 leading-relaxed mb-6">
          {desc}
        </p>
      </div>

      <div className="pt-4 border-t border-white/10 space-y-2">
        {benefits.map((b, i) => (
          <div key={i} className="flex items-center gap-2 text-[11px] text-neutral-300 font-mono">
            <span className="w-1 h-1 rounded-full bg-white" />
            <span>{b}</span>
          </div>
        ))}
      </div>
    </article>
  );

  if (IS_MOBILE) {
    return cardContent;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="h-full"
    >
      {cardContent}
    </motion.div>
  );
}

/* Development Step Component */
function ProcessStep({ step, title, desc }: { step: string, title: string, desc: string }) {
  return (
    <div className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
      <div>
        <span className="text-3xl font-mono font-bold text-neutral-500 block mb-6">{step}</span>
        <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-xs text-neutral-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* FAQ Item Component */
function FaqItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all">
      <button 
        onClick={onClick}
        className="w-full p-6 text-left flex justify-between items-center gap-4 text-sm md:text-base font-bold text-white hover:text-neutral-200 cursor-pointer"
      >
        <span>{question}</span>
        <ChevronDown size={18} className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-neutral-400'}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-xs md:text-sm text-neutral-400 leading-relaxed border-t border-white/10 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

/* Magnetic Button Component */
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
    x.set(xPos * 0.3);
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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}

/* Scramble Text Effect for Brand Logo */
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
      className="font-sans text-[26px] md:text-[30px] tracking-[-0.04em] whitespace-nowrap text-white font-black leading-none cursor-crosshair inline-block select-none"
    >
      {displayText.split("").map((char, index) => {
        if (char.toLowerCase() === "i") {
          return (
            <span key={index} className="relative inline-block">
              ı
              <span className="absolute top-[0.14em] left-[50%] -translate-x-1/2 w-[0.16em] h-[0.16em] rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
            </span>
          );
        }
        return char;
      })}
    </span>
  );
}

/* Antigravity Floating Scene */
function AntigravityScene({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const elements = [
    { id: 1, type: 'text', content: 'E-commerce ARCA', x: 15, y: 14, mass: 1 },
    { id: 2, type: 'icon', icon: ShoppingBag, x: 82, y: 18, mass: 1.5 },
    { id: 3, type: 'icon', icon: Code2, x: 86, y: 38, mass: 0.8 },
  ];

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

/* Background Particle Field */
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
      flickerSpeed: number;
    }

    let particles: Particle[] = [];

    const init = () => {
      particles = [];
      const area = canvas.width * canvas.height;
      const dynamicParticleCount = Math.max(15, Math.min(60, Math.floor(area / 30000)));

      for (let i = 0; i < dynamicParticleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3,
          speedX: (Math.random() - 0.5) * 0.12,
          speedY: (Math.random() - 0.5) * 0.12,
          opacity: Math.random() * 0.5 + 0.1,
          flickerSpeed: Math.random() * 0.05 + 0.01,
        });
      }
    };

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const resize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      }, 150);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();

    let animationId: number;
    let time = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const curMouseX = mouseX.get();
      const curMouseY = mouseY.get();

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const currentOpacity = p.opacity * (0.7 + Math.sin(time / p.flickerSpeed) * 0.3);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.5})`;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
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

/* Physics Floating Element */
function PhysicsElement({ x, y, content, icon: Icon, mass, mouseX, mouseY }: any) {
  const elementRef = useRef<HTMLDivElement>(null);
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);

  const springConfig = { damping: 80, stiffness: 40, mass: 3 };
  const springX = useSpring(mX, springConfig);
  const springY = useSpring(mY, springConfig);

  useEffect(() => {
    if (IS_MOBILE) return;

    const unsubscribeX = mouseX.on("change", (latestX: number) => {
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

  return (
    <motion.div
      ref={elementRef}
      drag={!IS_MOBILE}
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
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut"
        }}
      >
        {Icon ? (
          <div className="p-3.5 glass-card rounded-2xl flex items-center justify-center border border-white/20">
            <Icon size={22} className="text-white" />
          </div>
        ) : (
          <span className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase py-2.5 px-5 glass-card rounded-xl text-white inline-block border border-white/20">
            {content}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
