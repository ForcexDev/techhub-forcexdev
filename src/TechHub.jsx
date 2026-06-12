import { useState, useMemo, useEffect } from 'react';
import {
  Rocket, Palette, BrainCircuit, Server,
  ShieldCheck, GraduationCap, Terminal, Search, Sun, Moon
} from 'lucide-react';

// ─── Importar assets (Vite los resuelve como URLs) ───
import sonicBalance from './assets/sonic-balance.gif';
import sonicContinue from './assets/sonic-continue.gif';
import sonicJump from './assets/sonic-jump.gif';
import sonicPush from './assets/sonic-push.gif';
import sonicTunnel from './assets/sonic-tunnel.gif';
import sonicRun from './assets/sonic-run.gif';
import sonicWaiting from './assets/sonic-waiting.gif';
import greenHillFg from './assets/green-hill-fg.png';

// ═══════════════════════════════════════════════════════════════
// TECH.HUB // v3.0
// ─── Para editar datos: modifica HUB_DATA abajo ───
// ═══════════════════════════════════════════════════════════════

const HUB_DATA = {
  categories: [
    {
      name: "My Projects",
      icon: "rocket",
      links: [
        {
          url: "https://compendium-notes.vercel.app/",
          title: "Compendium Notes",
          description:
            "A personal knowledge management system built with modern web technologies. Designed for capturing, organizing, and connecting notes across multiple domains — from dev documentation to daily reflections. Features markdown support, tagging, and fast search.",
        },
        {
          url: "https://forcexdev.github.io/my-portfolio/",
          title: "ForcexDev Portfolio",
          description:
            "Ezequiel Morales' professional portfolio. Focused on cybersecurity, secure development, systems infrastructure, and networks, featuring a stunning interactive cosmic theme.",
        },
      ],
    },
    {
      name: "UI // Design",
      icon: "palette",
      links: [
        { url: "https://ui.shadcn.com/", title: "Shadcn UI", description: "Beautifully designed accessible components that you can copy and paste" },
        { url: "https://ui.aceternity.com/", title: "Aceternity UI", description: "Stunning, high-end copy-paste Tailwind and Framer Motion components" },
        { url: "https://magicui.design/", title: "Magic UI", description: "Premium animated design elements for landing pages and modern apps" },
        { url: "https://impeccable.style/", title: "Impeccable Style", description: "CSS styling patterns and best practices" },
        { url: "https://animations.dev/", title: "Animations.dev", description: "Web animation library and examples catalog" },
        { url: "https://www.navbar.gallery/", title: "Navbar Gallery", description: "Navigation bar design inspiration collection" },
        { url: "https://www.footer.design/", title: "Footer Design", description: "Footer layout patterns and design reference" },
        { url: "https://bentogrids.com/", title: "Bento Grids", description: "Bento grid layout templates and inspiration" },
        { url: "https://htmlrev.com/", title: "HTMLrev", description: "Free HTML templates and component library" },
        { url: "https://godly.website/", title: "Godly", description: "Astronomically good web design inspiration from the best websites" },
        { url: "https://dribbble.com/", title: "Dribbble", description: "Self-promotion and social networking platform for digital designers and creatives" },
      ],
    },
    {
      name: "Dev // Tools",
      icon: "terminal",
      links: [
        { url: "https://21st.dev/", title: "21st.dev", description: "The ultimate React + Tailwind CSS component library & design gallery" },
        { url: "https://devdocs.io/", title: "DevDocs.io", description: "Fast, offline-capable search interface for all developer API documentations" },
        { url: "https://excalidraw.com/", title: "Excalidraw", description: "Virtual hand-drawn pixel sketching board for software diagrams" },
        { url: "https://github.com/", title: "GitHub", description: "Git repository hosting and collaboration platform" },
        { url: "https://www.opengraph.xyz/", title: "OpenGraph.xyz", description: "Open Graph meta tag preview and debugger" },
        { url: "https://github.com/mapbox/mapbox-gl-js", title: "Mapbox GL JS", description: "WebGL interactive maps JavaScript library" },
        { url: "https://www.tasteskill.dev/", title: "TasteSkill", description: "Developer portfolio skill assessment tool" },
        { url: "https://www.skills.sh/", title: "Skills.sh", description: "Agent skills package registry and discovery" },
        { url: "https://supahero.io/", title: "Supahero", description: "Supabase interactive learning and challenges" },
        { url: "https://github.com/JuliusBrussee/caveman", title: "Caveman", description: "Token-efficient agent communication skill plugin" },
        { url: "https://github.com/santifer/career-ops", title: "Career Ops", description: "Career management and job tracking toolkit" },
      ],
    },
    {
      name: "Backend // Infra",
      icon: "server",
      links: [
        { url: "https://supabase.com/", title: "Supabase", description: "Open-source Firebase alternative with Postgres" },
        { url: "https://coolify.io/", title: "Coolify.io", description: "An open-source, self-hosted Heroku & Vercel alternative" },
        { url: "https://www.prisma.io/", title: "Prisma ORM", description: "Next-generation Node.js and TypeScript ORM for databases" },
        { url: "https://upstash.com/", title: "Upstash", description: "Serverless, low-latency Redis, Kafka, and QStash hosting" },
        { url: "https://firebase.google.com/", title: "Firebase", description: "Google app development platform and BaaS" },
        { url: "https://vercel.com/", title: "Vercel", description: "Frontend deployment and serverless platform" },
        { url: "https://render.com/", title: "Render", description: "Cloud application hosting platform for APIs, databases, and static sites" },
        { url: "https://dash.cloudflare.com/", title: "Cloudflare", description: "CDN, DNS and edge computing dashboard" },
        { url: "https://resend.com/", title: "Resend", description: "Developer-first transactional email API service" },
        { url: "https://dashboard.emailjs.com/", title: "EmailJS", description: "Client-side email sending service dashboard" },
      ],
    },
    {
      name: "Cybersec // CTF",
      icon: "shield",
      links: [
        { url: "https://tryhackme.com/", title: "TryHackMe", description: "Guided cybersecurity training with virtual labs" },
        { url: "https://www.hackthebox.com/", title: "Hack The Box", description: "Offensive security labs and CTF challenges" },
        { url: "https://overthewire.org/wargames/", title: "OverTheWire", description: "Linux and security wargame shell challenges" },
        { url: "https://www.shodan.io/", title: "Shodan", description: "Internet-connected device search engine" },
        { url: "https://webmii.com/", title: "WebMii", description: "People search engine and public information aggregator" },
        { url: "https://osintframework.com/", title: "OSINT Framework", description: "Directory of open source intelligence gathering tools" },
        { url: "https://www.maltego.com/", title: "Maltego", description: "Open source intelligence and graphical link analysis tool" },
      ],
    },
    {
      name: "AI // LLM",
      icon: "brain",
      links: [
        { url: "https://github.com/ollama/ollama", title: "Ollama GitHub", description: "Lightweight, extensible framework for running open-source LLMs locally" },
        { url: "https://huggingface.co/", title: "Hugging Face", description: "The definitive library and platform for open-source AI models & datasets" },
        { url: "https://platform.deepseek.com/", title: "DeepSeek API", description: "High-performance, cost-effective reasoning LLM API platform" },
        { url: "https://gemini.google.com/", title: "Gemini", description: "Google multimodal AI assistant interface" },
        { url: "https://claude.ai/", title: "Claude", description: "Anthropic conversational AI assistant platform" },
        { url: "https://chatgpt.com/", title: "ChatGPT", description: "OpenAI conversational AI assistant platform" },
        { url: "https://openrouter.ai/", title: "OpenRouter", description: "Unified API gateway for multiple LLMs" },
        { url: "https://stitch.withgoogle.com/", title: "Stitch", description: "Google AI creative prototyping tool" },
        { url: "https://v0.app/templates", title: "v0 Templates", description: "Vercel AI-generated UI component templates" },
        { url: "https://github.com/JCodesMore/ai-website-cloner-template", title: "AI Website Cloner", description: "AI-powered website cloning template system" },
      ],
    },
    {
      name: "Learn // Grind",
      icon: "graduation",
      links: [
        { url: "https://roadmap.sh/", title: "Roadmap.sh", description: "Community-driven developer learning paths, timelines, and guides" },
        { url: "https://www.theodinproject.com/", title: "The Odin Project", description: "Highly respected, free, full-stack web development curriculum" },
        { url: "https://javascript.info/", title: "JavaScript.info", description: "From the basics to advanced topics with deep, modern explanations" },
        { url: "https://www.freecodecamp.org/", title: "freeCodeCamp", description: "Free full-stack web development curriculum" },
        { url: "https://www.netacad.com/", title: "Cisco NetAcad", description: "Cisco networking and IT certification courses" },
        { url: "https://www.hackerrank.com/", title: "HackerRank", description: "Coding challenges and interview preparation" },
        { url: "https://leetcode.com/", title: "LeetCode", description: "Algorithm and data structure practice platform" },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// CONSTANTES
// ═══════════════════════════════════════════════════════════════
const FONT_PIXEL = "'Silkscreen', monospace";
const FONT_MONO = "'Geist Mono', 'JetBrains Mono', monospace";

const getSectionId = (name) =>
  `section-${name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}`;

// ─── Mapeo de icono Lucide por categoría ───
const CATEGORY_ICONS = {
  rocket: Rocket,
  palette: Palette,
  brain: BrainCircuit,
  server: Server,
  shield: ShieldCheck,
  graduation: GraduationCap,
  terminal: Terminal,
};

function CategoryIcon({ iconKey, size = 14, className = '' }) {
  const Icon = CATEGORY_ICONS[iconKey];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}

// ─── Sonic GIFs colocados estáticamente por la página ───
// Cada sprite tiene: src, posición, y sección donde aparece
const SONIC_SPRITES = [
  { src: sonicBalance, alt: 'Sonic Balance', section: 0, position: 'right' },
  { src: sonicPush, alt: 'Sonic Push', section: 1, position: 'left' },
  { src: sonicRun, alt: 'Sonic Run', section: 2, position: 'right' },
  { src: sonicJump, alt: 'Sonic Jump', section: 3, position: 'left' },
  { src: sonicTunnel, alt: 'Sonic Tunnel', section: 4, position: 'right' },
  { src: sonicContinue, alt: 'Sonic Continue', section: 5, position: 'left' },
  { src: sonicWaiting, alt: 'Sonic Waiting', section: 6, position: 'right' },
];

// ═══════════════════════════════════════════════════════════════
// UTILIDADES
// ═══════════════════════════════════════════════════════════════

function getDomain(url) {
  try { return new URL(url).hostname.replace('www.', ''); }
  catch { return url; }
}

function getScreenshotUrl(url) {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url&meta=false`;
}

// ═══════════════════════════════════════════════════════════════
// COMPONENTES
// ═══════════════════════════════════════════════════════════════

// ─── Anillo SVG (corner superior-derecho de card) ───
function Ring({ spinning }) {
  return (
    <div
      className="absolute"
      style={{
        top: '-6px', right: '-6px',
        zIndex: 20,
        animation: spinning ? 'ring-spin 0.5s linear forwards' : 'none',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" style={{ shapeRendering: 'crispEdges' }}>
        <circle cx="7" cy="7" r="5" fill="none" stroke="var(--ring)" strokeWidth="2.5" />
      </svg>
    </div>
  );
}

// ─── Sonic GIF decorativo (colocado al lado de una sección) ───
function SonicDecoration({ src, alt, position }) {
  return (
    <div
      className="hidden lg:flex items-center"
      style={{
        position: 'absolute',
        [position === 'right' ? 'right' : 'left']: '-80px',
        top: '50%',
        transform: 'translateY(-50%)',
        imageRendering: 'pixelated',
        opacity: 0.7,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '48px',
          height: 'auto',
          imageRendering: 'pixelated',
          filter: 'drop-shadow(0 0 4px #0054a640)',
        }}
      />
    </div>
  );
}

// ─── Separador con estrella ───
function StarSeparator() {
  return (
    <div className="relative flex items-center justify-center" style={{ margin: '48px 0' }}>
      <div className="w-full" style={{ height: '1px', backgroundColor: 'var(--border)' }} />
      <div className="absolute" style={{ background: 'var(--bg)', padding: '0 10px' }}>
        <svg width="10" height="10" viewBox="0 0 16 16">
          <polygon
            points="8,0 10.5,5.5 16,6 12,9.5 13,16 8,12.5 3,16 4,9.5 0,6 5.5,5.5"
            fill="var(--ring)"
          />
        </svg>
      </div>
    </div>
  );
}

// ─── Dominios conocidos que bloquean capturas headless y requieren tarjetas de marca premium ───
const SCREENSHOT_BLOCKERS = [
  'cloudflare.com',
  'tryhackme.com',
  'shodan.io',
  'stitch.withgoogle.com',
  'opengraph.xyz'
];

function getBrandCardStyle(domain) {
  const d = domain.toLowerCase();
  if (d.includes('tryhackme')) {
    return {
      themeColor: '#ff4d4d',
      glowColor: 'rgba(255, 77, 77, 0.4)',
      label: 'TRY.HACK.ME',
      stage: 'STAGE THM'
    };
  }
  if (d.includes('cloudflare')) {
    return {
      themeColor: '#f38020',
      glowColor: 'rgba(243, 128, 32, 0.4)',
      label: 'CLOUD.FLARE',
      stage: 'STAGE CF'
    };
  }
  if (d.includes('shodan')) {
    return {
      themeColor: '#00ff66',
      glowColor: 'rgba(0, 255, 102, 0.4)',
      label: 'SHODAN.IO',
      stage: 'STAGE SH'
    };
  }
  if (d.includes('stitch')) {
    return {
      themeColor: '#4285f4',
      glowColor: 'rgba(66, 133, 244, 0.4)',
      label: 'STITCH.GOOGLE',
      stage: 'STAGE ST'
    };
  }
  if (d.includes('opengraph')) {
    return {
      themeColor: '#a855f7',
      glowColor: 'rgba(168, 85, 247, 0.4)',
      label: 'OPENGRAPH.XYZ',
      stage: 'STAGE OG'
    };
  }
  return {
    themeColor: 'var(--ring)',
    glowColor: 'rgba(248, 192, 0, 0.4)',
    label: domain.toUpperCase(),
    stage: 'STAGE 01'
  };
}

function ScreenshotImage({ url, customImage, isProject = false, height = '220px' }) {
  const domain = getDomain(url);

  // Detectar si el dominio tiende a bloquear capturas headless (Cloudflare, etc.)
  const isBlocker = useMemo(() => {
    return SCREENSHOT_BLOCKERS.some(d => domain.toLowerCase().includes(d));
  }, [domain]);

  // Si es un blocker conocido y no hay una imagen personalizada, mostramos la tarjeta de marca directamente
  const shouldRenderBrandCardDirectly = isBlocker && !customImage;

  // Decidir la estrategia inicial
  const [imageType, setImageType] = useState(() => {
    if (customImage) return 'custom';
    if (isBlocker) return 'brand-card'; // Evitamos consultas innecesarias a la API para blockers
    return 'screenshot';
  });

  const [status, setStatus] = useState(() => {
    if (shouldRenderBrandCardDirectly) return 'brand-card';
    return 'loading';
  });

  // Determinar la URL correspondiente
  const imgSrc = useMemo(() => {
    if (imageType === 'custom') return customImage;
    if (imageType === 'og') {
      return `https://api.microlink.io/?url=${encodeURIComponent(url)}&embed=image.url`;
    }
    return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url&meta=false`;
  }, [imageType, url, customImage]);

  // Manejar el fallback si falla la carga de la imagen
  const handleError = () => {
    if (imageType === 'screenshot') {
      // Si falló el screenshot headless, intentamos traer la imagen de OpenGraph
      setImageType('og');
      setStatus('loading');
    } else {
      // Si falló también el OpenGraph o la personalizada, activamos el estado de BrandCard de fallback
      setStatus('brand-card');
    }
  };

  // Renderizador de Tarjeta de Marca (BrandCard) premium
  if (status === 'brand-card' || shouldRenderBrandCardDirectly) {
    const brand = getBrandCardStyle(domain);
    return (
      <div
        className="flex flex-col items-center justify-between w-full relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #09090b 0%, #151518 100%)',
          height,
          borderBottom: '2px solid var(--border)',
          padding: '14px 12px 10px 12px',
          boxSizing: 'border-box'
        }}
      >
        {/* Retro CRT grid / checkered background pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #000 25%, transparent 25%), 
              linear-gradient(-45deg, #000 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #000 75%), 
              linear-gradient(-45deg, transparent 75%, #000 75%)
            `,
            backgroundSize: '16px 16px',
            backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
          }}
        />

        {/* CRT Scanline Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) 1px, transparent 1px, transparent 3px)',
          }}
        />

        {/* CRT Glass Reflection / Glare */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)',
          }}
        />

        {/* Header HUD: CLASSIC SEGA HUD STYLE */}
        <div className="w-full flex justify-between items-center z-10 px-1" style={{ fontFamily: FONT_PIXEL, fontSize: '9px' }}>
          <div className="flex items-center">
            {isProject ? (
              <div style={{ width: '76px', display: 'inline-block' }} />
            ) : (
              <>
                <span style={{ color: 'var(--shoe)', marginRight: '4px' }}>ZONE:</span>
                <img
                  src={`https://logo.clearbit.com/${domain}?size=32`}
                  alt=""
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '1px',
                    objectFit: 'contain',
                    marginRight: '4px',
                    display: 'inline-block'
                  }}
                />
                <span style={{ color: '#fff' }}>RETRO</span>
              </>
            )}
          </div>
          <div>
            <span style={{ color: 'var(--shoe)', marginRight: '3px' }}>ACT:</span>
            <span style={{ color: 'var(--ring)' }}>1</span>
          </div>
        </div>

        {/* Center: Sonic Continue GIF */}
        <div className="relative flex items-center justify-center z-10 my-auto" style={{ transform: 'translateY(6px)' }}>
          {/* Subtle glowing halo behind Sonic */}
          <div
            className="absolute rounded-full"
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: brand.glowColor,
              filter: 'blur(20px)',
              opacity: 0.6,
              zIndex: -1
            }}
          />

          <img
            src={sonicContinue}
            alt="Sonic Continue"
            style={{
              width: '54px',
              height: 'auto',
              imageRendering: 'pixelated',
              filter: `drop-shadow(0 0 6px ${brand.glowColor})`
            }}
          />

          {/* Retro Diagnostic Text */}
          <div
            style={{
              position: 'absolute',
              bottom: '-22px',
              fontFamily: FONT_PIXEL,
              fontSize: '7px',
              color: 'var(--muted)',
              opacity: 0.7,
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap'
            }}
          >
            [ PREVIEW UNAVAILABLE ]
          </div>
        </div>

        {/* Footer HUD elements */}
        <div className="w-full z-10 mt-auto flex flex-col items-center">
          {/* Label Title in Yellow/Brand Neon */}
          <div
            style={{
              fontFamily: FONT_PIXEL,
              fontSize: '11px',
              color: brand.themeColor,
              textShadow: `0 0 8px ${brand.glowColor}`,
              letterSpacing: '1px',
              marginBottom: '4px'
            }}
          >
            {brand.label}
          </div>

          {/* Retro Sega HUD layout values */}
          <div className="flex gap-5 justify-center items-center w-full px-2" style={{ fontFamily: FONT_PIXEL, fontSize: '8px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4px' }}>
            <div>
              <span style={{ color: 'var(--shoe)', marginRight: '3px' }}>STAGE:</span>
              <span style={{ color: '#fff' }}>OK</span>
            </div>
            <div>
              <span style={{ color: 'var(--shoe)', marginRight: '3px' }}>RINGS:</span>
              <span style={{ color: 'var(--ring)' }}>99</span>
            </div>
            <div>
              <span style={{ color: 'var(--shoe)', marginRight: '3px' }}>SCORE:</span>
              <span style={{ color: '#00ff66' }}>100%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ height, overflow: 'hidden' }}>
      {/* Shimmer de carga */}
      {status === 'loading' && (
        <div
          className="skeleton-shimmer absolute inset-0"
          style={{ borderBottom: '1px solid var(--border)' }}
        />
      )}
      <img
        src={imgSrc}
        alt={`Screenshot/Preview ${domain}`}
        loading="lazy"
        onLoad={() => setStatus('loaded')}
        onError={handleError}
        className="w-full h-full"
        style={{
          objectFit: 'cover',
          display: 'block',
          opacity: status === 'loaded' ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </div>
  );
}

