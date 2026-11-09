import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * =========================================================================
 * VARIANTES DE ANIMACIÓN FLUIDA Y CINEMATOGRÁFICA
 * Un desarrollo orgánico en ondas armónicas:
 * 1. Base (tallos y cono de papel)
 * 2. Marco botánico (hojas acorazonadas y paniculata blanca)
 * 3. Floración envolvente de las violetas (de afuera hacia el corazón)
 * 4. Lazo de seda y activación del modo flotante continuo
 * =========================================================================
 */

// Contenedor SVG principal con orquestación escalonada armónica
const svgContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// 1. Tallos
const stemLineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 2. Cono de papel de floristería: brota hacia arriba suavemente
const paperWrapVariants = {
  hidden: { scale: 0.6, opacity: 0, y: 25 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 110,
      damping: 15,
      mass: 0.8,
    },
  },
};

// 3. Hojas acorazonadas: se abren desde la base
const leafBranchVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (customRot = 0) => ({
    scale: 1,
    opacity: 1,
    rotate: customRot,
    transition: {
      type: 'spring',
      stiffness: 95,
      damping: 13,
      mass: 0.8,
    },
  }),
};

// 4. Nube de paniculata blanca: destello sutil
const babyBreathVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 14,
    },
  },
};

// 5. Flores de violeta perimetrales: floración elástica en su propio eje
const outerVioletVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (customRot = 0) => ({
    scale: 1,
    opacity: 1,
    rotate: customRot,
    transition: {
      type: 'spring',
      stiffness: 115,
      damping: 11,
      mass: 0.7,
    },
  }),
};

// 6. Violeta central protagonista: floración estelar con resorte suave
const heroVioletVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 125,
      damping: 10,
      mass: 0.75,
      delay: 0.25,
    },
  },
};

// 7. Lazo de raso satinado
const silkRibbonVariants = {
  hidden: { scale: 0, opacity: 0, y: 12 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 160,
      damping: 14,
      delay: 0.35,
    },
  },
};

