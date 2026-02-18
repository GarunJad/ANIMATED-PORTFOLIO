import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    // Stats data
    const stats = [
        { label: 'PROJECTS', value: '16+' },
        { label: 'SKILLS', value: '8+' },
        { label: 'COMMITMENT', value: '100%' },
        { label: 'LEETCODE', value: '300+' },
    ];

    return (
        <section id="about" className="relative min-h-screen py-20 bg-transparent flex items-center overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">

                {/* Character Image / Avatar Area */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 relative"
                >
                    <div className="relative w-full max-w-md mx-auto aspect-[3/4] border-4 border-white skew-x-[-5deg] overflow-hidden shadow-[20px_20px_0px_#ff0033] group">
                        {/* Placeholder for Character Image - utilizing one of the copied assets */}
                        <img
                            src={import.meta.env.BASE_URL + "images/goku-manga-stand.jpg"}
                            alt="About Character"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            onError={(e) => { e.target.src = import.meta.env.BASE_URL + 'images/about-bg.jpg' }} // Fallback
                        />

                        {/* Tech Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-6 left-6 right-6 p-4 border border-white/50 bg-black/60 backdrop-blur-md">
                            <div className="text-primary text-xs font-black tracking-widest mb-1 uppercase">Current Status</div>
                            <div className="text-white font-mono text-sm leading-tight">BUILDING NEXT-GEN TECH // LEVELING UP</div>
                        </div>
                    </div>
                </motion.div>

                {/* Text Content - Visual Novel Style */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <div className="p-8 md:p-12 relative overflow-hidden bg-black/70 backdrop-blur-md border border-white/10 shadow-2xl skew-x-[-2deg]">
                        {/* Decorative Corner Lines */}
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-8 border-l-8 border-primary rounded-tl-sm opacity-100" />
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-8 border-r-8 border-white rounded-br-sm opacity-100" />

                        <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-none">
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">VISION</span>
                        </h2>

                        <div className="space-y-6 text-gray-200 text-lg leading-relaxed font-medium md:border-l-4 md:border-white/20 md:pl-6">
                            <p>
                                I don't just write code; <span className="text-primary font-black bg-white/10 px-1">I build systems</span>.
                                Specializing in high-performance backend systems and immersive frontend interactions.
                            </p>
                            <p>
                                Currently pursuing B.Tech in CSE at JIIT Noida. Combining algorithmic mastery
                                with creative design to forge digital experiences that feel alive.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6 mt-12 border-t border-white/10 pt-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="hover:bg-white/5 p-2 transition-colors duration-300">
                                    <div className="text-4xl font-display font-black text-white mb-1 tracking-tighter">{stat.value}</div>
                                    <div className="text-xs font-mono text-primary tracking-[0.2em]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
