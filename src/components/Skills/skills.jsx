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

const skillCategories = [
  {
    category: "Frontend",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: [
      { name: "React.js" },
    ],
  },
  {
    category: "Backend",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    items: [
      { name: ".NET" },
    ],
  },
  {
    category: "Database",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    items: [
      { name: "MySQL" },
    ],
  },
  {
    category: "Data Analysis",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    items: [
      { name: "Data Analysis" },
    ],
  },
];

const stats = [
  { value: "3mo", label: "Internship" },
  { value: "1+", label: "Year as IT Officer" },
  { value: "4", label: "Core Skills" },
  { value: "100%", label: "Dedication" },
];

function SkillBar({ name }) {
  return (
    <div className="flex justify-between items-center">
      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.8rem",
          fontWeight: 600,
          color: "#d1d5db",
          letterSpacing: "0.03em",
        }}
      >
        {name}
      </span>
      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 700,
          color: "#e02020",
          background: "rgba(224,32,32,0.1)",
          border: "1px solid rgba(224,32,32,0.25)",
          borderRadius: "999px",
          padding: "2px 10px",
          letterSpacing: "0.04em",
        }}
      >
        Intermediate
      </span>
    </div>
  );
}

function SkillCard({ category, icon, items, cardDelay }) {
  return (
    <div
      className="skill-card"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "28px 26px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        animationDelay: `${cardDelay}ms`,
        transition: "border-color 0.25s, background 0.25s, transform 0.25s",
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
      {/* Card header */}
      <div className="flex items-center gap-3">
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            background: "rgba(224,32,32,0.12)",
            border: "1px solid rgba(224,32,32,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#e02020",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
        <h3
          style={{
            fontFamily: "'Montserrat', 'Arial Black', sans-serif",
            fontSize: "1rem",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "0.02em",
          }}
        >
          {category}
        </h3>
      </div>

      {/* Skill bars */}
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <SkillBar
            key={item.name}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      <ConstellationCanvas />

      {/* Radial glow — mirrored from About */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(180,0,0,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pt-28 md:pt-24 pb-16">

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
            My <span style={{ color: "#e02020" }}>Skills</span>
          </h1>
          {/* Red underline accent */}
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
            The technologies I work with — built through real-world experience
            as an IT Officer and hands-on internship work.
          </p>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 animate-fadein">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "20px 16px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', 'Arial Black', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 900,
                  color: "#e02020",
                  lineHeight: 1,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#6b7280",
                  marginTop: "6px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Skill cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadein-delayed">
          {skillCategories.map((cat, i) => (
            <SkillCard
              key={cat.category}
              category={cat.category}
              icon={cat.icon}
              items={cat.items}
              cardDelay={i * 120}
            />
          ))}
        </div>

        {/* ── Currently learning banner ── */}
        <div
          className="mt-14 animate-fadein-delayed"
          style={{
            background: "rgba(224,32,32,0.05)",
            border: "1px solid rgba(224,32,32,0.2)",
            borderRadius: "14px",
            padding: "22px 28px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "rgba(224,32,32,0.15)",
              border: "1px solid rgba(224,32,32,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e02020",
              flexShrink: 0,
            }}
          >
            {/* Lightbulb icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="9" y1="18" x2="15" y2="18" />
              <line x1="10" y1="22" x2="14" y2="22" />
              <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
            </svg>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#e02020",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Currently Growing
            </p>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.85rem",
                color: "#9ca3af",
                lineHeight: "1.6",
              }}
            >
              Actively deepening my skills in React.js, .NET, and data analysis
              through day-to-day work at Mapya Dudhkoshi Rural Municipality.
            </p>
          </div>
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
        .skill-card {
          animation: fadein 0.85s cubic-bezier(.22,1,.36,1) both;
        }
      `}</style>
    </div>
  );
}