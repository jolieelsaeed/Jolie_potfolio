// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Typewriter } from "react-simple-typewriter";
// import profileImage from "./ProfilePic.jpg";
// import "./App.css";

// export default function App() {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const projects = [
//     {
//       title: "🛍 Handmade E-Commerce Website",
//       description:
//         "Built with React.js, Next.js, Node.js, and MongoDB. Developed the UI for a responsive online store with product filtering and user authentication.",
//       link: "https://github.com/jolie1622002/ITI-Grad-Project",
//     },
//     {
//       title: "✈️ Flyee – Flight Booking Platform",
//       description:
//         "Created with HTML, CSS, JavaScript. Displays flight data, arrival/departure times, and booking UI.",
//       link: "https://github.com/jolie1622002/Flyee-Wesbite",
//     },
//     {
//       title: "💼 LinkedIn Clone (UI Only)",
//       description:
//         "Replicated LinkedIn UI using HTML and CSS to practice layout and design consistency.",
//       link: "https://github.com/jolie1622002/LinkedinWebsite",
//     },
//   ];

//   const skillCards = [
//     {
//       title: "Frontend",
//       items: ["React.js", "JavaScript", "HTML/CSS", "TypeScript", "Angular", "Next.js", "SASS", "Responsive Design"]
//     },
//     {
//       title: "Backend",
//       items: ["Node.js", "Express.js", "MongoDB", "SQL", ".NET Core", "RESTful APIs"]
//     },
//     {
//       title: "Tools",
//       items: ["Figma", "Postman", "Chrome DevTools"]
//     },
//     {
//       title: "Testing & Deployment",
//       items: [
//         "Jest",
//         "React Testing Library",
//         "Vercel",
//         "Netlify",
//         "Git",
//         "GitHub"
//       ]
//     },
//     {
//       title: "Soft Skills",
//       items: ["Communication", "Problem-solving", "Teamwork", "Attention to detail", "Time Management"]
//     },
//   ];

//   const languages = [
//     { name: "Arabic", level: "Native" },
//     { name: "English", level: "Professional Working Proficiency" },
//     { name: "French", level: "Beginner" },
//   ];

//   return (
//     <div className="min-h-screen text-gray-100 px-6 sm:px-12 py-12 font-sans bg-gradient-animated">
//       {/* Hero Section */}
//       <section className="relative mb-24 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16" data-aos="fade-up">
//         <img
//           src={profileImage}
//           alt="Jolie Ezzat"
//           className="w-80 md:w-96 rounded-3xl shadow-xl border-4 border-blue-700 object-cover"
//         />
//         <div className="text-center md:text-left max-w-xl">
//           <h1 className="text-6xl font-extrabold text-blue-200 mb-6 drop-shadow-md">
//             Hi, I’m Jolie ✨
//           </h1>
//           <p className="text-3xl text-blue-100 mb-4">
//             <Typewriter
//               words={["Frontend Developer", "MERN Stack Developer", "UI/UX Enthusiast"]}
//               loop={true}
//               cursor
//               cursorStyle="_"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={2000}
//             />
//           </p>
//           <p className="text-lg text-blue-200 mb-3">
//             📧 jolieelsaeed162@gmail.com | 📱 +20 128 553 2487
//           </p>
//           <div className="flex justify-center md:justify-start gap-6 mt-4 text-lg">
//             <a href="https://github.com/jolie1622002" className="text-blue-300 hover:text-white font-medium transition" target="_blank" rel="noreferrer">GitHub</a>
//             <a href="https://linkedin.com/in/jolie-ezzat-b754a2159" className="text-blue-300 hover:text-white font-medium transition" target="_blank" rel="noreferrer">LinkedIn</a>
//           </div>
//           <a
//             href="/Jolie Ezzat Shaker - Full Stack Developer.pdf"
//             download
//             className="mt-6 inline-block bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition text-lg"
//           >
//             Download CV
//           </a>
//         </div>
//       </section>

