import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, RotateCcw } from 'lucide-react';
import VioletBouquet from './components/VioletBouquet';

/**
 * =========================================================================
 * CONFIGURACIÓN PERSONALIZABLE
 * Tus frases emotivas y dedicatoria para el 9 de noviembre.
 * =========================================================================
 */
const CONFIG = {
  // Secuencia de frases que preparan el momento
  phrases: [
    "Es un poco tarde pero no queria dejar pasar el dia sin regalarte algo ",
    "mejor tarde que nunca dicen.",
    "Espero que te guste.",
    "Por un día tan largo espero que te saque una sonrisa."
  ],

  // Tiempo de permanencia de cada frase en pantalla (en milisegundos)
  phraseDuration: 3500,

  // Textos del mensaje y dedicatoria final
  dedication: {
    title: "Para ti, con todo mi cariño",
    message:
      "Aunque no sean reales aquí esta mi detalle para el 9 de Noviembre, te quiero mucho",
    signature: "Att, ojitos azules "
  }
};

/**
 * Disparo calibrado de confeti simulando lluvia de pétalos en tonos violetas y lilas
 */
const triggerPetalsBurst = () => {
  const violetColors = ['#7C3AED', '#8B5CF6', '#A855F7', '#C084FC', '#DDD6FE', '#E9D5FF', '#F472B6'];

  // Explosión lateral izquierda
  confetti({
    particleCount: 45,
    angle: 60,
    spread: 60,
    origin: { x: 0.15, y: 0.65 },
    colors: violetColors,
    ticks: 280,
    gravity: 0.8,
    scalar: 1.05,
    drift: 0.1,
  });

  // Explosión lateral derecha
  confetti({
    particleCount: 45,
    angle: 120,
    spread: 60,
    origin: { x: 0.85, y: 0.65 },
    colors: violetColors,
    ticks: 280,
    gravity: 0.8,
    scalar: 1.05,
    drift: -0.1,
  });

  // Lluvia cenital que cae flotando suavemente
  setTimeout(() => {
    confetti({
      particleCount: 35,
      angle: 90,
      spread: 90,
      origin: { x: 0.5, y: -0.05 },
      colors: [...violetColors, '#FDE047'],
      ticks: 320,
      gravity: 0.45,
      scalar: 0.9,
      drift: 0.05,
    });
  }, 350);
};

