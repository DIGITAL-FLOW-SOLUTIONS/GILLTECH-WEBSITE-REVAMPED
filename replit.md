# Overview

This is a comprehensive corporate website for Gill Technologies, showcasing their AI-powered market intelligence and brand strategy services. Built with React and Express using a modern TypeScript stack, the website features multiple pages including Home, About, Innovation, Brand Strategy, Brand Experience, and Contact pages. The application uses a modern component-based architecture with shadcn/ui components, Tailwind CSS for styling, and is configured for deployment to GitHub Pages.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development builds and optimized production bundles
- **Routing**: Wouter for lightweight client-side routing, configured with GitHub Pages base path
- **UI Framework**: shadcn/ui component library built on Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack React Query for server state management and API interactions
- **Form Handling**: React Hook Form with Hookform resolvers for form validation
- **Animations**: Framer Motion for advanced animations and micro-interactions

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules for modern JavaScript features
- **Development**: tsx for TypeScript execution in development mode
- **Production Build**: esbuild for fast compilation and bundling
- **Storage Interface**: Abstract storage layer with in-memory implementation for development

## Design System
- **Typography**: Custom font stack with Poppins, League Spartan, and Inter fonts
- **Color Scheme**: Brand colors with primary blue (#1e40af) and secondary orange (#ff7849)
- **Component Library**: Comprehensive shadcn/ui components with consistent styling
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Storage Solutions
- **Database**: PostgreSQL configured for Neon Database in production
- **ORM**: Drizzle ORM with TypeScript-first schema definitions
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Development Storage**: In-memory storage implementation for local development and testing

# External Dependencies

## Database & Hosting
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **GitHub Pages**: Static site hosting with custom base path configuration

## UI & Styling
- **Radix UI**: Accessible component primitives for complex UI components
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Replit Integration**: Development environment plugins and error handling
- **TypeScript**: Static type checking across the entire application
- **ESLint & Prettier**: Code quality and formatting tools (implied by TypeScript setup)