//       {/* About Me */}
//       <section className="mb-24 max-w-4xl mx-auto text-center" data-aos="fade-up">
//         <h2 className="text-4xl font-bold mb-6 text-blue-300">About Me</h2>
//         <p className="text-lg text-blue-100 leading-loose">
//           I’m a passionate Frontend Developer and Full-Stack Engineer with a focus on creating elegant, user-centered web applications.
//           I enjoy translating complex problems into intuitive and beautiful interfaces. I’m always eager to explore new technologies
//           and improve user experience through performance and accessibility. Currently expanding my expertise in Angular and testing tools.
//         </p>
//       </section>

//       {/* Skills */}
//       <section className="mb-24 max-w-6xl mx-auto" data-aos="zoom-in">
//         <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">Skills</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {skillCards.map((section, i) => (
//             <div key={i} className="bg-slate-800 p-6 rounded-xl shadow hover:shadow-blue-500/20 transition">
//               <h3 className="text-2xl font-semibold text-blue-200 mb-4">{section.title}</h3>
//               <ul className="text-blue-100 space-y-2 text-md">
//                 {section.items.map((item, index) => (
//                   <li key={index}>• {item}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Languages */}
//       <section className="mb-24 max-w-4xl mx-auto" data-aos="fade-up">
//         <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">Languages</h2>
//         <div className="grid sm:grid-cols-3 gap-6 text-center">
//           {languages.map((lang, idx) => (
//             <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:shadow-lg hover:shadow-blue-400/20 transition">
//               <h3 className="text-2xl font-semibold text-blue-200 mb-2">{lang.name}</h3>
//               <p className="text-md text-blue-100">{lang.level}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* What I Do */}
//       <section className="mb-24 max-w-5xl mx-auto" data-aos="fade-up">
//         <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">What I Do</h2>
//         <div className="grid md:grid-cols-3 gap-6 text-blue-100 text-center">
//           <div className="bg-slate-800 p-6 rounded-xl shadow hover:shadow-blue-500/20">
//             <h3 className="text-xl font-semibold mb-2">UI/UX Web Design</h3>
//             <p className="text-sm">Designing clean, modern, and user-friendly interfaces</p>
//           </div>
//           <div className="bg-slate-800 p-6 rounded-xl shadow hover:shadow-blue-500/20">
//             <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
//             <p className="text-sm">Building responsive and fast web apps with React</p>
//           </div>
//           <div className="bg-slate-800 p-6 rounded-xl shadow hover:shadow-blue-500/20">
//             <h3 className="text-xl font-semibold mb-2">API Integration</h3>
//             <p className="text-sm">Connecting frontend with backend logic seamlessly</p>
//           </div>
//         </div>
//       </section>

//       {/* Projects */}
//       <section className="max-w-6xl mx-auto mb-24" data-aos="fade-up">
//         <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">Projects</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition-transform transform hover:-translate-y-1 border border-slate-700"
//             >
//               <h3 className="text-xl font-bold text-blue-200 mb-2">{project.title}</h3>
//               {expandedIndex === index && (
//                 <p className="text-sm text-blue-100 mb-3">{project.description}</p>
//               )}
//               <button
//                 onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
//                 className="text-blue-300 hover:text-white text-sm mb-2"
//               >
//                 {expandedIndex === index ? "Show less" : "Show more"}
//               </button>
//               <br />
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-block text-md text-blue-300 hover:text-white transition"
//               >
//                 View on GitHub →
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center text-sm text-blue-400 py-10">
//         © 2025 Jolie Ezzat. All rights reserved.
//       </footer>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "./ProfilePic.jpg"; // Adjust the path as necessary
import "./App.css"; // This assumes App.css contains all required styles

