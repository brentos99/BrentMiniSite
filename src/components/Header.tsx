import { useState, useEffect } from 'react';

// Add type declaration for global window object
declare global {
  interface Window {
    toggleDarkMode?: () => void;
  }
}

function MobileMenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      )}
    </svg>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    // Initial state based on class presence
    setIsDark(document.documentElement.classList.contains('dark'));
    
    // Create event listener for theme changes
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    // Watch for changes to the dark class
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          handleThemeChange();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    // Call the global function defined in index.html
    if (window.toggleDarkMode) {
      window.toggleDarkMode();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {!isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      )}
    </button>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 sm:px-8 backdrop-blur-sm bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-100 dark:border-zinc-800">
      <div className="flex items-center">
        <a href="/" className="text-xl font-bold text-zinc-900 dark:text-white">Brent England</a>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <nav className="flex space-x-6">
          <a href="#about" className="text-sm font-medium text-zinc-700 hover:text-teal-500 dark:text-zinc-300 dark:hover:text-teal-400">About</a>
          <a href="#projects" className="text-sm font-medium text-zinc-700 hover:text-teal-500 dark:text-zinc-300 dark:hover:text-teal-400">Projects</a>
          <a href="#experience" className="text-sm font-medium text-zinc-700 hover:text-teal-500 dark:text-zinc-300 dark:hover:text-teal-400">Experience</a>
        </nav>
        <ThemeToggle />
      </div>
      
      <div className="flex md:hidden items-center space-x-4">
        <ThemeToggle />
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          aria-label="Toggle menu"
        >
          <MobileMenuIcon isOpen={isMenuOpen} />
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-16 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 py-4 md:hidden z-40">
          <nav className="flex flex-col space-y-3 px-6">
            <a href="#about" className="py-2 text-base font-medium text-zinc-700 hover:text-teal-500 dark:text-zinc-300 dark:hover:text-teal-400">About</a>
            <a href="#projects" className="py-2 text-base font-medium text-zinc-700 hover:text-teal-500 dark:text-zinc-300 dark:hover:text-teal-400">Projects</a>
            <a href="#experience" className="py-2 text-base font-medium text-zinc-700 hover:text-teal-500 dark:text-zinc-300 dark:hover:text-teal-400">Experience</a>
          </nav>
        </div>
      )}
    </header>
  );
}
