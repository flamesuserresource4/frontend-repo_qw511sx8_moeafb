import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Neon Shop UI',
    description:
      'E-commerce front-end with product filtering, cart animations, and responsive design.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    demo: '#',
    code: '#',
    accent: 'from-fuchsia-500 to-purple-500',
  },
  {
    title: 'Realtime Chat',
    description:
      'WebSocket powered chat with typing indicators, presence, and message reactions.',
    tags: ['FastAPI', 'WebSockets', 'MongoDB'],
    demo: '#',
    code: '#',
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    title: '3D Landing',
    description:
      'Playful landing page integrating Spline scenes with smooth scroll interactions.',
    tags: ['Spline', 'Vite', 'Accessibility'],
    demo: '#',
    code: '#',
    accent: 'from-emerald-500 to-teal-500',
  },
]

const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-3 text-gray-600">
            A selection of interfaces and systems I’ve designed and built recently.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden hover:shadow-lg transition"
            >
              <div className={`h-36 bg-gradient-to-br ${p.accent}`} />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:underline">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <span className="text-gray-300">•</span>
                  <a
                    href={p.code}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid
