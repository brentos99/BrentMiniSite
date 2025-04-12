
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
    <div className="relative overflow-hidden bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <defs>
              <pattern id="pattern" patternUnits="userSpaceOnUse" width="100" height="100" x="0" y="0">
                <path d="M.5 200V.5H200" fill="none" stroke="currentColor" strokeOpacity=".1"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" strokeWidth="0"></rect>
          </svg>
        </div>
      </div>
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Brent England</span>{' '}
                <span className="block text-teal-500 xl:inline">Software Developer</span>
              </h1>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Queensland-based technology leader specialising in cloud solutions, enterprise systems, and leading high-performing development teams.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start gap-4">
                <a
                  href="#projects"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 md:py-4 md:text-lg md:px-10 shadow-md hover:shadow-lg transition-all"
                >
                  View Projects
                </a>
                <a
                  href="#experience"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white border-teal-600 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-teal-400 dark:border-teal-400 dark:hover:bg-zinc-700 md:py-4 md:text-lg md:px-10 shadow-md hover:shadow-lg transition-all"
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
    <div className="py-20 sm:py-28 bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl mb-8">
          Life on the Coast
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12">
          Proud volunteer Life Saver with Surf Life Saving Queensland since 2018, enjoying Queensland's beautiful beaches and contributing to community safety.
        </p>
      </div>
      
      <div className="w-full overflow-x-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-8 sm:gap-10 py-8 min-w-full">
          {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
            <div
              key={imageIndex}
              className={clsx(
                'relative flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl',
                rotations[imageIndex % rotations.length],
                'h-64 w-56 sm:h-80 sm:w-72'
              )}
            >
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="font-medium">Sunshine Coast, QLD</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AboutMe() {
  return (
    <div id="about" className="py-20 sm:py-28 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20 items-center">
          <div className="relative max-w-3xl mx-auto lg:max-w-none">
            <div className="lg:pr-8">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">About Me</h2>
              <div className="mt-8 space-y-6 text-base text-zinc-600 dark:text-zinc-400">
                <p className="leading-relaxed">
                  Hello, I'm Brent, a senior technology leader based in Queensland, Australia. I specialise in solution architecture, cloud computing, software development, and leading high-performing technology teams.
                </p>
                <p className="leading-relaxed">
                  With a Master of Information Technology and multiple Azure certifications, I deliver innovative solutions that support business growth. My expertise spans cloud-native applications, DevOps practices, and enterprise integrations that streamline processes and enhance customer experiences.
                </p>
                <p className="leading-relaxed">
                  Currently serving as Team Lead for Development & Integration at Sunshine Coast Council, I lead a team of 10 developers implementing DevOps practices and developing cross-platform applications. Previously, I was General Manager of IT and Digital at Brand Collective, overseeing all technology operations and reporting directly to the CEO.
                </p>
              </div>
              <div className="mt-8 flex gap-6">
                <SocialLink 
                  href="https://github.com/brentos99" 
                  icon={GitHubIcon} 
                />
                <SocialLink 
                  href="https://www.linkedin.com/in/brentengland99/" 
                  icon={LinkedInIcon} 
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 flex justify-center">
            <div className="relative lg:pl-10">
              <div className="overflow-hidden rounded-2xl shadow-xl max-w-xs lg:max-w-none mx-auto relative">
                <div className="aspect-[4/5] bg-zinc-100 dark:bg-zinc-800 relative z-10">
                  <img
                    src="https://placehold.co/600x800/png?text=Profile+Photo"
                    alt="Brent England"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 -z-10 bg-teal-500 rounded-2xl transform rotate-3 scale-105"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-teal-500 flex items-center justify-center shadow-lg dark:bg-teal-600">
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
    <div id="experience" className="py-20 sm:py-28 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-800/30 dark:to-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
            My professional journey in technology leadership and software development.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal-500/70 via-zinc-200 to-zinc-200 dark:from-teal-400/70 dark:via-zinc-700 dark:to-zinc-700"></div>
          
          <div className="space-y-16">
            {experience.map((role, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row md:items-center `}>
                {/* Timeline point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-teal-500 dark:bg-teal-400 z-10 shadow-lg"></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:order-last md:pl-12'}`}>
                  <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">{role.title}</h3>
                        <div className="text-zinc-600 dark:text-zinc-400 font-medium mt-1">{role.company} | {role.location}</div>
                      </div>
                      <span className="inline-flex sm:ml-3 px-3 py-1 rounded-full text-sm font-medium bg-teal-50 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 whitespace-nowrap">
                        {role.period}
                      </span>
                    </div>
                    <ul className="mt-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                      {role.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mt-1 mr-2 text-teal-500 dark:text-teal-400 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
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
