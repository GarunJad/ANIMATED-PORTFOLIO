import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const SkillBar = ({ name, level, color }) => (
    <div className="mb-6">
        <div className="flex justify-between mb-2">
            <span className="font-mono text-white tracking-widest">{name}</span>
            <span className="font-mono font-bold" style={{ color: color }}>{level}%</span>
        </div>
        <div className="h-3 w-full bg-black/50 border border-white/10 skew-x-[-10deg] relative">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1.5, ease: "circOut" }}
                viewport={{ once: true }}
                className="h-full relative shadow-[0_0_15px_currentColor]"
                style={{ backgroundColor: color }}
            >
                {/* Glowing leading edge */}
                <div className="absolute top-0 right-0 bottom-0 w-2 bg-white blur-[2px]" />
            </motion.div>
        </div>
    </div>
);

const Skills = () => {
    const defaultTiltOptions = {
        reverse: false,  // reverse the tilt direction
        max: 15,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.02,   // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,   // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Category 1 */}
                    <Tilt options={defaultTiltOptions} className="h-full">
                        <div className="h-full p-8 border-2 border-primary/30 bg-black/60 backdrop-blur-md hover:border-primary transition-colors relative group">
                            <div className="absolute top-0 right-0 p-2 bg-primary text-black font-bold font-mono text-xs">SYS.01</div>
                            <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center border-b border-primary/30 pb-4">
                                BACKEND_OPS
                            </h3>
                            <SkillBar name="Node.js / Express" level={95} color="#ff0033" />
                            <SkillBar name="Rest API" level={90} color="#ff0033" />
                            <SkillBar name="PostgreSQL / Mongo" level={85} color="#ff0033" />
                        </div>
                    </Tilt>

                    {/* Category 2 */}
                    <Tilt options={defaultTiltOptions} className="h-full">
                        <div className="h-full p-8 border-2 border-white/20 bg-black/60 backdrop-blur-md hover:border-white transition-colors relative group">
                            <div className="absolute top-0 right-0 p-2 bg-white text-black font-bold font-mono text-xs">SYS.02</div>
                            <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center border-b border-white/20 pb-4">
                                FRONTEND_UI
                            </h3>
                            <SkillBar name="React / Next.js" level={90} color="#ffffff" />
                            <SkillBar name="HTML/CSS" level={85} color="#ffffff" />
                            <SkillBar name="Tailwind.js" level={70} color="#ffffff" />
                        </div>
                    </Tilt>

                    {/* Category 3 */}
                    <Tilt options={defaultTiltOptions} className="h-full">
                        <div className="h-full p-8 border-2 border-accent/30 bg-black/60 backdrop-blur-md hover:border-accent transition-colors relative group">
                            <div className="absolute top-0 right-0 p-2 bg-accent text-white font-bold font-mono text-xs">SYS.03</div>
                            <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center border-b border-accent/20 pb-4">
                                AI_SYSTEMS
                            </h3>
                            <SkillBar name="LangChain / LLMs" level={80} color="#7c3aed" />
                            <SkillBar name="libraries/tools" level={75} color="#7c3aed" />
                        </div>
                    </Tilt>
                </div>
            </div>
    );
};

export default Skills;
