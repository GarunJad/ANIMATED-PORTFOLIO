import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', href: '#hero' },
        { name: 'ABOUT', href: '#about' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'PROJECTS', href: '#projects' },
        { name: 'CONTACT', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        const lenis = window.__lenis;

        if (lenis && target) {
            lenis.scrollTo(target, { offset: -80 });
        } else if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'py-4 bg-black/70 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-display font-bold text-white tracking-widest cursor-pointer"
                >
                    GARUN<span className="text-primary">.DEV</span>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-sm font-medium hover:text-primary transition-colors hover:shadow-[0_0_10px_theme('colors.primary')] relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </motion.a>
                    ))}

                    <div className="flex space-x-4 border-l border-white/20 pl-6">
                        <a href="https://github.com/GarunJad" className="hover:text-primary transition-colors"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/garun-jadaun-39a113315/" className="hover:text-secondary transition-colors"><Linkedin size={20} /></a>
                        <a href="mailto:garunjadaun@gmail.com" className="hover:text-accent transition-colors"><Mail size={20} /></a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-primary transition-colors">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        handleNavClick(e, link.href);
                                        setIsOpen(false);
                                    }}
                                    className="text-lg font-display tracking-widest hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 pt-4">
                                <a href="https://github.com/GarunJad" className="hover:text-primary transition-colors"><Github size={24} /></a>
                                <a href="https://www.linkedin.com/in/garun-jadaun-39a113315/" className="hover:text-secondary transition-colors"><Linkedin size={24} /></a>
                                <a href="mailto:garunjadaun@gmail.com" className="hover:text-accent transition-colors"><Mail size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
