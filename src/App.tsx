
import './App.css'
import clsx from 'clsx'

import { Layout } from './components/Layout'
import { GitHubIcon, LinkedInIcon } from './components/SocialIcons'
import SocialLink from './components/SocialLink'
import Projects from './components/Projects'

import image1 from './assets/photos/image-1.jpg'
import image2 from './assets/photos/image-2.jpg'
import image3 from './assets/photos/image-3.jpg'
import image4 from './assets/photos/image-4.jpg'
import image5 from './assets/photos/image-5.jpg'

function App() {
  return (
    <>
      <Layout>
        <AboutMe />
        <Photos />
        <Projects />
      </Layout>
    </>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={imageIndex}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <img
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function AboutMe() {
  return (
    <div className="sm:px-8 mt-9">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <img
                    src="https://placehold.co/400x400/png?text=Profile+Photo"
                    alt="Brent England"
                    className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  />
                </div>
              </div>
              <div className="lg:order-first lg:row-span-2">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  Software Developer, Life Saver and Dad.
                </h1>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                  <p>
                    Hello, I'm Brent, based in Queensland, Australia. I specialise in software development with expertise in cloud solutions and modern web technologies.
                  </p>
                  <p>
                    With over 10 years of experience in the tech industry, I've developed applications and systems that solve real-world problems. My approach combines technical expertise with a focus on user experience and business value.
                  </p>
                  <p>
                    Outside of work, I'm a proud volunteer Life Saver on the Sunshine Coast, contributing to community safety and enjoying Queensland's beautiful beaches.
                  </p>
                </div>
                <div className="mt-6 flex gap-6">
                  <SocialLink href="https://github.com/brentos99" icon={GitHubIcon} />
                  <SocialLink href="https://www.linkedin.com/in/brentengland99/" icon={LinkedInIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