// ─── Card "My Projects" (misma estructura vertical, con badge MY BUILD) ───
function ProjectCard({ link }) {
  const [hovered, setHovered] = useState(false);
  const domain = getDomain(link.url);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      id={`project-${domain}`}
      className="block relative card-interactive"
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid',
        borderColor: hovered ? 'var(--sonic)' : 'var(--border)',
        borderLeft: '3px solid var(--ring)',
        borderRadius: '2px',
        boxShadow: hovered ? '0 8px 24px #0054a615' : 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Ring spinning={hovered} />

      {/* Badge MY BUILD */}
      <div
        className="absolute z-10"
        style={{
          top: '12px', left: '12px',
          padding: '3px 10px',
          backgroundColor: 'var(--shoe)',
          fontFamily: FONT_PIXEL, fontSize: '9px',
          color: '#fff', letterSpacing: '1px', borderRadius: '1px',
        }}
      >
        MY BUILD
      </div>

      <ScreenshotImage url={link.url} customImage={link.customImage} isProject={true} height="220px" />
      <div style={{ padding: '14px' }}>
        <h3 style={{ fontFamily: FONT_PIXEL, fontSize: '14px', color: 'var(--text)', marginBottom: '6px' }}>
          {link.title}
        </h3>
        <p style={{ fontFamily: FONT_MONO, fontSize: '11px', color: 'var(--muted)', marginBottom: '8px', lineHeight: '1.5' }}>
          {link.description}
        </p>
        <span className="truncate block" style={{ fontFamily: FONT_MONO, fontSize: '10px', color: 'var(--sonic)' }}>
          {domain}
        </span>
      </div>
    </a>
  );
}

