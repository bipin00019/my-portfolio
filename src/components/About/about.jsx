// import { useEffect, useRef } from "react";
// import photo from "../../assets/images/a_photo.avif";
// import cv from "../../../public/cv.pdf"

// const NODES = Array.from({ length: 60 }, (_, i) => ({
//   id: i,
//   x: Math.random() * 100,
//   y: Math.random() * 100,
// }));

// function ConstellationCanvas() {
//   const canvasRef = useRef(null);
//   const animRef = useRef(null);
//   const nodesRef = useRef(
//     NODES.map((n) => ({
//       ...n,
//       vx: (Math.random() - 0.5) * 0.015,
//       vy: (Math.random() - 0.5) * 0.015,
//     }))
//   );

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const draw = () => {
//       const w = canvas.width;
//       const h = canvas.height;
//       ctx.clearRect(0, 0, w, h);

//       const nodes = nodesRef.current;
//       nodes.forEach((n) => {
//         n.x += n.vx;
//         n.y += n.vy;
//         if (n.x < 0 || n.x > 100) n.vx *= -1;
//         if (n.y < 0 || n.y > 100) n.vy *= -1;
//       });

//       nodes.forEach((node, i) => {
//         nodes.slice(i + 1).forEach((other) => {
//           const dx = node.x - other.x;
//           const dy = node.y - other.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 18) {
//             ctx.beginPath();
//             ctx.moveTo((node.x / 100) * w, (node.y / 100) * h);
//             ctx.lineTo((other.x / 100) * w, (other.y / 100) * h);
//             ctx.strokeStyle = `rgba(255,255,255,${0.15 * (1 - dist / 18)})`;
//             ctx.lineWidth = 0.6;
//             ctx.stroke();
//           }
//         });
//       });

//       nodes.forEach((node) => {
//         ctx.beginPath();
//         ctx.arc((node.x / 100) * w, (node.y / 100) * h, 1.5, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(255,255,255,0.55)";
//         ctx.fill();
//       });

//       animRef.current = requestAnimationFrame(draw);
//     };

//     draw();
//     return () => {
//       cancelAnimationFrame(animRef.current);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full pointer-events-none"
//     />
//   );
// }

// const skills = [
//   { category: "Frontend", items: ["React", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"] },
//   { category: "Backend", items: ["Node.js", "Python", "Django", "REST APIs"] },
//   { category: "Data & DB", items: ["MySQL", "PostgreSQL", "Excel", "Power BI"] },
//   { category: "Tools", items: ["Git", "GitHub", "VS Code", "Linux"] },
// ];

// const stats = [
//   { value: "3+", label: "Years Experience" },
//   { value: "20+", label: "Projects Done" },
//   { value: "10+", label: "Technologies" },
//   { value: "100%", label: "Dedication" },
// ];

// export default function About() {
//   return (
//     <div
//       className="relative min-h-screen w-full overflow-hidden"
//       style={{ background: "#0a0a0a" }}
//     >
//       <ConstellationCanvas />

//       {/* Radial glow — mirrored from Home */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(180,0,0,0.07) 0%, transparent 70%)",
//         }}
//       />

//       <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pt-28 md:pt-24 pb-16">

//         {/* ── Section heading ── */}
//         <div className="text-center md:text-left animate-fadein mb-12">
//           <h1
//             className="font-extrabold leading-tight"
//             style={{
//               fontFamily: "'Montserrat', 'Arial Black', sans-serif",
//               fontSize: "clamp(2rem, 5vw, 3.5rem)",
//               color: "#ffffff",
//               letterSpacing: "-0.02em",
//             }}
//           >
//             About <span style={{ color: "#e02020" }}>Me</span>
//           </h1>
//           {/* Red underline accent */}
//           <div
//             style={{
//               width: "60px",
//               height: "4px",
//               background: "#e02020",
//               borderRadius: "2px",
//               marginTop: "10px",
//               marginLeft: "auto",
//               marginRight: "auto",
//             }}
//             className="md:mx-0"
//           />
//         </div>

//         {/* ── Top section: photo + bio ── */}
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-12 animate-fadein mb-16">

//           {/* Photo */}
//           <div className="flex-shrink-0 flex items-center justify-center animate-fadein-delayed">
//             <div
//               style={{
//                 position: "relative",
//                 width: "clamp(180px, 22vw, 300px)",
//                 height: "clamp(200px, 24vw, 330px)",
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   clipPath:
//                     "polygon(40% 0%, 80% 5%, 100% 30%, 95% 70%, 75% 100%, 30% 98%, 5% 80%, 0% 40%, 10% 10%)",
//                   overflow: "hidden",
//                   background: "#1a1a1a",
//                 }}
//               >
//                 <img
//                   src={photo}
//                   alt="Bipin Tamang"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     objectPosition: "center top",
//                     display: "block",
//                   }}
//                 />
//               </div>
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: "-10px",
//                   background:
//                     "radial-gradient(ellipse at 60% 40%, rgba(224,32,32,0.18) 0%, transparent 70%)",
//                   zIndex: -1,
//                   borderRadius: "50%",
//                 }}
//               />
//             </div>
//           </div>

//           {/* Bio */}
//           <div className="flex-1 text-center md:text-left flex flex-col gap-5">
//             <h2
//               className="font-bold"
//               style={{
//                 fontFamily: "'Montserrat', 'Arial Black', sans-serif",
//                 fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
//                 color: "#ffffff",
//                 letterSpacing: "-0.01em",
//               }}
//             >
//               IT Officer · Full Stack Developer · Data Analyst
//             </h2>

//             <p className="text-gray-300 text-sm md:text-base leading-relaxed">
//               Hi! I'm <span className="text-white font-semibold">Bipin Tamang</span>, an IT Officer
//               at Mapya Dudhkoshi Rural Municipality with a strong passion for technology and
//               problem-solving. I specialize in building scalable, full-stack web applications and
//               turning raw data into meaningful insights.
//             </p>

//             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
//               With hands-on experience in both frontend and backend development, I enjoy crafting
//               clean, efficient solutions. I'm equally comfortable diving into data analysis — using
//               tools like Python and SQL to help organizations make data-driven decisions.
//             </p>

//             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
//               Outside of work, I love exploring new technologies, contributing to open-source
//               projects, and continuously sharpening my skills to stay ahead in an ever-evolving
//               tech landscape.
//             </p>

//             {/* Info grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-sm">
//               {[
//                 { label: "Name", value: "Bipin Tamang" },
//                 { label: "Role", value: "IT Officer" },
//                 { label: "Location", value: "Nepal" },
//                 { label: "Email", value: "bipintamang00019@gmail.com" },
//               ].map(({ label, value }) => (
//                 <div key={label} className="flex items-center gap-2 justify-center md:justify-start">
//                   <span style={{ color: "#e02020", fontWeight: 700, minWidth: "70px", fontFamily: "'Montserrat', sans-serif" }}>
//                     {label}:
//                   </span>
//                   <span className="text-gray-300">{value}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Download CV button */}
//             {/* Download CV button */}
// <div className="flex justify-center md:justify-start mt-2">
//   <a
//     href={cv}
//     download
//     className="flex items-center justify-center gap-2 font-bold text-white rounded-lg transition-all duration-200 shadow-lg"
//     style={{
//       background: "#e02020",
//       padding: "10px 28px",
//       fontFamily: "'Montserrat', sans-serif",
//       fontSize: "0.9rem",
//       letterSpacing: "0.04em",
//       boxShadow: "0 4px 24px rgba(224,32,32,0.25)",
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.background = "#c01010";
//       e.currentTarget.style.transform = "scale(1.04)";
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.background = "#e02020";
//       e.currentTarget.style.transform = "scale(1)";
//     }}
//   >
//     {/* Download icon */}
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//       <polyline points="7 10 12 15 17 10" />
//       <line x1="12" y1="15" x2="12" y2="3" />
//     </svg>

//     Download CV
//   </a>
// </div>
            
//           </div>
//         </div>

        

        

//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');

//         @keyframes fadein {
//           from { opacity: 0; transform: translateY(28px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadein {
//           animation: fadein 0.85s cubic-bezier(.22,1,.36,1) both;
//         }
//         .animate-fadein-delayed {
//           animation: fadein 0.95s cubic-bezier(.22,1,.36,1) 0.2s both;
//         }
//       `}</style>
//     </div>
//   );
// }


import { useEffect, useRef } from "react";
import photo from "../../assets/images/a_photo.avif";
import cv from "../../../public/cv.pdf"

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

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Done" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

export default function About() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      <ConstellationCanvas />

      {/* Radial glow — mirrored from Home */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(180,0,0,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pt-28 md:pt-24 pb-6">

        {/* ── Section heading ── */}
        <div className="text-center md:text-left animate-fadein mb-10">
          <h1
            className="font-extrabold leading-tight"
            style={{
              fontFamily: "'Montserrat', 'Arial Black', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            About <span style={{ color: "#e02020" }}>Me</span>
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
        </div>

        {/* ── Top section: photo + bio ── */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 animate-fadein mb-4">

          {/* Photo */}
          <div className="flex-shrink-0 flex items-center justify-center animate-fadein-delayed">
            <div
              style={{
                position: "relative",
                width: "clamp(180px, 22vw, 300px)",
                height: "clamp(200px, 24vw, 330px)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  clipPath:
                    "polygon(40% 0%, 80% 5%, 100% 30%, 95% 70%, 75% 100%, 30% 98%, 5% 80%, 0% 40%, 10% 10%)",
                  overflow: "hidden",
                  background: "#1a1a1a",
                }}
              >
                <img
                  src={photo}
                  alt="Bipin Tamang"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: "-10px",
                  background:
                    "radial-gradient(ellipse at 60% 40%, rgba(224,32,32,0.18) 0%, transparent 70%)",
                  zIndex: -1,
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 text-center md:text-left flex flex-col gap-5">
            <h2
              className="font-bold"
              style={{
                fontFamily: "'Montserrat', 'Arial Black', sans-serif",
                fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                color: "#ffffff",
                letterSpacing: "-0.01em",
              }}
            >
              IT Officer · Full Stack Developer · Data Analyst
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Hi! I'm <span className="text-white font-semibold">Bipin Tamang</span>, an IT Officer
              at Mapya Dudhkoshi Rural Municipality with a strong passion for technology and
              problem-solving. I specialize in building scalable, full-stack web applications and
              turning raw data into meaningful insights.
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              With hands-on experience in both frontend and backend development, I enjoy crafting
              clean, efficient solutions. I'm equally comfortable diving into data analysis — using
              tools like Python and SQL to help organizations make data-driven decisions.
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Outside of work, I love exploring new technologies, contributing to open-source
              projects, and continuously sharpening my skills to stay ahead in an ever-evolving
              tech landscape.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-sm">
              {[
                { label: "Name", value: "Bipin Tamang" },
                { label: "Role", value: "IT Officer" },
                { label: "Location", value: "Nepal" },
                { label: "Email", value: "bipintamang00019@gmail.com" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-2 justify-center md:justify-start">
                  <span style={{ color: "#e02020", fontWeight: 700, minWidth: "70px", fontFamily: "'Montserrat', sans-serif" }}>
                    {label}:
                  </span>
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
            </div>

            {/* Download CV button */}
            <div className="flex justify-center md:justify-start mt-2">
              <a
                href={cv}
                download
                className="flex items-center justify-center gap-2 font-bold text-white rounded-lg transition-all duration-200 shadow-lg"
                style={{
                  background: "#e02020",
                  padding: "10px 28px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.9rem",
                  letterSpacing: "0.04em",
                  boxShadow: "0 4px 24px rgba(224,32,32,0.25)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#c01010";
                  e.currentTarget.style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#e02020";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </div>

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
      `}</style>
    </div>
  );
}