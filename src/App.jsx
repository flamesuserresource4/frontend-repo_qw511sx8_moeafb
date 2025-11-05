import React from 'react'
import Hero3D from './components/Hero3D'
import ProjectsGrid from './components/ProjectsGrid'
import Resume from './components/Resume'
import ContactFooter from './components/ContactFooter'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero3D />
      <ProjectsGrid />
      <Resume />
      <ContactFooter />
    </div>
  )
}

export default App
