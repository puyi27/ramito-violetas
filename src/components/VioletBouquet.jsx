import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * =========================================================================
 * RAMO DE VIOLETAS BOTÁNICO DE LUJO (100% Optimizado para Móvil - 60 FPS)
 * - Renderizado limpio sin filtros de desenfoque SVG que causan tirones
 * - Cúpula compacta y densa de violetas superpuestas sin huecos
 * - Hojas botánicas de base y nube de paniculata blanca
 * - Animación fluida de escala y elevación con aceleración por hardware (GPU)
 * =========================================================================
 */

export default function VioletBouquet() {
  const [isBloomed, setIsBloomed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, y: 30 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: isBloomed ? [0, -6, 0] : 0,
      }}
      transition={
        isBloomed
          ? {
              y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
            }
          : {
              type: 'spring',
              stiffness: 90,
              damping: 14,
              mass: 0.8,
            }
      }
      onAnimationComplete={() => {
        if (!isBloomed) setIsBloomed(true);
      }}
      style={{ willChange: 'transform, opacity' }}
      className="relative w-64 sm:w-76 md:w-84 mx-auto flex items-center justify-center select-none my-1"
    >
      {/* Resplandor suave estático/pulsante de fondo */}
      <div className="absolute inset-0 -m-4 bg-gradient-to-t from-purple-300/30 via-violet-200/25 to-pink-100/30 rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* SVG Vectorial de Alta Fidelidad */}
      <svg
        viewBox="0 0 380 430"
        className="w-full h-auto drop-shadow-lg overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ================= GRADIENTES LINEALES ================= */}
          {/* Tallos verdes */}
          <linearGradient id="vStem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>

          {/* Hojas grandes aterciopeladas */}
          <linearGradient id="vLeaf1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="50%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#052e16" />
          </linearGradient>
          <linearGradient id="vLeaf2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="60%" stopColor="#166534" />
            <stop offset="100%" stopColor="#0f3d1e" />
          </linearGradient>

          {/* Pétalos: Púrpura Real Profundo Aterciopelado */}
          <linearGradient id="vPetalDeep" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6b21a8" />
            <stop offset="60%" stopColor="#4c1d95" />
            <stop offset="100%" stopColor="#2e1065" />
          </linearGradient>

          {/* Pétalos: Violeta Vibrante */}
          <linearGradient id="vPetalVivid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="60%" stopColor="#7e22ce" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>

          {/* Pétalos: Lila Luminoso con volumen */}
          <linearGradient id="vPetalLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d8b4fe" />
            <stop offset="55%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>

          {/* Centro dorado radiante de la violeta */}
          <radialGradient id="vGoldEye" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#fef08a" />
            <stop offset="75%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#a16207" />
          </radialGradient>

          {/* Envoltorio de papel de floristería en tono lila y blanco crema */}
          <linearGradient id="vWrapOuter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3e8ff" />
            <stop offset="50%" stopColor="#e9d5ff" />
            <stop offset="100%" stopColor="#d8b4fe" />
          </linearGradient>
          <linearGradient id="vWrapInner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#faf5ff" />
            <stop offset="100%" stopColor="#f3e8ff" />
          </linearGradient>

          {/* Lazo de raso satinado magenta / orquídea */}
          <linearGradient id="vRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="45%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#86198f" />
          </linearGradient>
        </defs>

        {/* ========================================================================= */}
        {/* 1. TALLOS INFERIORES ATADOS                                               */}
        {/* ========================================================================= */}
        <g stroke="url(#vStem)" strokeWidth="4" strokeLinecap="round" fill="none">
          <path d="M190 300 L180 405" />
          <path d="M182 302 L168 400" />
          <path d="M198 302 L192 410" />
          <path d="M175 305 L160 395" />
          <path d="M205 305 L202 405" />
          <path d="M186 310 L174 408" />
          <path d="M194 310 L185 412" />
        </g>

        {/* ========================================================================= */}
        {/* 2. PAPEL ENVOLVENTE TRASERO (Cono que abraza el ramo)                     */}
        {/* ========================================================================= */}
        <path
          d="M190 315 L100 175 Q135 155 160 170 L190 315 Z"
          fill="url(#vWrapOuter)"
          opacity="0.9"
        />
        <path
          d="M190 315 L280 175 Q245 155 220 170 L190 315 Z"
          fill="url(#vWrapOuter)"
          opacity="0.9"
        />

        {/* ========================================================================= */}
        {/* 3. CORONA DE HOJAS VERDES ACORAZONADAS DE VIOLETA                         */}
        {/* ========================================================================= */}
        {/* Hoja izquierda baja */}
        <g transform="rotate(-25 125 215)">
          <path d="M125 215 C75 195 60 130 115 115 C150 105 155 170 125 215 Z" fill="url(#vLeaf1)" />
          <path d="M125 215 Q115 165 115 115" stroke="#052e16" strokeWidth="1.8" fill="none" opacity="0.35" />
        </g>

        {/* Hoja derecha baja */}
        <g transform="rotate(25 255 215)">
          <path d="M255 215 C305 195 320 130 265 115 C230 105 225 170 255 215 Z" fill="url(#vLeaf1)" />
          <path d="M255 215 Q265 165 265 115" stroke="#052e16" strokeWidth="1.8" fill="none" opacity="0.35" />
        </g>

        {/* Hoja trasera izquierda alta */}
        <g transform="rotate(-12 145 110)">
          <path d="M145 110 C110 75 120 15 155 25 C185 30 175 90 145 110 Z" fill="url(#vLeaf2)" />
          <path d="M145 110 Q150 65 155 25" stroke="#052e16" strokeWidth="1.5" fill="none" opacity="0.3" />
        </g>

        {/* Hoja trasera derecha alta */}
        <g transform="rotate(12 235 110)">
          <path d="M235 110 C270 75 260 15 225 25 C195 30 205 90 235 110 Z" fill="url(#vLeaf2)" />
          <path d="M235 110 Q230 65 225 25" stroke="#052e16" strokeWidth="1.5" fill="none" opacity="0.3" />
        </g>

        {/* Hoja central superior */}
        <g>
          <path d="M190 90 C168 55 178 8 190 8 C202 8 212 55 190 90 Z" fill="url(#vLeaf1)" />
        </g>

        {/* ========================================================================= */}
        {/* 4. NUBE DE PANICULATA BLANCA (Baby's Breath)                              */}
        {/* ========================================================================= */}
        <g stroke="#94a3b8" strokeWidth="0.8" fill="none">
          <path d="M115 130 Q95 105 85 85 M95 105 Q80 110 72 105" />
          <path d="M265 130 Q285 105 295 85 M285 105 Q300 110 308 105" />
          <path d="M150 80 Q135 50 125 35 M135 50 Q120 55 112 48" />
          <path d="M230 80 Q245 50 255 35 M245 50 Q260 55 268 48" />
        </g>

        {/* Florecitas de paniculata */}
        {[
          { cx: 85, cy: 85, r: 4 }, { cx: 72, cy: 105, r: 3.5 }, { cx: 98, cy: 95, r: 3.2 },
          { cx: 295, cy: 85, r: 4 }, { cx: 308, cy: 105, r: 3.5 }, { cx: 282, cy: 95, r: 3.2 },
          { cx: 125, cy: 35, r: 3.8 }, { cx: 112, cy: 48, r: 3.2 }, { cx: 138, cy: 48, r: 3 },
          { cx: 255, cy: 35, r: 3.8 }, { cx: 268, cy: 48, r: 3.2 }, { cx: 242, cy: 48, r: 3 },
          { cx: 190, cy: 25, r: 3.8 }, { cx: 178, cy: 34, r: 3 }, { cx: 202, cy: 34, r: 3 },
          { cx: 105, cy: 165, r: 3.8 }, { cx: 275, cy: 165, r: 3.8 },
        ].map((fl, idx) => (
          <g key={idx}>
            <circle cx={fl.cx} cy={fl.cy} r={fl.r} fill="#ffffff" />
            <circle cx={fl.cx} cy={fl.cy} r={fl.r * 0.4} fill="#fde047" />
          </g>
        ))}

        {/* ========================================================================= */}
        {/* 5. CÚPULA TUPIDA Y DENSA DE VIOLETAS ATERCIOPELADAS                       */}
        {/* (Cojín morado continuo que sella todos los espacios)                     */}
        {/* ========================================================================= */}
        <ellipse cx="190" cy="140" rx="88" ry="72" fill="#2e1065" />

        {/* --- FILA 1: SUPERIOR --- */}
        {/* Violeta 1 */}
        <g transform="translate(145, 75)">
          <ellipse cx="-8" cy="-9" rx="13" ry="17" fill="url(#vPetalDeep)" transform="rotate(-18 -8 -9)" />
          <ellipse cx="8" cy="-9" rx="13" ry="17" fill="url(#vPetalDeep)" transform="rotate(18 8 -9)" />
          <ellipse cx="-12" cy="5" rx="14" ry="12" fill="url(#vPetalVivid)" />
          <ellipse cx="12" cy="5" rx="14" ry="12" fill="url(#vPetalVivid)" />
          <path d="M-7 7 C-7 22 7 22 7 7 Z" fill="url(#vPetalLight)" />
          <circle cx="0" cy="3" r="3.8" fill="url(#vGoldEye)" />
        </g>

        {/* Violeta 2 */}
        <g transform="translate(190, 60)">
          <ellipse cx="-8" cy="-9" rx="14" ry="18" fill="url(#vPetalDeep)" transform="rotate(-16 -8 -9)" />
          <ellipse cx="8" cy="-9" rx="14" ry="18" fill="url(#vPetalDeep)" transform="rotate(16 8 -9)" />
          <ellipse cx="-13" cy="5" rx="15" ry="13" fill="url(#vPetalLight)" />
          <ellipse cx="13" cy="5" rx="15" ry="13" fill="url(#vPetalLight)" />
          <path d="M-8 7 C-8 23 8 23 8 7 Z" fill="url(#vPetalVivid)" />
          <circle cx="0" cy="3" r="4" fill="url(#vGoldEye)" />
        </g>

        {/* Violeta 3 */}
        <g transform="translate(235, 75)">
          <ellipse cx="-8" cy="-9" rx="13" ry="17" fill="url(#vPetalDeep)" transform="rotate(-18 -8 -9)" />
          <ellipse cx="8" cy="-9" rx="13" ry="17" fill="url(#vPetalDeep)" transform="rotate(18 8 -9)" />
          <ellipse cx="-12" cy="5" rx="14" ry="12" fill="url(#vPetalVivid)" />
          <ellipse cx="12" cy="5" rx="14" ry="12" fill="url(#vPetalVivid)" />
          <path d="M-7 7 C-7 22 7 22 7 7 Z" fill="url(#vPetalLight)" />
          <circle cx="0" cy="3" r="3.8" fill="url(#vGoldEye)" />
        </g>

        {/* --- FILA 2: LATERALES EXTERIORES --- */}
        {/* Violeta 4 */}
        <g transform="translate(115, 110)">
          <ellipse cx="-7" cy="-8" rx="12" ry="15" fill="url(#vPetalDeep)" transform="rotate(-20 -7 -8)" />
          <ellipse cx="7" cy="-8" rx="12" ry="15" fill="url(#vPetalDeep)" transform="rotate(20 7 -8)" />
          <ellipse cx="-11" cy="4" rx="12" ry="11" fill="url(#vPetalVivid)" />
          <ellipse cx="11" cy="4" rx="12" ry="11" fill="url(#vPetalVivid)" />
          <path d="M-6 5 C-6 19 6 19 6 5 Z" fill="url(#vPetalLight)" />
          <circle cx="0" cy="2" r="3.5" fill="url(#vGoldEye)" />
        </g>

        {/* Violeta 5 */}
        <g transform="translate(265, 110)">
          <ellipse cx="-7" cy="-8" rx="12" ry="15" fill="url(#vPetalDeep)" transform="rotate(-20 -7 -8)" />
          <ellipse cx="7" cy="-8" rx="12" ry="15" fill="url(#vPetalDeep)" transform="rotate(20 7 -8)" />
          <ellipse cx="-11" cy="4" rx="12" ry="11" fill="url(#vPetalVivid)" />
          <ellipse cx="11" cy="4" rx="12" ry="11" fill="url(#vPetalVivid)" />
          <path d="M-6 5 C-6 19 6 19 6 5 Z" fill="url(#vPetalLight)" />
          <circle cx="0" cy="2" r="3.5" fill="url(#vGoldEye)" />
        </g>

        {/* --- FILA 3: INTERMEDIA DENSA (Superpuesta sin espacios) --- */}
        {/* Violeta 6 */}
        <g transform="translate(155, 110)">
          <ellipse cx="-9" cy="-10" rx="15" ry="19" fill="url(#vPetalDeep)" transform="rotate(-15 -9 -10)" />
          <ellipse cx="9" cy="-10" rx="15" ry="19" fill="url(#vPetalDeep)" transform="rotate(15 9 -10)" />
          <ellipse cx="-14" cy="5" rx="15" ry="13" fill="url(#vPetalLight)" />
          <ellipse cx="14" cy="5" rx="15" ry="13" fill="url(#vPetalLight)" />
          <path d="M-8 7 C-8 24 8 24 8 7 Z" fill="url(#vPetalVivid)" />
          <path d="M0 3 L-4 12 M0 3 L0 14 M0 3 L4 12" stroke="#2e1065" strokeWidth="1.2" opacity="0.6" />
          <circle cx="0" cy="3" r="4.5" fill="url(#vGoldEye)" />
        </g>

        {/* Violeta 7 */}
        <g transform="translate(225, 110)">
          <ellipse cx="-9" cy="-10" rx="15" ry="19" fill="url(#vPetalDeep)" transform="rotate(-15 -9 -10)" />
          <ellipse cx="9" cy="-10" rx="15" ry="19" fill="url(#vPetalDeep)" transform="rotate(15 9 -10)" />
          <ellipse cx="-14" cy="5" rx="15" ry="13" fill="url(#vPetalLight)" />
          <ellipse cx="14" cy="5" rx="15" ry="13" fill="url(#vPetalLight)" />
          <path d="M-8 7 C-8 24 8 24 8 7 Z" fill="url(#vPetalVivid)" />
          <path d="M0 3 L-4 12 M0 3 L0 14 M0 3 L4 12" stroke="#2e1065" strokeWidth="1.2" opacity="0.6" />
          <circle cx="0" cy="3" r="4.5" fill="url(#vGoldEye)" />
        </g>

        {/* Violeta 8 */}
        <g transform="translate(122, 155)">
          <ellipse cx="-8" cy="-9" rx="13" ry="16" fill="url(#vPetalDeep)" transform="rotate(-18 -8 -9)" />
          <ellipse cx="8" cy="-9" rx="13" ry="16" fill="url(#vPetalDeep)" transform="rotate(18 8 -9)" />
          <ellipse cx="-12" cy="5" rx="13" ry="12" fill="url(#vPetalVivid)" />
          <ellipse cx="12" cy="5" rx="14" ry="12" fill="url(#vPetalVivid)" />
          <path d="M-7 6 C-7 20 7 20 7 6 Z" fill="url(#vPetalLight)" />
          <circle cx="0" cy="2" r="3.8" fill="url(#vGoldEye)" />
        </g>

        {/* Violeta 9 */}
        <g transform="translate(258, 155)">
          <ellipse cx="-8" cy="-9" rx="13" ry="16" fill="url(#vPetalDeep)" transform="rotate(-18 -8 -9)" />
          <ellipse cx="8" cy="-9" rx="13" ry="16" fill="url(#vPetalDeep)" transform="rotate(18 8 -9)" />
          <ellipse cx="-12" cy="5" rx="13" ry="12" fill="url(#vPetalVivid)" />
          <ellipse cx="12" cy="5" rx="14" ry="12" fill="url(#vPetalVivid)" />
          <path d="M-7 6 C-7 20 7 20 7 6 Z" fill="url(#vPetalLight)" />
          <circle cx="0" cy="2" r="3.8" fill="url(#vGoldEye)" />
        </g>

        {/* --- FILA 4: FRONTAL LLAMATIVA --- */}
        {/* Violeta 10 */}
        <g transform="translate(150, 178)">
          <ellipse cx="-9" cy="-11" rx="16" ry="20" fill="url(#vPetalDeep)" transform="rotate(-15 -9 -11)" />
          <ellipse cx="9" cy="-11" rx="16" ry="20" fill="url(#vPetalDeep)" transform="rotate(15 9 -11)" />
          <ellipse cx="-15" cy="6" rx="16" ry="14" fill="url(#vPetalLight)" />
          <ellipse cx="15" cy="6" rx="16" ry="14" fill="url(#vPetalLight)" />
          <path d="M-8 8 C-8 26 8 26 8 8 Z" fill="url(#vPetalVivid)" />
          <path d="M0 4 L-5 14 M0 4 L0 16 M0 4 L5 14" stroke="#2e1065" strokeWidth="1.3" opacity="0.65" />
          <circle cx="0" cy="4" r="4.6" fill="url(#vGoldEye)" />
        </g>

        {/* Violeta 11 */}
        <g transform="translate(230, 178)">
          <ellipse cx="-9" cy="-11" rx="16" ry="20" fill="url(#vPetalDeep)" transform="rotate(-15 -9 -11)" />
          <ellipse cx="9" cy="-11" rx="16" ry="20" fill="url(#vPetalDeep)" transform="rotate(15 9 -11)" />
          <ellipse cx="-15" cy="6" rx="16" ry="14" fill="url(#vPetalLight)" />
          <ellipse cx="15" cy="6" rx="16" ry="14" fill="url(#vPetalLight)" />
          <path d="M-8 8 C-8 26 8 26 8 8 Z" fill="url(#vPetalVivid)" />
          <path d="M0 4 L-5 14 M0 4 L0 16 M0 4 L5 14" stroke="#2e1065" strokeWidth="1.3" opacity="0.65" />
          <circle cx="0" cy="4" r="4.6" fill="url(#vGoldEye)" />
        </g>

        {/* ========================================================= */}
        {/* FLOR 12: CORAZÓN HEROICO CENTRAL DEL RAMO                 */}
        {/* ========================================================= */}
        <g transform="translate(190, 152)">
          <ellipse cx="-11" cy="-13" rx="19" ry="24" fill="url(#vPetalDeep)" transform="rotate(-18 -11 -13)" />
          <ellipse cx="11" cy="-13" rx="19" ry="24" fill="url(#vPetalDeep)" transform="rotate(18 11 -13)" />
          <ellipse cx="-17" cy="7" rx="20" ry="17" fill="url(#vPetalLight)" transform="rotate(-8 -17 7)" />
          <ellipse cx="17" cy="7" rx="20" ry="17" fill="url(#vPetalLight)" transform="rotate(8 17 7)" />
          <path d="M-11 9 C-10 32 10 32 11 9 Z" fill="url(#vPetalVivid)" />
          <path d="M0 5 L-5 16 M0 5 L0 20 M0 5 L5 16" stroke="#1e1b4b" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="0" cy="5" r="5.5" fill="url(#vGoldEye)" />
          <circle cx="-1" cy="4" r="2" fill="#ffffff" opacity="0.9" />
        </g>

        {/* Violeta 13: Base Centro-Baja (Reposa sobre el papel) */}
        <g transform="translate(190, 205)">
          <ellipse cx="-9" cy="-10" rx="14" ry="18" fill="url(#vPetalDeep)" transform="rotate(-15 -9 -10)" />
          <ellipse cx="9" cy="-10" rx="14" ry="18" fill="url(#vPetalDeep)" transform="rotate(15 9 -10)" />
          <ellipse cx="-13" cy="5" rx="14" ry="12" fill="url(#vPetalLight)" />
          <ellipse cx="13" cy="5" rx="14" ry="12" fill="url(#vPetalLight)" />
          <path d="M-7 6 C-7 21 7 21 7 6 Z" fill="url(#vPetalVivid)" />
          <circle cx="0" cy="3" r="4" fill="url(#vGoldEye)" />
        </g>

        {/* ========================================================================= */}
        {/* 6. PAPEL DE FLORISTERÍA FRONTAL PLISADO                                   */}
        {/* ========================================================================= */}
        {/* Solapa izquierda */}
        <path
          d="M190 315 L135 210 Q190 230 190 315 Z"
          fill="url(#vWrapInner)"
          stroke="#c084fc"
          strokeWidth="0.8"
        />
        {/* Solapa derecha cruzada */}
        <path
          d="M190 315 L245 210 Q190 235 190 315 Z"
          fill="url(#vWrapOuter)"
          stroke="#a855f7"
          strokeWidth="0.8"
        />
        {/* Borde blanco satinado de papel doblado */}
        <path
          d="M140 210 Q165 224 190 218 Q215 224 240 210"
          stroke="#ffffff"
          strokeWidth="2.5"
          fill="none"
          opacity="0.9"
        />

        {/* ========================================================================= */}
        {/* 7. LAZO DE RASO SATINADO (Ata el ramo con caída natural)                  */}
        {/* ========================================================================= */}
        <rect x="172" y="308" width="36" height="12" rx="6" fill="#86198f" opacity="0.3" />
        <rect x="174" y="306" width="32" height="10" rx="5" fill="url(#vRibbon)" />

        {/* Lazada izquierda */}
        <path d="M188 312 C158 288 140 318 162 330 C180 338 186 322 188 314 Z" fill="url(#vRibbon)" />
        <path d="M186 314 C168 304 154 316 168 325" stroke="#fdf4ff" strokeWidth="1.3" fill="none" opacity="0.6" />

        {/* Lazada derecha */}
        <path d="M192 312 C222 288 240 318 218 330 C200 338 194 322 192 314 Z" fill="url(#vRibbon)" />
        <path d="M194 314 C212 304 226 316 212 325" stroke="#fdf4ff" strokeWidth="1.3" fill="none" opacity="0.6" />

        {/* Cintas colgantes ondeadas */}
        <path d="M187 315 Q170 360 160 388 Q172 375 180 384 Q183 348 189 318 Z" fill="url(#vRibbon)" />
        <path d="M193 315 Q210 360 220 388 Q208 375 200 384 Q197 348 191 318 Z" fill="url(#vRibbon)" />

        {/* Nudo central abombado */}
        <ellipse cx="190" cy="312" rx="8" ry="7" fill="#c026d3" />
        <ellipse cx="190" cy="311" rx="6" ry="5.5" fill="url(#vRibbon)" />
        <circle cx="188.5" cy="309.5" r="2" fill="#ffffff" opacity="0.85" />
      </svg>
    </motion.div>
  );
}
