import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import QueHacemos from "./components/QueHacemos";
import Diferencia from "./components/Diferencia";
import Ecosistema from "./components/Ecosistema";
import OtrasOrganizaciones from "./components/OtrasOrganizaciones";
import AyudaEcosistema from "./components/AyudaEcosistema";
import CuetanosReto from "./components/CuetanosReto";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import ReelModal from "./components/ReelModal";
import Operadores from "./components/Operadores";
import Marcas from "./components/Marcas";
import Territorios from "./components/Territorios";
import ProyectoDetalle from "./components/ProyectoDetalle";
import Equipo from "./components/Equipo";
import Contacto from "./components/Contacto";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [initialCategory, setInitialCategory] = useState("");
  const [isReelOpen, setIsReelOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'operadores' | 'marcas' | 'territorios' | 'proyecto' | 'equipo' | 'contacto'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number>(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#operadores' || hash.startsWith('#operadores')) {
        setCurrentView('operadores');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#marcas' || hash.startsWith('#marcas')) {
        setCurrentView('marcas');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#territorios' || hash.startsWith('#territorios')) {
        setCurrentView('territorios');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#equipo' || hash.startsWith('#equipo')) {
        setCurrentView('equipo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#contacto' || hash.startsWith('#contacto')) {
        setCurrentView('contacto');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash.startsWith('#proyecto-')) {
        const idStr = hash.replace('#proyecto-', '');
        const index = parseInt(idStr, 10);
        if (!isNaN(index)) {
          setSelectedProjectId(index);
          setCurrentView('proyecto');
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      } else {
        setCurrentView('home');
        // Smooth scroll to the specific section if navigating back to home sections
        if (hash && hash !== '#inicio' && hash !== '#') {
          setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    };

    // Run on initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenContact = (category: string = "") => {
    setInitialCategory(category);
    setIsContactOpen(true);
  };

  const handleOpenProject = (index: number) => {
    window.location.hash = `#proyecto-${index}`;
  };

  const handleOpenReel = () => {
    setIsReelOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-black font-sans antialiased text-rendering-optimizeLegibility leading-normal">
      {/* Dynamic Header */}
      <Header onOpenContact={handleOpenContact} />

      {/* Main Container Layout */}
      <main className="relative">
        {currentView === 'operadores' ? (
          <Operadores 
            onOpenContact={handleOpenContact} 
            onBack={() => { window.location.hash = '#inicio'; }} 
          />
        ) : currentView === 'marcas' ? (
          <Marcas 
            onOpenContact={handleOpenContact} 
            onOpenProject={handleOpenProject} 
            onBack={() => { window.location.hash = '#inicio'; }} 
          />
        ) : currentView === 'territorios' ? (
          <Territorios 
            onOpenContact={handleOpenContact} 
            onOpenProject={handleOpenProject} 
            onBack={() => { window.location.hash = '#inicio'; }} 
          />
        ) : currentView === 'proyecto' ? (
          <ProyectoDetalle 
            projectIndex={selectedProjectId} 
            onBack={() => { window.location.hash = '#marcas'; }} 
            onOpenContact={handleOpenContact} 
          />
        ) : currentView === 'equipo' ? (
          <Equipo />
        ) : currentView === 'contacto' ? (
          <Contacto />
        ) : (
          <>
            {/* Hero Section */}
            <Hero onOpenReel={handleOpenReel} onOpenContact={handleOpenContact} />

            {/* Endless tape ribbon marquee */}
            <Marquee />

            {/* Brand Description text Block */}
            <QueHacemos onOpenContact={handleOpenContact} />

            {/* Services / Difference layout */}
            <Diferencia onOpenContact={handleOpenContact} />

            {/* Ecosistema segment panels */}
            <Ecosistema />

            {/* Green key partnerships panels */}
            <OtrasOrganizaciones onOpenContact={handleOpenContact} />

            {/* Tabbed Charcoal impact evaluation targets */}
            <AyudaEcosistema onOpenContact={handleOpenContact} />

            {/* Customer simulation advisors engine */}
            <CuetanosReto onOpenContact={handleOpenContact} />
          </>
        )}
      </main>

      {/* Global Newsletter Section */}
      <Newsletter />

      {/* Static Footer */}
      <Footer />

      {/* Interactive global absolute modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialCategory={initialCategory}
      />
      <ReelModal
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
      />
    </div>
  );
}