export default function VioletBouquet() {
  const [isBloomed, setIsBloomed] = useState(false);

  return (
    <motion.div
      // Entrada inicial suave con desenfoque y elevación
      initial={{ opacity: 0, y: 40, scale: 0.8, filter: 'blur(8px)' }}
      animate={{
        opacity: 1,
        y: isBloomed ? [0, -6, 0] : 0,
        scale: 1,
        filter: 'blur(0px)',
        rotate: isBloomed ? [0, 0.9, 0, -0.9, 0] : 0,
      }}
      transition={
        isBloomed
          ? {
              y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }
          : {
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }
      }
      onAnimationComplete={() => {
        if (!isBloomed) setIsBloomed(true);
      }}
      className="relative w-72 sm:w-88 md:w-96 mx-auto flex items-center justify-center select-none"
    >
      {/* Resplandor ambiental que respira al florecer */}
      <motion.div
        animate={{
          scale: isBloomed ? [1, 1.08, 1] : 1,
          opacity: isBloomed ? [0.45, 0.7, 0.45] : 0.35,
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 -m-10 bg-gradient-to-t from-purple-300/35 via-violet-200/30 to-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none"
      />

      {/* SVG Vectorial con animación de floración orgánica */}
      <motion.svg
        viewBox="0 0 460 520"
        className="w-full h-auto drop-shadow-2xl overflow-visible"
        variants={svgContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <defs>
          {/* ================= GRADIENTES ================= */}
          {/* Tallos frescos */}
          <linearGradient id="floristStem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="40%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>

          {/* Hojas grandes aterciopeladas de violeta */}
          <linearGradient id="leafGradDeep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="60%" stopColor="#166534" />
            <stop offset="100%" stopColor="#052e16" />
          </linearGradient>
          <linearGradient id="leafGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="60%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>

          {/* Pétalos: Violeta profundo real aterciopelado */}
          <linearGradient id="violetRoyal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7e22ce" />
            <stop offset="50%" stopColor="#581c87" />
            <stop offset="100%" stopColor="#3b0764" />
          </linearGradient>

          {/* Pétalos: Violeta medio vibrante */}
          <linearGradient id="violetVibrant" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="55%" stopColor="#7e22ce" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>

          {/* Pétalos: Lila luminoso para luces de volumen */}
          <linearGradient id="violetLuminous" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d8b4fe" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>

          {/* Centro / Ojo de la violeta: pistilo dorado radiante con centro blanco */}
          <radialGradient id="goldCenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#fef08a" />
            <stop offset="70%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#a16207" />
          </radialGradient>

          {/* Envoltorio de papel de floristería en tonos lila pastel */}
          <linearGradient id="wrapPaper1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3e8ff" />
            <stop offset="50%" stopColor="#e9d5ff" />
            <stop offset="100%" stopColor="#d8b4fe" />
          </linearGradient>
          <linearGradient id="wrapPaper2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#f5f3ff" />
            <stop offset="100%" stopColor="#ddd6fe" />
          </linearGradient>

          {/* Lazo de raso satinado fucsia / orquídea */}
          <linearGradient id="ribbonSilk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e879f9" />
            <stop offset="45%" stopColor="#c026d3" />
            <stop offset="100%" stopColor="#86198f" />
          </linearGradient>

          {/* Sombra de relieve multicapa */}
          <filter id="floristShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="2" dy="5" stdDeviation="4.5" floodColor="#2e1065" floodOpacity="0.22" />
          </filter>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ========================================================================= */}
        {/* CAPA 1: TALLOS INFERIORES                                                 */}
        {/* ========================================================================= */}
        <g stroke="url(#floristStem)" strokeWidth="4.5" strokeLinecap="round" fill="none">
          <motion.path variants={stemLineVariants} d="M230 350 L210 495" />
          <motion.path variants={stemLineVariants} d="M220 345 L200 490" />
          <motion.path variants={stemLineVariants} d="M240 345 L225 500" />
          <motion.path variants={stemLineVariants} d="M210 355 L190 485" />
          <motion.path variants={stemLineVariants} d="M250 355 L240 495" />
          <motion.path variants={stemLineVariants} d="M225 360 L215 505" />
          <motion.path variants={stemLineVariants} d="M235 360 L228 502" />
        </g>

        {/* ========================================================================= */}
        {/* CAPA 2: PAPEL DE FLORISTERÍA ENVOLVENTE                                    */}
        {/* ========================================================================= */}
        <motion.g
          variants={paperWrapVariants}
          style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
          filter="url(#floristShadow)"
        >
          <path d="M230 380 L140 270 C130 220 180 230 200 280 Z" fill="url(#wrapPaper1)" opacity="0.9" />
          <path d="M230 380 L320 270 C330 220 280 230 260 280 Z" fill="url(#wrapPaper1)" opacity="0.9" />
          <path d="M230 385 L160 290 Q230 315 300 290 L230 385 Z" fill="url(#wrapPaper2)" stroke="#c084fc" strokeWidth="0.8" opacity="0.95" />
        </motion.g>

        {/* ========================================================================= */}
        {/* CAPA 3: CORONA DE HOJAS VERDES ACORAZONADAS                                */}
        {/* ========================================================================= */}
        <g filter="url(#floristShadow)">
          <motion.g custom={-28} variants={leafBranchVariants} style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}>
            <path d="M170 300 C110 285 90 205 145 190 C190 180 195 260 170 300 Z" fill="url(#leafGradDeep)" />
            <path d="M170 300 Q150 240 145 190" stroke="#052e16" strokeWidth="2" fill="none" opacity="0.4" />
          </motion.g>

          <motion.g custom={28} variants={leafBranchVariants} style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}>
            <path d="M290 300 C350 285 370 205 315 190 C270 180 265 260 290 300 Z" fill="url(#leafGradDeep)" />
            <path d="M290 300 Q310 240 315 190" stroke="#052e16" strokeWidth="2" fill="none" opacity="0.4" />
          </motion.g>

          <motion.g custom={-12} variants={leafBranchVariants} style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}>
            <path d="M170 180 C125 140 135 60 180 70 C215 75 205 150 170 180 Z" fill="url(#leafGradLight)" />
            <path d="M170 180 Q175 125 180 70" stroke="#052e16" strokeWidth="1.8" fill="none" opacity="0.3" />
          </motion.g>

          <motion.g custom={14} variants={leafBranchVariants} style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}>
            <path d="M290 180 C335 140 325 60 280 70 C245 75 255 150 290 180 Z" fill="url(#leafGradLight)" />
            <path d="M290 180 Q285 125 280 70" stroke="#052e16" strokeWidth="1.8" fill="none" opacity="0.3" />
          </motion.g>

          <motion.g custom={0} variants={leafBranchVariants} style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}>
            <path d="M230 150 C200 110 210 40 230 40 C250 40 260 110 230 150 Z" fill="url(#leafGradDeep)" />
          </motion.g>
        </g>

        {/* ========================================================================= */}
        {/* CAPA 4: PANICULATA BLANCA / GYPSOPHILA                                     */}
        {/* ========================================================================= */}
        <g stroke="#94a3b8" strokeWidth="0.8" fill="none">
          <path d="M140 220 Q120 190 110 170 M120 190 Q105 195 95 190" />
          <path d="M320 220 Q340 190 350 170 M340 190 Q355 195 365 190" />
          <path d="M180 150 Q165 110 155 90 M165 110 Q145 115 135 105" />
          <path d="M280 150 Q295 110 305 90 M295 110 Q315 115 325 105" />
        </g>

        <g>
          {[
            { cx: 110, cy: 170, r: 4.5 }, { cx: 95, cy: 190, r: 4 }, { cx: 125, cy: 180, r: 3.5 },
            { cx: 350, cy: 170, r: 4.5 }, { cx: 365, cy: 190, r: 4 }, { cx: 335, cy: 180, r: 3.5 },
            { cx: 155, cy: 90, r: 4 }, { cx: 135, cy: 105, r: 3.8 }, { cx: 170, cy: 100, r: 3.2 },
            { cx: 305, cy: 90, r: 4 }, { cx: 325, cy: 105, r: 3.8 }, { cx: 290, cy: 100, r: 3.2 },
            { cx: 230, cy: 75, r: 4 }, { cx: 215, cy: 85, r: 3.5 }, { cx: 245, cy: 85, r: 3.5 },
            { cx: 130, cy: 235, r: 4 }, { cx: 330, cy: 235, r: 4 }, { cx: 180, cy: 275, r: 3.5 },
            { cx: 280, cy: 275, r: 3.5 },
          ].map((flower, idx) => (
            <motion.g
              key={idx}
              variants={babyBreathVariants}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            >
              <circle cx={flower.cx} cy={flower.cy} r={flower.r} fill="#ffffff" filter="url(#softGlow)" />
              <circle cx={flower.cx} cy={flower.cy} r={flower.r * 0.45} fill="#fef08a" />
            </motion.g>
          ))}
        </g>

        {/* ========================================================================= */}
        {/* CAPA 5: VIOLETAS SILVESTRES (Apertura concéntrica desde su propio centro)  */}
        {/* ========================================================================= */}
        <g filter="url(#floristShadow)">
          
          {/* Nivel Superior */}
          <motion.g custom={-15} variants={outerVioletVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <ellipse cx="170" cy="120" rx="17" ry="22" fill="url(#violetRoyal)" transform="rotate(-20 170 120)" />
            <ellipse cx="192" cy="120" rx="17" ry="22" fill="url(#violetRoyal)" transform="rotate(20 192 120)" />
            <ellipse cx="160" cy="138" rx="18" ry="16" fill="url(#violetVibrant)" transform="rotate(-10 160 138)" />
            <ellipse cx="202" cy="138" rx="18" ry="16" fill="url(#violetVibrant)" transform="rotate(10 202 138)" />
            <path d="M168 142 C160 165 202 165 194 142 Z" fill="url(#violetLuminous)" />
            <circle cx="181" cy="135" r="5" fill="url(#goldCenter)" />
          </motion.g>

          <motion.g custom={2} variants={outerVioletVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <ellipse cx="220" cy="105" rx="18" ry="23" fill="url(#violetRoyal)" transform="rotate(-15 220 105)" />
            <ellipse cx="242" cy="105" rx="18" ry="23" fill="url(#violetRoyal)" transform="rotate(15 242 105)" />
            <ellipse cx="210" cy="123" rx="18" ry="16" fill="url(#violetLuminous)" transform="rotate(-8 210 123)" />
            <ellipse cx="252" cy="123" rx="18" ry="16" fill="url(#violetLuminous)" transform="rotate(8 252 123)" />
            <path d="M218 128 C210 152 252 152 244 128 Z" fill="url(#violetVibrant)" />
            <circle cx="231" cy="120" r="5" fill="url(#goldCenter)" />
          </motion.g>

          <motion.g custom={16} variants={outerVioletVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <ellipse cx="270" cy="120" rx="17" ry="22" fill="url(#violetRoyal)" transform="rotate(-18 270 120)" />
            <ellipse cx="292" cy="120" rx="17" ry="22" fill="url(#violetRoyal)" transform="rotate(18 292 120)" />
            <ellipse cx="260" cy="138" rx="18" ry="16" fill="url(#violetVibrant)" transform="rotate(-10 260 138)" />
            <ellipse cx="302" cy="138" rx="18" ry="16" fill="url(#violetVibrant)" transform="rotate(10 302 138)" />
            <path d="M268 142 C260 165 302 165 294 142 Z" fill="url(#violetLuminous)" />
            <circle cx="281" cy="135" r="5" fill="url(#goldCenter)" />
          </motion.g>

          {/* Nivel Lateral */}
          <motion.g custom={-28} variants={outerVioletVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <ellipse cx="130" cy="180" rx="16" ry="20" fill="url(#violetRoyal)" transform="rotate(-25 130 180)" />
            <ellipse cx="150" cy="176" rx="16" ry="20" fill="url(#violetRoyal)" transform="rotate(15 150 176)" />
            <ellipse cx="122" cy="195" rx="16" ry="15" fill="url(#violetVibrant)" />
            <ellipse cx="158" cy="192" rx="16" ry="15" fill="url(#violetVibrant)" />
            <path d="M128 198 C122 218 158 218 152 198 Z" fill="url(#violetLuminous)" />
            <circle cx="140" cy="190" r="4.5" fill="url(#goldCenter)" />
          </motion.g>

          <motion.g custom={28} variants={outerVioletVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <ellipse cx="310" cy="176" rx="16" ry="20" fill="url(#violetRoyal)" transform="rotate(-15 310 176)" />
            <ellipse cx="330" cy="180" rx="16" ry="20" fill="url(#violetRoyal)" transform="rotate(25 330 180)" />
            <ellipse cx="302" cy="192" rx="16" ry="15" fill="url(#violetVibrant)" />
            <ellipse cx="338" cy="195" rx="16" ry="15" fill="url(#violetVibrant)" />
            <path d="M308 198 C302 218 338 218 332 198 Z" fill="url(#violetLuminous)" />
            <circle cx="320" cy="190" r="4.5" fill="url(#goldCenter)" />
          </motion.g>

          {/* Nivel Medio Interior */}
          <motion.g custom={-8} variants={outerVioletVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <ellipse cx="180" cy="180" rx="19" ry="24" fill="url(#violetRoyal)" transform="rotate(-16 180 180)" />
            <ellipse cx="206" cy="180" rx="19" ry="24" fill="url(#violetRoyal)" transform="rotate(16 206 180)" />
            <ellipse cx="170" cy="202" rx="20" ry="17" fill="url(#violetLuminous)" transform="rotate(-10 170 202)" />
            <ellipse cx="216" cy="202" rx="20" ry="17" fill="url(#violetLuminous)" transform="rotate(10 216 202)" />
            <path d="M178 206 C168 232 218 232 208 206 Z" fill="url(#violetVibrant)" />
            <path d="M193 198 L188 210 M193 198 L193 213 M193 198 L198 210" stroke="#3b0764" strokeWidth="1.3" opacity="0.65" />
            <circle cx="193" cy="198" r="5.5" fill="url(#goldCenter)" />
          </motion.g>

          <motion.g custom={8} variants={outerVioletVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <ellipse cx="254" cy="180" rx="19" ry="24" fill="url(#violetRoyal)" transform="rotate(-16 254 180)" />
            <ellipse cx="280" cy="180" rx="19" ry="24" fill="url(#violetRoyal)" transform="rotate(16 280 180)" />
            <ellipse cx="244" cy="202" rx="20" ry="17" fill="url(#violetVibrant)" transform="rotate(-10 244 202)" />
            <ellipse cx="290" cy="202" rx="20" ry="17" fill="url(#violetVibrant)" transform="rotate(10 290 202)" />
            <path d="M252 206 C242 232 292 232 282 206 Z" fill="url(#violetLuminous)" />
            <path d="M267 198 L262 210 M267 198 L267 213 M267 198 L272 210" stroke="#3b0764" strokeWidth="1.3" opacity="0.65" />
            <circle cx="267" cy="198" r="5.5" fill="url(#goldCenter)" />
          </motion.g>

          {/* Flores Frontales Bajas */}
          <motion.g custom={-14} variants={outerVioletVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <ellipse cx="165" cy="240" rx="18" ry="22" fill="url(#violetRoyal)" transform="rotate(-15 165 240)" />
            <ellipse cx="189" cy="240" rx="18" ry="22" fill="url(#violetRoyal)" transform="rotate(15 189 240)" />
            <ellipse cx="155" cy="258" rx="18" ry="16" fill="url(#violetVibrant)" />
            <ellipse cx="199" cy="258" rx="18" ry="16" fill="url(#violetVibrant)" />
            <path d="M165 262 C158 282 196 282 189 262 Z" fill="url(#violetLuminous)" />
            <circle cx="177" cy="255" r="5" fill="url(#goldCenter)" />
          </motion.g>

          <motion.g custom={14} variants={outerVioletVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <ellipse cx="271" cy="240" rx="18" ry="22" fill="url(#violetRoyal)" transform="rotate(-15 271 240)" />
            <ellipse cx="295" cy="240" rx="18" ry="22" fill="url(#violetRoyal)" transform="rotate(15 295 240)" />
            <ellipse cx="261" cy="258" rx="18" ry="16" fill="url(#violetLuminous)" />
            <ellipse cx="305" cy="258" rx="18" ry="16" fill="url(#violetLuminous)" />
            <path d="M271 262 C264 282 302 282 295 262 Z" fill="url(#violetVibrant)" />
            <circle cx="283" cy="255" r="5" fill="url(#goldCenter)" />
          </motion.g>

          {/* Capullos laterales */}
          <motion.g custom={-30} variants={outerVioletVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <path d="M125 145 Q115 125 130 120 Q140 130 125 145 Z" fill="url(#violetRoyal)" />
            <path d="M125 145 Q127 135 125 125" stroke="#16a34a" strokeWidth="2" />
          </motion.g>
          <motion.g custom={30} variants={outerVioletVariants} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <path d="M335 145 Q345 125 330 120 Q320 130 335 145 Z" fill="url(#violetLuminous)" />
            <path d="M335 145 Q333 135 335 125" stroke="#16a34a" strokeWidth="2" />
          </motion.g>

          {/* ========================================================= */}
          {/* VIOLETA CENTRAL PROTAGONISTA (Florece como el clímax)    */}
          {/* ========================================================= */}
          <motion.g
            variants={heroVioletVariants}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          >
            {/* Pétalos superiores sedosos oscuros */}
            <ellipse cx="214" cy="225" rx="22" ry="27" fill="url(#violetRoyal)" transform="rotate(-18 214 225)" />
            <ellipse cx="246" cy="225" rx="22" ry="27" fill="url(#violetRoyal)" transform="rotate(18 246 225)" />
            {/* Pétalos laterales en lila aterciopelado */}
            <ellipse cx="202" cy="250" rx="23" ry="19" fill="url(#violetLuminous)" transform="rotate(-10 202 250)" />
            <ellipse cx="258" cy="250" rx="23" ry="19" fill="url(#violetLuminous)" transform="rotate(10 258 250)" />
            {/* Pétalo inferior ancho acorazonado */}
            <path d="M210 255 C196 288 264 288 250 255 Z" fill="url(#violetVibrant)" />
            {/* Rayitas finas características */}
            <path d="M230 248 L223 262 M230 248 L230 266 M230 248 L237 262" stroke="#2e1065" strokeWidth="1.6" strokeLinecap="round" />
            {/* Ojo amarillo radiante */}
            <circle cx="230" cy="248" r="6" fill="url(#goldCenter)" />
            <circle cx="229" cy="247" r="2.2" fill="#ffffff" opacity="0.85" />
          </motion.g>

        </g>

        {/* ========================================================================= */}
        {/* CAPA 6: LAZO DE RASO SATINADO (Aparece y cae con suavidad)                */}
        {/* ========================================================================= */}
        <motion.g
          variants={silkRibbonVariants}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          filter="url(#floristShadow)"
        >
          <rect x="205" y="375" width="50" height="15" rx="7" fill="#701a75" opacity="0.3" transform="rotate(-2 230 382)" />
          <rect x="207" y="372" width="46" height="13" rx="6" fill="url(#ribbonSilk)" transform="rotate(-1 230 378)" />

          <path d="M228 380 C185 350 160 385 190 405 C215 415 225 390 228 382 Z" fill="url(#ribbonSilk)" />
          <path d="M226 382 C200 370 180 388 198 400" stroke="#fae8ff" strokeWidth="1.6" fill="none" opacity="0.5" />

          <path d="M232 380 C275 350 300 385 270 405 C245 415 235 390 232 382 Z" fill="url(#ribbonSilk)" />
          <path d="M234 382 C260 370 280 388 262 400" stroke="#fae8ff" strokeWidth="1.6" fill="none" opacity="0.5" />

          <path d="M226 385 Q205 440 190 475 Q205 455 218 468 Q222 425 228 390 Z" fill="url(#ribbonSilk)" />
          <path d="M234 385 Q255 440 270 475 Q255 455 242 468 Q238 425 232 390 Z" fill="url(#ribbonSilk)" />

          <ellipse cx="230" cy="382" rx="10" ry="9" fill="#a21caf" />
          <ellipse cx="230" cy="381" rx="8" ry="7" fill="url(#ribbonSilk)" />
          <circle cx="228" cy="378" r="2.8" fill="#ffffff" opacity="0.8" />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
}
