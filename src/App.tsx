import {
  Calculator,
  AudioLines,
  ArrowRight,
  BellRing,
  Brain,
  Boxes,
  CalendarHeart,
  ChevronDown,
  Clock3,
  Cloud,
  Code2,
  Coins,
  Copy,
  Gem,
  History,
  Github,
  Globe,
  Gauge,
  Heart,
  ImagePlus,
  Lightbulb,
  Linkedin,
  Mail,
  Mic,
  Moon,
  Palette,
  Percent,
  Rocket,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Twitter,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import heartsyncIcon from "../ref-code/heart-sync-img/heartsync.png";
import heartsyncDatesImage from "../ref-code/heart-sync-img/heartsync1.png";
import heartsyncSettingsImage from "../ref-code/heart-sync-img/heart sync2.png";
import pionxDevImage from "../ref-code/ref-img/pionx-dev.jpg";
import tapTempoShot1 from "../ref-code/tap-tempo/1.PNG";
import tapTempoShot2 from "../ref-code/tap-tempo/2.PNG";
import tapTempoShot3 from "../ref-code/tap-tempo/3.PNG";
import theTipShot1 from "../ref-code/the-tip/1.PNG";
import theTipIcon from "../ref-code/the-tip/the-tip_app-icon.jpg";

const projects = [
  {
    name: "HeartSync",
    description:
      "A premium relationship tracker focused on milestone reminders, beautiful time breakdowns, and a more thoughtful couple dashboard.",
    badges: [
      { label: "Lifestyle", variant: "default" },
      { label: "iOS", variant: "ios" },
    ],
    icon: Heart,
    iconImage: heartsyncIcon,
    accentClass: "from-pink-500 to-violet-500",
    href: "/heartsync",
  },
  {
    name: "Tap Tempo",
    description: "A BPM utility that lets users tap the screen in time with a song to quickly detect its tempo.",
    badges: [
      { label: "Music", variant: "default" },
      { label: "iOS", variant: "ios" },
    ],
    icon: Smartphone,
    accentClass: "from-sky-600 to-blue-500",
    href: "/tap-tempo",
  },
  {
    name: "The Tip",
    description: "A fast tip calculator that helps users choose a gratuity, calculate totals, and split the bill cleanly across a group.",
    badges: [
      { label: "Utility", variant: "default" },
      { label: "iOS", variant: "ios" },
    ],
    icon: Globe,
    iconImage: theTipIcon,
    accentClass: "from-cyan-500 to-emerald-500",
    href: "/the-tip",
  },
];

const skills = [
  {
    title: "iOS Development",
    description: "Native Swift apps with elegant UIs",
    icon: Code2,
  },
  {
    title: "AI-powered Applications",
    description: "Integrating machine learning intelligently",
    icon: Brain,
  },
  {
    title: "API Integrations",
    description: "Seamless third-party connections",
    icon: Boxes,
  },
  {
    title: "Product Design",
    description: "User-centered, beautiful experiences",
    icon: Palette,
  },
];

const techStack = [
  { name: "Swift", mark: "Sw", domain: "swift.org" },
  { name: "Xcode", mark: "🔨" },
  { name: "AI/ML", mark: "🤖" },
  { name: "APIs", mark: "🔌" },
  { name: "GitHub", mark: "GH", domain: "github.com" },
  { name: "React", mark: "Rx", domain: "react.dev" },
  { name: "TypeScript", mark: "TS", domain: "typescriptlang.org" },
  { name: "Node.js", mark: "Nd", domain: "nodejs.org" },
];

const processSteps = [
  {
    number: "01",
    title: "Idea",
    description:
      "Understanding the problem, researching solutions, and defining clear objectives for the project.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Crafting intuitive user interfaces and experiences with attention to every detail and interaction.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Writing clean, efficient code with modern best practices and rigorous testing throughout.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Deploying to production, gathering feedback, and continuously improving the experience.",
    icon: Rocket,
  },
];

const socialLinks = [
  { label: "Email", href: "mailto:hello@pionx.dev", icon: Mail },
  { label: "GitHub", href: "https://github.com/pionx", icon: Github, domain: "github.com" },
  { label: "Twitter", href: "https://twitter.com/pionx", icon: Twitter, domain: "x.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/pionx", icon: Linkedin, domain: "linkedin.com" },
];

const projectLinks = [
  { label: "HeartSync", href: "/heartsync", iconImage: heartsyncIcon },
  { label: "Tap Tempo", href: "/tap-tempo" },
  { label: "The Tip", href: "/the-tip", iconImage: theTipIcon },
];

const tapTempoFeatures = [
  {
    title: "Tap-To-Detect BPM",
    description: "Users can tap anywhere on screen in rhythm with a song and get a live BPM reading in seconds.",
    icon: Gauge,
  },
  {
    title: "Microphone Listen Mode",
    description: "A dedicated listening mode captures tempo from incoming audio and switches clearly between idle and active states.",
    icon: Mic,
  },
  {
    title: "Tempo Labels",
    description: "The app translates raw BPM into useful music-language ranges like Grave, Andante, and Allegro.",
    icon: AudioLines,
  },
  {
    title: "History Recall",
    description: "Past tempo readings are stored in a lightweight history view so users can compare songs and recent sessions.",
    icon: History,
  },
];

const tapTempoHighlights = [
  {
    title: "Built for fast capture",
    text: "The interface keeps the main action obvious: tap the screen or listen to audio without fighting menus, clutter, or setup.",
    icon: Sparkles,
  },
  {
    title: "Musician-friendly ranges",
    text: "Tempo isn’t only shown as a number. The app also places the reading into recognizable musical speed ranges for quicker interpretation.",
    icon: Clock3,
  },
  {
    title: "Useful constraints",
    text: "The screenshots show a practical operating range of 20-300 BPM, recent-tap smoothing, and a last-lock reading for stability.",
    icon: ShieldCheck,
  },
  {
    title: "History when you need it",
    text: "Users can open a history sheet to review prior BPM captures, giving the tool more utility than a one-off tap counter.",
    icon: History,
  },
];

const tapTempoBuildPoints = [
  "Single-action interface tuned around immediate tempo capture",
  "Live BPM ring with clear visual feedback while tapping or listening",
  "Tempo classification output for musical ranges, not just raw numbers",
  "History layer for recalling previous detections and sessions",
  "Microphone mode for hands-free BPM detection from ambient or direct audio",
];

const theTipFeatures = [
  {
    title: "Split By People",
    description: "Adjust the number of people directly inside the main flow so the per-person total always stays visible and current.",
    icon: Users,
  },
  {
    title: "Preset Tip Percentages",
    description: "Quick percentage chips reduce friction for common choices while still leaving room for a custom amount when needed.",
    icon: Percent,
  },
  {
    title: "Round Per Person",
    description: "A toggle for rounding per-person totals makes the result easier to use in real situations where clean amounts matter.",
    icon: Sparkles,
  },
  {
    title: "Instant Result Cards",
    description: "Tip, total, and per-person outputs are grouped into clear summary cards so the math is easy to scan at a glance.",
    icon: Calculator,
  },
];

const theTipHighlights = [
  {
    title: "Fast decision flow",
    text: "The screen is organized around a simple progression: enter the bill, pick people, choose a tip, then read the result without jumping across views.",
    icon: Calculator,
  },
  {
    title: "Built for practical use",
    text: "Per-person totals and a copy action make the app useful at the table instead of stopping at the raw tip amount.",
    icon: Copy,
  },
  {
    title: "Flexible tipping inputs",
    text: "Preset percentages cover the common cases, while a custom option keeps the calculator usable outside rigid defaults.",
    icon: Percent,
  },
  {
    title: "Cleaner payment outcomes",
    text: "The round-per-person control suggests the app is tuned for real payment habits, not just perfect mathematical output.",
    icon: Coins,
  },
];

const theTipBuildPoints = [
  "Single-screen calculator flow that keeps all key inputs visible",
  "Preset percentage system paired with optional custom tipping",
  "Group splitting with clear per-person output",
  "Rounding logic for cleaner payment amounts",
  "Copy-ready result summary for quick sharing or payment apps",
];

const heartSyncFeatures = [
  {
    title: "Multi-Format Counter",
    description: "Shows time together in years, months, weeks, days, and hours instead of reducing the relationship to a single number.",
    icon: Clock3,
  },
  {
    title: "Anniversary Reminders",
    description: "Reliable milestone notifications for one month, six months, one year, and other key dates without gating basics behind paywalls.",
    icon: BellRing,
  },
  {
    title: "Aesthetic Dashboard",
    description: "A soft, premium UI with romantic themes, milestone badges, and a calmer presentation than ad-heavy alternatives.",
    icon: Sparkles,
  },
  {
    title: "Smart Photo Handling",
    description: "Profile and memory photos that feel polished without the forced zooming and awkward cropping problems common in similar apps.",
    icon: ImagePlus,
  },
];

const heartSyncHighlights = [
  {
    title: "Free core experience",
    text: "One main relationship, all time-unit breakdowns, milestone reminders, and a basic theme without a paywall for the essentials.",
    icon: ShieldCheck,
  },
  {
    title: "Low-friction premium",
    text: "Pro is positioned at $0.99/month or $4.99 lifetime for multiple trackers, deeper theming, sync, and partner-facing features.",
    icon: Gem,
  },
  {
    title: "Future shared dashboard",
    text: "The roadmap includes shared spaces, memory timelines, and richer couple collaboration rather than just adding cosmetic upsells.",
    icon: Users,
  },
  {
    title: "Cloud-ready foundation",
    text: "The blueprint already anticipates local storage first, then optional cloud sync once the core time engine and UX are locked in.",
    icon: Cloud,
  },
];

const heartSyncBuildSteps = [
  "Project scaffold in SwiftUI/Kotlin with fluid UI foundations",
  "Time calculation engine for complex date differences and milestone logic",
  "Aesthetic UI implementation with polished photo handling",
  "Notification system for anniversaries and reminders",
  "Performance and photo-scaling testing before release",
];

type RevealDirection = "up" | "left" | "right";
type PageKey = "home" | "heartsync" | "tap-tempo" | "the-tip";

const brandfetchClientId = import.meta.env.VITE_BRANDFETCH_CLIENT_ID;

function resolvePage(pathname: string): PageKey {
  if (pathname.startsWith("/heartsync")) {
    return "heartsync";
  }

  if (pathname.startsWith("/tap-tempo")) {
    return "tap-tempo";
  }

  if (pathname.startsWith("/the-tip")) {
    return "the-tip";
  }

  return "home";
}

function buildBrandfetchUrl(domain: string, theme: "light" | "dark", size = 80) {
  if (!brandfetchClientId) {
    return null;
  }

  return `https://cdn.brandfetch.io/${encodeURIComponent(domain)}/theme/${theme}/fallback/transparent/h/${size}/w/${size}/icon.png?c=${brandfetchClientId}`;
}

function BrandLogo({
  domain,
  alt,
  theme,
  className,
  fallback,
}: {
  domain: string;
  alt: string;
  theme: "light" | "dark";
  className?: string;
  fallback: ReactNode;
}) {
  const src = buildBrandfetchUrl(domain, theme);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (!src || hasError) {
    return <>{fallback}</>;
  }

  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setHasError(true)} />;
}

