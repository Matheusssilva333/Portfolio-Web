import React from "react";
import NeuralBackground from "./components/NeuralBackground";
import AIAssistant from "./components/AIAssistant";
import { PROJECTS, SKILLS, EXPERIENCE } from "./constants";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30">
      <NeuralBackground />
      <AIAssistant />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
              M
            </div>
            <span className="font-bold text-xl tracking-tighter uppercase">
              Matheus<span className="text-cyan-500">Silva</span>
            </span>
          </div>

          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projetos</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Carreira</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Stack</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors text-cyan-500">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-3">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Building <br />
              <span className="text-white">Neural</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
                Solutions.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="aspect-[4/3] object-cover"
              />
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-8 flex-1">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-bold text-xs uppercase"
                >
                  Ver Repositório
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
