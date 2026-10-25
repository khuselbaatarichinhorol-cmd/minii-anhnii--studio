import React, { useState, useEffect } from 'react';
import { CREATOR_PROFILE, PROJECTS_LIST } from './data/portfolioData';
import { ProjectItem } from './types';
import { TopNavigation } from './components/TopNavigation';
import { NetlifyDomainBanner } from './components/NetlifyDomainBanner';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [subdomain, setSubdomain] = useState<string>(() => {
    const saved = localStorage.getItem('user_netlify_subdomain');
    if (saved && saved !== '[НЕТЛИФАЙ]') return saved;
    return 'glittery-kataifi-2e78a4';
  });
  const [bannerOpen, setBannerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(() => {
    return localStorage.getItem('user_custom_photo_url') || null;
  });

  const handleUpdateSubdomain = (newSub: string) => {
    setSubdomain(newSub);
    localStorage.setItem('user_netlify_subdomain', newSub);
  };

  const handleUpdatePhotoUrl = (url: string | null) => {
    setCustomPhotoUrl(url);
    if (url) {
      localStorage.setItem('user_custom_photo_url', url);
    } else {
      localStorage.removeItem('user_custom_photo_url');
    }
  };

  const mainSiteUrl = `https://${subdomain}.netlify.app`;

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-500 selection:text-white">
      {/* Optional Netlify Subdomain Customizer Banner */}
      <NetlifyDomainBanner
        subdomain={subdomain}
        onUpdateSubdomain={handleUpdateSubdomain}
        isOpen={bannerOpen}
        onClose={() => setBannerOpen(false)}
      />

      {/* Top Bar matching Contract */}
      <TopNavigation
        mainSiteUrl={mainSiteUrl}
        onOpenSettings={() => setBannerOpen((prev) => !prev)}
        subdomain={subdomain}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Split-Screen & Stats */}
        <HeroSection
          profile={CREATOR_PROFILE}
          subdomain={subdomain}
          onUpdateSubdomain={handleUpdateSubdomain}
          onExploreProjects={handleExploreProjects}
          projects={PROJECTS_LIST}
          customPhotoUrl={customPhotoUrl}
          onUpdatePhotoUrl={handleUpdatePhotoUrl}
        />

        {/* "Миний бүтээлүүд" хэсэг (Карт бүр шинэ цонхонд нээгдэнэ) */}
        <ProjectsSection
          projects={PROJECTS_LIST}
          subdomain={subdomain}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Миний тухай */}
        <AboutSection profile={CREATOR_PROFILE} />

        {/* Ур чадварууд */}
        <SkillsSection />

        {/* Холбоо барих */}
        <ContactSection profile={CREATOR_PROFILE} />
      </main>

      {/* Footer */}
      <Footer
        projects={PROJECTS_LIST}
        subdomain={subdomain}
        onOpenSettings={() => setBannerOpen(true)}
      />

      {/* Lightbox / Details Modal */}
      <ProjectModal
        project={selectedProject}
        subdomain={subdomain}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
