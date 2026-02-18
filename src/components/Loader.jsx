import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="text-center"
                    >
                        <p className="text-sm font-mono tracking-[0.4em] text-white/50 mb-4">
                            INITIALIZING
                        </p>
                        <h1 className="text-3xl md:text-5xl font-display font-black tracking-[0.35em] text-white">
                            GARUN&nbsp;JADAUN
                        </h1>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;

