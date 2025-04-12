# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production 
- `npm run lint` - Run ESLint (zero tolerance for warnings)
- `npm run preview` - Preview production build

## Code Style Guidelines
- React 19 functional components with TypeScript interfaces for props
- Use PascalCase for component names, camelCase for props and variables
- Define prop interfaces at top of component files with descriptive names
- Return types should be explicitly defined on components
- Destructure props in function parameters
- Follow existing component structure in `/src/components`
- Maintain strict TypeScript typing (strict mode enabled)
- Keep components focused and small with clear separation of concerns
- Follow existing naming patterns for new files and components
- Components should externalize their data in `/src/config` when appropriate

## Styling
- Using Tailwind CSS 4 
  - Please read the updated documentation https://tailwindcss.com/docs/theme
  - No need for tailwind.config.js
  - No need for postcss
- Follow the site's color scheme:
  - Primary text: zinc-800 (dark: zinc-100)
  - Secondary text: zinc-600 (dark: zinc-400)
  - Background: white/zinc-50 (dark: black/zinc-900)
  - Accents: teal-500 (dark: teal-400)
- Support both light and dark mode with appropriate color variations
- Use responsive design patterns with Tailwind's mobile-first approach
- Maintain consistent spacing using Tailwind's spacing scale