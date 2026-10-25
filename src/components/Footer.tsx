import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { ProjectItem } from '../types';

interface FooterProps {
  projects: ProjectItem[];
  subdomain: string;
  onOpenSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ projects, subdomain, onOpenSettings }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainSiteUrl = `https://${subdomain}.netlify.app`;

  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xl font-bold font-display text-white">
              Хүсэлбаатар
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Веб технологи, интерактив тоглоом болон сонирхолтой контентуудын цуглуулга хуудас. Бүх төслүүд Netlify платформ дээр байршсан.
            </p>
            <div className="text-xs text-stone-500 font-mono">
              Үндсэн хаяг: {mainSiteUrl}
            </div>
          </div>

          {/* Quick Project Links (Direct new-tab links to all 4 projects) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Миний бүтээлүүд
            </h4>
            <ul className="space-y-2 text-xs">
              {projects.map((proj) => (
                <li key={proj.id}>
                  <a
                    href={`https://${subdomain}.netlify.app${proj.path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{proj.title}</span>
                    <ExternalLink className="w-3 h-3 text-stone-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Navigation & Settings */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Цэс & Тохиргоо
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Эхлэл рүү буцах
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Миний тухай
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Ур чадварууд
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Холбоо барих
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenSettings}
                  className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Netlify домэйн нэр өөрчлөх
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Хүсэлбаатар. Бүх эрх хуулиар хамгаалагдсан.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Дээш очих</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
