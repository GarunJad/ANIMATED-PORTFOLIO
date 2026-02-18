import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ id, backgroundImage, title, subtitle, children }) => {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);
    const contentRef = useRef(null);
    const accentRef = useRef(null);
    const posterRef = useRef(null);
    const frameOuterRef = useRef(null);
    const frameInnerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const metaRef = useRef(null);
    const blocksRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current || !bgRef.current || !contentRef.current) return;

            gsap.fromTo(
                bgRef.current,
                { scale: 1.25, y: -90 },
                {
                    scale: 1.05,
                    y: 90,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                },
            );

            // Poster dock-in + line draw + text reveal (plays, no inner scrolling)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse',
                },
            });

            tl.fromTo(
                posterRef.current,
                { y: 80, opacity: 0, rotateX: -14, transformPerspective: 1000 },
                { y: 0, opacity: 1, rotateX: 0, duration: 1.1, ease: 'power3.out' },
            )
                .fromTo(
                    frameOuterRef.current,
                    { scaleX: 0.9, scaleY: 0.9, opacity: 0 },
                    { scaleX: 1, scaleY: 1, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    '-=0.9',
                )
                .fromTo(
                    frameInnerRef.current,
                    { scaleX: 0.95, scaleY: 0.95, opacity: 0 },
                    { scaleX: 1, scaleY: 1, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    '-=0.7',
                )
                .fromTo(
                    titleRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
                    '-=0.6',
                )
                .fromTo(
                    subtitleRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
                    '-=0.7',
                )
                .fromTo(
                    metaRef.current,
                    { y: 10, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    '-=0.6',
                );

            if (blocksRef.current.length) {
                tl.fromTo(
                    blocksRef.current,
                    { x: -20, y: 10, opacity: 0 },
                    { x: 0, y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.08 },
                    '-=0.9',
                );
            }

            if (accentRef.current) {
                gsap.to(accentRef.current, {
                    x: 30,
                    y: -20,
                    duration: 6,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className="relative min-h-screen w-full"
        >
            <div
                ref={bgRef}
                className="absolute inset-0 will-change-transform"
            >
                <img
                    src={backgroundImage}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
            </div>

            <div className="relative z-10 h-full flex items-center">
                <div
                    className="container mx-auto px-4 md:px-10 lg:px-16 w-full"
                >
                    <div
                        ref={contentRef}
                        className="w-full py-20 md:py-28"
                        style={{ perspective: 1200 }}
                    >
                        <div
                            ref={posterRef}
                            className="relative border border-white/40 bg-black/40 backdrop-blur-2xl shadow-[0_0_70px_rgba(0,0,0,0.85)] overflow-hidden"
                        >
                        {/* Outer poster frame */}
                        <div
                            ref={frameOuterRef}
                            className="absolute inset-4 border border-white/15 pointer-events-none will-change-transform"
                        />
                        <div
                            ref={frameInnerRef}
                            className="absolute inset-8 border border-white/10 pointer-events-none will-change-transform"
                        />

                        {/* Editorial grid */}
                        <div className="absolute inset-0 opacity-[0.14] pointer-events-none">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
                        </div>

                        {/* Soft vignette */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_10%,rgba(0,0,0,0.75)_70%)] pointer-events-none" />

                        {/* Animated accent ring */}
                        <div
                            ref={accentRef}
                            className="absolute -top-10 -left-6 h-32 w-32 rounded-full border border-white/40/60"
                            style={{ boxShadow: '0 0 40px rgba(248, 113, 113, 0.6)' }}
                        />

                        {/* Colored glow blocks */}
                        <div className="absolute -left-28 top-6 h-56 w-56 bg-primary/55 mix-blend-screen blur-3xl" />
                        <div className="absolute right-[-56px] bottom-2 h-40 w-40 bg-secondary/55 mix-blend-screen blur-3xl" />
                        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 bg-accent/20 mix-blend-screen blur-3xl" />

                        {/* Manga panel blocks (animated) */}
                        <div
                            ref={(el) => {
                                if (el) blocksRef.current[0] = el;
                            }}
                            className="absolute right-8 top-8 h-10 w-24 bg-primary/70 mix-blend-screen"
                        />
                        <div
                            ref={(el) => {
                                if (el) blocksRef.current[1] = el;
                            }}
                            className="absolute left-10 top-28 h-16 w-16 bg-secondary/50 mix-blend-screen"
                        />
                        <div
                            ref={(el) => {
                                if (el) blocksRef.current[2] = el;
                            }}
                            className="absolute right-12 bottom-20 h-14 w-14 bg-accent/35 mix-blend-screen"
                        />

                        <div className="relative flex h-full">
                            {/* Vertical title rail */}
                            <div className="hidden md:flex w-20 lg:w-24 border-r border-white/15 items-end pb-10 pl-6">
                                {title && (
                                    <div className="vertical-rl text-[0.55rem] tracking-[0.4em] uppercase text-white/60">
                                        {title}
                                    </div>
                                )}
                            </div>

                            {/* Main content area */}
                            <div className="flex-1 flex flex-col justify-between px-6 md:px-10 py-8 md:py-10">
                                <div>
                                    {title && (
                                        <h2
                                            ref={titleRef}
                                            className="text-3xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-tight"
                                        >
                                            {title}
                                        </h2>
                                    )}
                                    {subtitle && (
                                        <p
                                            ref={subtitleRef}
                                            className="mt-4 text-sm md:text-lg text-gray-200 max-w-xl leading-relaxed"
                                        >
                                            {subtitle}
                                        </p>
                                    )}
                                </div>

                                <div className="mt-8 md:mt-10 text-sm md:text-base text-gray-100">
                                    {children}
                                </div>

                                {/* Bottom metadata strip */}
                                <div
                                    ref={metaRef}
                                    className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[0.65rem] md:text-xs uppercase tracking-[0.25em] text-white/55"
                                >
                                    <span>GARUN JADAUN — PORTFOLIO</span>
                                    <span className="hidden sm:inline">
                                        SECTION • {title || 'UNTITLED'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;

