import * as React from 'react';

const skills = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' }
];

export function HexagonBackground() {
  const canvasRef = React.useRef(null);
  const gridRef = React.useRef(null);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const cvs = canvasRef.current;
    const container = containerRef.current;
    if (!cvs || !container) return;
    const ctx = cvs.getContext('2d');
    if (!ctx) return;

    cvs.width = window.innerWidth;
    cvs.height = container.offsetHeight || 380;

    let particlesArray = [];
    let mouse = {
      x: null,
      y: null,
      radius: 170
    };

    const handleMouseMove = (event) => {
      const rect = cvs.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.radius = 170;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let thread;
    const handleMouseStop = () => {
      clearTimeout(thread);
      thread = setTimeout(() => {
        mouse.radius = 0;
      }, 10);
    };
    window.addEventListener('mousemove', handleMouseStop);

    class Particle {
      constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = size;
        this.color = color;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#72C100';
        ctx.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius && distance > 0) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;
          
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dxBase = this.x - this.baseX;
            this.x -= dxBase / 15;
          }
          if (this.y !== this.baseY) {
            let dyBase = this.y - this.baseY;
            this.y -= dyBase / 15;
          }
        }

        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      let numberOfParticles = (cvs.height * cvs.width) / 9000;
      if (isNaN(numberOfParticles) || numberOfParticles <= 0) return;
      for (let i = 0; i < numberOfParticles * 0.25; i++) {
        let size = (Math.random() * 35) + 1;
        let x = (Math.random() * ((cvs.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((cvs.height - size * 2) - (size * 2)) + size * 2);
        let color = '#72C100';
        particlesArray.push(new Particle(x, y, size, color));
      }
    }

    function connect() {
      let opacityValue = 1;
      for (let i = 0; i < particlesArray.length; i++) {
        // Check if particle is close to the mouse. If not, don't draw connections.
        if (typeof mouse.x !== 'number' || typeof mouse.y !== 'number' || mouse.radius === 0) continue;
        let dxMouse = mouse.x - particlesArray[i].x;
        let dyMouse = mouse.y - particlesArray[i].y;
        let distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse > mouse.radius) continue;

        for (let j = i; j < particlesArray.length; j++) {
          let distance = ((particlesArray[i].x - particlesArray[j].x) * (particlesArray[i].x - particlesArray[j].x)) + ((particlesArray[i].y - particlesArray[j].y) * (particlesArray[i].y - particlesArray[j].y));

          if (distance < (cvs.width / 7) * (cvs.height / 7)) {
            opacityValue = Math.max(0, Math.min(1, 1 - (distance / 20000)));
            ctx.strokeStyle = 'rgba(159, 253, 50,' + opacityValue + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
    }

    let animationFrameId;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      for (let i = 0; i < particlesArray.length; i++) {
        if (particlesArray[i]) {
          particlesArray[i].update();
        }
      }
      connect();
    }

    const handleResize = () => {
      const currentContainer = containerRef.current;
      if (!currentContainer || !cvs) return;
      cvs.width = window.innerWidth;
      cvs.height = currentContainer.offsetHeight || 380;
      mouse.radius = 170;
      init();
      hexagonGrid();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };
    window.addEventListener('mouseout', handleMouseOut);

    // HEXAGON GRID Generator
    function hexagonGrid() {
      const HEXAGON_GRID = gridRef.current;
      const currentContainer = containerRef.current;
      if (!HEXAGON_GRID || !currentContainer) return;

      let wall = {
        width: currentContainer.offsetWidth,
        height: currentContainer.offsetHeight || 380
      };

      let rowsNumber = Math.ceil(wall.height / 80) + 1;
      let columnsNumber = Math.ceil(wall.width / 100) + 2;

      HEXAGON_GRID.innerHTML = "";

      for (let i = 0; i < rowsNumber; i++) {
        let row = document.createElement("div");
        row.className = "row";
        HEXAGON_GRID.appendChild(row);
      }

      let rows = HEXAGON_GRID.querySelectorAll(".row");

      for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < columnsNumber; j++) {
          let hexagon = document.createElement("div");
          hexagon.className = "hexagon";

          // Randomly select a skill for each hexagon cell
          const skill = skills[Math.floor(Math.random() * skills.length)];
          hexagon.classList.add("has-skill");
          
          // Image icon
          let img = document.createElement("img");
          img.src = skill.icon;
          img.alt = skill.name;
          img.className = "skill-icon";
          hexagon.appendChild(img);

          // Name text
          let textDiv = document.createElement("div");
          textDiv.className = "skill-text";
          textDiv.innerText = skill.name;
          hexagon.appendChild(textDiv);

          rows[i].appendChild(hexagon);
        }
      }
    }

    // Run initializations
    init();
    animate();
    hexagonGrid();

    // Cleanups
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMouseStop);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(thread);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '380px',
        overflow: 'hidden',
        background: '#000000'
      }}
    >
      <style>{`
        #particles {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        #hexagonGrid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 2;
        }

        #hexagonGrid .row {
          display: inline-flex;
          margin-top: -32px;
          margin-left: -50px;
        }

        #hexagonGrid .row:nth-child(even) {
          margin-left: 2px;
        }

        #hexagonGrid .row .hexagon {
          position: relative;
          width: 100px;
          height: 110px;
          margin: 4px 2px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        #hexagonGrid .row .hexagon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000000;
          opacity: 0.95;
          transition: background 1s, opacity 1s;
        }

        #hexagonGrid .row .hexagon::after {
          content: '';
          position: absolute;
          top: 4px;
          right: 4px;
          bottom: 4px;
          left: 4px;
          background: #141414;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        #hexagonGrid .row .hexagon:hover::before {
          background: #8CFD0B;
          opacity: 1;
          transition: 0s;
        }

        #hexagonGrid .row .hexagon:hover::after {
          background: #000000;
        }

        /* Skill icon styling */
        #hexagonGrid .row .hexagon .skill-icon {
          position: absolute;
          top: 48%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 32px;
          height: 32px;
          object-fit: contain;
          opacity: 0.15;
          filter: grayscale(100%);
          transition: opacity 0.5s ease, filter 0.5s ease, transform 0.5s ease;
          z-index: 5;
          pointer-events: none;
        }

        #hexagonGrid .row .hexagon:hover .skill-icon {
          opacity: 1;
          filter: grayscale(0%) drop-shadow(0 0 8px rgba(140, 253, 11, 0.95)) drop-shadow(0 0 20px rgba(140, 253, 11, 0.4));
          transform: translate(-50%, -50%) scale(1.2);
        }

        /* Hover reveals skill text inside */
        #hexagonGrid .row .hexagon .skill-text {
          position: absolute;
          bottom: 12px;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono), monospace;
          font-weight: 800;
          font-size: 9px;
          color: #8CFD0B;
          opacity: 0;
          z-index: 10;
          transition: opacity 0.3s ease;
          pointer-events: none;
          user-select: none;
          text-align: center;
        }

        #hexagonGrid .row .hexagon:hover .skill-text {
          opacity: 1;
        }
      `}</style>

      {/* PARTICLES */}
      <canvas id="particles" ref={canvasRef}></canvas>

      {/* HEXAGON GRID */}
      <div id="hexagonGrid" ref={gridRef}></div>
    </div>
  );
}
