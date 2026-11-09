# 💜 Un Ramito de Violetas

> *"Cada 9 de noviembre, como siempre sin tarjeta, te mandaba un ramito de violetas..."*

Una experiencia web interactiva, moderna y delicada diseñada para sorprender a alguien especial. Creada con **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, **canvas-confetti** y **Lucide React**.

---

## ✨ Características y Flujo de la Experiencia

1. **Pantalla de Bienvenida (`START`)**:
   - Fondo minimalista con degradado radial suave en tonos crema y lavanda.
   - Botón interactivo central con microinteracciones de escala, resplandor violeta y efecto de brillo al pasar el cursor: *"Tengo un detalle para ti 💜"*.

2. **Secuencia Emotiva de Frases (`PHRASES`)**:
   - Transición fluida con `AnimatePresence`.
   - Secuencia de frases configurables que entran flotando suavemente desde abajo y se desvanecen hacia arriba con desenfoque cinematográfico (*blur*).
   - Indicador dinámico de progreso.

3. **Clímax y Ramo de Violetas (`SURPRISE`)**:
   - **Lluvia de pétalos**: Disparo calibrado con `canvas-confetti` en tonos morados, lilas y dorados.
   - **Ilustración Vectorial SVG Detallada**:
     - Inspirada fielmente en ramos de floristería artesanal: densa cúpula de violetas aterciopeladas (*Viola odorata*), nube etérea de *paniculata* blanca (baby's breath), corona de hojas botánicas acorazonadas y envoltorio de papel plisado.
     - **Floración orgánica por capas**: Despliegue de tallos, apertura del envoltorio, fanning de hojas y eclosión elástica de cada flor con física de resorte (*spring physics*).
     - **Balanceo continuo (*idle floating*)**: Una vez abierto el ramo, respira y flota suavemente de manera continua.

4. **Dedicatoria y Cierre**:
   - Tarjeta final translúcida con tipografía editorial (*Cormorant Garamond* y *Great Vibes*).
   - Botón discreto *"Volver a ver"* para reiniciar todo el ciclo sin necesidad de recargar la página.

---

## 🛠️ Stack Tecnológico

- ⚡ **[Vite](https://vitejs.dev/)** - Entorno de desarrollo ultrarrápido
- ⚛️ **[React 18](https://react.dev/)** - Componentes reactivos modulares
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** - Estilos utilitarios y paleta de colores personalizada
- 🪄 **[Framer Motion](https://www.framer.com/motion/)** - Animaciones por capas, físicas de resorte y orquestación de estados
- 🎉 **[canvas-confetti](https://github.com/catdad/canvas-confetti)** - Efectos de confeti y lluvia de pétalos
- 🔣 **[Lucide React](https://lucide.dev/)** - Iconografía minimalista

---

## 🚀 Instalación y Uso Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/puyi27/ramito-violetas.git
   cd ramito-violetas
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Compilar para producción**:
   ```bash
   npm run build
   ```

---

## ⚙️ Personalización

Puedes editar fácilmente los textos, las frases previas y la dedicatoria final abriendo el archivo [`src/App.jsx`](./src/App.jsx) y modificando el objeto `CONFIG`:

```javascript
const CONFIG = {
  phrases: [
    "Es un poco tarde pero no queria dejar pasar el dia sin regalarte algo ",
    "mejor tarde que nunca dicen.",
    "Espero que te guste.",
    "Por un día tan largo espero que te saque una sonrisa."
  ],
  phraseDuration: 3500, // Duración de cada frase en ms
  dedication: {
    title: "Para ti, con todo mi cariño",
    message: "Aunque no sean reales aquí esta mi detalle para el 9 de Noviembre, te quiero mucho",
    signature: "Att, ojitos azules "
  }
};
```

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE). Siéntete libre de usarlo o adaptarlo para sorprender a quien más quieras. 💜
