import { useEffect, useRef } from "react";

const NODES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
}));

function ConstellationCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const nodesRef = useRef(
    NODES.map((n) => ({
      ...n,
      vx: (Math.random() - 0.5) * 0.015,
      vy: (Math.random() - 0.5) * 0.015,
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > 100) n.vx *= -1;
        if (n.y < 0 || n.y > 100) n.vy *= -1;
      });

      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach((other) => {
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 18) {
            ctx.beginPath();
            ctx.moveTo((node.x / 100) * w, (node.y / 100) * h);
            ctx.lineTo((other.x / 100) * w, (other.y / 100) * h);
            ctx.strokeStyle = `rgba(255,255,255,${0.15 * (1 - dist / 18)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });
      });

      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc((node.x / 100) * w, (node.y / 100) * h, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.55)";
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

const projects = [
  {
    name: "Online Vehicle Booking",
    repo: "OnlineVechileBooking",
    description:
      "A web application for booking vehicles online, allowing users to browse available vehicles and make reservations.",
    language: "JavaScript",
    url: "https://github.com/bipin00019/OnlineVechileBooking",
  },
  {
    name: "AI / ML Coursework",
    repo: "6CS012_AI-ML_2331195",
    description:
      "Artificial intelligence and machine learning assignments and experiments completed as part of academic coursework.",
    language: "Jupyter Notebook",
    url: "https://github.com/bipin00019/6CS012_AI-ML_2331195",
  },
  {
    name: "Room Rent Management System",
    repo: "Room-Rent-Management-System",
    description:
      "Tracks room details, tenants, rent amounts, and payment status for efficient rent management.",
    language: "JavaScript",
    url: "https://github.com/bipin00019/Room-Rent-Management-System",
  },
  {
    name: "Data Science Course Exercises",
    repo: "data-science-course-exercises",
    description:
      "Data science exercises and notebooks for course practice — covering pandas, visualization, and exploratory analysis.",
    language: "Jupyter Notebook",
    url: "https://github.com/bipin00019/data-science-course-exercises",
  },
  {
    name: "Everest Dudhkoshi Cultural Trail",
    repo: "everest-dudhkoshi-cultural-trail",
    description:
      "A scenic trek site for Nepal's Solu-Khumbu region, highlighting Himalayan views, Sherpa villages, monasteries, and cultural experiences.",
    language: "HTML",
    url: "https://github.com/bipin00019/everest-dudhkoshi-cultural-trail",
  },
];

// GitHub icon
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// External link icon
function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div
      className="project-card"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "26px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        animationDelay: `${index * 100}ms`,
        transition: "border-color 0.25s, background 0.25s, transform 0.25s",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(224,32,32,0.35)";
        e.currentTarget.style.background = "rgba(224,32,32,0.04)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Top row: folder icon + links */}
      <div className="flex items-center justify-between">
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            background: "rgba(224,32,32,0.12)",
            border: "1px solid rgba(224,32,32,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#e02020",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#6b7280", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e02020")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            title="View on GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#6b7280", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e02020")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            title="Open project"
          >
            <ExternalIcon />
          </a>
        </div>
      </div>

      {/* Project name */}
      <h3
        style={{
          fontFamily: "'Montserrat', 'Arial Black', sans-serif",
          fontSize: "0.98rem",
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "0.01em",
          lineHeight: 1.3,
        }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.8rem",
          color: "#9ca3af",
          lineHeight: "1.65",
          flex: 1,
        }}
      >
        {project.description}
      </p>


    </div>
  );
}

export default function Projects() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      <ConstellationCanvas />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(180,0,0,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pt-28 md:pt-24 pb-6">

        {/* ── Section heading ── */}
        <div className="text-center md:text-left animate-fadein mb-12">
          <h1
            className="font-extrabold leading-tight"
            style={{
              fontFamily: "'Montserrat', 'Arial Black', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            My <span style={{ color: "#e02020" }}>Projects</span>
          </h1>
          <div
            style={{
              width: "60px",
              height: "4px",
              background: "#e02020",
              borderRadius: "2px",
              marginTop: "10px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="md:mx-0"
          />
          <p
            className="text-gray-400 mt-5 max-w-xl text-center md:text-left"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.7",
            }}
          >
            A collection of projects I've built — from web applications and data science
            notebooks to real-world management systems.
          </p>
        </div>

        {/* ── Project cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadein-delayed">
          {projects.map((project, i) => (
            <ProjectCard key={project.repo} project={project} index={i} />
          ))}
        </div>

        {/* ── GitHub CTA ── */}
        <div className="flex justify-center md:justify-start mt-10 animate-fadein-delayed">
          <a
            href="https://github.com/bipin00019"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold text-white rounded-lg transition-all duration-200"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "10px 26px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.88rem",
              letterSpacing: "0.04em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(224,32,32,0.5)";
              e.currentTarget.style.color = "#e02020";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <GitHubIcon />
            View All on GitHub
          </a>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');

        @keyframes fadein {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 0.85s cubic-bezier(.22,1,.36,1) both;
        }
        .animate-fadein-delayed {
          animation: fadein 0.95s cubic-bezier(.22,1,.36,1) 0.2s both;
        }
        .project-card {
          animation: fadein 0.85s cubic-bezier(.22,1,.36,1) both;
        }
      `}</style>
    </div>
  );
}