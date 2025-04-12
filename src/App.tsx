
import './App.css'
import clsx from 'clsx'

import { Layout } from './components/Layout'
import { GitHubIcon, LinkedInIcon } from './components/SocialIcons'
import SocialLink from './components/SocialLink'
import Projects from './components/Projects'
import experience from './config/experience'

import image1 from './assets/photos/image-1.jpg'
import image2 from './assets/photos/image-2.jpg'
import image3 from './assets/photos/image-3.jpg'
import image4 from './assets/photos/image-4.jpg'
import image5 from './assets/photos/image-5.jpg'

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <AboutMe />
        <Photos />
        <Projects />
        <Experience />
      </Layout>
    </>
  )
}

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Brent England</span>{' '}
                <span className="block text-teal-500 xl:inline">Software Developer</span>
              </h1>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Queensland-based developer specializing in cloud solutions, modern web technologies, and volunteer Life Saver on the Sunshine Coast.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start gap-4">
                <a
                  href="#projects"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
                >
                  View Projects
                </a>
                <a
                  href="#experience"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white border-teal-600 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-teal-400 dark:border-teal-400 dark:hover:bg-zinc-700 md:py-4 md:text-lg md:px-10"
                >
                  Experience
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="py-16 sm:py-24 bg-zinc-50 dark:bg-black w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl mb-8">
          Life on the Coast
        </h2>
      </div>
      
      <div className="w-full overflow-x-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-6 sm:gap-8 py-8 min-w-full">
          {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
            <div
              key={imageIndex}
              className={clsx(
                'relative flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg',
                rotations[imageIndex % rotations.length],
                'h-64 w-56 sm:h-80 sm:w-72'
              )}
            >
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AboutMe() {
  return (
    <div id="about" className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-800/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          <div className="relative max-w-3xl mx-auto lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">About Me</h2>
            <div className="mt-6 space-y-6 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hello, I'm Brent, based in Queensland, Australia. I specialize in software development with expertise in cloud solutions and modern web technologies.
              </p>
              <p>
                With over 25 years of experience in the tech industry, I've developed applications and systems that solve real-world problems. My approach combines technical expertise with a focus on user experience and business value.
              </p>
              <p>
                Outside of work, I'm a proud volunteer Life Saver on the Sunshine Coast, contributing to community safety and enjoying Queensland's beautiful beaches.
              </p>
            </div>
            <div className="mt-8 flex gap-6">
              <SocialLink href="https://github.com/brentos99" icon={GitHubIcon} />
              <SocialLink href="https://www.linkedin.com/in/brentengland99/" icon={LinkedInIcon} />
            </div>
          </div>
          <div className="mt-12 lg:mt-0 flex justify-center">
            <div className="relative lg:pl-10">
              <div className="overflow-hidden rounded-2xl shadow-xl max-w-xs lg:max-w-none mx-auto">
                <img
                  src="https://placehold.co/600x800/png?text=Profile+Photo"
                  alt="Brent England"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-teal-500 flex items-center justify-center shadow-lg">
                <span className="text-white text-4xl font-bold">BE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div id="experience" className="py-16 sm:py-24 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
            My professional journey in software development and cloud solutions.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-zinc-200 dark:bg-zinc-700"></div>
          
          <div className="space-y-16">
            {experience.map((role, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                {/* Timeline point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-teal-500 dark:bg-teal-400 z-10"></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:order-last md:pl-12'}`}>
                  <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">{role.title}</h3>
                        <div className="text-zinc-600 dark:text-zinc-400 font-medium">{role.company} | {role.location}</div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300">
                        {role.period}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
                      {role.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mt-1 mr-2 text-teal-500 dark:text-teal-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
