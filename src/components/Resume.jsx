import React from 'react'
import { Briefcase, Code } from 'lucide-react'

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Tech Studio',
    period: '2022 — Present',
    points: [
      'Led development of a design system adopted across 10+ products',
      'Shipped interactive 3D hero experiences with Spline',
      'Optimized performance, cutting LCP by 40%',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Product Labs',
    period: '2020 — 2022',
    points: [
      'Built real-time dashboards and data visualizations',
      'Introduced CI workflows and testing culture',
    ],
  },
]

const skills = [
  'React',
  'TypeScript',
  'Tailwind',
  'FastAPI',
  'MongoDB',
  'Framer Motion',
  'Spline',
  'Testing',
]

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Experience</h2>
            <ol className="mt-6 relative border-l-2 border-gray-100">
              {experiences.map((exp) => (
                <li key={exp.role} className="mb-8 ml-6">
                  <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-8 ring-white">
                    <Briefcase size={14} className="text-white" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {exp.role} · <span className="text-blue-600">{exp.company}</span>
                  </h3>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                  <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                    {exp.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Skills</h2>
            <p className="mt-3 text-gray-600 max-w-prose">
              Tools and technologies I use to build accessible, high-performance web apps.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-800 border border-gray-200"
                >
                  <Code size={14} /> {s}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
