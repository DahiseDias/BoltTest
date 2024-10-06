import React from 'react'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A fully-featured online shopping platform with advanced search and recommendation systems.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Healthcare Management System',
    description: 'An integrated system for managing patient records, appointments, and billing for a large hospital network.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Angular', 'Java', 'PostgreSQL'],
  },
  {
    title: 'Smart Home IoT Solution',
    description: 'A comprehensive IoT platform for controlling and monitoring smart home devices.',
    image: 'https://images.unsplash.com/photo-1558002038-76f4e3c7a1b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React Native', 'Python', 'AWS IoT'],
  },
  {
    title: 'Financial Analytics Dashboard',
    description: 'A real-time dashboard for visualizing complex financial data and generating insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Vue.js', 'D3.js', 'Flask'],
  },
]

const Portfolio = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio