import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-deep-space py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-neon-white mb-2">Ilumirain</h3>
            <p className="text-neon-white opacity-80">Information Technology Solutions</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold text-neon-white mb-2">Contact Us</h4>
            <p className="text-neon-white opacity-80">contact@ilumirain.com</p>
            <p className="text-neon-white opacity-80">+1 (555) 123-4567</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold text-neon-white mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-neon-white hover:text-neon-pink transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-neon-white hover:text-neon-pink transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-neon-white hover:text-neon-pink transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-neon-white opacity-80">
          © 2023 Ilumirain. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer