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
              Matheus<span className="text-cyan-500"> Silva</span>
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
              Matheus <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Desenvolvedor</span> <br />
              <span className="text-slate-400 text-4xl md:text-5xl">Júnior</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Desenvolvedor freelancer especializado em <span className="text-cyan-400 font-semibold">IA e automações</span>.
              Criando soluções inteligentes com <span className="text-cyan-400 font-semibold">Python</span>,
              Java e Javascript para transformar dados em valor.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Ver Projetos
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-slate-900/40 border border-white/5 rounded-xl font-bold hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
              >
                Entrar em Contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black tracking-tighter mb-16">
            Projetos <span className="text-cyan-500">Recentes</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
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
                  <p className="text-slate-400 text-sm mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-full border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 font-bold text-xs uppercase hover:text-cyan-300 transition-colors"
                  >
                    Ver Repositório →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black tracking-tighter mb-16">
            Experiência <span className="text-cyan-500">Profissional</span>
          </h2>
          <div className="space-y-8">
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.id}
                className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{exp.position}</h3>
                    <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 font-mono text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                    Principais Realizações
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-400 text-sm"
                      >
                        <span className="text-cyan-500 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black tracking-tighter mb-16">
            Stack <span className="text-cyan-500">Tecnológico</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skill, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                  <span className="text-cyan-400 font-mono text-sm font-bold">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black tracking-tighter mb-8">
            Vamos <span className="text-cyan-500">Conversar?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            Estou sempre aberto a novos projetos e oportunidades na área de Machine Learning e IA.
            Entre em contato para discutirmos como posso ajudar!
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="https://github.com/Matheusssilva333"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-900/40 border border-white/5 rounded-xl font-bold hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-silva-0b177b333/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
