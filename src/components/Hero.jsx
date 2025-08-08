import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Code, Gamepad2, Dumbbell } from 'lucide-react'

const Hero = () => {
  const profileImage = '/src/assets/profile.jpg'
  const hasProfileImage = true

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 3 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-8 relative z-[-1]"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-primary-600 p-1">
              {hasProfileImage ? (
                <img
                  src={profileImage}
                  alt="Dayne Smith"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold gradient-text">DS</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-primary-400 font-semibold text-lg mt-40"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Dayne Smith</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          >
            Full Stack Developer & Creative Problem Solver
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Passionate about creating beautiful, functional applications. 
          </motion.p>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center items-center gap-8 mb-12"
          >
            <div className="flex items-center gap-2 text-primary-400">
              <Code className="w-5 h-5" />
              <span className="text-sm font-medium">Coding</span>
            </div>
            <div className="flex items-center gap-2 text-primary-400">
              <Dumbbell className="w-5 h-5" />
              <span className="text-sm font-medium">Fitness</span>
            </div>
            <div className="flex items-center gap-2 text-primary-400">
              <Gamepad2 className="w-5 h-5" />
              <span className="text-sm font-medium">Gaming</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
              <ArrowDown className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

