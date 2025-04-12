import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import SocialLink from './SocialLink';

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-zinc-100 dark:border-zinc-800 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-6 sm:items-start">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} Brent England. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <SocialLink href="https://github.com/brentos99" icon={GitHubIcon} />
            <SocialLink href="https://www.linkedin.com/in/brentengland99/" icon={LinkedInIcon} />
          </div>
        </div>
      </div>
    </footer>
  );
}
