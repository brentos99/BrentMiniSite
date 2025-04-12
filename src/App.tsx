
import './App.css'
import clsx from 'clsx'

import { Layout } from './components/Layout'
import { GitHubIcon, LinkedInIcon } from './components/SocialIcons'
import SocialLink from './components/SocialLink'

import image1 from './assets/photos/image-1.jpg'
import image2 from './assets/photos/image-2.jpg'
import image3 from './assets/photos/image-3.jpg'
import image4 from './assets/photos/image-4.jpg'
import image5 from './assets/photos/image-5.jpg'

function App() {


  return (

    <>
      <Layout >
        <AboutMe />
        <Photos />
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
  return <div className="sm:px-8 mt-9">
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Software Developer, Life Saver and Dad.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Hello, I'm Brent, an individual based in Queensland, Australia. I have a keen interest in software development and cloud solutions. I am also a volutneer Life Saver on the Sunshine Coast.
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink href="https://github.com/brentos99" icon={GitHubIcon} />
              <SocialLink href="https://www.linkedin.com/in/brentengland99/" icon={LinkedInIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default App
