import React from 'react'
import { Code, Globe, Smartphone, Database, Cloud, Shield } from 'lucide-react'

const services = [
  { icon: Code, title: 'Custom Software Development', description: 'Tailored solutions to meet your unique business needs' },
  { icon: Globe, title: 'Web Application Development', description: 'Scalable and responsive web applications for modern businesses' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'Engaging mobile experiences for iOS and Android platforms' },
  { icon: Database, title: 'Database Design & Management', description: 'Efficient data storage and retrieval solutions' },
  { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure and migration services' },
  { icon: Shield, title: 'Cybersecurity Services', description: 'Protecting your digital assets with advanced security measures' },
]

const Services = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <service.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services