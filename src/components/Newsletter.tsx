import { useState, FormEvent } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { isWordPress, submitToWordPress } from '../lib/wordpress';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Por favor, indica un correo electrónico.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Indica un correo electrónico válido.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      if (isWordPress()) {
        await submitToWordPress('newsletter', { email });
      }

      setSuccess(true);
      setEmail('');
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'No se pudo completar la suscripción.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="bg-[#0c0c0c] py-24 md:py-32 text-white border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Animated Headline and Subtexts with Elegant Scroll Entrance */}
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
          className="flex flex-col items-center select-none mb-10"
        >
          {/* Decorative micro letterspacing tracker */}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#86a695] font-black block mb-4"
          >
            REVOLUCIÓN DIARIA • RESTAURACIÓN & MARKETING
          </motion.span>
          
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="font-display font-black text-3xl md:text-5xl uppercase tracking-tight text-white mb-6"
          >
            ÚNETE A LA REVOLUCIÓN GASTRONÓMICA
          </motion.h2>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="font-sans text-gray-400 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Recibe en tu correo tendencias culinarias, informes estratégicos, análisis de mercado y los secretos mejor guardados de la restauración moderna.
          </motion.p>
        </motion.div>

        {success ? (
          <div className="max-w-md mx-auto bg-emerald-950/40 border border-emerald-900/30 text-emerald-300 rounded-none p-6 flex flex-col items-center gap-3 animate-fade-in">
            <div className="w-10 h-10 rounded-none bg-emerald-900/40 flex items-center justify-center text-emerald-400">
              <Check className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <p className="font-display font-bold text-sm tracking-wide">¡Te has suscrito con éxito!</p>
              <p className="text-xs text-emerald-400/80 mt-1 font-sans">Pronto recibirás nuestras newsletters y contenidos exclusivos de Aplus.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-xl mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch justify-center">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Tu correo electrónico *"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#B2D3C2] text-sm font-sans"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-curtain btn-curtain-green px-9 py-4 font-display font-extrabold text-[13px] tracking-widest uppercase focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'ENVIANDO...' : 'SUSCRIBIRSE'}
              </button>
            </div>
            
            {error && (
              <p className="text-xs text-red-400 font-mono text-left flex items-center gap-1.5 animate-fade-in pl-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{error}</span>
              </p>
            )}
          </form>
        )}

        <p className="text-[10px] text-gray-500 font-sans mt-6">
          Al suscribirte, aceptas nuestra política de privacidad y el tratamiento de datos para fines comerciales. No hacemos spam.
        </p>
      </div>
    </section>
  );
}
