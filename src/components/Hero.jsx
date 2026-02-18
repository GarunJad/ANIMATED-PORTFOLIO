import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, Environment, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const ParticleField = () => {
    const count = 2000;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        return pos;
    }, []);

    const pointsRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (pointsRef.current) {
            pointsRef.current.rotation.y = time * 0.05;
            pointsRef.current.rotation.x = time * 0.02;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                color="#7c3aed"
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

/* 
 * 3D Background with optional Anime character plane
 * For now using a starfield + abstract particles
 * Ideally we'd map the image here on a plane
 */
const Scene = () => {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <ParticleField />
            <Sparkles count={500} scale={25} size={6} speed={0.4} opacity={0.5} color="#22d3ee" />

            {/* 
              If we had a cut-out character image, we would use:
              <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                  <Image url="/images/character-cutout.png" scale={[5, 8]} position={[2, 0, 0]} transparent />
              </Float>
            */}
        </>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden bg-transparent">
            {/* 3D Background - Kept simple particles to overlay on the character image */}
            <div className="absolute inset-0 z-0 opacity-50">
                <Canvas gl={{ antialias: true, alpha: true }}>
                    <Scene />
                </Canvas>
            </div>

            {/* Cinematic Content Overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">

                {/* Animated Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-primary font-mono text-sm tracking-[0.3em] mb-4 uppercase"
                >
                    System Online // Welcome User
                </motion.p>

                {/* Name with Glitch Effect / Reveal */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter leading-none mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                >
                    GARUN
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-primary tracking-tighter leading-none mb-8 drop-shadow-[0_0_20px_rgba(255,0,51,0.5)]"
                    style={{ textShadow: "4px 4px 0px #fff" }}
                >
                    JADAUN
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-lg md:text-2xl text-white font-bold bg-primary/80 px-4 py-1 skew-x-[-10deg] max-w-2xl mx-auto mb-12"
                >
                    <span className="skew-x-[10deg] inline-block">FULL STACK DEVELOPER | AI ENGINEER</span>
                </motion.p>

                {/* CTA Button */}
                <motion.a
                    href="#projects"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group relative px-12 py-5 bg-white text-black font-display font-black text-xl tracking-widest overflow-hidden skew-x-[-10deg] border-4 border-primary hover:bg-primary hover:text-white transition-colors"
                >
                    <span className="relative z-10 skew-x-[10deg] inline-block">ENTER UNIVERSE</span>
                </motion.a>

            </div>

            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
        </section>
    );
};

export default Hero;