export default function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "🍭 Handmade E-Commerce Website",
      description:
        "Built with React.js, Next.js, Node.js, and MongoDB. Developed the UI for a responsive online store with product filtering and user authentication.",
      link: "https://github.com/jolie1622002/ITI-Grad-Project",
    },
    {
      title: "✈️ Flyee – Flight Booking Platform",
      description:
        "Created with HTML, CSS, JavaScript. Displays flight data, arrival/departure times, and booking UI.",
      link: "https://github.com/jolie1622002/Flyee-Wesbite",
    },
    {
      title: "💼 LinkedIn Clone (UI Only)",
      description:
        "Replicated LinkedIn UI using HTML and CSS to practice layout and design consistency.",
      link: "https://github.com/jolie1622002/LinkedinWebsite",
    },
  ];

  const skillCards = [
    {
      title: "Frontend",
      items: ["React.js", "JavaScript", "HTML/CSS", "TypeScript", "Angular", "Next.js", "SASS", "Responsive Design"]
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "SQL", ".NET Core", "RESTful APIs"]
    },
    {
      title: "Tools",
      items: ["Figma", "Postman", "Chrome DevTools"]
    },
    {
      title: "Testing & Deployment",
      items: ["Jest", "React Testing Library", "Vercel", "Netlify", "Git", "GitHub"]
    },
    {
      title: "Soft Skills",
      items: ["Communication", "Problem-solving", "Teamwork", "Attention to detail", "Time Management"]
    }
  ];

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional Working Proficiency" },
    { name: "French", level: "Beginner" },
  ];

  return (
    <div className="app">
      <section className="hero" data-aos="fade-up">
        <img src={profileImage} alt="Jolie Ezzat" className="profile-pic" />
        <div className="hero-text">
          <h1>Hi, I’m Jolie ✨</h1>
          <p className="typewriter">
            <Typewriter
              words={["Frontend Developer", "MERN Stack Developer", "UI/UX Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>
          <p className="contact">📧 jolieelsaeed162@gmail.com | 📱 +20 128 553 2487</p>
          <div className="links">
            <a href="https://github.com/jolie1622002" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/jolie-ezzat-b754a2159" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <a href="./assets/Jolie Ezzat Shaker - Full Stack Developer.pdf" download className="btn">Download CV</a>
        </div>
      </section>

      <section className="about" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          I’m a passionate Frontend Developer and Full-Stack Engineer with a focus on creating elegant, user-centered web applications.
          I enjoy translating complex problems into intuitive and beautiful interfaces. I’m always eager to explore new technologies
          and improve user experience through performance and accessibility. Currently expanding my expertise in Angular and testing tools.
        </p>
      </section>

      <section className="skills" data-aos="zoom-in">
        <h2>Skills</h2>
        <div className="grid">
          {skillCards.map((section, i) => (
            <div key={i} className="card">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="languages" data-aos="fade-up">
        <h2>Languages</h2>
        <div className="grid">
          {languages.map((lang, idx) => (
            <div key={idx} className="card">
              <h3>{lang.name}</h3>
              <p>{lang.level}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="what-i-do" data-aos="fade-up">
  <h2>What I Do</h2>
  <div className="grid">
    <div className="card">
      <h3>UI/UX Web Design</h3>
      <p>Designing clean, modern, and user-friendly interfaces</p>
    </div>
    <div className="card">
      <h3>Frontend Development</h3>
      <p>Building responsive and fast web apps with React and modern frameworks</p>
    </div>
    <div className="card">
      <h3>Backend Development</h3>
      <p>Creating secure APIs, handling data with Node.js and MongoDB/SQL</p>
    </div>
    <div className="card">
      <h3>Full Stack Applications</h3>
      <p>Delivering complete solutions from database to UI, with clean architecture</p>
    </div>
    <div className="card">
      <h3>API Integration</h3>
      <p>Connecting frontend with backend logic seamlessly</p>
    </div>
  </div>
</section>


      <section className="projects" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <h3>{project.title}</h3>
              {expandedIndex === index && <p>{project.description}</p>}
              <button onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}>
                {expandedIndex === index ? "Show less" : "Show more"}
              </button>
              <br />
              <a href={project.link} target="_blank" rel="noreferrer"   className="github-link"
>View on GitHub →</a>
            </div>
          ))}
        </div>
      </section>

      <footer>
        © 2025 Jolie Ezzat. All rights reserved.
      </footer>
    </div>
  );
}