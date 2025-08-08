import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Globe, Smartphone, Database } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: 'Medical Clinic Application',
      description: 'A responsive medical web app built with Vite, Node.js, and MySQL, hosted on Azure, that streamlines patient management, appointment scheduling, and billing for urgent care clinics.',
      image: 'https://private-user-images.githubusercontent.com/191423029/473190168-11966565-87fb-4da3-9c7f-48e18bd84d48.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ2ODYxNzQsIm5iZiI6MTc1NDY4NTg3NCwicGF0aCI6Ii8xOTE0MjMwMjkvNDczMTkwMTY4LTExOTY2NTY1LTg3ZmItNGRhMy05YzdmLTQ4ZTE4YmQ4NGQ0OC5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwOFQyMDQ0MzRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNzY5ZDQ5ZTg5YjAxNjJmNDVkMmMyZjExNWFjNTdlZTY2OWY1YWY1ZTE5ZjdjY2U3MTFkMTVhMTAxMWQyYjNjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.oWRs1liJ8pED72mv3FIx4xekKzPenW3siZKFJgNO7zc',
      technologies: ['React', 'Node.js', 'MySQL', 'Stripe'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: 'https://github.com/daynesmith/Urgent-Care-App',
      featured: true
    },
    {
      id: 2,
      title: 'AxeBrawl Unity Project',
      description: 'A competitive multiplayer action game built in Unity with C#, leveraging Steam’s networking to deliver real-time player battles and dynamic, fast-paced combat.',
      image: 'https://private-user-images.githubusercontent.com/191423029/473201864-3a3f8f56-953a-4b15-94a7-a7c974998543.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ2ODYzMTksIm5iZiI6MTc1NDY4NjAxOSwicGF0aCI6Ii8xOTE0MjMwMjkvNDczMjAxODY0LTNhM2Y4ZjU2LTk1M2EtNGIxNS05NGE3LWE3Yzk3NDk5ODU0My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwOFQyMDQ2NTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00ZWYyOWRhNmYzMjQxOWFjMzViMTFiODRmZmJmMDM1YmEyYWQ0NWRhM2FhOGFjZjE3ODNkOTQzYWU2NjY0ODlkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.YMn458SOffRcynQlCJDsPnQRyz0fIDceJf7xrPeUcWs',
      technologies: ['Unity', 'C#', 'Multiplayer Networking', 'Client-Server Architecture'],
      category: 'gamedev',
      liveUrl: '#',
      githubUrl: 'https://github.com/daynesmith/UnityProject-AxeBrawl',
      featured: true
    },
    {
      id: 3,
      title: 'Cache Performance Test',
      description: 'A small project exploring cache behavior, designed to deepen understanding of cache misses and spatial locality through simple benchmarking experiments.',
      image: 'https://storedbits.com/wp-content/uploads/2024/10/vs-2.png',
      technologies: ['C++', 'Computer Architecure'],
      category: '',
      liveUrl: '#',
      githubUrl: 'https://github.com/daynesmith/cache-performance-test',
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'gamedev', label: 'Game Dev' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">My Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and an opportunity to learn and grow as a developer.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 gradient-text">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-dark-700 text-primary-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together? Let's discuss your next project!
          </p>
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

