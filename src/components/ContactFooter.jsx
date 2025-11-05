import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'

const ContactFooter = () => {
  return (
    <footer id="contact" className="pt-16 pb-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Let’s build something great.</h3>
            <p className="mt-2 text-gray-600 max-w-prose">
              I’m open to freelance, full-time roles, and collaborations. Drop a line and I’ll get back
              to you quickly.
            </p>
            <a
              href="mailto:you@example.com"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              <Mail size={18} /> you@example.com
            </a>
          </div>

          <div className="sm:justify-self-end">
            <div className="flex items-center gap-3 sm:justify-end">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 hover:bg-gray-100"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-blue-700 hover:bg-gray-100"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500 sm:text-right">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ContactFooter
