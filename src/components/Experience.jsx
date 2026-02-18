import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-surface/30 relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-display font-bold text-center mb-20"
                >
                    CAREER <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">TIMELINE</span>
                </motion.h2>

                <div className="space-y-20">
                    {/* Item 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-between group"
                    >
                        <div className="w-full md:w-5/12 text-center md:text-right pr-0 md:pr-12 order-2 md:order-1">
                            <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">B.Tech Computer Science</h3>
                            <div className="text-secondary font-mono text-sm mb-4">JIIT NOIDA | 2022 - 2026</div>
                            <p className="text-gray-400 text-sm">
                               I specialize in the MERN stack and enjoy creating real-time, scalable systems that deliver seamless user experiences.
                               With a strong foundation in Data Structures and Algorithms, I focus on writing efficient, optimized solutions.
                               I’m constantly exploring new technologies and turning creative ideas into impactful digital products.
                            </p>
                        </div>

                        <div className="relative flex items-center justify-center w-12 h-12 bg-background border border-primary rounded-full z-10 order-1 md:order-2 mb-6 md:mb-0 shadow-[0_0_15px_theme('colors.primary')]">
                            <GraduationCap size={20} className="text-primary" />
                        </div>

                        <div className="w-full md:w-5/12 pl-0 md:pl-12 order-3 md:order-3" />
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-between group"
                    >
                        <div className="w-full md:w-5/12 pr-0 md:pr-12 order-3 md:order-1" />

                        <div className="relative flex items-center justify-center w-12 h-12 bg-background border border-secondary rounded-full z-10 order-1 md:order-2 mb-6 md:mb-0 shadow-[0_0_15px_theme('colors.secondary')]">
                            <Briefcase size={20} className="text-secondary" />
                        </div>

                        <div className="w-full md:w-5/12 text-center md:text-left pl-0 md:pl-12 order-2 md:order-3">
                            <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-secondary transition-colors">Backend Developer Intern</h3>
                            <div className="text-secondary font-mono text-sm mb-4">  MCGeeks Mechatronics (Remote) | Trip and Thrill Website | Apr 2025 – May 2025</div>
                            <p className="text-gray-400 text-sm">
                                   Developed backend features for a travel and hotel booking platform using Supabase and Google Authentication.
                                   Implemented secure signup and login with Google Auth, built hotel booking and cancellation functionality,
                                   and improved responsiveness and cross-device compatibility of the website.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
