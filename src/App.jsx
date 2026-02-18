import React, { useEffect } from 'react';
import Lenis from 'lenis';
import BackgroundManager from './components/BackgroundManager';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-transparent text-white selection:bg-primary selection:text-white">
            <BackgroundManager />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500 font-mono text-sm">
                <p>&copy; {new Date().getFullYear()} GARUN JADAUN. SYSTEM SECURE.</p>
            </footer>
        </div>
    );
}

export default App;
