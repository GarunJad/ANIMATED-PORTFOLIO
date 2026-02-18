import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ backgroundImage }) => {
    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const posterRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!heroRef.current) return;

            const intro = gsap.timeline();

            intro
                .fromTo(
                    bgRef.current,
                    { scale: 1.2, y: 40 },
                    {
                        scale: 1,
                        y: 0,
                        duration: 2,
                        ease: 'power3.out',
                    },
                )
                .fromTo(
                    posterRef.current,
                    { y: 60, opacity: 0, rotateX: -10, transformPerspective: 1000 },
                    {
                        y: 0,
                        opacity: 1,
                        rotateX: 0,
                        duration: 1.1,
                        ease: 'power3.out',
                    },
                    '-=1.6',
                )
                .fromTo(
                    titleRef.current,
                    { y: 80, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.0,
                        ease: 'power3.out',
                    },
                    '-=0.9',
                )
                .fromTo(
                    [subtitleRef.current, buttonRef.current],
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.0,
                        ease: 'power3.out',
                        stagger: 0.12,
                    },
                    '-=0.8',
                );

            // Subtle scroll parallax for hero poster, inspired by Good Fella
            gsap.to(posterRef.current, {
                y: -60,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative h-screen w-full overflow-hidden"
        >
            <div
                ref={bgRef}
                className="absolute inset-0 will-change-transform"
            >
                <img
                    src={backgroundImage}
                    alt="Garun Jadaun"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
            </div>

            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 md:px-10 lg:px-16 w-full" style={{ perspective: 1200 }}>
                    <div
                        ref={posterRef}
                        className="relative h-[80vh] max-h-[640px] border border-white/30 bg-black/40 backdrop-blur-md overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.7)] will-change-transform"
                    >
                        {/* Inner frame */}
                        <div className="absolute inset-4 border border-white/10 pointer-events-none" />

                        {/* Accent blocks */}
                        <div className="absolute -left-8 top-10 h-40 w-40 bg-primary/45 mix-blend-screen blur-3xl" />
                        <div className="absolute right-6 bottom-12 h-24 w-24 bg-secondary/45 mix-blend-screen blur-2xl" />

                        <div className="relative flex h-full">
                            {/* Vertical label rail */}
                            <div className="hidden md:flex w-20 lg:w-24 border-r border-white/15 items-end pb-10 pl-6">
                                <div className="vertical-rl text-[0.55rem] tracking-[0.4em] uppercase text-white/60">
                                    Hero • Garun Jadaun
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col justify-between px-6 md:px-10 py-8 md:py-10">
                                <div>
                                    <p className="text-primary font-mono text-[0.6rem] md:text-xs tracking-[0.4em] mb-4 uppercase">
                                        Full Stack Developer / AI Engineer
                                    </p>

                                    <div ref={titleRef}>
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight mb-2">
                                            GARUN{' '}
                                            <span className="text-primary drop-shadow-[0_0_22px_rgba(255,0,51,0.9)]">
                                                JADAUN
                                            </span>
                                        </h1>
                                        <h2 className="text-base md:text-2xl font-semibold text-white/80 max-w-xl">
                                            Crafting cinematic, anime-inspired interfaces and robust backend systems.
                                        </h2>
                                    </div>

                                    <p
                                        ref={subtitleRef}
                                        className="mt-6 max-w-xl text-gray-300 text-sm md:text-lg leading-relaxed"
                                    >
                                        Blending motion, depth, and system design to build experiences that feel like
                                        title cards from your favorite series—bold, intentional, and alive.
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-4 items-center">
                                    <button
                                        ref={buttonRef}
                                        data-cursor="hover"
                                        onClick={() => {
                                            const target = document.querySelector('#projects');
                                            const lenis = window.__lenis;
                                            if (lenis && target) {
                                                lenis.scrollTo(target, { offset: -80 });
                                            } else if (target) {
                                                target.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                        className="px-8 md:px-10 py-3 md:py-4 bg-white text-black font-display font-bold tracking-[0.25em] text-[0.6rem] md:text-xs uppercase border-2 border-primary hover:bg-primary hover:text-white transition-colors will-change-transform"
                                    >
                                        View Missions
                                    </button>

                                    <span className="text-[0.6rem] md:text-xs tracking-[0.3em] uppercase text-white/60">
                                        Portfolio No. 01 / 2026
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
