import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Palette, Smartphone, Globe, Zap } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Palette,
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 88 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'SQL', level: 82 },
        { name: 'MySQL', level: 78 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Zap,
      skills: [
        { name: 'Git', level: 88 },
        { name: 'Docker', level: 70 },
        { name: 'Azure', level: 65 },
        { name: 'Vite', level: 85 },
        { name: 'Unity', level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I've developed a diverse skill set through years of experience and continuous learning. 
            Here are the technologies and tools I work with.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary-500/20">
                  <category.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold gradient-text">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Other Skills & Interests
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Responsive Design', 'REST APIs', 'GraphQL', 'Testing',
              'CI/CD', 'Agile/Scrum', 'UI/UX Design', 'Performance Optimization'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-700/50 border border-dark-600 rounded-lg p-4 text-center hover:border-primary-500/50 transition-colors"
              >
                <span className="text-gray-300 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

