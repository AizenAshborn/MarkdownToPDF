'use client';

import { useEffect, useRef } from 'react';
import p5 from 'p5';

const BackgroundParticles = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sketchRef.current) {
      return;
    }

    const sketch = (p: p5) => {
      let particles: Particle[] = [];
      const numParticles = typeof window !== 'undefined' && window.innerWidth < 768 ? 25 : 50;

      class Particle {
        pos: p5.Vector;
        vel: p5.Vector;
        size: number;
        
        constructor() {
          this.pos = p.createVector(p.random(p.width), p.random(p.height));
          this.vel = p.createVector(p.random(-0.5, 0.5), p.random(-0.5, 0.5));
          this.size = p.random(2, 4);
        }

        update() {
          this.pos.add(this.vel);
          this.edges();
        }

        draw() {
          p.noStroke();
          p.fill('hsla(38, 92%, 67%, 0.5)'); // Accent color
          p.circle(this.pos.x, this.pos.y, this.size);
        }

        edges() {
          if (this.pos.x < 0 || this.pos.x > p.width) this.vel.x *= -1;
          if (this.pos.y < 0 || this.pos.y > p.height) this.vel.y *= -1;
        }

        checkParticles(particles: Particle[]) {
          particles.forEach((particle) => {
            const d = p.dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if (d < 120) {
              p.stroke('hsla(38, 92%, 67%, 0.1)');
              p.line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
          });
        }
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(sketchRef.current!);
        for (let i = 0; i < numParticles; i++) {
          particles.push(new Particle());
        }
      };

      p.draw = () => {
        p.clear();
        particles.forEach((particle) => {
          particle.update();
          particle.draw();
          particle.checkParticles(particles);
        });
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    let p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default BackgroundParticles;
