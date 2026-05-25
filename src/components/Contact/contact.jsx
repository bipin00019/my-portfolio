// import { useEffect, useRef, useState } from "react";

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

// const contactInfo = [
//   {
//     label: "Email",
//     value: "bipintamang00019@gmail.com",
//     href: "mailto:bipintamang00019@gmail.com",
//     icon: (
//       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//         <polyline points="22,6 12,13 2,6" />
//       </svg>
//     ),
//   },
//   {
//     label: "GitHub",
//     value: "github.com/bipin00019",
//     href: "https://github.com/bipin00019",
//     icon: (
//       <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
//       </svg>
//     ),
//   },
//   {
//     label: "Location",
//     value: "Nepal",
//     href: null,
//     icon: (
//       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//         <circle cx="12" cy="10" r="3" />
//       </svg>
//     ),
//   },
// ];

// const inputStyle = {
//   width: "100%",
//   background: "rgba(255,255,255,0.04)",
//   border: "1px solid rgba(255,255,255,0.1)",
//   borderRadius: "10px",
//   padding: "12px 16px",
//   color: "#ffffff",
//   fontFamily: "'Montserrat', sans-serif",
//   fontSize: "0.85rem",
//   outline: "none",
//   transition: "border-color 0.2s",
// };

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [focused, setFocused] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Opens default mail client with pre-filled fields
//     const mailto = `mailto:bipintamang00019@gmail.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
//     window.location.href = mailto;
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <div
//       className="relative w-full overflow-hidden"
//       style={{ background: "#0a0a0a" }}
//     >
//       <ConstellationCanvas />

//       {/* Radial glow */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(180,0,0,0.07) 0%, transparent 70%)",
//         }}
//       />

//       <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pt-28 md:pt-24 pb-6">

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
//             Get In <span style={{ color: "#e02020" }}>Touch</span>
//           </h1>
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
//           <p
//             className="text-gray-400 mt-5 max-w-xl text-center md:text-left"
//             style={{
//               fontFamily: "'Montserrat', sans-serif",
//               fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
//               lineHeight: "1.7",
//             }}
//           >
//             Have a question or want to work together? Feel free to reach out —
//             I'll get back to you as soon as possible.
//           </p>
//         </div>

//         {/* ── Two-column layout ── */}
//         <div className="flex flex-col md:flex-row gap-10 animate-fadein-delayed">

//           {/* ── Left: contact info ── */}
//           <div className="flex flex-col gap-5 md:w-80 flex-shrink-0">

//             {contactInfo.map(({ label, value, href, icon }) => (
//               <div
//                 key={label}
//                 style={{
//                   background: "rgba(255,255,255,0.03)",
//                   border: "1px solid rgba(255,255,255,0.08)",
//                   borderRadius: "14px",
//                   padding: "18px 20px",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "14px",
//                   transition: "border-color 0.25s, background 0.25s",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.borderColor = "rgba(224,32,32,0.3)";
//                   e.currentTarget.style.background = "rgba(224,32,32,0.04)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
//                   e.currentTarget.style.background = "rgba(255,255,255,0.03)";
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                     borderRadius: "10px",
//                     background: "rgba(224,32,32,0.12)",
//                     border: "1px solid rgba(224,32,32,0.25)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "#e02020",
//                     flexShrink: 0,
//                   }}
//                 >
//                   {icon}
//                 </div>
//                 <div className="flex flex-col gap-0.5 min-w-0">
//                   <span
//                     style={{
//                       fontFamily: "'Montserrat', sans-serif",
//                       fontSize: "0.68rem",
//                       fontWeight: 700,
//                       color: "#6b7280",
//                       letterSpacing: "0.07em",
//                       textTransform: "uppercase",
//                     }}
//                   >
//                     {label}
//                   </span>
//                   {href ? (
//                     <a
//                       href={href}
//                       target={href.startsWith("http") ? "_blank" : undefined}
//                       rel="noopener noreferrer"
//                       style={{
//                         fontFamily: "'Montserrat', sans-serif",
//                         fontSize: "0.82rem",
//                         fontWeight: 600,
//                         color: "#d1d5db",
//                         textDecoration: "none",
//                         overflow: "hidden",
//                         textOverflow: "ellipsis",
//                         whiteSpace: "nowrap",
//                         transition: "color 0.2s",
//                       }}
//                       onMouseEnter={(e) => (e.currentTarget.style.color = "#e02020")}
//                       onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}
//                     >
//                       {value}
//                     </a>
//                   ) : (
//                     <span
//                       style={{
//                         fontFamily: "'Montserrat', sans-serif",
//                         fontSize: "0.82rem",
//                         fontWeight: 600,
//                         color: "#d1d5db",
//                       }}
//                     >
//                       {value}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* ── Right: contact form ── */}
//           <div
//             style={{
//               flex: 1,
//               background: "rgba(255,255,255,0.03)",
//               border: "1px solid rgba(255,255,255,0.08)",
//               borderRadius: "16px",
//               padding: "32px 28px",
//             }}
//           >
//             <form onSubmit={handleSubmit} className="flex flex-col gap-5">

