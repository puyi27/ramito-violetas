import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * =========================================================================
 * RAMO DE VIOLETAS BOTÁNICO DE ALTA FLORISTERÍA
 * Inspirado en bouquets artesanales reales:
 * - Cúpula densa y tupida de violetas aterciopeladas con pétalos superpuestos
 * - Nube etérea de paniculata blanca (baby's breath)
 * - Corona de hojas verdes acorazonadas que abrazan la flor
 * - Cucurucho envolvente de papel plisado en tonos lila y lazo de raso
 * =========================================================================
 */

// Animación orquestada del conjunto
const bouquetContainerVariants = {
  hidden: { opacity: 0, scale: 0.75, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Floración elástica individual sobre el propio centro de cada flor
const petalBloomVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (customRot = 0) => ({
    scale: 1,
    opacity: 1,
    rotate: customRot,
    transition: {
      type: 'spring',
      stiffness: 130,
      damping: 12,
      mass: 0.7,
    },
  }),
};

const leafUnfoldVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (rot = 0) => ({
    scale: 1,
    opacity: 1,
    rotate: rot,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 14,
    },
  }),
};

const paniculataSparkleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 13,
    },
  },
};

const wrapPaperVariants = {
  hidden: { scaleY: 0.4, opacity: 0, y: 20 },
  visible: {
    scaleY: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 15,
    },
  },
};

