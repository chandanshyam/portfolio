// Top projects — curated to showcase full-stack, distributed systems, and AI/ML work.
// Each entry: { title, subtitle, date, desc, link (source), demo (live URL, optional) }

const data = [
  {
    title: 'EcoTrack — AI-Powered Sustainable Travel Planner',
    subtitle: 'Plan eco-friendly trips with AI-driven carbon analysis and multi-modal routing.',
    date: '2025-11-20',
    link: 'https://github.com/chandanshyam/EcoTrack',
    demo: 'https://ecotrack-1099051481130.us-central1.run.app',
    desc:
      'A Next.js 14 + TypeScript application that helps users plan low-carbon trips by analyzing '
      + 'transport options with Google Gemini AI and Google Maps. Features real-time carbon footprint '
      + 'tracking, fare comparison, an analytics dashboard with AI-generated sustainability targets, '
      + 'and secure Google OAuth via NextAuth.js. Built on a serverless architecture with Firestore '
      + 'and deployed on GCP Cloud Run.',
  },
  {
    title: 'Fitness AI Microservices Platform',
    subtitle: 'A cloud-native, event-driven microservices platform with AI-powered recommendations.',
    date: '2025-06-24',
    link: 'https://github.com/chandanshyam/fitness-microservice',
    desc:
      'A Spring Boot microservices platform demonstrating production distributed-systems patterns: '
      + 'Netflix Eureka service discovery, Spring Cloud Config for centralized configuration, an API '
      + 'Gateway, and RabbitMQ for event-driven communication. Keycloak handles authentication and '
      + 'authorization, with PostgreSQL and MongoDB for polyglot persistence. A React + Material-UI '
      + 'frontend surfaces AI-powered activity recommendations generated with Gemini AI.',
  },
  {
    title: 'AskTube — RAG YouTube Summarizer & QA Assistant',
    subtitle: 'Summarize and ask questions about any YouTube video using Retrieval-Augmented Generation.',
    date: '2026-02-11',
    link: 'https://github.com/chandanshyam/asktube',
    desc:
      'An AI-powered assistant that summarizes YouTube videos and answers questions about their '
      + 'content using a Retrieval-Augmented Generation (RAG) pipeline. Works even on videos without '
      + 'subtitles and has no duration limit. Runs fully offline with local models via Ollama, or '
      + 'against cloud providers including Claude, OpenAI, Gemini, and Mistral through a pluggable '
      + 'multi-vendor architecture.',
  },
  {
    title: 'AI Artistry — Generative Art Community',
    subtitle: 'A social platform for AI image generation, powered by Stable Diffusion and Gemini.',
    date: '2026-02-11',
    link: 'https://github.com/chandanshyam/AI-ARTISTRY',
    desc:
      'A React + Firebase web app where users generate and share AI art. Image generation runs on '
      + 'Stable Diffusion 3.5 via Hugging Face, with a real-time Gemini chatbot for brainstorming and '
      + 'AI-driven artist-style matching. Firebase Authentication secures sign-in, while Firestore '
      + 'powers cloud storage for posts, comments, and community interactions.',
  },
  {
    title: 'Bluebox (Vectorly) — Web App Reverse Engineering for AI Agents',
    subtitle: 'Let AI agents take real actions on the web — no public API required.',
    date: '2026-02-11',
    link: 'https://github.com/chandanshyam/bluebox',
    demo: 'https://console.vectorly.app/',
    desc:
      'A Python + LangChain toolkit that lets AI agents automate any web app without a public API. '
      + 'It launches Chrome in debug mode, captures browser state via the DevTools protocol, and uses '
      + 'an LLM agent to reverse-engineer the underlying request flow into a portable, reusable '
      + '"Routine" — a define-once, run-anywhere automation recipe for closed-API web applications.',
  },
];

export default data;
