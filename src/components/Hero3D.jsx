import React from 'react'
import Spline from '@splinetool/react-spline'
import { Rocket, Download, Github, Linkedin } from 'lucide-react'

const Hero3D = () => {
  return (
    <section className="relative h-[80vh] sm:h-[90vh] w-full overflow-hidden">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto h-full px-6 flex items-center">
          <div className="max-w-xl bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 border border-white/60">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              <Rocket size={16} /> Interactive 3D Portfolio
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Your Name</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              Frontend Engineer crafting modern, playful, and performant web experiences. I blend
              clean code with delightful interactions.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
              >
                <Rocket size={18} /> View Projects
              </a>
              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-900 font-medium border border-gray-200 hover:border-gray-300 shadow-sm transition"
              >
                <Download size={18} /> Resume
              </a>
              <div className="ml-auto flex items-center gap-2">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-gray-900 hover:shadow transition"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 text-blue-700 hover:text-blue-900 hover:shadow transition"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero3D
