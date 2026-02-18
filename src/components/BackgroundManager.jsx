import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backgrounds = {
    hero: import.meta.env.BASE_URL + "images/sung-jinwoo-solo-7680x4320-17972.jpg",
    about: import.meta.env.BASE_URL + "images/goku-manga-stand.jpg",
    skills: import.meta.env.BASE_URL + "images/tanjiro-kamado-6082x5416-23027.jpg",
    projects: import.meta.env.BASE_URL + "images/monkey-d-luffy-5120x2880-22501.jpg",
    contact: import.meta.env.BASE_URL + "images/satoru-gojo-suguru-7972x4553-14539.jpeg",
};

const BackgroundManager = () => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = Object.keys(backgrounds);
            let current = 'hero';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If section is roughly in the middle of the screen
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeSection}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }} // Low opacity to keep content readable
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={backgrounds[activeSection]}
                        alt="Background"
                        className="w-full h-full object-cover filter brightness-50 contrast-125 saturate-150"
                    />
                    {/* Manga Style Halftone/Noise Overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </motion.div>
            </AnimatePresence>

            {/* Global Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>
    );
};

export default BackgroundManager;