// ─── Card regular ───
function LinkCard({ link }) {
  const [hovered, setHovered] = useState(false);
  const domain = getDomain(link.url);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      id={`card-${domain}`}
      className="block relative card-interactive"
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid',
        borderColor: hovered ? 'var(--sonic)' : 'var(--border)',
        borderRadius: '2px',
        boxShadow: hovered ? '0 8px 24px #0054a615' : 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Ring spinning={hovered} />
      <ScreenshotImage url={link.url} customImage={link.customImage} height="220px" />
      <div style={{ padding: '14px' }}>
        <h3 style={{ fontFamily: FONT_PIXEL, fontSize: '13px', color: 'var(--text)', marginBottom: '6px' }}>
          {link.title}
        </h3>
        <p style={{ fontFamily: FONT_MONO, fontSize: '11px', color: 'var(--muted)', marginBottom: '8px', lineHeight: '1.5' }}>
          {link.description}
        </p>
        <span className="truncate block" style={{ fontFamily: FONT_MONO, fontSize: '10px', color: 'var(--sonic)' }}>
          {domain}
        </span>
      </div>
    </a>
  );
}

// ─── Sección de categoría ───
function CategorySection({ category, isProject = false, sonicSprite = null }) {
  const sectionId = getSectionId(category.name);

  return (
    <section className="relative mb-10" id={sectionId}>
      {/* Sonic GIF decorativo si corresponde */}
      {sonicSprite && (
        <SonicDecoration
          src={sonicSprite.src}
          alt={sonicSprite.alt}
          position={sonicSprite.position}
        />
      )}

      <h2
        className="mb-5 flex items-center gap-2.5"
        style={{
          fontFamily: FONT_PIXEL,
          fontSize: isProject ? '16px' : '14px',
          color: isProject ? 'var(--ring)' : 'var(--text)',
        }}
      >
        <CategoryIcon
          iconKey={category.icon}
          size={16}
        />
        {category.name}
      </h2>

      {/* Grid unificado: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.links.map((l) =>
          isProject
            ? <ProjectCard key={l.url} link={l} />
            : <LinkCard key={l.url} link={l} />
        )}
      </div>
    </section>
  );
}

// ─── Barra de categorías (renderizada dentro del header) ───
function CategoryNav({ categories, activeId }) {
  return (
    <div className="category-nav" style={{ padding: '8px 0', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 flex gap-2">
        {categories.map((cat) => {
          const id = getSectionId(cat.name);
          const isActive = activeId === id;
          return (
            <a
              key={cat.name}
              href={`#${id}`}
              className={`cat-pill ${isActive ? 'active' : ''}`}
              style={{ fontFamily: FONT_MONO }}
            >
              <CategoryIcon iconKey={cat.icon} size={12} />
              {cat.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// GREEN HILL ZONE — Franja decorativa con el PNG del foreground
// ═══════════════════════════════════════════════════════════════

function GreenHillStrip() {
  return (
    <div
      className="w-full overflow-hidden pointer-events-none select-none"
      style={{
        height: '140px',
        position: 'relative',
        opacity: 0.3,
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
      }}
    >
      <img
        src={greenHillFg}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 55%',
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// APP PRINCIPAL
// ═══════════════════════════════════════════════════════════════

export default function TechHub() {
  const [search, setSearch] = useState('');
  const [activeSection, setActiveSection] = useState('');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // ─── Control de Light/Dark Mode ───
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // ─── Filtrar categorías ───
  const filteredCategories = useMemo(() => {
    if (!search.trim()) return HUB_DATA.categories;
    const q = search.toLowerCase();
    return HUB_DATA.categories
      .map((cat) => ({
        ...cat,
        links: cat.links.filter(
          (l) =>
            l.title.toLowerCase().includes(q) ||
            l.description.toLowerCase().includes(q) ||
            l.url.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.links.length > 0);
  }, [search]);

  const totalLinks = filteredCategories.reduce((a, c) => a + c.links.length, 0);

  // ─── Scrollspy ───
  useEffect(() => {
    const ids = HUB_DATA.categories.map((c) => getSectionId(c.name));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-120px 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // ─── Mapa de sprites Sonic por índice de sección ───
  const spriteMap = {};
  SONIC_SPRITES.forEach((s) => { spriteMap[s.section] = s; });

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>

      {/* ─── Header unificado: logo + search + nav en un solo sticky block ─── */}
      <header className="sticky top-0 z-40 header-glass">
        {/* Scanline */}
        <div
          className="absolute left-0 w-full pointer-events-none"
          style={{ height: '1px', backgroundColor: '#fff', opacity: 0.04, animation: 'scanline 4s linear infinite' }}
        />

        {/* Fila principal */}
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <h1 style={{ fontFamily: FONT_PIXEL, fontSize: '16px', color: 'var(--sonic)', letterSpacing: '2px', margin: 0 }}>
                TECH.HUB
              </h1>
              <span style={{ fontFamily: FONT_MONO, fontSize: '11px', color: 'var(--muted)' }}>
                // forcexdev
              </span>
              <img
                src={sonicBalance}
                alt="Sonic"
                className="hidden sm:block"
                style={{ width: '32px', height: 'auto', imageRendering: 'pixelated', animation: 'sonic-idle 2s ease-in-out infinite' }}
              />
            </div>

            <div className="flex-1 max-w-lg relative">
              <Search
                size={14}
                className="absolute top-1/2 left-3 -translate-y-1/2"
                style={{ color: 'var(--muted)' }}
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search stages..."
                id="search-input"
                style={{
                  width: '100%', padding: '7px 14px 7px 32px',
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  fontFamily: FONT_MONO, fontSize: '12px', color: 'var(--text)',
                }}
              />
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden sm:block" style={{ fontFamily: FONT_MONO, fontSize: '11px', color: 'var(--muted)' }}>
                [ {totalLinks} stages ]
              </span>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className="flex items-center justify-center cursor-pointer"
                style={{
                  width: '28px',
                  height: '28px',
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  color: 'var(--sonic)',
                  transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
                }}
              >
                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            </div>
          </div>

          <p style={{ fontFamily: FONT_MONO, fontSize: '10px', color: 'var(--muted)', marginTop: '4px', marginBottom: 0 }}>
            &gt; green hill zone initialized
            <span className="cursor-blink">_</span>
          </p>
        </div>

        {/* Barra de categorías DENTRO del header */}
        <CategoryNav categories={filteredCategories} activeId={activeSection} />
      </header>

      {/* ─── Green Hill decorativa superior ─── */}
      <GreenHillStrip />

      {/* ─── Contenido ─── */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {filteredCategories.map((category, index) => (
          <div key={category.name}>
            <CategorySection
              category={category}
              isProject={category.name === 'My Projects'}
              sonicSprite={spriteMap[index] || null}
            />
            {index < filteredCategories.length - 1 && <StarSeparator />}
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <div
            className="text-center"
            style={{ padding: '80px 0', fontFamily: FONT_PIXEL, fontSize: '14px', color: 'var(--muted)' }}
          >
            NO STAGES FOUND
            <p style={{ fontFamily: FONT_MONO, fontSize: '11px', marginTop: '8px' }}>
              try a different query
            </p>
          </div>
        )}
      </main>

      {/* ─── Green Hill decorativa inferior ─── */}
      <GreenHillStrip />

      {/* ─── Footer ─── */}
      <footer
        className="text-center"
        style={{
          padding: '24px 0',
          borderTop: '1px solid var(--border)',
          fontFamily: FONT_MONO, fontSize: '10px', color: 'var(--muted)',
        }}
      >
        <img
          src={sonicContinue}
          alt="Sonic"
          style={{ width: '24px', height: 'auto', imageRendering: 'pixelated', display: 'inline-block', marginBottom: '8px' }}
        />
        <br />
        TECH.HUB // built with rings &amp; chaos emeralds
      </footer>
    </div>
  );
}
