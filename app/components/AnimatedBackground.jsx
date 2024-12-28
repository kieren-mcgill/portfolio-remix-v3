import React, { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const AnimatedBackground = () => {
    const vantaRef = useRef(null);

    useEffect(() => {
        const vantaEffect = NET({
            el: vantaRef.current, // Attach effect to this element
            THREE: THREE, // Pass in Three.js
            color: 0x0073e6,
            backgroundColor: null,
            points: 10.0,
            maxDistance: 20.0,
        });

        // Cleanup on component unmount
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return <div ref={vantaRef} style={{ height: '100vh', width: '100%', position: 'absolute' }} />;
};

export default AnimatedBackground;
