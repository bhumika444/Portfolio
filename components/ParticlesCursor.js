// components/ParticlesCursor.js
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesCursor() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse' // 💡 This makes the particles scatter around cursor
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.4
            }
          }
        },
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              area: 800
            }
          },
          color: { value: '#00ffff' },
          shape: { type: 'circle' },
          opacity: {
            value: 0.5
          },
          size: {
            value: { min: 1, max: 3 }
          },
          links: {
            enable: true,
            distance: 120,
            color: '#00ffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: 'none',
            random: false,
            straight: false,
            outModes: 'out',
            bounce: false
          }
        },
        detectRetina: true
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  );
}
