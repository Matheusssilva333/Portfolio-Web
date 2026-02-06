
import React from 'react',
import NeuralBackground from './components/NeuralBackground',
import AIAssistant from './components/AIAssistant',
import { PROJECTS, SKILLS, EXPERIENCE } from './constants.tsx',

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30">
      <NeuralBackground />
      <AIAssistant />

      {/* Navigation */},
      <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">M</div>
            <span className="font-bold text-xl tracking-tighter uppercase">Matheus<span className="text-cyan-500">Silva</span></span>
          </div>
          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projetos</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Carreira</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Stack</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors text-cyan-500">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-3">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              AI Engineer & Full-Stack Developer
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Building <br />
              <span className="text-white">Neural</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">Solutions.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-medium">
              Desenvolvedor focado na interseção entre Inteligência Artificial de ponta e interfaces web de alta performance.
              Transformando modelos matemáticos em experiências digitais impactantes.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#projects" className="px-10 py-5 bg-white text-black font-black rounded-full hover:bg-cyan-400 hover:scale-105 transition-all uppercase text-xs tracking-widest">
                Explore o Trabalho
              </a>
              <a href="#contact" className="px-10 py-5 bg-slate-900 text-white font-black rounded-full border border-white/10 hover:border-cyan-500/50 transition-all uppercase text-xs tracking-widest">
                Vamos Conversar
              </a>
            </div>
          </div>

          <div className="md:col-span-2 relative hidden md:block">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" ></img>
                alt="Matheus Silva"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-slate-950 border border-white/10 p-8 rounded-3xl shadow-2xl">
                <div className="mono text-cyan-500 text-sm mb-2 font-bold tracking-widest">LOCALIZAÇÃO</div>
                <div className="text-xl font-bold">Brasil / Remoto</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">Selecionados <span className="text-cyan-500">.01</span></h2>
            <div className="h-1 w-24 bg-cyan-500 mx-auto md:mx-0"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative flex flex-col bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden hover:bg-slate-900/60 transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="mono text-[9px] px-2 py-1 rounded bg-white/5 text-slate-400 font-bold uppercase border border-white/5">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">{project.description}</p>
                  <a href={project.link} className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white group-hover:gap-5 transition-all">
                    Visualizar Repositório <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 px-6 bg-slate-950/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">Carreira <span className="text-cyan-500">.02</span></h2>
            <div className="h-1 w-24 bg-cyan-500"></div>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="grid md:grid-cols-4 gap-8 items-start border-b border-white/5 pb-12 group">
                <div className="text-cyan-500 font-bold mono text-sm">{exp.period}</div>
                <div className="md:col-span-1">
                  <h3 className="text-xl font-black uppercase">{exp.role}</h3>
                  <div className="text-slate-500 font-bold text-sm tracking-wider">{exp.company}</div>
                </div>
                <div className="md:col-span-2 text-slate-400 leading-relaxed font-medium group-hover:text-slate-200 transition-colors">
                  {exp.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">Tech Stack <span className="text-cyan-500">.03</span></h2>
            <div className="h-1 w-24 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SKILLS.map((skill, i) => (
              <div key={i} className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl hover:border-cyan-500/30 transition-all group">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 mb-4">{skill.category}</div>
                <h4 className="text-lg font-bold mb-6">{skill.name}</h4>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-500 group-hover:bg-cyan-400 transition-all duration-1000 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-40 px-6 bg-cyan-600">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-12 italic uppercase">
            Let's build <br /> something <br /> intelligent.
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <a href="mailto:contato@matheus.ai" className="text-2xl md:text-4xl font-bold text-white hover:underline underline-offset-8 decoration-4">
              contato@matheus.ai
            </a>
            <div className="h-px w-12 bg-white/30 hidden md:block"></div>
            <div className="flex gap-8">
              <a href="#" className="text-white/80 hover:text-white font-black uppercase text-xs tracking-[0.3em]">LinkedIn</a>
              <a href="#" className="text-white/80 hover:text-white font-black uppercase text-xs tracking-[0.3em]">GitHub</a>
              <a href="#" className="text-white/80 hover:text-white font-black uppercase text-xs tracking-[0.3em]">Twitter</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-slate-950 text-center text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">
        © 2024 Matheus Silva // Engineered with Precision
      </footer>
    </div>
  );
};

export default App;