//               {/* Name + Email row */}
//               <div className="flex flex-col sm:flex-row gap-5">
//                 <div className="flex flex-col gap-2 flex-1">
//                   <label
//                     style={{
//                       fontFamily: "'Montserrat', sans-serif",
//                       fontSize: "0.73rem",
//                       fontWeight: 700,
//                       color: "#6b7280",
//                       letterSpacing: "0.06em",
//                       textTransform: "uppercase",
//                     }}
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     placeholder="Bipin Tamang"
//                     value={form.name}
//                     onChange={handleChange}
//                     onFocus={() => setFocused("name")}
//                     onBlur={() => setFocused(null)}
//                     style={{
//                       ...inputStyle,
//                       borderColor: focused === "name" ? "rgba(224,32,32,0.5)" : "rgba(255,255,255,0.1)",
//                     }}
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2 flex-1">
//                   <label
//                     style={{
//                       fontFamily: "'Montserrat', sans-serif",
//                       fontSize: "0.73rem",
//                       fontWeight: 700,
//                       color: "#6b7280",
//                       letterSpacing: "0.06em",
//                       textTransform: "uppercase",
//                     }}
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     placeholder="you@example.com"
//                     value={form.email}
//                     onChange={handleChange}
//                     onFocus={() => setFocused("email")}
//                     onBlur={() => setFocused(null)}
//                     style={{
//                       ...inputStyle,
//                       borderColor: focused === "email" ? "rgba(224,32,32,0.5)" : "rgba(255,255,255,0.1)",
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Message */}
//               <div className="flex flex-col gap-2">
//                 <label
//                   style={{
//                     fontFamily: "'Montserrat', sans-serif",
//                     fontSize: "0.73rem",
//                     fontWeight: 700,
//                     color: "#6b7280",
//                     letterSpacing: "0.06em",
//                     textTransform: "uppercase",
//                   }}
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   required
//                   rows={5}
//                   placeholder="Write your message here..."
//                   value={form.message}
//                   onChange={handleChange}
//                   onFocus={() => setFocused("message")}
//                   onBlur={() => setFocused(null)}
//                   style={{
//                     ...inputStyle,
//                     resize: "vertical",
//                     borderColor: focused === "message" ? "rgba(224,32,32,0.5)" : "rgba(255,255,255,0.1)",
//                   }}
//                 />
//               </div>