export default function App() {
  // Estados del flujo UX: 'START' | 'PHRASES' | 'SURPRISE'
  const [appState, setAppState] = useState('START');
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Manejo de la secuencia de frases
  useEffect(() => {
    if (appState !== 'PHRASES') return;

    const timer = setTimeout(() => {
      if (phraseIndex < CONFIG.phrases.length - 1) {
        setPhraseIndex((prev) => prev + 1);
      } else {
        setAppState('SURPRISE');
        triggerPetalsBurst();
      }
    }, CONFIG.phraseDuration);

    return () => clearTimeout(timer);
  }, [appState, phraseIndex]);

  // Iniciar la experiencia
  const handleStart = () => {
    setPhraseIndex(0);
    setAppState('PHRASES');
  };

  // Reiniciar la experiencia
  const handleReset = () => {
    setPhraseIndex(0);
    setAppState('START');
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center overflow-x-hidden px-4 py-6 sm:py-8 select-none">
      
      {/* Resplandor ambiental de fondo */}
      <motion.div
        animate={{
          scale: appState === 'SURPRISE' ? [1, 1.15, 1] : 1,
          opacity: appState === 'SURPRISE' ? 0.85 : 0.4,
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[520px] h-[300px] sm:h-[520px] bg-gradient-to-tr from-purple-200/40 via-violet-300/30 to-pink-200/30 rounded-full blur-3xl -z-10"
      />

      <main className="w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center my-auto">
        <AnimatePresence mode="wait">
          
          {/* ========================================================== */}
          {/* 1. ESTADO START: PANTALLA DE BIENVENIDA                   */}
          {/* ========================================================== */}
          {appState === 'START' && (
            <motion.section
              key="state-start"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center py-6 sm:py-10 w-full"
            >
              {/* Píldora decorativa minimalista */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-purple-200/60 shadow-sm text-xs sm:text-sm text-purple-700 font-sans font-medium mb-5 sm:mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-500 animate-pulse" />
                <span>Un rincón pensado para ti</span>
              </motion.div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-purple-950 font-normal tracking-tight mb-3 sm:mb-4 leading-tight max-w-md px-2">
                Creo que te mereces esto
              </h1>

              <p className="font-sans text-gray-500 text-sm sm:text-base max-w-xs sm:max-w-sm mb-8 sm:mb-10 leading-relaxed font-light px-2">
                Espero que este detalle te alegre la noche
              </p>

              {/* Botón Central Interactivo con Framer Motion */}
              <motion.button
                onClick={handleStart}
                whileHover={{
                  scale: 1.04,
                  boxShadow: '0 20px 35px -5px rgba(147, 51, 234, 0.32), 0 10px 15px -5px rgba(147, 51, 234, 0.18)',
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="group relative inline-flex items-center gap-2.5 sm:gap-3 px-7 py-3.5 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white font-sans font-medium text-base sm:text-lg shadow-xl shadow-purple-500/25 cursor-pointer overflow-hidden border border-white/25 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2 tracking-wide">
                  <span>Tengo un detalle para ti</span>
                  <Heart className="w-4 h-4 fill-white/90 text-white transition-transform duration-300 group-hover:scale-125" />
                </span>

                {/* Destello de luz suave al pasar el cursor */}
                <motion.div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </motion.button>

              <motion.span
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-4 sm:mt-5 text-xs text-purple-400 font-sans font-light tracking-wider"
              >
                Toca para abrir
              </motion.span>
            </motion.section>
          )}

          {/* ========================================================== */}
          {/* 2. ESTADO PHRASES: SECUENCIA ANIMADA PREVIA               */}
          {/* ========================================================== */}
          {appState === 'PHRASES' && (
            <motion.section
              key="state-phrases"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center min-h-[220px] sm:min-h-[260px] w-full px-2"
            >
              {/* Barra / Puntos de progreso sutiles */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
                {CONFIG.phrases.map((_, idx) => (
                  <motion.div
                    key={idx}
                    layout
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className={`h-1.5 rounded-full transition-colors duration-500 ${
                      idx === phraseIndex
                        ? 'w-7 sm:w-8 bg-purple-600'
                        : idx < phraseIndex
                        ? 'w-2 bg-purple-300'
                        : 'w-2 bg-purple-100'
                    }`}
                  />
                ))}
              </div>

              {/* Contenedor animado de la frase actual */}
              <div className="min-h-[100px] sm:min-h-[130px] flex items-center justify-center max-w-lg w-full px-2">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={phraseIndex}
                    initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -18, filter: 'blur(7px)' }}
                    transition={{
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="font-serif italic text-xl sm:text-3xl md:text-4xl text-purple-950 font-normal leading-snug tracking-wide"
                  >
                    "{CONFIG.phrases[phraseIndex]}"
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Ornamento sutil inferior */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                transition={{ delay: 0.3 }}
                className="mt-6 sm:mt-8 flex items-center gap-3 text-purple-400"
              >
                <div className="w-8 sm:w-10 h-px bg-gradient-to-r from-transparent to-purple-400" />
                <span className="text-xs">❦</span>
                <div className="w-8 sm:w-10 h-px bg-gradient-to-l from-transparent to-purple-400" />
              </motion.div>
            </motion.section>
          )}

          {/* ========================================================== */}
          {/* 3. ESTADO SURPRISE: CLÍMAX Y RAMO DE VIOLETAS             */}
          {/* ========================================================== */}
          {appState === 'SURPRISE' && (
            <motion.section
              key="state-surprise"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center w-full"
            >
              {/* Ramo de Violetas animado por capas (proporción óptima en móvil) */}
              <VioletBouquet />

              {/* 4. Dedicatoria y cierre con fade-in suave */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-lg mt-3 sm:mt-5 bg-white/80 backdrop-blur-md border border-purple-200/80 rounded-2xl p-5 sm:p-8 shadow-xl shadow-purple-500/10 text-center"
              >
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-purple-950 font-normal mb-2.5 sm:mb-3 tracking-wide">
                  {CONFIG.dedication.title}
                </h2>

                <p className="font-serif italic text-sm sm:text-base md:text-lg text-purple-900/90 leading-relaxed mb-4 sm:mb-5 font-normal px-1">
                  {CONFIG.dedication.message}
                </p>

                <p className="font-script text-2xl sm:text-3xl text-purple-700 tracking-wide mb-4 sm:mb-6">
                  {CONFIG.dedication.signature}
                </p>

                {/* Línea divisoria decorativa */}
                <div className="w-14 sm:w-16 h-px bg-purple-200 mx-auto mb-4 sm:mb-6" />

                {/* Botón discreto para reiniciar (tamaño táctil de 44px para móvil) */}
                <motion.button
                  onClick={handleReset}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple-100/80 hover:bg-purple-200/80 text-purple-800 text-xs sm:text-sm font-sans font-medium transition-colors duration-200 cursor-pointer border border-purple-200/50 shadow-sm active:scale-95"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-purple-600" />
                  <span>Volver a ver</span>
                </motion.button>
              </motion.div>
            </motion.section>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}
