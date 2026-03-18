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
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import heartsyncIcon from "./assets/heartsync/heartsync-icon.png";
import heartsyncDatesImage from "./assets/heartsync/heartsync-dates.png";
import heartsyncSettingsImage from "./assets/heartsync/heartsync-settings.png";
import heartsyncStoryImage from "./assets/heartsync/heartsync-story.PNG";
import heartsyncMemoriesImage from "./assets/heartsync/heartsync-memories.PNG";
import heartsyncAddMemoryImage from "./assets/heartsync/heartsync-add-memory.PNG";
import heartsyncThemesImage from "./assets/heartsync/heartsync-themes.PNG";
import pionxDevImage from "./assets/shared/pionx-dev.jpg";
import tapTempoShot1 from "./assets/tap-tempo/tap-tempo-1.PNG";
import tapTempoShot2 from "./assets/tap-tempo/tap-tempo-2.PNG";
import tapTempoShot3 from "./assets/tap-tempo/tap-tempo-3.PNG";
import tapTempoIcon from "./assets/tap-tempo/appicon.png";
import theTipShot1 from "./assets/the-tip/the-tip-1.PNG";
import theTipIcon from "./assets/the-tip/the-tip-app-icon.jpg";

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
    iconImage: tapTempoIcon,
    accentClass: "from-lime-400 to-lime-600",
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
  { label: "Tap Tempo", href: "/tap-tempo", iconImage: tapTempoIcon },
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