export default function VioletBouquet() {
  const [isBloomed, setIsBloomed] = useState(false);

  return (
    <motion.div
      variants={bouquetContainerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => setIsBloomed(true)}
      className="relative w-64 xs:w-72 sm:w-80 md:w-88 mx-auto flex items-center justify-center select-none"
    >
      {/* Resplandor suave trasero que palpita delicadamente */}
      <motion.div
        animate={
          isBloomed
            ? {
                scale: [1, 1.08, 1],
                opacity: [0.4, 0.65, 0.4],
              }
            : {}
        }
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 -m-6 bg-gradient-to-t from-purple-300/35 via-violet-200/30 to-amber-100/30 rounded-full blur-2xl -z-10 pointer-events-none"
      />

      {/* SVG del ramo: compacto, tupido y realista */}
      <motion.svg
        viewBox="0 0 400 440"
        className="w-full h-auto drop-shadow-xl overflow-visible"
        animate={
          isBloomed
            ? {
                y: [0, -5, 0],
                rotate: [0, 0.8, 0, -0.8, 0],
              }
            : {}
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <defs>
          {/* ================= GRADIENTES ================= */}
          {/* Tallos frescos */}
          <linearGradient id="vbStem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="50%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>

          {/* Hojas grandes aterciopeladas */}
          <linearGradient id="vbLeaf1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#052e16" />
          </linearGradient>
          <linearGradient id="vbLeaf2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="70%" stopColor="#14532d" />
            <stop offset="100%" stopColor="#052e16" />
          </linearGradient>

          {/* Pétalos: Púrpura Real Profundo Aterciopelado */}
          <linearGradient id="vbPetalDeep" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6b21a8" />
            <stop offset="55%" stopColor="#4c1d95" />
            <stop offset="100%" stopColor="#2e1065" />
          </linearGradient>

          {/* Pétalos: Violeta Intenso Vibrante */}
          <linearGradient id="vbPetalVibrant" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="55%" stopColor="#7e22ce" />
            <stop offset="100%" stopColor="#581c87" />
          </linearGradient>

          {/* Pétalos: Lila Luminoso con degradé suave */}
          <linearGradient id="vbPetalLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d8b4fe" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>

          {/* Centro / Ojo dorado brillante de la violeta */}
          <radialGradient id="vbGoldEye" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#fef08a" />
            <stop offset="75%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#a16207" />
          </radialGradient>

          {/* Envoltorio de papel de floristería (papel seda lila plisado con doblez blanco) */}
          <linearGradient id="vbWrapOuter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3e8ff" />
            <stop offset="50%" stopColor="#e9d5ff" />
            <stop offset="100%" stopColor="#d8b4fe" />
          </linearGradient>
          <linearGradient id="vbWrapInner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#faf5ff" />
            <stop offset="100%" stopColor="#e9d5ff" />
          </linearGradient>

          {/* Lazo de raso satinado magenta / orquídea */}
          <linearGradient id="vbRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="45%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#86198f" />
          </linearGradient>

          {/* Filtro de sombra botánica suave */}
          <filter id="vbShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1.5" dy="3.5" stdDeviation="3.5" floodColor="#1e1b4b" floodOpacity="0.22" />
          </filter>
          <filter id="vbGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ========================================================================= */}
        {/* 1. TALLOS INFERIORES ATADOS                                               */}
        {/* ========================================================================= */}
        <g stroke="url(#vbStem)" strokeWidth="4" strokeLinecap="round" fill="none">
          <path d="M200 310 L190 415" />
          <path d="M192 312 L178 410" />
          <path d="M208 312 L202 420" />
          <path d="M185 315 L170 405" />
          <path d="M215 315 L212 415" />
          <path d="M196 320 L184 418" />
          <path d="M204 320 L195 422" />
        </g>

        {/* ========================================================================= */}
        {/* 2. PAPEL ENVOLVENTE TRASERO (Cono de floristería que sostiene las flores) */}
        {/* ========================================================================= */}
        <motion.g variants={wrapPaperVariants} filter="url(#vbShadow)">
          {/* Alas traseras del cucurucho de papel */}
          <path
            d="M200 325 L115 190 Q145 170 170 185 L200 325 Z"
            fill="url(#vbWrapOuter)"
            opacity="0.9"
          />
          <path
            d="M200 325 L285 190 Q255 170 230 185 L200 325 Z"
            fill="url(#vbWrapOuter)"
            opacity="0.9"
          />
        </motion.g>

        {/* ========================================================================= */}
        {/* 3. CORONA DE HOJAS VERDES ACORAZONADAS DE VIOLETA                         */}
        {/* ========================================================================= */}
        <g filter="url(#vbShadow)">
          {/* Hoja izquierda baja */}
          <motion.g custom={-30} variants={leafUnfoldVariants} style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}>
            <path d="M140 230 C85 210 70 140 125 125 C165 115 170 185 140 230 Z" fill="url(#vbLeaf1)" />
            <path d="M140 230 Q125 175 125 125" stroke="#052e16" strokeWidth="2" fill="none" opacity="0.4" />
          </motion.g>

          {/* Hoja derecha baja */}
          <motion.g custom={30} variants={leafUnfoldVariants} style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}>
            <path d="M260 230 C315 210 330 140 275 125 C235 115 230 185 260 230 Z" fill="url(#vbLeaf1)" />
            <path d="M260 230 Q275 175 275 125" stroke="#052e16" strokeWidth="2" fill="none" opacity="0.4" />
          </motion.g>

          {/* Hoja trasera alta izquierda */}
          <motion.g custom={-15} variants={leafUnfoldVariants} style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}>
            <path d="M160 120 C120 80 130 15 170 25 C200 30 190 95 160 120 Z" fill="url(#vbLeaf2)" />
            <path d="M160 120 Q165 70 170 25" stroke="#052e16" strokeWidth="1.8" fill="none" opacity="0.3" />
          </motion.g>

          {/* Hoja trasera alta derecha */}
          <motion.g custom={15} variants={leafUnfoldVariants} style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}>
            <path d="M240 120 C280 80 270 15 230 25 C200 30 210 95 240 120 Z" fill="url(#vbLeaf2)" />
            <path d="M240 120 Q235 70 230 25" stroke="#052e16" strokeWidth="1.8" fill="none" opacity="0.3" />
          </motion.g>

          {/* Hoja trasera central superior */}
          <motion.g custom={0} variants={leafUnfoldVariants} style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}>
            <path d="M200 100 C175 60 185 5 200 5 C215 5 225 60 200 100 Z" fill="url(#vbLeaf1)" />
          </motion.g>
        </g>

        {/* ========================================================================= */}
        {/* 4. NUBE DE PANICULATA BLANCA / GYPSOPHILA (Baby's Breath)                  */}
        {/* ========================================================================= */}
        <g stroke="#94a3b8" strokeWidth="0.8" fill="none">
          <path d="M125 140 Q105 110 95 90 M105 110 Q90 115 80 110" />
          <path d="M275 140 Q295 110 305 90 M295 110 Q310 115 320 110" />
          <path d="M160 85 Q145 55 135 40 M145 55 Q130 60 120 50" />
          <path d="M240 85 Q255 55 265 40 M255 55 Q270 60 280 50" />
        </g>

        <g>
          {[
            { cx: 95, cy: 90, r: 4.5 }, { cx: 80, cy: 110, r: 3.8 }, { cx: 110, cy: 100, r: 3.5 },
            { cx: 305, cy: 90, r: 4.5 }, { cx: 320, cy: 110, r: 3.8 }, { cx: 290, cy: 100, r: 3.5 },
            { cx: 135, cy: 40, r: 4 }, { cx: 120, cy: 50, r: 3.6 }, { cx: 150, cy: 52, r: 3.2 },
            { cx: 265, cy: 40, r: 4 }, { cx: 280, cy: 50, r: 3.6 }, { cx: 250, cy: 52, r: 3.2 },
            { cx: 200, cy: 30, r: 4 }, { cx: 185, cy: 40, r: 3.5 }, { cx: 215, cy: 40, r: 3.5 },
            { cx: 115, cy: 175, r: 4 }, { cx: 285, cy: 175, r: 4 },
          ].map((fl, idx) => (
            <motion.g
              key={idx}
              variants={paniculataSparkleVariants}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            >
              <circle cx={fl.cx} cy={fl.cy} r={fl.r} fill="#ffffff" filter="url(#vbGlow)" />
              <circle cx={fl.cx} cy={fl.cy} r={fl.r * 0.4} fill="#fef08a" />
            </motion.g>
          ))}
        </g>

        {/* ========================================================================= */}
        {/* 5. CÚPULA DENSA Y TUPIDA DE VIOLETAS (Múltiples capas superpuestas sin huecos) */}
        {/* ========================================================================= */}
        {/* Colchón oscuro de base que evita que se vea blanco a través de las flores */}
        <ellipse cx="200" cy="145" rx="90" ry="70" fill="#2e1065" opacity="0.65" />

        <g filter="url(#vbShadow)">

          {/* --- CAPA TRASERA DE VIOLETAS --- */}
          {/* Flor 1: Superior Izquierda */}
          <motion.g custom={-12} variants={petalBloomVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <g transform="translate(150, 75)">
              <ellipse cx="-8" cy="-10" rx="14" ry="18" fill="url(#vbPetalDeep)" transform="rotate(-20 -8 -10)" />
              <ellipse cx="8" cy="-10" rx="14" ry="18" fill="url(#vbPetalDeep)" transform="rotate(20 8 -10)" />
              <ellipse cx="-13" cy="5" rx="15" ry="13" fill="url(#vbPetalVibrant)" />
              <ellipse cx="13" cy="5" rx="15" ry="13" fill="url(#vbPetalVibrant)" />
              <path d="M-8 8 C-7 24 7 24 8 8 Z" fill="url(#vbPetalLight)" />
              <circle cx="0" cy="3" r="4.2" fill="url(#vbGoldEye)" />
            </g>
          </motion.g>

          {/* Flor 2: Superior Centro */}
          <motion.g custom={4} variants={petalBloomVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <g transform="translate(200, 60)">
              <ellipse cx="-8" cy="-10" rx="14" ry="18" fill="url(#vbPetalDeep)" transform="rotate(-18 -8 -10)" />
              <ellipse cx="8" cy="-10" rx="14" ry="18" fill="url(#vbPetalDeep)" transform="rotate(18 8 -10)" />
              <ellipse cx="-13" cy="5" rx="15" ry="13" fill="url(#vbPetalLight)" />
              <ellipse cx="13" cy="5" rx="15" ry="13" fill="url(#vbPetalLight)" />
              <path d="M-8 8 C-7 24 7 24 8 8 Z" fill="url(#vbPetalVibrant)" />
              <circle cx="0" cy="3" r="4.2" fill="url(#vbGoldEye)" />
            </g>
          </motion.g>

          {/* Flor 3: Superior Derecha */}
          <motion.g custom={14} variants={petalBloomVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <g transform="translate(250, 75)">
              <ellipse cx="-8" cy="-10" rx="14" ry="18" fill="url(#vbPetalDeep)" transform="rotate(-20 -8 -10)" />
              <ellipse cx="8" cy="-10" rx="14" ry="18" fill="url(#vbPetalDeep)" transform="rotate(20 8 -10)" />
              <ellipse cx="-13" cy="5" rx="15" ry="13" fill="url(#vbPetalVibrant)" />
              <ellipse cx="13" cy="5" rx="15" ry="13" fill="url(#vbPetalVibrant)" />
              <path d="M-8 8 C-7 24 7 24 8 8 Z" fill="url(#vbPetalLight)" />
              <circle cx="0" cy="3" r="4.2" fill="url(#vbGoldEye)" />
            </g>
          </motion.g>

          {/* --- CAPA MEDIA LATERAL --- */}
          {/* Flor 4: Lateral Izquierda Borde */}
          <motion.g custom={-22} variants={petalBloomVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <g transform="translate(120, 115)">
              <ellipse cx="-7" cy="-8" rx="13" ry="16" fill="url(#vbPetalDeep)" transform="rotate(-22 -7 -8)" />
              <ellipse cx="7" cy="-8" rx="13" ry="16" fill="url(#vbPetalDeep)" transform="rotate(22 7 -8)" />
              <ellipse cx="-11" cy="4" rx="13" ry="12" fill="url(#vbPetalVibrant)" />
              <ellipse cx="11" cy="4" rx="13" ry="12" fill="url(#vbPetalVibrant)" />
              <path d="M-6 6 C-6 20 6 20 6 6 Z" fill="url(#vbPetalLight)" />
              <circle cx="0" cy="2" r="3.8" fill="url(#vbGoldEye)" />
            </g>
          </motion.g>

          {/* Flor 5: Lateral Derecha Borde */}
          <motion.g custom={22} variants={petalBloomVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <g transform="translate(280, 115)">
              <ellipse cx="-7" cy="-8" rx="13" ry="16" fill="url(#vbPetalDeep)" transform="rotate(-22 -7 -8)" />
              <ellipse cx="7" cy="-8" rx="13" ry="16" fill="url(#vbPetalDeep)" transform="rotate(22 7 -8)" />
              <ellipse cx="-11" cy="4" rx="13" ry="12" fill="url(#vbPetalVibrant)" />
              <ellipse cx="11" cy="4" rx="13" ry="12" fill="url(#vbPetalVibrant)" />
              <path d="M-6 6 C-6 20 6 20 6 6 Z" fill="url(#vbPetalLight)" />
              <circle cx="0" cy="2" r="3.8" fill="url(#vbGoldEye)" />
            </g>
          </motion.g>

          {/* --- CAPA INTERMEDIA TUPIDA (Relleno denso) --- */}
          {/* Flor 6: Centro-Izquierda Alta */}
          <motion.g custom={-8} variants={petalBloomVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <g transform="translate(165, 115)">
              <ellipse cx="-9" cy="-11" rx="16" ry="20" fill="url(#vbPetalDeep)" transform="rotate(-16 -9 -11)" />
              <ellipse cx="9" cy="-11" rx="16" ry="20" fill="url(#vbPetalDeep)" transform="rotate(16 9 -11)" />
              <ellipse cx="-14" cy="6" rx="16" ry="14" fill="url(#vbPetalLight)" />
              <ellipse cx="14" cy="6" rx="16" ry="14" fill="url(#vbPetalLight)" />
              <path d="M-8 8 C-8 25 8 25 8 8 Z" fill="url(#vbPetalVibrant)" />
              <path d="M0 4 L-4 13 M0 4 L0 15 M0 4 L4 13" stroke="#2e1065" strokeWidth="1.2" opacity="0.6" />
              <circle cx="0" cy="4" r="4.8" fill="url(#vbGoldEye)" />
            </g>
          </motion.g>

          {/* Flor 7: Centro-Derecha Alta */}
          <motion.g custom={8} variants={petalBloomVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <g transform="translate(235, 115)">
              <ellipse cx="-9" cy="-11" rx="16" ry="20" fill="url(#vbPetalDeep)" transform="rotate(-16 -9 -11)" />
              <ellipse cx="9" cy="-11" rx="16" ry="20" fill="url(#vbPetalDeep)" transform="rotate(16 9 -11)" />
              <ellipse cx="-14" cy="6" rx="16" ry="14" fill="url(#vbPetalLight)" />
              <ellipse cx="14" cy="6" rx="16" ry="14" fill="url(#vbPetalLight)" />
              <path d="M-8 8 C-8 25 8 25 8 8 Z" fill="url(#vbPetalVibrant)" />
              <path d="M0 4 L-4 13 M0 4 L0 15 M0 4 L4 13" stroke="#2e1065" strokeWidth="1.2" opacity="0.6" />
              <circle cx="0" cy="4" r="4.8" fill="url(#vbGoldEye)" />
            </g>
          </motion.g>

          {/* Flor 8: Lateral Izquierda Media */}
          <motion.g custom={-18} variants={petalBloomVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <g transform="translate(130, 160)">
              <ellipse cx="-8" cy="-10" rx="14" ry="18" fill="url(#vbPetalDeep)" transform="rotate(-18 -8 -10)" />
              <ellipse cx="8" cy="-10" rx="14" ry="18" fill="url(#vbPetalDeep)" transform="rotate(18 8 -10)" />
              <ellipse cx="-13" cy="5" rx="14" ry="13" fill="url(#vbPetalVibrant)" />
              <ellipse cx="13" cy="5" rx="14" ry="13" fill="url(#vbPetalVibrant)" />
              <path d="M-7 7 C-7 22 7 22 7 7 Z" fill="url(#vbPetalLight)" />
              <circle cx="0" cy="3" r="4.2" fill="url(#vbGoldEye)" />
            </g>
          </motion.g>

          {/* Flor 9: Lateral Derecha Media */}
          <motion.g custom={18} variants={petalBloomVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <g transform="translate(270, 160)">
              <ellipse cx="-8" cy="-10" rx="14" ry="18" fill="url(#vbPetalDeep)" transform="rotate(-18 -8 -10)" />
              <ellipse cx="8" cy="-10" rx="14" ry="18" fill="url(#vbPetalDeep)" transform="rotate(18 8 -10)" />
              <ellipse cx="-13" cy="5" rx="14" ry="13" fill="url(#vbPetalVibrant)" />
              <ellipse cx="13" cy="5" rx="14" ry="13" fill="url(#vbPetalVibrant)" />
              <path d="M-7 7 C-7 22 7 22 7 7 Z" fill="url(#vbPetalLight)" />
              <circle cx="0" cy="3" r="4.2" fill="url(#vbGoldEye)" />
            </g>
          </motion.g>

          {/* --- CAPA FRONTAL PRINCIPAL (Las flores más grandes y llamativas) --- */}
          {/* Flor 10: Frontal Izquierda */}
          <motion.g custom={-10} variants={petalBloomVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <g transform="translate(160, 185)">
              <ellipse cx="-10" cy="-12" rx="17" ry="22" fill="url(#vbPetalDeep)" transform="rotate(-16 -10 -12)" />
              <ellipse cx="10" cy="-12" rx="17" ry="22" fill="url(#vbPetalDeep)" transform="rotate(16 10 -12)" />
              <ellipse cx="-15" cy="7" rx="17" ry="15" fill="url(#vbPetalLight)" />
              <ellipse cx="15" cy="7" rx="17" ry="15" fill="url(#vbPetalLight)" />
              <path d="M-9 9 C-9 28 9 28 9 9 Z" fill="url(#vbPetalVibrant)" />
              <path d="M0 5 L-5 15 M0 5 L0 18 M0 5 L5 15" stroke="#2e1065" strokeWidth="1.4" opacity="0.7" />
              <circle cx="0" cy="5" r="5" fill="url(#vbGoldEye)" />
            </g>
          </motion.g>

          {/* Flor 11: Frontal Derecha */}
          <motion.g custom={10} variants={petalBloomVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <g transform="translate(240, 185)">
              <ellipse cx="-10" cy="-12" rx="17" ry="22" fill="url(#vbPetalDeep)" transform="rotate(-16 -10 -12)" />
              <ellipse cx="10" cy="-12" rx="17" ry="22" fill="url(#vbPetalDeep)" transform="rotate(16 10 -12)" />
              <ellipse cx="-15" cy="7" rx="17" ry="15" fill="url(#vbPetalLight)" />
              <ellipse cx="15" cy="7" rx="17" ry="15" fill="url(#vbPetalLight)" />
              <path d="M-9 9 C-9 28 9 28 9 9 Z" fill="url(#vbPetalVibrant)" />
              <path d="M0 5 L-5 15 M0 5 L0 18 M0 5 L5 15" stroke="#2e1065" strokeWidth="1.4" opacity="0.7" />
              <circle cx="0" cy="5" r="5" fill="url(#vbGoldEye)" />
            </g>
          </motion.g>

          {/* ========================================================= */}
          {/* FLOR 12: CORAZÓN HEROICO CENTRAL DEL RAMO               */}
          {/* (Flor protagonista, más grande, en primer plano)          */}
          {/* ========================================================= */}
          <motion.g
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 140,
                  damping: 11,
                  delay: 0.25,
                },
              },
            }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          >
            <g transform="translate(200, 160)">
              {/* Pétalos superiores aterciopelados en violeta real profundo */}
              <ellipse cx="-12" cy="-14" rx="20" ry="25" fill="url(#vbPetalDeep)" transform="rotate(-18 -12 -14)" />
              <ellipse cx="12" cy="-14" rx="20" ry="25" fill="url(#vbPetalDeep)" transform="rotate(18 12 -14)" />
              {/* Pétalos laterales sedosos en lila luminoso */}
              <ellipse cx="-18" cy="8" rx="21" ry="18" fill="url(#vbPetalLight)" transform="rotate(-8 -18 8)" />
              <ellipse cx="18" cy="8" rx="21" ry="18" fill="url(#vbPetalLight)" transform="rotate(8 18 8)" />
              {/* Pétalo inferior ancho con borde ondeado */}
              <path d="M-12 10 C-11 34 11 34 12 10 Z" fill="url(#vbPetalVibrant)" />
              {/* Nervaduras oscuras características de la viola silvestre */}
              <path d="M0 6 L-6 18 M0 6 L0 22 M0 6 L6 18" stroke="#1e1b4b" strokeWidth="1.8" strokeLinecap="round" />
              {/* Pistilo amarillo dorado con punto de luz */}
              <circle cx="0" cy="6" r="6" fill="url(#vbGoldEye)" />
              <circle cx="-1" cy="5" r="2.2" fill="#ffffff" opacity="0.9" />
            </g>
          </motion.g>

          {/* Flor 13: Base Centro-Baja (Cierra el ramo sobre el envoltorio) */}
          <motion.g custom={0} variants={petalBloomVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <g transform="translate(200, 215)">
              <ellipse cx="-9" cy="-10" rx="15" ry="19" fill="url(#vbPetalDeep)" transform="rotate(-15 -9 -10)" />
              <ellipse cx="9" cy="-10" rx="15" ry="19" fill="url(#vbPetalDeep)" transform="rotate(15 9 -10)" />
              <ellipse cx="-13" cy="5" rx="15" ry="13" fill="url(#vbPetalLight)" />
              <ellipse cx="13" cy="5" rx="15" ry="13" fill="url(#vbPetalLight)" />
              <path d="M-8 7 C-7 22 7 22 8 7 Z" fill="url(#vbPetalVibrant)" />
              <circle cx="0" cy="3" r="4.2" fill="url(#vbGoldEye)" />
            </g>
          </motion.g>

        </g>

        {/* ========================================================================= */}
        {/* 6. PAPEL DE FLORISTERÍA FRONTAL PLISADO (Abraza la base del ramo)         */}
        {/* ========================================================================= */}
        <motion.g variants={wrapPaperVariants} filter="url(#vbShadow)">
          {/* Solapa izquierda del cucurucho */}
          <path
            d="M200 325 L145 220 Q200 240 200 325 Z"
            fill="url(#vbWrapInner)"
            stroke="#c084fc"
            strokeWidth="0.8"
          />
          {/* Solapa derecha del cucurucho cruzada por encima */}
          <path
            d="M200 325 L255 220 Q200 245 200 325 Z"
            fill="url(#vbWrapOuter)"
            stroke="#a855f7"
            strokeWidth="0.8"
          />
          {/* Borde superior ondeado decorativo de papel de seda */}
          <path
            d="M150 220 Q175 235 200 228 Q225 235 250 220"
            stroke="#ffffff"
            strokeWidth="2.5"
            fill="none"
            opacity="0.85"
          />
        </motion.g>

        {/* ========================================================================= */}
        {/* 7. LAZO DE RASO SATINADO (Ata el ramo con caída natural)                  */}
        {/* ========================================================================= */}
        <motion.g
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                type: 'spring',
                stiffness: 180,
                damping: 14,
                delay: 0.35,
              },
            },
          }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          filter="url(#vbShadow)"
        >
          {/* Vuelta de cinta atando los tallos */}
          <rect x="180" y="318" width="40" height="13" rx="6" fill="#86198f" opacity="0.3" />
          <rect x="182" y="316" width="36" height="11" rx="5" fill="url(#vbRibbon)" />

          {/* Lazada izquierda */}
          <path d="M198 322 C165 295 145 328 170 342 C190 350 196 332 198 324 Z" fill="url(#vbRibbon)" />
          <path d="M196 324 C175 312 160 326 176 336" stroke="#fdf4ff" strokeWidth="1.5" fill="none" opacity="0.6" />

          {/* Lazada derecha */}
          <path d="M202 322 C235 295 255 328 230 342 C210 350 204 332 202 324 Z" fill="url(#vbRibbon)" />
          <path d="M204 324 C225 312 240 326 224 336" stroke="#fdf4ff" strokeWidth="1.5" fill="none" opacity="0.6" />

          {/* Cintas colgantes ondeadas */}
          <path d="M196 326 Q178 375 168 405 Q180 390 190 400 Q192 360 198 330 Z" fill="url(#vbRibbon)" />
          <path d="M204 326 Q222 375 232 405 Q220 390 210 400 Q208 360 202 330 Z" fill="url(#vbRibbon)" />

          {/* Nudo central abombado con destello */}
          <ellipse cx="200" cy="323" rx="9" ry="8" fill="#c026d3" />
          <ellipse cx="200" cy="322" rx="7" ry="6" fill="url(#vbRibbon)" />
          <circle cx="198" cy="320" r="2.2" fill="#ffffff" opacity="0.85" />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
}
