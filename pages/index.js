import React from 'react';
import Image from 'next/image';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';


export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans relative">
        <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: 'transparent' },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4
              }
            }
          },
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                area: 800
              }
            },
            color: { value: '#00ffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.6 },
            size: { value: { min: 1, max: 4 } },
            links: {
              enable: true,
              distance: 120,
              color: '#00ffff',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: false,
              straight: false,
              outModes: 'out',
              bounce: false
            }
          },
          detectRetina: true
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      />
      {/* Navbar */}
      <nav className="w-full fixed top-0 z-50 px-6 py-4 bg-black bg-opacity-90 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-400 flex items-center gap-1">
          <span className="text-teal-400">bhumika.dev</span><span className="animate-pulse text-white">|</span>
          </div>
          <ul className="flex gap-4 text-sm font-semibold">
            <li><a href="#about" className="border border-teal-400 px-4 py-2 rounded-xl text-white hover:bg-teal-500 hover:text-black transition">About</a></li>
            <li><a href="#skills" className="border border-teal-400 px-4 py-2 rounded-xl text-white hover:bg-teal-500 hover:text-black transition">Skills</a></li>
            <li><a href="#projects" className="border border-teal-400 px-4 py-2 rounded-xl text-white hover:bg-teal-500 hover:text-black transition">Projects</a></li>
            <li><a href="#experience" className="border border-teal-400 px-4 py-2 rounded-xl text-white hover:bg-teal-500 hover:text-black transition">Experience</a></li>
            <li><a href="#achievements" className="border border-teal-400 px-4 py-2 rounded-xl text-white hover:bg-teal-500 hover:text-black transition">Achievements</a></li>
            <li><a href="#contact" className="border border-teal-400 px-4 py-2 rounded-xl text-white hover:bg-teal-500 hover:text-black transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Add padding for navbar height */}
      <div className="pt-24">

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 py-20 container mx-auto">
          <div className="text-left max-w-xl">
            <p className="text-teal-400 text-xl mb-2">Hi, I’m</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Bhumika Dommaraju</h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-cyan-400 mb-6">Full‑Stack Java Developer</h2>
            <p className="text-gray-300 mb-6">
              I ship secure, scalable applications across cloud, web, and data platforms using Java, Spring Boot, React, and AWS.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full shadow hover:shadow-lg transition">
                View My Work
              </a>
              <a href="/resume.pdf" target="_blank" className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition">
                Download Resume
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <Image src="/bhumika-profile.JPG" alt="Bhumika Dommaraju" width={320} height={400} className="rounded-xl shadow-lg" />
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="px-6 py-12 container mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">About Me</h2>
          <p className="text-gray-300 max-w-3xl">
            I’m a software engineer with a Master’s in Computer & Information Science from the University at Albany (SUNY). My work spans full‑stack Java/Spring development, cloud deployments (AWS), and applied AI/ML.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="px-6 py-12 container mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4"> Texnical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-white">
            {['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Spring Boot', 'React.js', 'Next.js', 'AWS', 'Node.js','Express.js','Azure','Docker','Splunk'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-center">{skill}</span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="px-6 py-12 container mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Featured Projects</h2>
          <div className="space-y-10">
            {[{ title: 'Blossom – Florist recommendation system', stack: 'React.js, Node.js/Express, MongoDB/MySQL, AWS', desc: 'Recommends bouquets based on occasion + relationship tags; reduced product search time by ~60%.' }, { title: 'Destinova – Travel Recommender', stack: 'Next.js/React, Node.js, ML (Scikit-learn), MongoDB, AWS EC2', desc: 'Suggests destinations based on climate, budget, activities; ~85% match rate in survey.' }, { title: "Parkinson's Risk Insight Tool", stack: 'Python, Streamlit, Scikit-learn', desc: 'Symptom intake + early lifestyle guidance; prototype in progress with expanded dataset.' }, { title: 'URL Shortener @ Scale', stack: 'Redis, Postgres, HashIDs', desc: 'Built scalable short-link system with fast redirect logic and collision-resistant encoding.' }, { title: 'Distributed Task Scheduler', stack: 'Go, Postgres, gRPC, Docker', desc: 'Orchestrates background jobs with retries, metrics, REST & gRPC APIs.' }].map((proj, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-white mb-1">{proj.title}</h3>
                <p className="text-sm text-cyan-400 mb-1">{proj.stack}</p>
                <p className="text-gray-300">{proj.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Experience */}
        <section id="experience" className="px-6 py-12 container mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Experience</h2>
          <div className="space-y-10">
            {[{ title: 'YKS IT services', stack: 'React.js, Node.js/Express, MongoDB/MySQL, AWS', desc: 'Worked as ful stack developer' }].map((exp, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-sm text-cyan-400 mb-1">{exp.stack}</p>
                <p className="text-gray-300">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="px-6 py-12 container mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Certifications & Achievements</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>AWS Cloud Practitioner (Target 2025)</li>
            <li>Oracle Certified Associate, Java SE </li>
            <li>Virtusa Jatayu Hackathon Finalist </li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-12 container mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Contact Me</h2>
          <p className="text-gray-300 mb-4">Let’s build something. I’m open to full-time roles, AI/ML builds, or open source collabs.</p>
          <div className="space-y-2 text-white">
            <p>Email: <a href="mailto:dommarajubhumika@gmail.com" className="text-cyan-400">dommarajubhumika@gmail.com</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/bhumikaraju" className="text-cyan-400">bhumikaraju</a></p>
            <p>GitHub: <a href="https://github.com/bhumika444" className="text-cyan-400">bhumika444</a></p>
            <p>Location: Michigan, USA (Open to SF Bay Area & NY)</p>
          </div>
        </section>
      </div>
    </main>
  );
}
