import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.3,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        window.__lenis = lenis;

        lenis.on('scroll', ScrollTrigger.update);

        const tick = (time) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(tick);

        gsap.ticker.lagSmoothing(0);
        ScrollTrigger.refresh();

        return () => {
            gsap.ticker.remove(tick);
            lenis.destroy();
            delete window.__lenis;
        };
    }, []);
};

