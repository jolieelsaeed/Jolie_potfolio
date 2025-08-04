import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Jolie Ezzat</h1>
        <p className="text-lg text-gray-600">Frontend Developer | MERN Stack</p>
        <p className="text-sm text-gray-500">
          jolieelsaeed162@gmail.com | +20 128 553 2487
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="https://github.com/jolie1622002"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jolie-ezzat-b754a2159"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I’m a junior frontend developer with a background in MERN stack from
          ITI. I love building clean, responsive, and user-friendly interfaces
          using React, JavaScript, and CSS frameworks. Currently learning more
          about Vue and testing tools.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-bold">🛍 Handmade E-Commerce Website</h3>
            <p>
              Built with React.js, Next.js, Node.js, and MongoDB. Developed the UI
              for a responsive online store with product filtering and user
              authentication.
            </p>
            <a
              href="https://github.com/jolie1622002/handmade-ecommerce"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </li>
          <li>
            <h3 className="text-xl font-bold">✈️ Flyee – Flight Booking Platform</h3>
            <p>
              Created with HTML, CSS, JavaScript. Displays flight data,
              arrival/departure times, and booking UI.
            </p>
            <a
              href="https://github.com/jolie1622002/flyee"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </li>
          <li>
            <h3 className="text-xl font-bold">💼 LinkedIn Clone (UI Only)</h3>
            <p>
              Replicated LinkedIn UI using HTML and CSS to practice layout and
              design consistency.
            </p>
            <a
              href="https://github.com/jolie1622002/linkedin-clone"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
