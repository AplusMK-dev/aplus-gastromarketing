import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090909] text-gray-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5 items-start">
          
          {/* Column 1: Aplus Identity and Statement */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-none flex items-center justify-center">
                <span className="font-display font-black text-black text-xl">a</span>
              </div>
              <span className="font-display font-bold text-white tracking-widest text-lg">
                APLUS <span className="text-[10px] text-gray-500 font-mono tracking-normal block leading-tight">GASTROMARKETING</span>
              </span>
            </div>
            
            <p className="font-sans text-sm text-gray-400 font-light max-w-sm leading-relaxed">
              La primera y más consolidada agencia de marketing de recomendación y posicionamiento especializada 100% en hostelería, alimentación y restauración.
            </p>
            
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-gray-600">SÍGUENOS:</span>
              <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
              <span className="text-gray-800">•</span>
              <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
              <span className="text-gray-800">•</span>
              <a href="#" className="hover:text-white transition-colors">YOUTUBE</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              ESTRATEGIA GASTRO
            </span>
            <ul className="space-y-2 text-sm font-sans font-light">
              <li><a href="#que-hacemos" className="hover:text-white transition-colors">¿Qué hacemos?</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Nuestros Servicios</a></li>
              <li><a href="#ecosistema" className="hover:text-white transition-colors">Ecosistema Aplus</a></li>
              <li><a href="#equipo" className="hover:text-white transition-colors">Equipo</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Offices */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              OFICINA CENTRAL ESPAÑA
            </span>
            <ul className="space-y-3.5 text-sm font-sans font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#86a695] shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=C/+Tarragona,+30+Local,+28045+Madrid"
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="hover:text-white transition-colors text-left"
                >
                  C/ Tarragona, 30 Local. 28045 Madrid, España
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#86a695] shrink-0 mt-0.5" />
                <a href="tel:+34917324866" className="hover:text-white transition-colors">
                  +34 917 32 48 66
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#86a695] shrink-0 mt-0.5" />
                <a href="mailto:clientes@aplusmk.com" className="hover:text-white transition-colors">
                  clientes@aplusmk.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Aplus Gastromarketing. Todos los derechos reservados.
          </p>
          
          <div className="flex gap-6 text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 border border-white/10 hover:border-white/30 text-gray-500 hover:text-white transition-all font-mono text-[10px]"
            title="Volver Arriba"
          >
            <span>SUBIR</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
