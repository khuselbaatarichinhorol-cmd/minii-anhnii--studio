import React, { useState, useRef } from 'react';
import { ExternalLink, ArrowDown, MapPin, Zap, Globe, Upload, Image as ImageIcon, Link, X, Check, RefreshCw } from 'lucide-react';
import { CreatorProfile, ProjectItem } from '../types';

interface HeroSectionProps {
  profile: CreatorProfile;
  subdomain: string;
  onUpdateSubdomain: (sub: string) => void;
  onExploreProjects: () => void;
  projects: ProjectItem[];
  customPhotoUrl: string | null;
  onUpdatePhotoUrl: (url: string | null) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  subdomain,
  onUpdateSubdomain,
  onExploreProjects,
  projects,
  customPhotoUrl,
  onUpdatePhotoUrl,
}) => {
  const [photoError, setPhotoError] = useState(false);
  const [quickInput, setQuickInput] = useState(subdomain);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setQuickInput(subdomain);
  }, [subdomain]);

  // The primary photo URL: custom photo if user uploaded or specified, otherwise Netlify URL
  const netlifyDefaultPhoto = `https://${subdomain}.netlify.app/my-photo.png`;
  const activePhotoSrc = customPhotoUrl || netlifyDefaultPhoto;
  const mainSiteUrl = `https://${subdomain}.netlify.app`;

  const handleApplyQuickSubdomain = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = quickInput.trim().replace(/^https?:\/\//, '').replace(/\.netlify\.app.*$/, '');
    if (clean) {
      onUpdateSubdomain(clean);
      setPhotoError(false); // retry loading photo with new subdomain
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2000);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          onUpdatePhotoUrl(result);
          setPhotoError(false);
          setShowPhotoModal(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePhotoUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      onUpdatePhotoUrl(urlInput.trim());
      setPhotoError(false);
      setShowPhotoModal(false);
      setUrlInput('');
    }
  };

  const handleResetPhoto = () => {
    onUpdatePhotoUrl(null);
    setPhotoError(false);
    setShowPhotoModal(false);
  };

  return (
    <section id="hero" className="relative pt-8 pb-14 md:pt-12 md:pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Quick Launch Bar: 1-Click Access directly at the top */}
        <div className="mb-8 p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-medium text-stone-800">
            <Zap className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="font-semibold">Хурдан нээх:</span>
            <span className="text-stone-500 hidden sm:inline">Бүтээлүүд рүү 1 товшилтоор үсрэх:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {projects.map((proj) => (
              <a
                key={proj.id}
                href={`https://${subdomain}.netlify.app${proj.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 bg-white hover:bg-stone-900 hover:text-white text-stone-700 font-medium rounded-lg border border-stone-200 transition-colors inline-flex items-center gap-1 shadow-2xs whitespace-nowrap"
              >
                <span>{proj.title}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>
        </div>

        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-700 mb-3">
              <span>Хувийн танилцуулга</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Бүтээлүүд 2026</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Netlify Web</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.15] mb-5 max-w-2xl text-balance">
              Веб хөгжүүлэлт, интерактив тоглоом & бүтээлч төслүүд
            </h1>

            {/* Lead Prose */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6 max-w-xl">
              Сайн байна уу! Намайг <span className="font-semibold text-stone-900">{profile.name}</span> гэдэг.
              Би орчин үеийн веб технологи, JavaScript интерактив тоглоомууд болон дижитал контентууд хийж байна.
              Бүх төслүүд маань нээлттэй бөгөөд монгол хэл дээр зохион бүтээгдсэн.
            </p>

            {/* Instant Netlify Subdomain Quick-Bar */}
            <form onSubmit={handleApplyQuickSubdomain} className="mb-6 p-2.5 bg-stone-100/80 border border-stone-200 rounded-xl flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 text-xs text-stone-600 pl-1">
                <Globe className="w-3.5 h-3.5 text-stone-500" />
                <span className="font-medium">Netlify домэйн:</span>
              </div>
              <div className="flex items-center bg-white border border-stone-200 rounded-lg overflow-hidden text-xs">
                <span className="px-2 py-1 text-stone-400 bg-stone-50 select-none">https://</span>
                <input
                  type="text"
                  value={quickInput}
                  onChange={(e) => setQuickInput(e.target.value)}
                  placeholder="дэд-домэйн"
                  className="px-2 py-1 w-28 sm:w-36 font-mono text-stone-900 focus:outline-none"
                />
                <span className="px-2 py-1 text-stone-400 bg-stone-50 select-none">.netlify.app</span>
              </div>
              <button
                type="submit"
                className="px-3 py-1 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
              >
                {savedSuccess ? 'Хадгаллаа!' : 'Шинэчлэх'}
              </button>
              {subdomain !== 'glittery-kataifi-2e78a4' && (
                <button
                  type="button"
                  onClick={() => {
                    setQuickInput('glittery-kataifi-2e78a4');
                    onUpdateSubdomain('glittery-kataifi-2e78a4');
                    setPhotoError(false);
                  }}
                  className="px-2 py-1 text-[11px] font-medium text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors cursor-pointer"
                >
                  glittery-kataifi-2e78a4 болгох
                </button>
              )}
            </form>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-stone-900 rounded-xl hover:bg-stone-800 transition-colors shadow-sm whitespace-nowrap cursor-pointer"
              >
                <span>Бүтээлүүдтэй танилцах</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={mainSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-stone-700 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-xs whitespace-nowrap"
              >
                <span>Үндсэн сайт нээх</span>
                <ExternalLink className="w-4 h-4 text-stone-500" />
              </a>
            </div>

            {/* Quiet metadata line */}
            <div className="mt-8 pt-5 border-t border-stone-200/80 flex flex-wrap items-center gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1.5 font-medium text-stone-700">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                {profile.location}
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>И-мэйл: {profile.email}</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="font-mono text-stone-600">{subdomain}.netlify.app</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container - NO AI RANDOM AVATARS */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-full min-h-[380px] lg:min-h-[460px] rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-md flex flex-col justify-between group">
              {/* Photo Display if available and not in error */}
              {!photoError ? (
                <div className="relative w-full h-full flex-1 min-h-[300px]">
                  <img
                    src={activePhotoSrc}
                    alt={`${profile.name} - Миний зураг`}
                    onError={() => setPhotoError(true)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent pointer-events-none" />
                </div>
              ) : (
                /* Elegant, clean monogram profile frame when image is not yet uploaded on Netlify */
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950">
                  <div className="w-24 h-24 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center text-amber-400 font-extrabold text-4xl font-display shadow-inner mb-4">
                    Х
                  </div>

                  <h3 className="text-2xl font-bold text-white font-display">
                    {profile.name}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 max-w-xs">
                    {profile.title}
                  </p>

                  <div className="mt-4 px-3 py-1.5 bg-stone-800/80 border border-stone-700/80 rounded-xl text-[11px] text-stone-300 font-mono">
                    {activePhotoSrc}
                  </div>

                  <p className="text-xs text-stone-400 mt-3 max-w-xs">
                    Netlify дээр <span className="text-amber-300 font-mono">/my-photo.png</span> байршуулаагүй бол доорх товчоор шууд өөрийн зургаа сонгож харуулах боломжтой.
                  </p>
                </div>
              )}

              {/* Bottom bar with creator label & "Зураг солих / сонгох" button */}
              <div className="p-5 bg-stone-950/90 border-t border-stone-800/80 flex items-center justify-between gap-3 text-white">
                <div className="min-w-0">
                  <p className="text-xs font-mono uppercase tracking-wider text-amber-400 truncate">
                    {profile.title}
                  </p>
                  <p className="text-sm font-bold truncate">
                    {profile.name}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowPhotoModal(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-200 bg-stone-800 hover:bg-stone-700 hover:text-white rounded-xl border border-stone-700 transition-colors shrink-0 cursor-pointer"
                  title="Өөрийн зургаа оруулах эсвэл линк солих"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Зураг тохируулах</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Stats Strip Below Split */}
        <div className="mt-12 pt-7 border-t border-stone-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-stone-900">
                04
              </div>
              <div className="text-xs font-medium text-stone-600">
                Бие даасан бүтээлүүд
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-stone-900">
                100%
              </div>
              <div className="text-xs font-medium text-stone-600">
                Монгол хэл дээрх агуулга
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-stone-900">
                02
              </div>
              <div className="text-xs font-medium text-stone-600">
                Интерактив тоглоомын төсөл
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-stone-900">
                Netlify
              </div>
              <div className="text-xs font-medium text-stone-600">
                Хуудас бүр шууд ажиллана
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Management Modal */}
      {showPhotoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs"
          onClick={() => setShowPhotoModal(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-stone-200 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-amber-600" />
                <h3 className="text-lg font-bold text-stone-900 font-display">
                  Өөрийн зургаа тохируулах
                </h3>
              </div>
              <button
                onClick={() => setShowPhotoModal(false)}
                className="p-1 text-stone-400 hover:text-stone-900 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Method 1: Local Device Upload */}
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-3">
              <div className="text-xs font-semibold text-stone-900">
                1. Компьютер / утсаас өөрийн зургаа оруулах
              </div>
              <p className="text-xs text-stone-500">
                Төхөөрөмж дээрх өөрийн бодит зургаа шууд сонгон байршуулж харна.
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-colors cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Зураг файлаа сонгох</span>
              </button>
            </div>

            {/* Method 2: Custom URL */}
            <form onSubmit={handleSavePhotoUrl} className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-3">
              <div className="text-xs font-semibold text-stone-900">
                2. Зургийн холбоос (URL) оруулах
              </div>
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://таны-сайт.netlify.app/my-photo.png"
                className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-stone-800 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors cursor-pointer"
              >
                <Link className="w-3.5 h-3.5" />
                <span>Линкээр хадгалах</span>
              </button>
            </form>

            {/* Reset to Netlify default */}
            <div className="flex items-center justify-between pt-2 text-xs">
              <button
                type="button"
                onClick={handleResetPhoto}
                className="inline-flex items-center gap-1.5 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Анхны Netlify линк рүү буцаах</span>
              </button>
              <button
                type="button"
                onClick={() => setShowPhotoModal(false)}
                className="px-3 py-1.5 text-stone-600 hover:text-stone-900 font-medium"
              >
                Хаах
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
