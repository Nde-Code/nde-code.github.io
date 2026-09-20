export interface CollabItem {
  id: string;
  partner: string;
  partnerType: "Open Source Org" | "Startup" | "Tech Studio" | "Research Team";
  title: string;
  role: string;
  period: string;
  description: string;
  contributions: string[];
  techStack: string[];
  link?: string;
  status: "ACTIVE" | "COMPLETED" | "ONGOING";
  asciiLogo?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number; experience: string; tag: string }[];
}

export type Max8Colors =
  | []
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string]
  | [string, string, string, string, string, string]
  | [string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string];

export const PORTFOLIO_DATA = {
  developer: {
    name: "Nathan Debilloëz",
    handle: "Nde-Code",
    title: "Open-source enthusiast & hobbyist programmer",
    alias: "root@nde-system",
    email: "nathan.debilloez@outlook.com",
    github: "https://github.com/Nde-Code",
    reddit: "https://www.reddit.com/user/nde_code/",
    twitter: "https://x.com/nde_code",
    location: "Brussels, Belgium // CET/CEST (UTC+1/+2)",
    status: "ENGINEERING STUDENT GROWING THROUGH PROJECTS & EXPERIENCES",
    CLI_EMOJI: "⚡",
    palette: [
      "#0f0f0f",
      "#ef4444",
      "#22c55e",
      "#eab308",
      "#3b82f6",
      "#a855f7",
      "#06b6d4",
      "#f8fafc",
    ],
    bio: "Computer Science Engineering student driven by curiosity and continuous learning. Exploring systems, cybersecurity, and software engineering through projects and experimentation.",
    quote:
      "\"Anything that can go wrong, will go wrong.\" – Murphy's Law",
    asciiBanner: `
    88b 88    db    888888 88  88    db    88b 88     8888b.
    88Yb88   dPYb     88   88  88   dPYb   88Yb88      8I  Yb
    88 Y88  dP__Yb    88   888888  dP__Yb  88 Y88      8I  dY
    88  Y8 dP""""Yb   88   88  88 dP""""Yb 88  Y8     8888Y"
`,
    specs: {
      OS: " Arch Linux x86_64",
      Kernel: " Linux 6.x-zen",
      Uptime: " Always exploring",
      Shell: " zsh",
      Terminal: " Alacritty",
      WM: " i3-gaps",
      Editor: " Neovim / VS Code",
      CPU: " Multi-core x86_64",
      Memory: " Enough for experiments"
    },
  },

  skills: [
    {
      category: "Core Languages",
      icon: "⚡",
      skills: [
        { name: "TypeScript / JavaScript", level: 75, experience: "5 yrs", tag: "EXPERIENCED" },
        { name: "HTML5 / CSS3", level: 85, experience: "5 yrs", tag: "EXPERIENCED" },
        { name: "C#", level: 60, experience: "1 yr", tag: "FAMILIAR" },
        { name: "Python", level: 70, experience: "3 yrs", tag: "FOCUSED" },
        { name: "Java", level: 40, experience: "< 1 yr", tag: "LEARNING" },
        { name: "C", level: 35, experience: "< 1 yr", tag: "LEARNING" },
        { name: "C++", level: 35, experience: "< 1 yr", tag: "LEARNING" },
      ],
    },
    {
      category: "Libraries, Scientific Computing & Tools",
      icon: "🛠️",
      skills: [
        { name: "Markdown", level: 90, experience: "5+ yrs", tag: "EXPERIENCED" },
        { name: "LaTeX", level: 60, experience: "2+ yrs", tag: "FOCUSED" },

        { name: "Math.js", level: 75, experience: "4 yrs", tag: "EXPERIENCED" },
        { name: "NumPy / SciPy", level: 60, experience: "2 yrs", tag: "FOCUSED" },
        { name: "Matplotlib", level: 65, experience: "3 yrs", tag: "FOCUSED" },
        { name: "Jupyter Notebook", level: 70, experience: "3 yrs", tag: "FOCUSED" },

        { name: "TensorFlow", level: 30, experience: "< 1 yr", tag: "LEARNING" },
        { name: "Ultralytics YOLO", level: 40, experience: "< 1 yr", tag: "LEARNING" },
      ],
    },
    {
      category: "DevOps, Cloud & Infrastructure",
      icon: "☁️",
      skills: [
        { name: "Git / GitHub", level: 80, experience: "5 yrs", tag: "EXPERIENCED" },
        { name: "Linux / Bash", level: 65, experience: "2 yrs", tag: "FOCUSED" },

        { name: "GitHub Codespaces", level: 70, experience: "2 yrs", tag: "FOCUSED" },
        { name: "GitHub Actions", level: 70, experience: "2 yrs", tag: "FOCUSED" },

        { name: "REST APIs / API Design", level: 70, experience: "2 yrs", tag: "FOCUSED" },
        { name: "Cloudflare Workers", level: 70, experience: "2 yrs", tag: "FOCUSED" },

        { name: "PostgreSQL (Aiven) / Redis (Upstash)", level: 65, experience: "3 yrs", tag: "FOCUSED" },
      ],
    },
    {
      category: "AI & Generative AI",
      icon: "🤖",
      skills: [
        { name: "OpenAI GPT Models", level: 80, experience: "3+ yrs", tag: "EXPERIENCED" },

        { name: "Anthropic Claude", level: 70, experience: "2 yrs", tag: "FOCUSED" },

        { name: "Google Gemini", level: 75, experience: "2 yrs", tag: "FOCUSED" },

        { name: "Prompt Engineering", level: 75, experience: "3 yrs", tag: "FOCUSED" },
      ],
    },
  ] as SkillCategory[],

  collabs: [/* I will complete that later (and soon)... */] as CollabItem[],

  commands: [
    {
      name: "help",
      desc: "List all available terminal commands",
      usage: "help",
    },
    {
      name: "about",
      desc: "Display bio, engineering philosophy & summary",
      usage: "about [or cat bio.txt]",
    },
    {
      name: "skills",
      desc: "Display interactive skill proficiency meters",
      usage: "skills [or cat skills.sh]",
    },
    {
      name: "collabs",
      desc: "Display list of team collaborations & partner projects",
      usage: "collabs [or cat collabs.md]",
    },
    {
      name: "neofetch",
      desc: "Display ASCII banner & hardware system specs",
      usage: "neofetch",
    },
    {
      name: "spotify",
      desc: "Display Spotify Now Playing song activity & Audio RPC status",
      usage: "spotify [or np, nowplaying]",
    },
    {
      name: "contact",
      desc: "Display contact info and social handles",
      usage: "contact [or mail]",
    },
    {
      name: "links",
      // I use Reddit instead of LinkedIn.
      desc: "Display interactive links to GitHub, Reddit, X/Twitter & Email",
      usage: "links [or socials, urls]",
    },
    {
      name: "theme",
      desc: "Switch theme (green, amber, cyan, dracula, mono)",
      usage: "theme <green|amber|cyan|dracula|mono>",
    },
    {
      name: "pong",
      desc: "Play retro 1972 arcade Pong mini-game vs CPU",
      usage: "pong [or game, play, ./pong.sh]",
    },
    {
      name: "snake",
      desc: "Play classic retro Snake arcade mini-game",
      usage: "snake [or playsnake, ./snake.sh]",
    },
    {
      name: "github",
      desc: "Display live GitHub stats, stars, forks, and language metrics",
      usage: "github [or gh, stats]",
    },
    {
      name: "repos",
      desc: "List featured GitHub repositories with star counts and links",
      usage: "repos [or projects]",
    },
    {
      name: "radio",
      desc: "Play retro Lo-Fi/Chiptune radio or stream custom songs from YouTube",
      usage: "radio [play|pause|next|add <url>|vol <n>|list]",
    },
    {
      name: "matrix",
      desc: "Toggle digital rain CRT overlay animation",
      usage: "matrix",
    },
    { name: "crt", desc: "Toggle CRT scanline screen effect", usage: "crt" },
    {
      name: "sfx",
      desc: "Toggle audio feedback keypress sounds",
      usage: "sfx",
    },
    {
      name: "clear",
      desc: "Clear terminal buffer screen",
      usage: "clear [or cls]",
    },
    {
      name: "gui",
      desc: "Switch window layout to TUI Visual Dashboard",
      usage: "gui",
    },
    {
      name: "cli",
      desc: "Switch window layout to Interactive CLI Mode",
      usage: "cli",
    },
  ],
};
