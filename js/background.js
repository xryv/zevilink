// background.js
document.addEventListener("DOMContentLoaded", () => {
    tsParticles.load("tsparticles-background", {
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        number: { value: 80, density: { enable: true, area: 800 } },
        color: { value: ["#ff0077", "#00ffdd", "#ffdd00", "#00ffaa"] },
        shape: { type: "circle" },
        opacity: {
          value: 0.2,
          random: { enable: true, minimumValue: 0.05 },
          anim: { enable: true, speed: 0.5, opacity_min: 0.05, sync: false }
        },
        size: {
          value: { min: 2, max: 6 },
          anim: { enable: true, speed: 2, size_min: 1, sync: false }
        },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.1,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "bounce" }
        }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: false }
        },
        modes: {
          grab: { distance: 200, links: { opacity: 0.2 } }
        }
      },
      detectRetina: true,
      background: { color: "#00000000" }
    });
  });
  