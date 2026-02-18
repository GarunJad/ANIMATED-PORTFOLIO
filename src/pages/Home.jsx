import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Section from '../components/Section';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const posters = {
    hero: import.meta.env.BASE_URL + 'images/sung-jinwoo-solo-7680x4320-17972.jpg',
    about: import.meta.env.BASE_URL + 'images/section-bg-projects-v2.jpg',
    skills: import.meta.env.BASE_URL + 'images/tanjiro-kamado-6082x5416-23027.jpg',
    projects: import.meta.env.BASE_URL + 'images/monkey-d-luffy-5120x2880-22501.jpg',
    contact: import.meta.env.BASE_URL + 'images/satoru-gojo-suguru-7972x4553-14539.jpeg',
};

const Home = () => {
    return (
        <div className="relative w-full min-h-screen bg-black text-white selection:bg-primary selection:text-white">
            <Navbar />

            <Hero backgroundImage={posters.hero} />

            <Section
                id="about"
                backgroundImage={posters.about}
                title="ABOUT"
                subtitle="The origin story — the mindset, training arc, and systems behind the work."
            >
                <About />
            </Section>

            <Section
                id="skills"
                backgroundImage={posters.skills}
                title="SKILLS"
                subtitle="Stacks, systems, and tools I use to build cinematic, high‑performance products."
            >
                <Skills />
            </Section>

            <Section
                id="projects"
                backgroundImage={posters.projects}
                title="PROJECTS"
                subtitle="Selected deployments — real systems solving real problems."
            >
                <Projects />
            </Section>

            <Section
                id="contact"
                backgroundImage={posters.contact}
                title="CONTACT"
                subtitle="Open to collaborations, backend architecture, and cinematic frontend builds."
            >
                <Contact />
            </Section>

            <footer className="py-8 bg-black/80 border-t border-white/10 text-center text-gray-500 font-mono text-sm">
                <p>&copy; {new Date().getFullYear()} GARUN JADAUN. SYSTEM SECURE.</p>
            </footer>
        </div>
    );
};

export default Home;

