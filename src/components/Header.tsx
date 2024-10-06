import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Atom } from 'lucide-react'
import { ThemeContext } from '../context/ThemeContext'

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="bg-deep-space shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Atom size={32} className="text-neon-blue" />
          <span className="text-2xl font-bold text-neon-white glow-text">ILUMIRAIN</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-neon-white hover:text-neon-pink transition-colors">Home</Link></li>
            <li><Link to="/services" className="text-neon-white hover:text-neon-pink transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="text-neon-white hover:text-neon-pink transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="text-neon-white hover:text-neon-pink transition-colors">About</Link></li>
            <li><Link to="/contact" className="text-neon-white hover:text-neon-pink transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header