//               {/* Submit */}
//               <div className="flex justify-end mt-1">
//                 <button
//                   type="submit"
//                   style={{
//                     background: submitted ? "#16a34a" : "#e02020",
//                     padding: "11px 32px",
//                     fontFamily: "'Montserrat', sans-serif",
//                     fontSize: "0.88rem",
//                     fontWeight: 700,
//                     color: "#ffffff",
//                     border: "none",
//                     borderRadius: "10px",
//                     letterSpacing: "0.04em",
//                     cursor: "pointer",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     boxShadow: "0 4px 24px rgba(224,32,32,0.25)",
//                     transition: "background 0.2s, transform 0.2s",
//                   }}
//                   onMouseEnter={(e) => {
//                     if (!submitted) {
//                       e.currentTarget.style.background = "#c01010";
//                       e.currentTarget.style.transform = "scale(1.04)";
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (!submitted) {
//                       e.currentTarget.style.background = "#e02020";
//                       e.currentTarget.style.transform = "scale(1)";
//                     }
//                   }}
//                 >
//                   {submitted ? (
//                     <>
//                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                         <polyline points="20 6 9 17 4 12" />
//                       </svg>
//                       Message Sent!
//                     </>
//                   ) : (
//                     <>
//                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                         <line x1="22" y1="2" x2="11" y2="13" />
//                         <polygon points="22 2 15 22 11 13 2 9 22 2" />
//                       </svg>
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </div>

//             </form>
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
//         input::placeholder,
//         textarea::placeholder {
//           color: rgba(255,255,255,0.2);
//         }
//         input, textarea {
//           color-scheme: dark;
//         }
//       `}</style>
//     </div>
//   );
// }




import { useEffect, useRef, useState } from "react";

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

const contactInfo = [
  {
    label: "Email",
    value: "bipintamang00019@gmail.com",
    href: "mailto:bipintamang00019@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/bipin00019",
    href: "https://github.com/bipin00019",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Nepal",
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "10px",
  padding: "12px 16px",
  color: "#ffffff",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "0.85rem",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens Gmail compose window directly in a new tab
    const to = "bipintamang00019@gmail.com";
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${to}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
            "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(180,0,0,0.07) 0%, transparent 70%)",
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
            Get In <span style={{ color: "#e02020" }}>Touch</span>
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
            Have a question or want to work together? Feel free to reach out —
            I'll get back to you as soon as possible.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col md:flex-row gap-10 animate-fadein-delayed">

          {/* ── Left: contact info ── */}
          <div className="flex flex-col gap-5 md:w-80 flex-shrink-0">

            {contactInfo.map(({ label, value, href, icon }) => (
              <div
                key={label}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "14px",
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  transition: "border-color 0.25s, background 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(224,32,32,0.3)";
                  e.currentTarget.style.background = "rgba(224,32,32,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
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
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: "#6b7280",
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "#d1d5db",
                        textDecoration: "none",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#e02020")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}
                    >
                      {value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "#d1d5db",
                      }}
                    >
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: contact form ── */}
          <div
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "32px 28px",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Name + Email row */}
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col gap-2 flex-1">
                  <label
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.73rem",
                      fontWeight: 700,
                      color: "#6b7280",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Bipin Tamang"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputStyle,
                      borderColor: focused === "name" ? "rgba(224,32,32,0.5)" : "rgba(255,255,255,0.1)",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.73rem",
                      fontWeight: 700,
                      color: "#6b7280",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputStyle,
                      borderColor: focused === "email" ? "rgba(224,32,32,0.5)" : "rgba(255,255,255,0.1)",
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.73rem",
                    fontWeight: 700,
                    color: "#6b7280",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    borderColor: focused === "message" ? "rgba(224,32,32,0.5)" : "rgba(255,255,255,0.1)",
                  }}
                />
              </div>

              {/* Submit */}
              <div className="flex justify-end mt-1">
                <button
                  type="submit"
                  style={{
                    background: submitted ? "#16a34a" : "#e02020",
                    padding: "11px 32px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "10px",
                    letterSpacing: "0.04em",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 24px rgba(224,32,32,0.25)",
                    transition: "background 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!submitted) {
                      e.currentTarget.style.background = "#c01010";
                      e.currentTarget.style.transform = "scale(1.04)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!submitted) {
                      e.currentTarget.style.background = "#e02020";
                      e.currentTarget.style.transform = "scale(1)";
                    }
                  }}
                >
                  {submitted ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Opening Gmail...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </div>

            </form>
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
        input::placeholder,
        textarea::placeholder {
          color: rgba(255,255,255,0.2);
        }
        input, textarea {
          color-scheme: dark;
        }
      `}</style>
    </div>
  );
}