import { useState } from 'react';
import { Play, X, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const [muted, setMuted] = useState(true);

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center bg-black overflow-hidden pt-20"
    >
      {/* Background image & gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=1600&auto=format&fit=crop"
          alt="Gastronomy textures"
          className="w-full h-full object-cover opacity-85 scale-105 animate-subtle-zoom rounded-full"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/30 rounded-full" />
      </div>

      {/* Main Content Containers */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        {/* Giant premium statement with elegant slide-up entrance */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] max-w-4xl text-white mb-6">
          <span className="block overflow-hidden py-1">
            <motion.span 
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.8, ease: [0.05, 0.95, 0.05, 1] }}
            >
              SOMOS MARKETING
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span 
              className="block text-white"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.8, ease: [0.05, 0.95, 0.05, 1], delay: 0.22 }}
            >
              GASTRONÓMICO
            </motion.span>
          </span>
        </h1>

        {/* Informational Subtext */}
        <motion.p 
          className="font-sans text-lg md:text-xl lg:text-2xl font-light text-gray-100 max-w-2xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.44 }}
        >
          Equipo multidisciplinar 100% dedicado al gastromarketing
        </motion.p>

        {/* Interactive Play Reel Elements */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          <span className="font-display font-bold tracking-[0.25em] text-xs uppercase text-gray-300">
            REEL
          </span>
          <button
            onClick={() => setShowVideo(true)}
            className="w-16 h-16 rounded-none bg-white text-black hover:bg-emerald-100 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
            aria-label="Play gastromarketing reel"
            id="play-reel-btn"
          >
            <Play className="w-6 h-6 fill-current text-black translate-x-0.5 transition-transform group-hover:rotate-12" />
          </button>
          <span className="font-display font-bold tracking-[0.25em] text-xs uppercase text-gray-300">
            PLAY
          </span>
        </motion.div>
      </div>

      {/* Video Player Modal Overlay */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in">
          <div className="absolute top-6 right-6 flex items-center gap-4">
            {/* Audio Toggle */}
            <button
              onClick={() => setMuted(!muted)}
              className="p-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-none transition-colors flex items-center justify-center"
              title={muted ? "Activar sonido" : "Silenciar"}
            >
              {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="p-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-none transition-colors flex items-center justify-center"
              aria-label="Cerrar reproductor"
              id="close-video-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="w-full max-w-4xl aspect-video rounded-none overflow-hidden shadow-2xl bg-black border border-white/10 relative">
            <video
              className="w-full h-full object-cover"
              src="https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-fresh-vegetable-salad-41584-large.mp4"
              autoPlay
              loop
              muted={muted}
              playsInline
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-4 rounded-none flex items-center justify-between border border-white/5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-emerald-400">Cinemática Gastro</span>
                <p className="text-white text-sm font-display font-bold">Aplus Gastromarketing - Portfolio Showreel</p>
              </div>
              <div className="text-[11px] font-mono text-gray-400">
                Loop de Demostración
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
