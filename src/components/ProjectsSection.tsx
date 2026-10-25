import React, { useState } from 'react';
import { ExternalLink, Layers, Eye, Sparkles, Compass } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  subdomain: string;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  subdomain,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'career' | 'media' | 'games' | 'culture'>('all');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const getComputedUrl = (project: ProjectItem) => {
    return `https://${subdomain}.netlify.app${project.path}`;
  };

  return (
    <section id="projects" className="py-20 bg-stone-100/60 border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
              <span>Цуглуулга</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>4 Төсөл</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
              Миний бүтээлүүд
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-xl">
              Карт бүр дээр дарж тухайн төслийн хуудас руу шинэ цонхонд шууд шилжин үзэх боломжтой.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented control) */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Бүгд ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('career')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'career'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Карьер & Ажил
            </button>
            <button
              onClick={() => setActiveFilter('media')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'media'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              YouTube
            </button>
            <button
              onClick={() => setActiveFilter('games')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'games'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Тоглоомын сайт
            </button>
            <button
              onClick={() => setActiveFilter('culture')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'culture'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Малаа хашаандаа
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const projectUrl = getComputedUrl(project);

            return (
              <div
                key={project.id}
                className="group flex flex-col bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-stone-300 hover:shadow-md transition-all duration-300"
              >
                {/* Visual Asset Container */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white text-xs font-mono">
                      <span>{projectUrl}</span>
                    </div>
                  </div>

                  {/* Top corner category banner */}
                  <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-stone-100 px-3 py-1 rounded-md text-xs font-medium tracking-wide">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata Header (Zero-Pill) */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span className="font-mono">0{index + 1}</span>
                      <span aria-hidden="true">·</span>
                      <span>Netlify Хуудас</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-amber-700">{project.path}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display mb-2 group-hover:text-amber-700 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-stone-600 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Unboxed Tags Separators */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tag} className="flex items-center gap-1.5">
                          {tagIndex > 0 && <span aria-hidden="true" className="text-stone-300">/</span>}
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Card opens in new window, plus details modal option */}
                  <div className="pt-5 border-t border-stone-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors py-2 px-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-stone-400" />
                      <span>Танилцуулга</span>
                    </button>

                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-all shadow-xs group-hover:bg-amber-600"
                    >
                      <span>Шинэ цонхонд нээх</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-500">
            * Дээрх бүх бүтээлүүд <span className="font-mono text-stone-700">https://{subdomain}.netlify.app</span> дээр шинэ таб (цонх)-нд аюулгүй нээгдэнэ.
          </p>
        </div>
      </div>
    </section>
  );
};
