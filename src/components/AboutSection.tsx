import React from 'react';
import { Compass, Lightbulb, Code, BookOpen } from 'lucide-react';
import { CreatorProfile } from '../types';

interface AboutSectionProps {
  profile: CreatorProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Title / Subtext */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
              <span>Танилцуулга</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Миний тухай</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display mb-4">
              Бүтээлч сэтгэлгээ ба веб технологи
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Дижитал бүтээлүүдээр дамжуулан шинэ зүйлсийг суралцах, бусдад хэрэгцээтэй бөгөөд зугаатай контент түгээх хүсэл эрмэлзэлтэй.
            </p>
          </div>

          {/* Right Detailed Story */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4 text-base text-stone-700 leading-relaxed">
              {profile.aboutText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-200">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-stone-900 font-display">
                  Цэвэр код & Веб
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  HTML5, CSS3, JavaScript ашиглан хөнгөн шуурхай, төхөөрөмж бүрт зохицсон веб хуудаснууд бүтээх.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-stone-900 font-display">
                  Монгол агуулга
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  «Малаа хашаандаа» зэрэг үндэсний өв уламжлал, соёлыг орчин үеийн тоглоомтой хослуулсан шинэлэг санаанууд.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-stone-900 font-display">
                  Контент & Видео
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  YouTube-ээр дамжуулан сонирхолтой бичлэгүүд бэлтгэж, өөрийн мэдлэг туршлагаа бусадтай хуваалцах.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
