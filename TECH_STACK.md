# Technology Stack - Altox Labs LLP

This document outlines the technical architecture and tools used to build the Altox Labs LLP corporate website.

## Core Framework
- **Next.js 16.1.6 (App Router)**: Utilizing React's latest features for server-side rendering, static site generation, and efficient routing.
- **React 19.2.3**: For building a dynamic and component-based user interface.
- **TypeScript 5**: Ensuring type safety and better developer experience.

## Styling & UI
- **Tailwind CSS 4**: A utility-first CSS framework for rapid and consistent styling.
- **Lucide React**: A library of beautiful, high-quality SVG icons used throughout the site.
- **Framer Motion 12.34.3**: Advanced animation library for premium, smooth scroll reveal effects and interactive components.

## Development Tools
- **Turbopack**: The next-generation incremental bundler for fast development builds.
- **ESLint**: For maintaining code quality and adhering to best practices.

## Content Management
- **Static & Dynamic Data**: The site uses a hybrid approach, with core information in components and frequent updates managed via `src/data/` (e.g., `services.ts`, `molecules.ts`).

## Hosting & Deployment
- The project is designed to be hosted on platforms like **Vercel** or **AWS Amplify** for global performance and scalability.
