import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

interface Subcategory {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  isDropdown?: boolean;
  subcategories?: Subcategory[];
}

const NAV_LINKS: NavLink[] = [
  { label: 'INICIO', href: '#inicio' },
  {
    label: 'SERVICIOS',
    href: '#servicios',
    isDropdown: true,
    subcategories: [
      { label: 'OPERADORES HORECA', href: '#operadores' },
      { label: 'MARCAS', href: '#marcas' },
      { label: 'TERRITORIOS Y PRODUCTOS', href: '#territorios' },
    ],
  },
  { label: 'EQUIPO', href: '#equipo' },
  { label: 'LA EXPRIMIDORA', href: '#newsletter' },
  { label: 'CONTACTO', href: '#contacto' },
];

interface HeaderProps {
  onOpenContact?: (category?: string) => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-black rounded-none flex items-center justify-center transition-transform duration-300 group-hover:scale-105" id="logo-circle">
            <span className="font-display font-bold text-white text-xl tracking-tight">a</span>
          </div>
          <span className="font-display font-medium text-lg tracking-wider text-black hidden sm:inline">
            Aplus <span className="text-xs font-mono font-normal tracking-normal text-gray-400 bg-gray-50 px-2 py-0.5 rounded-none ml-1">GASTROMARKETING</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 flex-nowrap whitespace-nowrap">
          {NAV_LINKS.map((link) => {
            if (link.isDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative group py-2"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div
                    className="flex items-center gap-1 text-[12px] font-display font-bold tracking-[0.14em] text-gray-900 cursor-default whitespace-nowrap lg:after:absolute lg:after:bottom-[-2px] lg:after:left-0 lg:after:w-0 lg:after:h-[2px] lg:after:bg-black lg:after:transition-all lg:after:duration-300 group-hover:after:w-full transition-colors duration-200 select-none pb-0.5"
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Dropdown menu */}
                  <div
                    className={`absolute left-0 mt-3 w-60 bg-white border border-gray-100 shadow-xl transition-all duration-300 origin-top-left rounded-none z-50 ${
                      isDropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                        : 'opacity-0 -translate-y-2 pointer-events-none invisible'
                    }`}
                  >
                    <div className="py-2.5 flex flex-col">
                      {link.subcategories?.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="px-5 py-2.5 text-[11px] font-display font-extrabold tracking-wider text-gray-900 hover:text-black hover:bg-[#B2D3C2] flex items-center justify-between transition-colors duration-150 group/item"
                        >
                          <span>{sub.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 transition-colors duration-150 group-hover/item:text-black" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] font-display font-bold tracking-[0.14em] text-gray-900 hover:text-gray-500 whitespace-nowrap transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contacto"
            className="btn-curtain btn-curtain-black flex items-center gap-1.5 px-4.5 py-2 rounded-none font-display font-bold tracking-wider text-[11px] focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1"
          >
            HABLEMOS
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-none transition-colors"
          aria-label="Toggle Menu"
          id="menu-toggle-btn"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-menu-panel"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black rounded-none flex items-center justify-center">
              <span className="font-display font-bold text-white text-lg">a</span>
            </div>
            <span className="font-display font-bold text-black tracking-wider text-sm">APLUS</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-black hover:bg-gray-100 rounded-none transition-colors"
            id="mobile-close-btn"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-8">
          {NAV_LINKS.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.label} className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#86a695] font-black uppercase">
                    {link.label}
                  </span>
                  <div className="flex flex-col gap-3.5 pl-4 border-l border-gray-100 mt-2">
                    {link.subcategories?.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="text-xs font-display font-bold tracking-wider text-gray-900 hover:text-gray-500 transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-display font-bold tracking-wider text-gray-900 hover:text-gray-500 transition-colors"
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="btn-curtain btn-curtain-black mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-none font-display font-bold tracking-wider text-xs text-center focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1"
          >
            HABLEMOS
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>
      </div>

      {/* Overlay behind mobile menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-xs z-40 transition-opacity"
        />
      )}
    </header>
  );
}
