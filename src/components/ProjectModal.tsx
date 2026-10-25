import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Globe, Tag } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  subdomain: string;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  subdomain,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const projectUrl = `https://${subdomain}.netlify.app${project.path}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Visual */}
        <div className="relative aspect-16/9 w-full bg-stone-100 overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/70 text-white hover:bg-stone-900 transition-colors cursor-pointer"
            aria-label="Хаах"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-4 bg-stone-900/80 backdrop-blur-sm text-stone-100 text-xs px-3 py-1 rounded-md font-medium">
            {project.categoryLabel}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {/* Metadata */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
            <span>Төслийн танилцуулга</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-amber-700">{project.path}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display mb-3">
            {project.title}
          </h2>

          <p className="text-base text-stone-600 leading-relaxed mb-6">
            {project.detailedInfo}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
              Онцлох боломжууд
            </h4>
            <div className="space-y-2.5">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Tags */}
          <div className="mb-8 pt-5 border-t border-stone-100">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              Ашигласан технологи ба түлхүүр үгс
            </h4>
            <div className="flex flex-wrap gap-2 text-xs text-stone-600">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-stone-100 text-stone-700 rounded-md font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* URL Box */}
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 mb-6 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-stone-600 min-w-0">
              <Globe className="w-4 h-4 text-stone-400 shrink-0" />
              <span className="font-mono truncate">{projectUrl}</span>
            </div>
            <span className="text-stone-400 text-[11px] shrink-0">Шинэ цонхонд нээгдэнэ</span>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-stone-600 hover:text-stone-900 rounded-xl transition-colors cursor-pointer"
            >
              Буцах
            </button>
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-colors shadow-sm"
            >
              <span>Төсөл рүү үсрэх (Шинэ цонх)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
