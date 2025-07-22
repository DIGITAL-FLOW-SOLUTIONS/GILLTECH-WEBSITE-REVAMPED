# Overview

This is a full-stack web application built with React and Express using a modern TypeScript stack. The project follows a monorepo structure with separate client and server directories, sharing common schemas and types. It's configured for development on Replit with hot reloading and production deployment capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Hookform/resolvers
- **Styling**: Tailwind CSS with CSS custom properties for theming

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast compilation

### Data Storage Solutions
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Schema Management**: Drizzle Kit for migrations
- **Development Storage**: In-memory storage implementation for development/testing

### Authentication and Authorization
- **Session Management**: Express sessions with connect-pg-simple for PostgreSQL session store
- **Current Status**: Authentication system is scaffolded but not fully implemented

## Key Components

### Shared Schema (`/shared/schema.ts`)
- Centralized database schema definitions using Drizzle ORM
- Type-safe schema with Zod validation integration
- Currently defines a basic users table with username and password fields

### Client Structure (`/client/`)
- **Entry Point**: `main.tsx` bootstraps the React application
- **App Component**: Sets up providers (React Query, Tooltip, Toast)
- **Pages**: Modular page components with routing
- **UI Components**: Complete shadcn/ui component library
- **Hooks**: Custom hooks for mobile detection and toast notifications
- **Utilities**: Helper functions for styling and API requests

### Server Structure (`/server/`)
- **Entry Point**: `index.ts` with Express app setup and middleware
- **Routes**: API route registration system
- **Storage**: Abstracted storage interface with in-memory implementation
- **Vite Integration**: Development server with HMR support

### Configuration Files
- **Tailwind**: Configured with shadcn/ui styling system
- **TypeScript**: Strict mode enabled with path mapping
- **Drizzle**: PostgreSQL dialect with migration support
- **Vite**: React plugin with Replit-specific development features

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express routes handle HTTP requests under `/api` prefix  
3. **Business Logic**: Route handlers use the storage interface for data operations
4. **Data Persistence**: Storage implementation handles database operations via Drizzle ORM
5. **Response Flow**: JSON responses flow back through the middleware stack to the client

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: Via DATABASE_URL environment variable
- **Fallback**: In-memory storage for development without database

### UI Libraries
- **Radix UI**: Unstyled, accessible UI primitives
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first styling framework

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment
- **Error Handling**: Runtime error overlay for development
- **Code Mapping**: Cartographer plugin for enhanced debugging

## Deployment Strategy

### Development
- **Local Development**: `npm run dev` starts both client and server with HMR
- **Database**: Uses in-memory storage by default, can connect to PostgreSQL with DATABASE_URL
- **Hot Reload**: Vite handles client-side updates, tsx handles server restarts

### Production Build
- **Client Build**: Vite compiles React app to `/dist/public`
- **Server Build**: esbuild bundles Express server to `/dist/index.js`
- **Static Assets**: Express serves built client files in production
- **Database**: Requires PostgreSQL connection via DATABASE_URL

### Environment Variables
- **DATABASE_URL**: PostgreSQL connection string (required for production)
- **NODE_ENV**: Environment flag for production/development behavior
- **REPL_ID**: Replit-specific identifier for development features

The application is designed to work seamlessly in both development and production environments, with particular attention to Replit's hosting platform while maintaining compatibility with standard Node.js deployments.