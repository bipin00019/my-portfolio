// import { useEffect, useRef } from "react";
// import photo from "../../assets/images/photo1.png"
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

// export default function Home() {
//   return (
//     <div
//       className="relative min-h-screen w-full overflow-hidden flex items-center"
//       style={{ background: "#0a0a0a" }}
//     >
//       <ConstellationCanvas />

//       {/* Radial glow */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(180,0,0,0.07) 0%, transparent 70%)",
//         }}
//       />

//       {/* Main content — pt-20 pushes it down a bit */}
//       <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pt-20 pb-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

//         {/* Left: Text */}
//         <div className="flex flex-col gap-5 flex-1 text-center md:text-left animate-fadein">
//           <div className="flex flex-col gap-5 flex-1 text-center md:text-left animate-fadein">
//   <div>
//     <h1
//       className="font-extrabold leading-tight"
//       style={{
//         fontFamily: "'Montserrat', 'Arial Black', sans-serif",
//         fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)",
//         color: "#ffffff",
//         letterSpacing: "-0.02em",
//       }}
//     >
//       Hi,
//       <br />
//       I'm <span style={{ color: "#e02020" }}>Bipin Tamang</span>
//     </h1>

//     <h2
//       className="font-bold mt-2"
//       style={{
//         fontFamily: "'Montserrat', 'Arial Black', sans-serif",
//         fontSize: "clamp(1.1rem, 3vw, 2.2rem)",
//         color: "#ffffff",
//         letterSpacing: "-0.01em",
//       }}
//     >
//       IT Officer | Full Stack Developer | Data Analyst
//     </h2>

//     <p
//       className="mt-4 text-gray-300 text-sm md:text-base"
//       style={{
//         maxWidth: "500px",
//       }}
//     >
//       Currently working as an IT Officer in a Mapya Dudhkoshi Rural Municipality, passionate about
//       building scalable web applications and data-driven solutions.
//     </p>
//   </div>
// </div>

//           {/* <div className="flex justify-center md:justify-start">
//             <button
//               className="flex items-center justify-center font-bold text-white rounded transition-all duration-200 focus:outline-none"
//               style={{
//                 background: "#e02020",
//                 width: "126px",
//                 height: "42px",
//                 fontFamily: "'Montserrat', sans-serif",
//                 fontSize: "0.9rem",
//                 letterSpacing: "0.04em",
//                 boxShadow: "0 4px 24px rgba(224,32,32,0.25)",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = "#c01010";
//                 e.currentTarget.style.transform = "scale(1.04)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = "#e02020";
//                 e.currentTarget.style.transform = "scale(1)";
//               }}
//             >
//               Contact
//             </button>
//           </div> */}
//           <div className="flex justify-center md:justify-start gap-3">
  
//   {/* Contact Button (Email) */}
//   <button
//   onClick={() =>
//     window.open(
//       "https://mail.google.com/mail/?view=cm&fs=1&to=bipintamang00019@gmail.com&su=Contact%20from%20Portfolio&body=Hello%20Bipin,%0AI%20want%20to%20connect%20with%20you.",
//       "_blank"
//     )
//   }
//   className="
//     flex items-center justify-center
//     w-32 h-11
//     font-bold text-white
//     rounded-lg
//     bg-red-600
//     hover:bg-red-700
//     hover:scale-105
//     transition-all duration-200
//     shadow-lg shadow-red-500/30
//   "
// >
//   Contact
// </button>


 

// </div>
//           {/* Social icons */}
//           <div className="flex items-center gap-5 justify-center md:justify-start mt-1">
//             {/* LinkedIn */}
//             <a href="https://www.linkedin.com/in/bipin-tamang-99850225a/" className="text-white opacity-60 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//               </svg>
//             </a>
//             {/* GitHub */}
//             <a href="https://github.com/bipin00019" className="text-white opacity-60 hover:opacity-100 transition-opacity" aria-label="GitHub">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* Right: Profile image */}
//         <div className="flex-shrink-0 flex items-center justify-center animate-fadein-delayed">
//           <div
//             style={{
//               position: "relative",
//               width: "clamp(200px, 28vw, 360px)",
//               height: "clamp(220px, 30vw, 390px)",
//             }}
//           >
//             <div
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 clipPath:
//                   "polygon(40% 0%, 80% 5%, 100% 30%, 95% 70%, 75% 100%, 30% 98%, 5% 80%, 0% 40%, 10% 10%)",
//                 overflow: "hidden",
//                 background: "#1a1a1a",
//               }}
//             >
//               <img
//                 src={photo}
//                 alt="Bipin Tamang "
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   objectPosition: "center top",
//                   display: "block",
//                 }}
//               />
//             </div>
//             <div
//               style={{
//                 position: "absolute",
//                 inset: "-10px",
//                 background:
//                   "radial-gradient(ellipse at 60% 40%, rgba(224,32,32,0.18) 0%, transparent 70%)",
//                 zIndex: -1,
//                 borderRadius: "50%",
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap');

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
import photo from "../../assets/images/photo1.png"
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

export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      style={{ background: "#0a0a0a" }}
    >
      <ConstellationCanvas />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(180,0,0,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Main content — pt-24 on mobile, pt-20 on md+ */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pt-28 md:pt-20 pb-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left: Text */}
        <div className="flex flex-col gap-5 flex-1 text-center md:text-left animate-fadein">
          <div className="flex flex-col gap-5 flex-1 text-center md:text-left animate-fadein">
            <div>
              <h1
                className="font-extrabold leading-tight"
                style={{
                  fontFamily: "'Montserrat', 'Arial Black', sans-serif",
                  fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)",
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                Hi,
                <br />
                I'm <span style={{ color: "#e02020" }}>Bipin Tamang</span>
              </h1>

              <h2
                className="font-bold mt-2"
                style={{
                  fontFamily: "'Montserrat', 'Arial Black', sans-serif",
                  fontSize: "clamp(1.1rem, 3vw, 2.2rem)",
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                }}
              >
                IT Officer | Full Stack Developer | Data Analyst
              </h2>

              <p
                className="mt-4 text-gray-300 text-sm md:text-base"
                style={{
                  maxWidth: "500px",
                }}
              >
                Currently working as an IT Officer in a Mapya Dudhkoshi Rural Municipality, passionate about
                building scalable web applications and data-driven solutions.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-3">
            {/* Contact Button (Email) */}
            <button
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=bipintamang00019@gmail.com&su=Contact%20from%20Portfolio&body=Hello%20Bipin,%0AI%20want%20to%20connect%20with%20you.",
                  "_blank"
                )
              }
              className="
                flex items-center justify-center
                w-32 h-11
                font-bold text-white
                rounded-lg
                bg-red-600
                hover:bg-red-700
                hover:scale-105
                transition-all duration-200
                shadow-lg shadow-red-500/30
              "
            >
              Contact
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5 justify-center md:justify-start mt-1">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/bipin-tamang-99850225a/" className="text-white opacity-60 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/bipin00019" className="text-white opacity-60 hover:opacity-100 transition-opacity" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Profile image */}
        <div className="flex-shrink-0 flex items-center justify-center animate-fadein-delayed">
          <div
            style={{
              position: "relative",
              width: "clamp(200px, 28vw, 360px)",
              height: "clamp(220px, 30vw, 390px)",
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
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap');

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