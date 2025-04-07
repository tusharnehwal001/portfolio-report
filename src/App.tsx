import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, MonitorSmartphone, Database, Briefcase, Trophy, BookOpen, Star, Users, Coffee } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Full Stack Developer | React Specialist | Problem Solver
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-300 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john@example.com" className="text-gray-300 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            <p className="mb-6">
              I'm a passionate full-stack developer with 5 years of experience building web applications.
              I specialize in creating beautiful, performant, and user-friendly applications using modern technologies.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts,
              or exploring new technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Trophy className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-900">5+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <BookOpen className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users className="w-8 h-8 mx-auto mb-3 text-green-500" />
              <h3 className="text-2xl font-bold text-gray-900">30+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Coffee className="w-8 h-8 mx-auto mb-3 text-red-500" />
              <h3 className="text-2xl font-bold text-gray-900">∞</h3>
              <p className="text-gray-600">Coffee Cups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-gray-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Present</time>
                <div className="text-xl font-bold text-gray-900">Senior Full Stack Developer</div>
              </div>
              <div className="text-gray-600 mb-4">Tech Innovators Inc.</div>
              <div className="text-gray-600">
                Led development of enterprise applications, mentored junior developers, and implemented best practices for code quality and performance.
              </div>
            </div>
            
            <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-gray-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-600 bg-blue-100 rounded-full">2020-2022</time>
                <div className="text-xl font-bold text-gray-900">Full Stack Developer</div>
              </div>
              <div className="text-gray-600 mb-4">Digital Solutions Co.</div>
              <div className="text-gray-600">
                Developed and maintained multiple client projects, implemented new features, and optimized application performance.
              </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-gray-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-purple-600 bg-purple-100 rounded-full">2018-2020</time>
                <div className="text-xl font-bold text-gray-900">Frontend Developer</div>
              </div>
              <div className="text-gray-600 mb-4">WebTech Startups</div>
              <div className="text-gray-600">
                Built responsive web applications, collaborated with design team, and implemented modern frontend practices.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
              <Code2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">React</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400" fill="#FBBF24" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">TypeScript</span>
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400" fill="#FBBF24" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Tailwind CSS</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400" fill="#FBBF24" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
              <Database className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Node.js</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400" fill="#FBBF24" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">PostgreSQL</span>
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400" fill="#FBBF24" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">REST APIs</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400" fill="#FBBF24" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
              <MonitorSmartphone className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">DevOps</span>
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400" fill="#FBBF24" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">UI/UX Design</span>
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400" fill="#FBBF24" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Testing</span>
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400" fill="#FBBF24" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="E-commerce Platform"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">E-commerce Platform</h3>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">React</span>
                    <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">Node.js</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                alt="Project Management Tool"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Project Management Tool</h3>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs">PostgreSQL</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  A collaborative project management tool with real-time updates, task tracking, and team communication features.
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a
              href="mailto:john@example.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send me an email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} John Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;