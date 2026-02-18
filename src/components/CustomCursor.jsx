import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        gsap.set(cursor, { xPercent: -50, yPercent: -50 });

        const move = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: 'power3.out',
            });
        };

        const scaleUp = () => {
            gsap.to(cursor, {
                scale: 1.8,
                duration: 0.25,
                ease: 'power3.out',
            });
        };

        const scaleDown = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.25,
                ease: 'power3.out',
            });
        };

        window.addEventListener('mousemove', move);

        const hoverTargets = document.querySelectorAll('a, button, [data-cursor="hover"]');
        hoverTargets.forEach((el) => {
            el.addEventListener('mouseenter', scaleUp);
            el.addEventListener('mouseleave', scaleDown);
        });

        return () => {
            window.removeEventListener('mousemove', move);
            hoverTargets.forEach((el) => {
                el.removeEventListener('mouseenter', scaleUp);
                el.removeEventListener('mouseleave', scaleDown);
            });
        };
    }, []);

    return <div ref={cursorRef} className="cursor-ring" />;
};

export default CustomCursor;

