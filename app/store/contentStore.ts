import { create } from 'zustand';

interface HeroData {
    name: string;
    role: string;
    skills: string[];
    location: string;
    status: string;
    avatar?: string;
    resumeLink?: string;
}

interface UpdateLog {
    date: string;
    title: string;
    description: string;
    tags: string[];
    image?: string;
}

interface ProjectData {
    label: string;
    title: string;
    description: string;
    color: string;
    type: 'graphic' | 'shape' | 'grid' | 'text';
    image?: string;
}

interface BlueprintData {
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

interface MissionData {
    year: string;
    role: string;
    company: string;
    description: string;
    status: 'ACTIVE' | 'COMPLETE' | 'ROOT_ACCESS' | 'ARCHIVED';
}

interface ArsenalGroup {
    category: string;
    items: string[];
}

interface ContentState {
    hero: HeroData;
    updates: UpdateLog[];
    projects: ProjectData[];
    blueprints: BlueprintData[];
    missions: MissionData[];
    arsenal: ArsenalGroup[];
}

export const useContentStore = create<ContentState>(() => ({
    hero: {
        name: "Aman Adhikari",
        role: "Full Stack Developer",
        skills: ["React", "TypeScript", "Node.js", "WebSockets", "D3.js", "System Design"],
        location: "DEHRADUN // INDIA",
        status: "OPEN_TO_WORK",
        avatar: "/profile.png",
        resumeLink: "/resume.pdf"
    },
    updates: [
        {
            date: "2025.09 - PRESENT",
            title: "POLYMARKET_TERMINAL",
            description: "Analytics terminal aggregating thousands of daily trades via WebSocket API with interactive map signals.",
            tags: ["React", "Node.js", "Docker", "Redis"],
            image: "/project-poly.png"
        },
        {
            date: "2025.05 - 2025.07",
            title: "HFT_ORDERBOOK",
            description: "High-frequency trading visualization handling 10k+ updates/sec with sub-16ms frame times.",
            tags: ["React", "Performance", "Virtual Scroll"],
            image: "/project-hft.png"
        },
        {
            date: "2025.01 - 2025.03",
            title: "AI_DOCS_PLATFORM",
            description: "Documentation platform featuring MDX parser, syntax highlighting, and interactive code previews.",
            tags: ["React", "TypeScript", "Kafka", "MDX"]
        }
    ],
    missions: [
        {
            year: "2022 - 2024",
            role: "CO_FOUNDER",
            company: "CRYPTK",
            description: "Built custom charting engine (100k+ candles, <100ms draw). Architected WebSocket pipeline (500+ updates/sec) and ETH data normalization layer.",
            status: "ROOT_ACCESS"
        },
        {
            year: "2022 - 2022",
            role: "SOFTWARE_DEV",
            company: "ASCENDEUM",
            description: "Developed custom impression analytics charting and campaign tracking tooling for 50+ client accounts.",
            status: "ARCHIVED"
        },
        {
            year: "2020 - 2022",
            role: "SYSTEM_ENGINEER",
            company: "INFOSYS",
            description: "Built supply chain platform for METRO (100+ items). Refactored DHL system to TypeScript. Optimized DB queries (300ms -> 150ms).",
            status: "ARCHIVED"
        },
        {
            year: "2019 - 2019",
            role: "INTERN",
            company: "DRDO_DEAL",
            description: "Built internal tooling to monitor live data streams. Optimized pipelines via data compression.",
            status: "COMPLETE"
        }
    ],
    arsenal: [
        {
            category: "LANGUAGES",
            items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL"]
        },
        {
            category: "FRONTEND",
            items: ["React", "Redux", "D3.js", "Tailwind CSS", "Shadcn", "HTML5/CSS3"]
        },
        {
            category: "BACKEND",
            items: ["Node.js", "Spring Boot", "PostgreSQL"]
        },
        {
            category: "TOOLS_&_DEVOPS",
            items: ["Git", "Docker", "AWS", "gRPC", "WebSockets", "Mapbox", "Zod", "Immer", "Zustand"]
        }
    ],
    projects: [
        {
            label: "PROJ_01 // ANALYTICS",
            title: "Polymarket Terminal",
            description: "Real-time trade aggregation & signals",
            color: "var(--terminal-green)",
            type: 'graphic',
            image: "/project-poly.png"
        },
        {
            label: "PROJ_02 // HFT",
            title: "HFT Orderbook",
            description: "10k+ updates/sec visualization",
            color: "var(--terminal-green)",
            type: 'shape',
            image: "/project-hft.png"
        },
        {
            label: "PROJ_03 // DOCS",
            title: "AI Docs Platform",
            description: "Interactive MDX documentation",
            color: "cyan",
            type: 'grid',
            image: "/project-docs.png"
        },
        {
            label: "PROJ_04 // SUPPLY_CHAIN",
            title: "Metro Platform",
            description: "Supply chain management system",
            color: "var(--terminal-green)",
            type: 'text'
        }
    ],
    blueprints: [
        {
            title: "WEBSOCKET_PIPE",
            subtitle: "500+ TPS",
            description: "Real-time ingestion with message batching (50ms) and memoized selectors.",
            image: "/blueprint-1.jpg"
        },
        {
            title: "CUSTOM_RENDERER",
            subtitle: "CANVAS API",
            description: "Quadtree spatial indexing for efficient zoom/pan on 100k+ data points.",
            image: "/blueprint-2.jpg"
        },
        {
            title: "DATA_NORMALIZER",
            subtitle: "ETHEREUM RPC",
            description: "Parsing raw RPC responses into strongly-typed domain models with validation.",
            image: "/blueprint-3.jpg"
        },
        {
            title: "COMPONENT_LIB",
            subtitle: "REUSABLE UI",
            description: "Library of 100+ components reducing duplicate code across teams.",
            image: "/blueprint-4.jpg"
        }
    ]
}));
