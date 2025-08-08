import React from 'react'
import { motion } from 'framer-motion'
import { Gamepad2, Dumbbell, Code, Heart, Target, Users } from 'lucide-react'

const About = () => {
  const interests = [
    {
      icon: Code,
      title: 'Coding',
      description: 'Passionate about creating innovative solutions and learning new technologies.',
      color: 'text-blue-400'
    },
    {
      icon: Dumbbell,
      title: 'Fitness',
      description: 'Dedicated to maintaining a healthy lifestyle through the gym.',
      color: 'text-green-400'
    }
  ]

  const stats = [
    { number: '100%', label: 'Dedication', icon: Heart },
    { number: '24/7', label: 'Learning Mode', icon: Users }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating amazing digital experiences. 
            When I'm not coding, you'll find me pushing my limits at the gym or diving into epic gaming adventures.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm Dayne Smith, a dedicated full-stack developer based in Houston, TX, with a passion for creating beautiful, 
                functional applications that solve real-world problems. My journey in tech 
                started with curiosity and has evolved into a career I truly love.
              </p>
              <p>
                When I'm not immersed in code, I'm either at the gym pushing my limits 
                or hanging out and gaming with friends. These activities help me maintain a balanced lifestyle and keep my 
                mind sharp for problem-solving.
              </p>
              <p>
                I believe in continuous learning and staying up-to-date with the latest 
                technologies and industry trends. Every project is an opportunity to grow 
                and improve my skills.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              My Interests
            </h3>
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-dark-700 ${interest.color}`}>
                    <interest.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{interest.title}</h4>
                    <p className="text-gray-400">{interest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="card">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-primary-400" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

