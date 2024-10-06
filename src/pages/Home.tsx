import React, { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    const createStars = () => {
      const starField = document.querySelector('.star-field');
      if (starField) {
        for (let i = 0; i < 100; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          star.style.top = `${Math.random() * 100}%`;
          star.style.left = `${Math.random() * 100}%`;
          starField.appendChild(star);
        }
      }
    };

    createStars();
  }, []);

  return (
    <div className="bg-deep-space min-h-screen">
      <div className="star-field"></div>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-neon-white mb-4 glow-text">
            Innovative IT Solutions
          </h1>
          <p className="text-xl text-neon-white opacity-80 mb-8">
            Empowering businesses with cutting-edge technology
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-deep-space bg-neon-blue hover:bg-neon-pink transition-colors duration-300"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-deep-space bg-opacity-50 p-6 rounded-lg border border-neon-blue">
            <h3 className="text-xl font-semibold text-neon-white mb-2">Custom Software Development</h3>
            <p className="text-neon-white opacity-80">Tailored solutions to meet your unique business needs</p>
          </div>
          <div className="bg-deep-space bg-opacity-50 p-6 rounded-lg border border-neon-pink">
            <h3 className="text-xl font-semibold text-neon-white mb-2">Web Application Development</h3>
            <p className="text-neon-white opacity-80">Scalable and responsive web applications for modern businesses</p>
          </div>
          <div className="bg-deep-space bg-opacity-50 p-6 rounded-lg border border-neon-blue">
            <h3 className="text-xl font-semibold text-neon-white mb-2">Mobile App Development</h3>
            <p className="text-neon-white opacity-80">Engaging mobile experiences for iOS and Android platforms</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home