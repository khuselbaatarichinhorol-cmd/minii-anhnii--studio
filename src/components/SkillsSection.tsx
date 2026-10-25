import React from 'react';
import { SKILLS_LIST } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            <span>Технологи</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Чадвар</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display mb-3">
            Эзэмшсэн ур чадварууд
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Веб төсөл, тоглоом болон дижитал контент бүтээхэд ашигладаг үндсэн арга барил, технологиуд.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_LIST.map((skill, index) => (
            <div
              key={skill.name}
              className="p-6 bg-white rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-xs transition-all space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                <span>0{index + 1}</span>
                <span className="text-amber-700 font-sans font-medium">{skill.level}</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-display">
                {skill.name}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
