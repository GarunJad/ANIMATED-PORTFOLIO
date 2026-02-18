import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { Tilt } from 'react-tilt';

const projectsData = [
    {
        id: 1,
        title: "Intelligent Pipeline",
        category: "AI/ML SYSTEM",
        tags: ["FastAPI", "Postgres", "LangChain"],
        image: import.meta.env.BASE_URL + "images/project-1-new.png",
        description: "Natural language to SQL querying system. Converts human questions into optimized database queries with automated validation and metadata tracking for enterprise data warehouses.",
        link: "https://github.com/GarunJad",
        github: "https://github.com/GarunJad"
    },
    {
        id: 2,
        title: "AI-PBX Gateway",
        category: "TELECOM INFRA",
        tags: ["Node.js", "WebSockets", "FreePBX"],
        image: import.meta.env.BASE_URL + "images/project-2-new.png",
        description: "Real-time telephony bridge handling live call events. Intercepts SIP packets and routes them through AI agents for automated customer support and sentiment analysis.",
        link: "https://github.com/GarunJad/AI-PBX-Integration-Gateway",
        github: "https://github.com/GarunJad/AI-PBX-Integration-Gateway"
    },
    {
        id: 3,
        title: "Real-Time Chat",
        category: "SECURE COMM",
        tags: ["MERN", "Socket.io", "E2E Encryption"],
        image: import.meta.env.BASE_URL + "images/project-3-new.png",
        description: "Encrypted messaging platform with persistent storage. Features real-time typing indicators, read receipts, and a self-destructing message mode.",
        link: "https://github.com/GarunJad",
        github: "https://github.com/GarunJad"
    }
];

const ProjectCard = ({ project, setSelectedId }) => {
    const defaultTiltOptions = {
        reverse: false,
        max: 10,
        perspective: 1000,
        scale: 1.05,
        speed: 500,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }

    return (
        <Tilt options={defaultTiltOptions} className="h-full">
            <motion.div
                layoutId={project.id}
                onClick={() => setSelectedId(project.id)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer overflow-hidden h-[450px] border-4 border-transparent hover:border-primary transition-colors bg-black/40 backdrop-blur-sm"
            >
                {/* Manga Speed Lines Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-20 pointer-events-none mix-blend-overlay" />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />

                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 w-full p-8 z-30">


                    <h3 className="text-3xl font-display font-black text-white mb-4 leading-none uppercase italic" style={{ textShadow: "2px 2px 0px #000" }}>
                        {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-bold font-mono text-black bg-white px-2 py-1 transform skew-x-[-10deg]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
        </Tilt>
    );
};

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);
    const selectedProject = projectsData.find(p => p.id === selectedId);

    return (
        <div className="relative z-10 py-6 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {projectsData.map(project => (
                        <ProjectCard key={project.id} project={project} setSelectedId={setSelectedId} />
                    ))}
                </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop with Blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                        />

                        {/* Modal Content */}
                        <motion.div
                            layoutId={selectedId}
                            className="relative w-full max-w-5xl bg-black border-2 border-white/20 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-primary text-white hover:bg-white hover:text-black transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 relative min-h-[300px]">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#050505]">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-primary text-white font-mono font-bold text-xs">
                                        {selectedProject.category}
                                    </span>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase leading-none">
                                    {selectedProject.title}
                                </h3>

                                <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-4 border-white/10 pl-4">
                                    {selectedProject.description}
                                </p>

                                <div className="mb-10">
                                    <h4 className="font-bold mb-4 font-mono text-sm uppercase tracking-widest text-primary">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="border border-white/20 px-4 py-2 text-sm font-mono text-white hover:bg-white hover:text-black transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a href={selectedProject.link} className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-4 font-bold font-display uppercase hover:bg-primary hover:text-white transition-all tracking-widest text-sm">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                    <a href={selectedProject.github} className="flex-1 flex items-center justify-center gap-2 border border-white text-white py-4 font-bold font-display uppercase hover:bg-white hover:text-black transition-all tracking-widest text-sm">
                                        <Github size={18} /> Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
