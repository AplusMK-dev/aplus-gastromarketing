import { useState, FormEvent } from 'react';
import { ArrowDown, Mail, Check, User, MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { challenges as RETO_ITEMS } from '../data';
import { RetoOption as RetoItem } from '../types';
import { isWordPress, submitToWordPress } from '../lib/wordpress';

export default function CuentanosReto() {
  const [activeReto, setActiveReto] = useState<RetoItem | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleRetoClick = (item: RetoItem) => {
    setActiveReto(activeReto?.id === item.id ? null : item);
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    setSubmitError('');
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      if (isWordPress()) {
        await submitToWordPress('contact', {
          name,
          email,
          message,
          category: activeReto?.title ?? '',
        });
      }

      setSubmitted(true);
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
      }, 4000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'No se pudo enviar el mensaje.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto-directo" className="bg-[#F4F3EF] py-24 md:py-32 border-b border-gray-150">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Animated Label and Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
          className="mb-16"
        >
          {/* Underlined label */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="mb-12"
          >
            <span className="font-mono text-xs text-gray-400 tracking-[0.3em] block uppercase mb-3">
              [ C O N T A C T O ]
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="font-display font-black text-4xl md:text-7xl lg:text-8xl tracking-tight text-black uppercase text-center lg:text-left leading-none"
          >
            CUÉNTANOS TU RETO
          </motion.h2>
        </motion.div>

        {/* Option Grid with scroll entry */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8" 
          id="reto-items-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {RETO_ITEMS.map((item) => {
            const isCurrentlySelected = activeReto?.id === item.id;
            return (
              <motion.div
                key={item.id}
                className={`bg-white rounded-none p-8 flex flex-col justify-between h-full cursor-pointer select-none transition-all duration-350 ${
                  isCurrentlySelected ? 'border border-black ring-1 ring-black' : 'border border-gray-200'
                }`}
                id={`reto-box-${item.id}`}
                onClick={() => handleRetoClick(item)}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { type: "spring", stiffness: 100, damping: 15 }
                  }
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  boxShadow: "0 20px 30px -10px rgba(0,0,0,0.08)",
                  borderColor: isCurrentlySelected ? "#000000" : "#4a725e"
                }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                <div className="space-y-6">
                  {/* Subhead Index */}
                  <span className="font-mono text-3xl font-light text-gray-300 block">
                    {item.num}
                  </span>
                  
                  {/* Category Title */}
                  <h3 className="font-display font-black text-xl md:text-2xl uppercase tracking-tight text-gray-950">
                    {item.title}
                  </h3>
                  
                  {/* Short descriptive block */}
                  <p className="font-sans text-sm text-gray-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Main Action Trigger Card */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#86a695] block mb-2 font-black">
                    ME INTERESA
                  </span>
                  <div className="btn-curtain btn-curtain-black w-full py-[18px] text-center font-display font-extrabold text-[11px] tracking-widest uppercase flex items-center justify-center gap-2 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1">
                    <span>{item.sectionName || "PLANIFICAR RETO"}</span>
                    <ArrowDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isCurrentlySelected ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic Interactive Inquiry Form context block */}
        <AnimatePresence>
          {activeReto && (
            <motion.div
              className="mt-12 bg-white rounded-none border border-black shadow-lg p-8 md:p-12 max-w-3xl mx-auto"
              id="reto-inquiry-box"
              initial={{ opacity: 0, y: 30, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 30, height: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              style={{ overflow: 'hidden' }}
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#86a695] font-black block mb-2 font-black">
                    CONEXIÓN EN CURSO • SECCIÓN {activeReto.num}
                  </span>
                  <p className="font-display font-black text-xl uppercase tracking-tight text-gray-900">
                    {activeReto.title}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveReto(null);
                  }}
                  className="text-gray-400 hover:text-black font-mono text-xs uppercase hover:underline cursor-pointer"
                >
                  [ CERRAR ]
                </button>
              </div>

              {submitted ? (
                <motion.div 
                  className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-none p-6 text-center space-y-4"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-none flex items-center justify-center mx-auto text-emerald-600">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="font-display font-bold text-lg md:text-xl">¡Tu Reto ha sido Enviado!</h4>
                  <p className="text-sm font-sans font-light text-emerald-700 max-w-md mx-auto">
                    Hemos recibido tu solicitud de conexión para la sección <strong className="font-bold">{activeReto.title}</strong>. Un especialista del equipo de gastromarketing de Aplus te contactará en un plazo máximo de 24 horas laborables.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5" onClick={(e) => e.stopPropagation()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500 flex items-center gap-1.5 font-bold">
                        <User className="w-3 h-3 text-gray-400" /> Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Sara Pérez"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-black focus:outline-none rounded-none text-sm transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500 flex items-center gap-1.5 font-bold">
                        <Mail className="w-3 h-3 text-gray-400" /> Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ej. sara@marca.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-black focus:outline-none rounded-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500 flex items-center gap-1.5 font-bold font-black">
                      <MessageSquare className="w-3 h-3 text-gray-400" /> Detalla tu Reto o Necesidad Comercial
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={activeReto.placeholderText}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-black focus:outline-none rounded-none text-sm transition-all"
                    />
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-600 font-sans">{submitError}</p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-curtain btn-curtain-black w-full py-4 font-display font-extrabold text-[13px] tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'ENVIANDO...' : 'ENVIAR RETO AL EQUIPO'}</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
