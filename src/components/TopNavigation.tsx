import React, { useState } from 'react';
import { ExternalLink, Menu, X, Globe, SlidersHorizontal } from 'lucide-react';

interface TopNavigationProps {
  mainSiteUrl: string;
  onOpenSettings?: () => void;
  subdomain: string;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  mainSiteUrl,
  onOpenSettings,
  subdomain,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Эхлэл', href: '#hero' },
    { label: 'Миний тухай', href: '#about' },
    { label: 'Бүтээлүүд', href: '#projects' },
    { label: 'Ур чадвар', href: '#skills' },
    { label: 'Холбоо барих', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, single line */}
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-amber-600 transition-colors"
        >
          Хүсэлбаатар
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              title="Netlify холбоос тохируулах"
              className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Домэйн тохируулах"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          )}

          <a
            href={mainSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>Үндсэн сайт</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              className="p-2 text-stone-600 hover:text-stone-900 rounded-md"
              aria-label="Тохиргоо"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg"
            aria-label="Цэс нээх"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-stone-200 bg-white px-6 py-4 shadow-lg">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-stone-700 hover:text-amber-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <div className="text-xs text-stone-500 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Netlify: {subdomain || '[НЕТЛИФАЙ]'}</span>
              </div>
              <a
                href={mainSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors"
              >
                <span>Үндсэн сайт руу очих</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
