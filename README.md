# ⚡ ANIMATED PORTFOLIO (Manga Edition)

[**Live Demo**](https://garunjad.github.io/ANIMATED-PORTFOLIO/)

> *"A developer portfolio that feels like stepping into a manga."*

This project is a high-performance, cinematic personal portfolio website built with **React**, **Three.js**, and **Framer Motion**. It features a unique **Manga/Anime aesthetic**, using bold typography, high-contrast monochrome visuals with striking red accents, and immersive scroll-based character transitions.

![Preview](https://i.ibb.co/example-preview.png) <!-- Replace with actual screenshot if available -->

## 🌟 Key Features

*   **Cinematic Manga Design:** High-contrast Black/White/Red color scheme inspired by premium manga panels.
*   **Dynamic Backgrounds:** Scroll-triggered full-screen character artwork transitions (Goku UI, Luffy Gear 5, Ichigo Vasto Lorde).
*   **3D Interactivity:**
    *   **React-Tilt:** 3D parallax effects on Project and Skill cards.
    *   **R3F (Three.js):** Subtle 3D particle systems in the Hero section.
*   **Smooth Animations:** Powered by **Lenis** (smooth scrolling) and **Framer Motion** (orchestrated entry/exit animations).
*   **Functional Contact Form:** Integrated with **EmailJS** for direct email delivery without redirects.
*   **Fully Responsive:** Optimized for mobile, tablet, and desktop devices.
*   **Performance:** Vite-powered build with code splitting and optimized assets.

## 🛠️ Tech Stack

*   **Core:** React 18, Vite
*   **Styling:** Tailwind CSS v3
*   **Animation:** Framer Motion, GSAP, Lenis Scroll
*   **3D:** Three.js, React Three Fiber, React-Tilt
*   **Icons:** Lucide React
*   **Forms:** EmailJS
*   **Deployment:** GitHub Pages

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/GarunJad/ANIMATED-PORTFOLIO.git
    cd ANIMATED-PORTFOLIO
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start development server**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

## 📨 Contact Form Setup (EmailJS)

To make the contact form functional, you need to provide your own EmailJS keys.

1.  Sign up at [EmailJS](https://www.emailjs.com/).
2.  Create a **Service** (e.g., Gmail).
3.  Create an **Email Template**.
4.  Get your **Public Key** from Account Settings.
5.  Open `src/components/Contact.jsx` and replace the placeholder keys:

    ```javascript
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    ```

## 📦 Deployment

This project is configured for **GitHub Pages**.

1.  **Build the project:**
    ```bash
    npm run build
    ```

2.  **Deploy:**
    ```bash
    npm run deploy
    ```
    *This runs `gh-pages -d dist` to push the build folder to the `gh-pages` branch.*

## 📂 Project Structure

```
portfolio-v3/
├── public/              # Static assets (images, models)
├── src/
│   ├── components/      # React components (Hero, About, Projects, etc.)
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles & Tailwind directives
│   └── main.jsx         # Entry point
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies and scripts
├── tailwind.config.cjs  # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## 🎨 Design Philosophy

The design follows a **"Manga Panel"** philosophy:
*   **Panels:** Content is organized in distinct, bordered sections.
*   **Contrast:** Heavy use of `#000000` (Void Black) and `#FFFFFF` (Paper White) with `#FF0000` (Blood Red) for action/emphasis.
*   **Motion:** Interactions are snappy and impactful, mimicking the dynamic lines of action scenes.

---

**Developed by Garun Jadaun**