function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ParallaxLayer({
  children,
  className = "",
  speed = 0.16,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      frameId = 0;
      const node = ref.current;

      if (!node) {
        return;
      }

      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const normalized = (progress - 0.5) * 2;
      setOffset(normalized * speed * 120);
    };

    const onScroll = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
      {children}
    </div>
  );
}

function SiteHeader({
  currentPage,
  pageLoaded,
  isDark,
  toggleAnimating,
  onToggleTheme,
}: {
  currentPage: PageKey;
  pageLoaded: boolean;
  isDark: boolean;
  toggleAnimating: boolean;
  onToggleTheme: () => void;
}) {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const projectsMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const menuNode = projectsMenuRef.current;

      if (menuNode && !menuNode.contains(event.target as Node)) {
        setProjectsOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const aboutHref = currentPage === "home" ? "#about" : "/#about";
  const contactHref = currentPage === "home" ? "#contact" : "/#contact";

  return (
    <header
      className={`fixed left-1/2 top-3 z-40 w-[min(58rem,calc(100%-1.5rem))] -translate-x-1/2 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:top-5 md:w-[min(60rem,calc(100%-3rem))] ${
        pageLoaded ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
      }`}
    >
      <div className="nav-wrap flex items-center justify-between rounded-[1.15rem] border px-4 py-3 md:px-5">
        <a
          href="/"
          className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-xl font-semibold text-transparent"
        >
          PionX
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[var(--text-secondary)] md:flex">
          <div
            ref={projectsMenuRef}
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProjectsOpen((current) => !current)}
              className="inline-flex items-center gap-1.5 transition hover:text-[var(--text-primary)]"
              aria-expanded={projectsOpen}
              aria-haspopup="menu"
            >
              Projects
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`} />
            </button>

            <div className={`menu-dropdown-shell absolute left-1/2 top-full w-48 -translate-x-1/2 pt-3 ${projectsOpen ? "menu-dropdown-shell-open" : ""}`}>
              <div className={`menu-dropdown rounded-2xl border p-2 ${projectsOpen ? "menu-dropdown-open" : ""}`}>
                {projectLinks.map((project) => (
                  <a key={project.label} href={project.href} className="menu-dropdown-item block rounded-xl px-3 py-2.5 text-sm text-[var(--text-primary)]">
                    <span className="flex items-center gap-2.5">
                      {project.iconImage ? (
                        <img src={project.iconImage} alt="" className="project-menu-icon h-5 w-5 rounded-[0.45rem] object-cover" aria-hidden="true" />
                      ) : null}
                      <span>{project.label}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href={aboutHref} className="transition hover:text-[var(--text-primary)]">
            About
          </a>
          <a href={contactHref} className="transition hover:text-[var(--text-primary)]">
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={onToggleTheme}
          className={`theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-full border text-[var(--text-secondary)] transition hover:text-[var(--text-primary)] ${
            toggleAnimating ? "theme-toggle-animate" : ""
          }`}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}

function HomePage({ pageLoaded, isDark }: { pageLoaded: boolean; isDark: boolean }) {
  return (
    <main id="top" className="relative z-10">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
        <div
          className={`transition-all duration-[1100ms] delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            pageLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          } inline-flex items-center gap-2 rounded-full border border-[var(--line-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--text-secondary)]`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
          </span>
          Available for new projects
        </div>

        <h1
          className={`mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] transition-all duration-[1300ms] delay-250 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-7xl ${
            pageLoaded ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"
          }`}
        >
          Building Intelligent
          <br />
          Apps for the Future
        </h1>

        <p
          className={`mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] transition-all duration-[1300ms] delay-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            pageLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Innovative developer crafting smart, beautiful applications that solve real problems. Specializing in iOS,
          AI-powered tools, and seamless user experiences.
        </p>

        <div
          className={`mt-10 flex flex-col gap-4 transition-all duration-[1300ms] delay-450 ease-[cubic-bezier(0.22,1,0.36,1)] sm:flex-row ${
            pageLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium">
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-[var(--line-soft)] bg-[var(--surface-soft)] px-7 py-3.5 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            A selection of applications built with cutting-edge technology and thoughtful design
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal key={project.name} className="card-panel project-card rounded-[1.4rem] border p-6" delay={120 * (index + 1)}>
                <div className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${project.accentClass} text-white shadow-[0_12px_30px_rgba(79,70,229,0.28)]`}>
                  {project.iconImage ? (
                    <img src={project.iconImage} alt={`${project.name} app icon`} className="project-card-icon h-full w-full object-cover" />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.badges.map((badge) => (
                    <div
                      key={`${project.name}-${badge.label}`}
                      className={`inline-flex rounded-full px-3 py-1 text-xs ${
                        badge.variant === "ios"
                          ? "project-badge-ios"
                          : "border border-[var(--line-soft)] bg-[var(--surface-soft)] text-[var(--text-secondary)]"
                      }`}
                    >
                      {badge.label}
                    </div>
                  ))}
                </div>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">{project.name}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{project.description}</p>
                <a href={project.href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                  {project.href.startsWith("/") ? "View Project Page" : "View Case Study"}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="relative" direction="right">
            <div className="absolute -bottom-6 -left-6 h-36 w-36 rounded-full bg-blue-600/14 blur-3xl" />
            <div className="absolute -right-8 top-6 h-40 w-40 rounded-full bg-violet-600/18 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-[var(--line-soft)]">
              <img
                src={pionxDevImage}
                alt="Developer portrait"
                className="aspect-[0.94] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal direction="left">
            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-5xl">
              Crafting Digital
              <br />
              Excellence
            </h2>
            <p className="mt-7 text-lg leading-8 text-[var(--text-secondary)]">
              I'm an independent developer passionate about building intelligent, user-friendly applications that make a
              difference. With expertise in iOS development, AI integration, and modern web technologies, I transform complex
              ideas into elegant solutions.
            </p>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              Every project is an opportunity to push boundaries, learn new technologies, and create experiences that users love.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <Reveal key={skill.title} className="card-panel skill-card rounded-[1.2rem] border p-4" delay={180 + index * 120}>
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/14 text-indigo-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold">{skill.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{skill.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Tech Stack</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Modern tools and technologies I use to build exceptional applications
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {techStack.map((item, index) => (
            <Reveal key={item.name} className="card-panel tech-card rounded-[1.2rem] border px-4 py-5" delay={index * 70}>
              <div className="tech-mark mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-soft)] text-sm font-semibold text-[var(--text-primary)]">
                {item.domain ? (
                  <BrandLogo
                    domain={item.domain}
                    alt={`${item.name} logo`}
                    theme={isDark ? "light" : "dark"}
                    className="brand-logo h-full w-full object-cover"
                    fallback={<span className="tech-fallback">{item.mark}</span>}
                  />
                ) : (
                  <span className="tech-fallback">{item.mark}</span>
                )}
              </div>
              <p className="mt-4 text-sm font-medium text-[var(--text-primary)]">{item.name}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Development Process</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">A structured approach to turning ideas into reality</p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number} className="card-panel process-card relative rounded-[1.35rem] border p-5" delay={index * 120}>
                <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(99,102,241,0.36)]">
                  {step.number}
                </div>
                <div className="process-icon mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/14 text-indigo-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{step.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 pb-24 pt-24">
        <Reveal className="text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Let's Work Together</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </Reveal>

        <ContactPanel isDark={isDark} />
      </section>
    </main>
  );
}

function ContactPanel({ isDark }: { isDark: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
      <Reveal direction="right">
        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[var(--text-primary)]">Name</span>
            <input name="name" placeholder="Your name" className="input-control h-11 w-full rounded-xl border px-4 text-sm outline-none transition" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[var(--text-primary)]">Email</span>
            <input
              name="email"
              type="email"
              placeholder="your.email@example.com"
              className="input-control h-11 w-full rounded-xl border px-4 text-sm outline-none transition"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[var(--text-primary)]">Message</span>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              className="input-control min-h-36 w-full rounded-[1rem] border px-4 py-3 text-sm outline-none transition"
            />
          </label>

          <button type="submit" className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium">
            Send Message
            <Send className="h-4 w-4" />
          </button>

          <p className="text-sm text-[var(--text-secondary)]">
            {submitted ? "Form captured locally. Add delivery wiring next." : "Form currently stores no backend submission."}
          </p>
        </form>
      </Reveal>

      <Reveal direction="left">
        <div className="space-y-4">
          <div className="card-panel rounded-[1.35rem] border p-5">
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">Connect</h3>
            <div className="mt-5 space-y-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-item flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium text-[var(--text-primary)] transition"
                  >
                    {link.domain ? (
                      <BrandLogo
                        domain={link.domain}
                        alt={`${link.label} logo`}
                        theme={isDark ? "light" : "dark"}
                        className="h-4 w-4 object-contain"
                        fallback={<Icon className="h-4 w-4 text-blue-400" />}
                      />
                    ) : (
                      <Icon className="h-4 w-4 text-blue-400" />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-[1.35rem] border border-indigo-400/18 bg-[linear-gradient(160deg,rgba(76,29,149,0.42),rgba(49,46,129,0.74))] p-5">
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">Quick Response</h3>
            <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
              I typically respond within 24 hours. Looking forward to hearing about your project!
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function HeartSyncPage() {
  return (
    <main className="relative z-10 overflow-hidden">
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-36">
        <div className="absolute left-1/2 top-28 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-500/12 blur-3xl" />
        <div className="absolute right-12 top-40 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal direction="right">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-300/16 bg-pink-300/8 px-4 py-2 text-sm text-pink-100/80">
              <Heart className="h-4 w-4" />
              Premium relationship tracker / iOS product
            </div>
            <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
              HeartSync makes relationship milestones feel worth celebrating.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              A premium, aesthetic tracker for couples to remember dates, monitor time together across multiple formats, and
              turn anniversaries into something more thoughtful than a generic day counter.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#heartsync-features" className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium">
                Explore Features
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#heartsync-details"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--line-soft)] bg-[var(--surface-soft)] px-7 py-3.5 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
              >
                Read the Blueprint
              </a>
            </div>
          </Reveal>

          <div className="relative min-h-[44rem]">
            <ParallaxLayer className="absolute left-0 top-12 z-10 w-[46%]" speed={0.12}>
              <Reveal className="phone-shot phone-shot-primary rounded-[2.2rem] border p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                <img src={heartsyncDatesImage} alt="HeartSync dates screen" className="w-full rounded-[1.65rem] object-cover" />
              </Reveal>
            </ParallaxLayer>

            <ParallaxLayer className="absolute right-0 top-0 w-[54%]" speed={-0.1}>
              <Reveal delay={120} className="phone-shot phone-shot-secondary rounded-[2.2rem] border p-3 shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
                <img src={heartsyncSettingsImage} alt="HeartSync settings screen" className="w-full rounded-[1.65rem] object-cover" />
              </Reveal>
            </ParallaxLayer>
          </div>
        </div>
      </section>

      <section id="heartsync-features" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Key Features</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            The app is positioned around practical reminders, emotional polish, and fewer frustrations than typical relationship counter apps.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {heartSyncFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} className="card-panel heartsync-feature-card rounded-[1.45rem] border p-6" delay={index * 110}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/12 text-pink-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{feature.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{feature.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="heartsync-details" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <Reveal direction="right">
            <div className="card-panel heartsync-story-card rounded-[2rem] border p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-100/70">Product Positioning</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                Better quality than the usual love counter.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                HeartSync is designed to solve a specific frustration: couples want a cute tracker that remembers the moments that
                matter, but many competing apps gate basic notifications, rely on ads, or reduce everything to a single day count.
              </p>
              <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                This concept leans into a premium feel while keeping the core experience generous: one main relationship, multiple
                time formats, anniversary reminders, and a calmer interface that feels celebratory instead of exploitative.
              </p>
            </div>
          </Reveal>

          <ParallaxLayer speed={0.08}>
            <Reveal direction="left" delay={120}>
              <div className="relative rounded-[2rem] border border-pink-300/12 bg-[linear-gradient(160deg,rgba(244,114,182,0.08),rgba(17,24,39,0.52))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.12),transparent_42%)]" />
                <img src={heartsyncDatesImage} alt="HeartSync milestone dashboard" className="relative w-full rounded-[1.55rem] object-cover" />
              </div>
            </Reveal>
          </ParallaxLayer>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">What Makes It Worth Paying For</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            The pricing strategy keeps the basics free and reserves premium value for genuinely additive features.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {heartSyncHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} className="card-panel heartsync-highlight-card rounded-[1.5rem] border p-6" delay={index * 110}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/12 text-violet-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ParallaxLayer speed={-0.09}>
            <Reveal direction="right">
              <div className="relative rounded-[2rem] border border-violet-300/10 bg-[linear-gradient(180deg,rgba(91,33,182,0.12),rgba(17,24,39,0.38))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_bottom,rgba(167,139,250,0.1),transparent_45%)]" />
                <img src={heartsyncSettingsImage} alt="HeartSync settings and notification controls" className="relative w-full rounded-[1.55rem] object-cover" />
              </div>
            </Reveal>
          </ParallaxLayer>

          <Reveal direction="left">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-100/70">Development Blueprint</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Built around a clear product pipeline.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              The concept is straightforward: user enters a relationship start date, the time engine calculates the meaningful
              intervals, local or cloud storage preserves the state, and the app delivers that information back through reminders,
              widgets, and a polished dashboard.
            </p>

            <div className="mt-8 space-y-4">
              {heartSyncBuildSteps.map((step, index) => (
          