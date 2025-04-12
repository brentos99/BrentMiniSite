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
- Use TailwindCSS for styling
- Follow existing component structure in `/src/components`
- Maintain strict TypeScript typing (strict mode enabled)
- Keep components focused and small with clear separation of concerns
- Follow existing naming patterns for new files and components

## Styling
- Using Tailwind CSS 4 
  - please read the updated documentation https://tailwindcss.com/docs/theme
  - no need for tailwind.config.js
  - no need for postcss
  