const faqEntries = [
  {
    question: "Which apps are part of PionX right now?",
    answer:
      "Right now the site highlights HeartSync, Tap Tempo, and The Tip. HeartSync is focused on relationship milestones and memories, Tap Tempo is a BPM detector for music, and The Tip is a fast tip-and-bill-splitting calculator.",
    icon: "📱",
  },
  {
    question: "Are these apps built for iPhone or for the web?",
    answer:
      "The featured products are positioned as iOS-first apps. The portfolio itself is web-based, but the case studies are centered on native mobile utility and lifestyle products.",
    icon: "🍎",
  },
  {
    question: "Will HeartSync include premium features?",
    answer:
      "Yes. The current HeartSync direction keeps the core tracker useful for free, while premium features expand into deeper themes, multiple trackers, sync, and shared partner-facing functionality.",
    icon: "💖",
  },
  {
    question: "Can Tap Tempo listen to audio, or do I have to tap manually?",
    answer:
      "Both are part of the concept. The product supports manual tap capture and a listening mode, so users can either tap with the beat or let the app listen for tempo directly.",
    icon: "🎵",
  },
  {
    question: "Does The Tip only calculate gratuity, or can it split the bill too?",
    answer:
      "It does both. The Tip is designed to calculate gratuity, total amount, and per-person cost, with controls for party size and optional round-per-person logic for cleaner shared payments.",
    icon: "💸",
  },
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
type PageKey = "home" | "heartsync" | "tap-tempo" | "the-tip" | "faq" | "privacy-policy";

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

  if (pathname.startsWith("/faq")) {
    return "faq";
  }

  if (pathname.startsWith("/privacy-policy")) {
    return "privacy-policy";
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
  announcementVisible,
  onDismissAnnouncement,
  onToggleTheme,
}: {
  currentPage: PageKey;
  pageLoaded: boolean;
  isDark: boolean;
  toggleAnimating: boolean;
  announcementVisible: boolean;
  onDismissAnnouncement: () => void;
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
  const faqHref = "/faq";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        pageLoaded ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-1 md:gap-1.5">
        <div className="relative h-[50px] w-full md:h-[54px]" aria-hidden={announcementVisible ? undefined : "true"}>
          {announcementVisible ? (
            <div className="announcement-banner absolute inset-0 w-full overflow-hidden px-4 py-2.5 md:px-6 md:py-[0.75rem]">
              <div className="mx-auto flex max-w-[72rem] items-center justify-center gap-4">
                <p className="announcement-banner-text text-center leading-6 text-[var(--text-primary)]">
                  <span aria-hidden="true" className="mr-2">
                    🚀
                  </span>
                  New: Apps are getting ready for deployment soon!
                </p>
                <button
                  type="button"
                  onClick={onDismissAnnouncement}
                  className="absolute right-4 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[var(--text-secondary)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)] md:right-6"
                  aria-label="Dismiss announcement"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="announcement-banner-line absolute inset-x-0 bottom-0 h-[3px]" />
            </div>
          ) : null}
        </div>

        <div className="nav-wrap w-[min(58rem,calc(100%-1.5rem))] flex items-center justify-between rounded-[1.15rem] border px-4 py-3 md:w-[min(60rem,calc(100%-3rem))] md:px-5">
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
          <a href={faqHref} className="transition hover:text-[var(--text-primary)]">
            FAQ
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
            <ParallaxLayer className="absolute left-0 top-12 z-20 w-[40%]" speed={0.12}>
              <Reveal className="phone-shot phone-shot-primary rounded-[2.2rem] border p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                <img src={heartsyncStoryImage} alt="HeartSync love story home screen" className="w-full rounded-[1.65rem] object-cover" />
              </Reveal>
            </ParallaxLayer>

            <ParallaxLayer className="absolute left-[24%] top-28 z-10 w-[34%]" speed={0.08}>
              <Reveal className="phone-shot phone-shot-primary rounded-[2.2rem] border p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                <img src={heartsyncDatesImage} alt="HeartSync dates screen" className="w-full rounded-[1.65rem] object-cover" />
              </Reveal>
            </ParallaxLayer>

            <ParallaxLayer className="absolute right-0 top-0 w-[40%]" speed={-0.1}>
              <Reveal delay={120} className="phone-shot phone-shot-secondary rounded-[2.2rem] border p-3 shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
                <img src={heartsyncThemesImage} alt="HeartSync themes screen" className="w-full rounded-[1.65rem] object-cover" />
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
                <img src={heartsyncMemoriesImage} alt="HeartSync memory timeline screen" className="relative w-full rounded-[1.55rem] object-cover" />
              </div>
            </Reveal>
          </ParallaxLayer>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ParallaxLayer speed={-0.08}>
            <Reveal direction="right">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative rounded-[2rem] border border-pink-300/12 bg-[linear-gradient(180deg,rgba(244,114,182,0.08),rgba(17,24,39,0.38))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
                  <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.1),transparent_46%)]" />
                  <img src={heartsyncAddMemoryImage} alt="HeartSync add memory screen" className="relative w-full rounded-[1.45rem] object-cover" />
                </div>
                <div className="relative rounded-[2rem] border border-violet-300/10 bg-[linear-gradient(180deg,rgba(91,33,182,0.12),rgba(17,24,39,0.38))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
                  <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_bottom,rgba(167,139,250,0.1),transparent_46%)]" />
                  <img src={heartsyncThemesImage} alt="HeartSync theme selection screen" className="relative w-full rounded-[1.45rem] object-cover" />
                </div>
              </div>
            </Reveal>
          </ParallaxLayer>

          <Reveal direction="left">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-100/70">Memories and Customization</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              More than a counter. Closer to a shared relationship archive.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              The additional screens show where HeartSync gets more emotionally durable: a visual love story landing page, a timeline
              of saved moments, a guided memory-entry flow, and theme options that keep the app feeling personal rather than generic.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Reveal className="card-panel heartsync-highlight-card rounded-[1.35rem] border p-5" delay={120}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-500/12 text-pink-200">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">Love Story Dashboard</h3>
                <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">
                  A warmer home screen that combines partner identity, quotes, and live relationship length in a more intimate presentation.
                </p>
              </Reveal>

              <Reveal className="card-panel heartsync-highlight-card rounded-[1.35rem] border p-5" delay={220}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/12 text-violet-200">
                  <CalendarHeart className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">Memory Timeline</h3>
                <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">
                  A scrollable archive of dates, photos, and romantic moments that makes the app feel alive beyond the anniversary counter.
                </p>
              </Reveal>

              <Reveal className="card-panel heartsync-highlight-card rounded-[1.35rem] border p-5" delay={320}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-500/12 text-pink-200">
                  <ImagePlus className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">Add Memory Flow</h3>
                <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">
                  The memory composer supports photos, titles, and descriptions, turning the app into a capture tool rather than just a viewer.
                </p>
              </Reveal>

              <Reveal className="card-panel heartsync-highlight-card rounded-[1.35rem] border p-5" delay={420}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/12 text-violet-200">
                  <Palette className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">Theme Library</h3>
                <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">
                  Included and premium palettes make personalization visible and reinforce the app’s premium-but-friendly positioning.
                </p>
              </Reveal>
            </div>
          </Reveal>
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
                  <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-violet-500/12 text-violet-200">
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
                <Reveal key={step} className="card-panel heartsync-step-card rounded-[1.3rem] border p-4" delay={160 + index * 90}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500/14 text-sm font-semibold text-pink-100">
                      {index + 1}
                    </div>
                    <p className="text-base leading-7 text-[var(--text-secondary)]">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Planned Extensions</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            The next layer is less about clutter and more about deepening the shared experience.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Reveal className="card-panel heartsync-feature-card rounded-[1.45rem] border p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/12 text-pink-200">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">Shared Dashboards</h3>
            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              Both partners can contribute photos, notes, and moments to a synchronized view of the relationship.
            </p>
          </Reveal>

          <Reveal className="card-panel heartsync-feature-card rounded-[1.45rem] border p-6" delay={110}>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/12 text-pink-200">
              <GiftIcon />
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">Gift Suggestions</h3>
            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              Future AI-assisted recommendations based on relationship length and upcoming milestones.
            </p>
          </Reveal>

          <Reveal className="card-panel heartsync-feature-card rounded-[1.45rem] border p-6" delay={220}>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/12 text-pink-200">
              <CalendarHeart className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">Memories Timeline</h3>
            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              A richer visual archive of anniversaries, milestones, photos, and shared memories over time.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function TapTempoPage() {
  return (
    <main className="relative z-10 overflow-hidden">
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-36">
        <div className="absolute left-16 top-28 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />
        <div className="absolute right-12 top-20 h-96 w-96 rounded-full bg-lime-400/8 blur-3xl" />

        <div className="grid gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <Reveal direction="right">
            <div className="inline-flex items-center gap-3 rounded-full border border-lime-300/16 bg-lime-300/8 px-3 py-2 text-sm text-lime-100/85 shadow-[0_16px_40px_rgba(132,204,22,0.12)]">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-lime-300/20 bg-black/50 p-1">
                <img src={tapTempoIcon} alt="Tap Tempo app icon" className="h-full w-full rounded-full object-cover" />
              </span>
              <span className="flex flex-col text-left leading-tight">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-lime-200/70">Tap Tempo</span>
                <span>BPM detector / iOS utility</span>
              </span>
            </div>
            <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
              Tap Tempo turns rhythm into a clean BPM reading instantly.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              A focused music tool for finding the tempo of a song by tapping the screen or listening through the microphone,
              with clear range labels, recent-lock feedback, and a history view for past readings.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#taptempo-features" className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium">
                See the Features
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#taptempo-system"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--line-soft)] bg-[var(--surface-soft)] px-7 py-3.5 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
              >
                Explore the System
              </a>
            </div>
          </Reveal>

          <div className="relative min-h-[48rem]">
            <ParallaxLayer className="absolute left-0 top-16 z-10 w-[42%]" speed={0.12}>
              <Reveal className="phone-shot taptempo-shot taptempo-shot-primary rounded-[2.2rem] border p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                <img src={tapTempoShot1} alt="Tap Tempo main BPM screen" className="w-full rounded-[1.65rem] object-cover" />
              </Reveal>
            </ParallaxLayer>

            <ParallaxLayer className="absolute right-0 top-0 w-[48%]" speed={-0.08}>
              <Reveal delay={120} className="phone-shot taptempo-shot taptempo-shot-secondary rounded-[2.2rem] border p-3 shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
                <img src={tapTempoShot2} alt="Tap Tempo listening state screen" className="w-full rounded-[1.65rem] object-cover" />
              </Reveal>
            </ParallaxLayer>

            <ParallaxLayer className="absolute right-[10%] top-[52%] z-20 w-[38%]" speed={0.07}>
              <Reveal delay={220} className="phone-shot taptempo-shot taptempo-shot-tertiary rounded-[2rem] border p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
                <img src={tapTempoShot3} alt="Tap Tempo history screen" className="w-full rounded-[1.5rem] object-cover" />
              </Reveal>
            </ParallaxLayer>
          </div>
        </div>
      </section>

      <section id="taptempo-features" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Key Features</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            The screenshots point to a deliberately simple product: detect tempo fast, show confidence clearly, and stay useful for repeat use.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {tapTempoFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} className="card-panel taptempo-feature-card rounded-[1.45rem] border p-6" delay={index * 110}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-300/12 text-lime-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{feature.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{feature.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <Reveal direction="right">
            <div className="card-panel taptempo-story-card rounded-[2rem] border p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-100/70">Product Use Case</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                Built for musicians, producers, and anyone trying to catch a groove.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                Tap Tempo centers the main interaction around one question: what is this song’s BPM? The interface makes that answer
                immediate, whether the user taps manually or switches into listening mode.
              </p>
              <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                The circular meter, range label, and last-lock details keep the output readable at a glance, while the history view
                adds just enough depth for repeated use in rehearsal, production, or casual listening.
              </p>
            </div>
          </Reveal>

          <ParallaxLayer speed={0.08}>
            <Reveal direction="left" delay={120}>
              <div className="relative rounded-[2rem] border border-lime-300/12 bg-[linear-gradient(160deg,rgba(163,230,53,0.14),rgba(2,6,3,0.82))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(190,242,100,0.16),transparent_42%)]" />
                <img src={tapTempoShot2} alt="Tap Tempo microphone listening mode" className="relative w-full rounded-[1.55rem] object-cover" />
              </div>
            </Reveal>
          </ParallaxLayer>
        </div>
      </section>

      <section id="taptempo-system" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">What the Interface Communicates</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            The UI exposes the right signals without burying the core action under settings or extra modes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {tapTempoHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} className="card-panel taptempo-highlight-card rounded-[1.5rem] border p-6" delay={index * 110}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-lime-300/12 text-lime-100">
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
              <div className="relative rounded-[2rem] border border-lime-300/12 bg-[linear-gradient(180deg,rgba(132,204,22,0.14),rgba(3,7,5,0.58))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_bottom,rgba(163,230,53,0.14),transparent_45%)]" />
                <img src={tapTempoShot3} alt="Tap Tempo BPM history screen" className="relative w-full rounded-[1.55rem] object-cover" />
              </div>
            </Reveal>
          </ParallaxLayer>

          <Reveal direction="left">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-100/70">Experience Notes</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              A utility app that still feels composed.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              The dark interface, radial meter, and compact stat strip give the app a musician-friendly feel without overcomplicating it.
              Instead of adding decorative noise, the visuals reinforce speed, precision, and legibility.
            </p>

            <div className="mt-8 space-y-4">
              {tapTempoBuildPoints.map((point, index) => (
                <Reveal key={point} className="card-panel taptempo-step-card rounded-[1.3rem] border p-4" delay={160 + index * 90}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-300/14 text-sm font-semibold text-lime-100">
                      {index + 1}
                    </div>
                    <p className="text-base leading-7 text-[var(--text-secondary)]">{point}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Useful Details</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            A few small touches make the tool feel more robust than a simple tap counter.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Reveal className="card-panel taptempo-feature-card rounded-[1.45rem] border p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-300/12 text-lime-100">
              <span className="text-lg">🎧</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">Hands-Free Mode</h3>
            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              Listening mode makes the app practical even when tapping manually isn’t ideal, such as practice sessions or live playback.
            </p>
          </Reveal>

          <Reveal className="card-panel taptempo-feature-card rounded-[1.45rem] border p-6" delay={110}>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-300/12 text-lime-100">
              <span className="text-lg">🎼</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">Readable Tempo Ranges</h3>
            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              Labels like Allegro and Andante help connect the numeric BPM output to real musical pacing.
            </p>
          </Reveal>

          <Reveal className="card-panel taptempo-feature-card rounded-[1.45rem] border p-6" delay={220}>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-300/12 text-lime-100">
              <span className="text-lg">🧠</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">Smarter Session Recall</h3>
            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              The history screen gives the app memory, which turns repeated BPM checks into something trackable and useful.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function TheTipPage() {
  return (
    <main className="relative z-10 overflow-hidden">
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-36">
        <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute right-16 top-24 h-96 w-96 rounded-full bg-cyan-400/8 blur-3xl" />

        <div className="grid gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <Reveal direction="right">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/16 bg-sky-300/8 px-4 py-2 text-sm text-sky-100/80">
              <span className="text-base">💸</span>
              Tip calculator / iOS utility
            </div>
            <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
              The Tip makes splitting a bill feel immediate instead of awkward.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              A clean calculator for choosing gratuity, splitting totals across a group, rounding results when needed, and getting
              a usable payment breakdown in one screen.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#thetip-features" className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium">
                View Features
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#thetip-system"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--line-soft)] bg-[var(--surface-soft)] px-7 py-3.5 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
              >
                See the Flow
              </a>
            </div>
          </Reveal>

          <div className="relative min-h-[46rem]">
            <ParallaxLayer className="absolute left-0 top-12 z-10 w-[48%]" speed={0.1}>
              <Reveal className="phone-shot thetip-shot thetip-shot-primary rounded-[2.2rem] border p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                <img src={theTipShot1} alt="The Tip calculator screen" className="w-full rounded-[1.65rem] object-cover" />
              </Reveal>
            </ParallaxLayer>

            <ParallaxLayer className="absolute right-0 top-14 w-[40%]" speed={-0.08}>
              <Reveal delay={120} className="card-panel thetip-highlight-card rounded-[1.9rem] border p-5 shadow-[0_22px_72px_rgba(0,0,0,0.28)]">
                <div className="flex items-center gap-4">
                  <img src={theTipIcon} alt="The Tip app icon" className="h-16 w-16 rounded-[1.15rem] object-cover" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-100/70">Quick Utility</p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">One-screen split math</h2>
                  </div>
                </div>

                <div className="mt-8 grid gap-3">
                  <div className="rounded-[1.2rem] border border-white/6 bg-white/4 px-4 py-3 text-sm text-[var(--text-secondary)]">
                    💰 Tip, total, and per-person amount in one result zone
                  </div>
                  <div className="rounded-[1.2rem] border border-white/6 bg-white/4 px-4 py-3 text-sm text-[var(--text-secondary)]">
                    👥 Split control directly in the primary calculator flow
                  </div>
                  <div className="rounded-[1.2rem] border border-white/6 bg-white/4 px-4 py-3 text-sm text-[var(--text-secondary)]">
                    ✨ Optional rounding for cleaner shared payments
                  </div>
                </div>
              </Reveal>
            </ParallaxLayer>
          </div>
        </div>
      </section>

      <section id="thetip-features" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Key Features</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            The UI suggests a calculator designed around speed, clarity, and getting usable payment numbers with minimal effort.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {theTipFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} className="card-panel thetip-feature-card rounded-[1.45rem] border p-6" delay={index * 110}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/12 text-sky-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{feature.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{feature.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <Reveal direction="right">
            <div className="card-panel thetip-story-card rounded-[2rem] border p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-100/70">Product Use Case</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                A practical bill-splitting tool with just enough polish.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                The Tip is built around a real-world social moment: a bill lands, people need a number quickly, and no one wants to
                do awkward mental math under pressure.
              </p>
              <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                The interface puts all important inputs in one place: bill amount, number of people, preset tip percentages, and a
                rounding toggle. That keeps the experience fast enough to feel effortless.
              </p>
            </div>
          </Reveal>

          <ParallaxLayer speed={0.08}>
            <Reveal direction="left" delay={120}>
              <div className="relative rounded-[2rem] border border-sky-300/12 bg-[linear-gradient(160deg,rgba(56,189,248,0.08),rgba(17,24,39,0.52))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_42%)]" />
                <img src={theTipShot1} alt="The Tip results layout" className="relative w-full rounded-[1.55rem] object-cover" />
              </div>
            </Reveal>
          </ParallaxLayer>
        </div>
      </section>

      <section id="thetip-system" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">What the Screen Already Does Well</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            The screenshot points to a calculator flow that emphasizes immediacy over extra navigation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {theTipHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} className="card-panel thetip-highlight-card rounded-[1.5rem] border p-6" delay={index * 110}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
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
          <ParallaxLayer speed={-0.08}>
            <Reveal direction="right">
              <div className="card-panel thetip-step-card rounded-[2rem] border p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-100/70">Calculator Logic</p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-[1.25rem] border border-white/6 bg-white/4 px-4 py-3 text-sm text-[var(--text-secondary)]">
                    1. Enter bill amount
                  </div>
                  <div className="rounded-[1.25rem] border border-white/6 bg-white/4 px-4 py-3 text-sm text-[var(--text-secondary)]">
                    2. Set party size
                  </div>
                  <div className="rounded-[1.25rem] border border-white/6 bg-white/4 px-4 py-3 text-sm text-[var(--text-secondary)]">
                    3. Choose tip preset or custom value
                  </div>
                  <div className="rounded-[1.25rem] border border-white/6 bg-white/4 px-4 py-3 text-sm text-[var(--text-secondary)]">
                    4. Optionally round per-person total
                  </div>
                  <div className="rounded-[1.25rem] border border-white/6 bg-white/4 px-4 py-3 text-sm text-[var(--text-secondary)]">
                    5. Copy the result and pay
                  </div>
                </div>
              </div>
            </Reveal>
          </ParallaxLayer>

          <Reveal direction="left">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-100/70">Implementation Notes</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Designed to remove friction from a tiny, everyday task.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              Small utility apps live or die by whether they reduce effort. The Tip works because everything important is visible
              immediately, the output is broken into meaningful chunks, and the final number is ready to share or act on.
            </p>

            <div className="mt-8 space-y-4">
              {theTipBuildPoints.map((point, index) => (
                <Reveal key={point} className="card-panel thetip-step-card rounded-[1.3rem] border p-4" delay={160 + index * 90}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-400/14 text-sm font-semibold text-sky-100">
                      {index + 1}
                    </div>
                    <p className="text-base leading-7 text-[var(--text-secondary)]">{point}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <main className="relative z-10 overflow-hidden">
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-36">
        <div className="absolute left-8 top-24 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="absolute right-10 top-16 h-96 w-96 rounded-full bg-blue-400/8 blur-3xl" />

        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal direction="right">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/16 bg-violet-300/8 px-4 py-2 text-sm text-violet-100/80">
              <span className="text-base">💬</span>
              Quick answers about the apps
            </div>
            <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
              FAQ for people figuring out what PionX is building.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              A short set of answers covering what the apps are, how they are positioned, and what users can expect from the current product direction.
            </p>
          </Reveal>

          <div className="relative min-h-[30rem]">
            <ParallaxLayer className="absolute left-0 top-8 z-10 w-[46%]" speed={0.11}>
              <Reveal className="card-panel faq-highlight-card rounded-[1.9rem] border p-6">
                <div className="text-4xl">📱</div>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">App-first portfolio</h2>
                <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">
                  The site is product-led. The portfolio focuses on concrete app concepts and case-study pages instead of generic studio filler.
                </p>
              </Reveal>
            </ParallaxLayer>

            <ParallaxLayer className="absolute right-0 top-0 w-[48%]" speed={-0.08}>
              <Reveal delay={120} className="card-panel faq-highlight-card rounded-[1.9rem] border p-6">
                <div className="text-4xl">✨</div>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">Focused utilities</h2>
                <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">
                  Each app solves one narrow problem clearly, which makes the product pages easier to trust and easier to understand.
                </p>
              </Reveal>
            </ParallaxLayer>

            <ParallaxLayer className="absolute left-[22%] top-[52%] z-20 w-[38%]" speed={0.06}>
              <Reveal delay={220} className="card-panel faq-highlight-card rounded-[1.8rem] border p-5">
                <div className="text-3xl">🧠</div>
                <h2 className="mt-4 text-xl font-semibold tracking-[-0.03em]">Real product context</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  The answers below are based on the actual featured apps, not placeholder startup copy.
                </p>
              </Reveal>
            </ParallaxLayer>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 pt-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Common Questions</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Five answers a user would reasonably want before downloading, following, or reaching out.
          </p>
        </Reveal>

        <div className="mt-14 space-y-4">
          {faqEntries.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={item.question} delay={index * 90}>
                <div className={`card-panel faq-card rounded-[1.5rem] border p-2 ${isOpen ? "faq-card-open" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 rounded-[1.2rem] px-4 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/12 text-xl">
                        <span aria-hidden="true">{item.icon}</span>
                      </div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--text-primary)]">{item.question}</h3>
                    </div>
                    <ChevronDown className={`h-5 w-5 flex-shrink-0 text-[var(--text-secondary)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`faq-answer px-4 ${isOpen ? "faq-answer-open" : ""}`}>
                    <div className="pb-4 pl-[3.75rem] pr-12 text-base leading-7 text-[var(--text-secondary)]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function PrivacyPolicyPage() {
  return (
    <main className="relative z-10 overflow-hidden">
      <section className="relative mx-auto max-w-5xl px-6 pb-16 pt-36">
        <div className="absolute left-10 top-28 h-72 w-72 rounded-full bg-cyan-400/8 blur-3xl" />
        <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-violet-400/8 blur-3xl" />

        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/16 bg-blue-300/8 px-4 py-2 text-sm text-blue-100/80">
            <span className="text-base">🔒</span>
            Privacy Policy
          </div>
          <h1 className="mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">How PionX handles site data.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            This page explains what information this portfolio site may collect, how it is used, and what to expect when you use the
            contact form or browse the site.
          </p>
          <p className="mt-4 text-sm text-[var(--text-secondary)]">Last updated: March 14, 2026</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6">
          <Reveal className="card-panel rounded-[1.5rem] border p-6">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">Information Collected</h2>
            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              This site may collect information that you choose to provide directly, such as your name, email address, and message if
              you submit the contact form. Basic technical information may also be processed by the hosting provider, such as IP
              address, browser type, and server request logs.
            </p>
          </Reveal>

          <Reveal className="card-panel rounded-[1.5rem] border p-6" delay={90}>
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">How Information Is Used</h2>
            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              Contact form information is used only to review and respond to inquiries. Technical information is used to serve the
              site, maintain reliability, and monitor basic operational security.
            </p>
          </Reveal>

          <Reveal className="card-panel rounded-[1.5rem] border p-6" delay={180}>
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">Cookies and Tracking</h2>
            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              This site is not intentionally using advertising cookies or marketing trackers at this time. If analytics, embedded
              third-party tools, or other tracking services are added later, this policy should be updated to reflect that change.
            </p>
          </Reveal>

          <Reveal className="card-panel rounded-[1.5rem] border p-6" delay={270}>
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">Third-Party Services</h2>
            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              This site may link to third-party platforms such as GitHub, X, LinkedIn, or email providers. Those services operate
              under their own privacy policies and terms.
            </p>
          </Reveal>

          <Reveal className="card-panel rounded-[1.5rem] border p-6" delay={360}>
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">Contact</h2>
            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              If you have privacy-related questions about this site, you can reach out through the contact section or by email at{" "}
              <a href="mailto:hello@pionx.dev" className="text-[var(--text-primary)] underline decoration-[var(--line-strong)] underline-offset-4">
                hello@pionx.dev
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M20 12v8H4v-8" />
      <path d="M2 7h20v5H2z" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C10.5 2 12 7 12 7Z" />
      <path d="M12 7h4.5a2.5 2.5 0 1 0 0-5C13.5 2 12 7 12 7Z" />
    </svg>
  );
}

function App() {
  const [isDark, setIsDark] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [toggleAnimating, setToggleAnimating] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageKey>(() => resolvePage(window.location.pathname));

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setPageLoaded(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(resolvePage(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const dismissed = window.localStorage.getItem("pionx-site-announcement-dismissed");
    setAnnouncementVisible(dismissed !== "true");
  }, []);

  const handleToggleTheme = () => {
    setToggleAnimating(true);
    setIsDark((current) => !current);
    window.setTimeout(() => setToggleAnimating(false), 260);
  };

  const handleDismissAnnouncement = () => {
    setAnnouncementVisible(false);
    window.localStorage.setItem("pionx-site-announcement-dismissed", "true");
  };

  const shellClassName = `site-shell min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)]${
    currentPage === "tap-tempo" ? " page-tap-tempo" : ""
  }`;

  return (
    <div className={isDark ? "theme-dark" : "theme-light"}>
      <div className={shellClassName}>
        <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 h-[54rem]" />
        <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[54rem]" />

        <SiteHeader
          currentPage={currentPage}
          pageLoaded={pageLoaded}
          isDark={isDark}
          toggleAnimating={toggleAnimating}
          announcementVisible={announcementVisible}
          onDismissAnnouncement={handleDismissAnnouncement}
          onToggleTheme={handleToggleTheme}
        />

        {currentPage === "heartsync" ? (
          <HeartSyncPage />
        ) : currentPage === "tap-tempo" ? (
          <TapTempoPage />
        ) : currentPage === "the-tip" ? (
          <TheTipPage />
        ) : currentPage === "faq" ? (
          <FAQPage />
        ) : currentPage === "privacy-policy" ? (
          <PrivacyPolicyPage />
        ) : (
          <HomePage pageLoaded={pageLoaded} isDark={isDark} />
        )}

        <footer className="border-t border-[var(--line-soft)] px-6 py-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-[var(--text-secondary)] md:flex-row">
            <p>
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text font-semibold text-transparent">
                PionX
              </span>{" "}
              © 2026 All rights reserved
            </p>
            <div className="flex flex-col items-center gap-2 md:items-end">
              <p>Crafted with ❤️ for the future</p>
              <a href="/privacy-policy" className="transition hover:text-[var(--text-primary)]">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
