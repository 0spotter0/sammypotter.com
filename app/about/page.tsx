import Image from 'next/image'
import Link from 'next/link'
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoSchool } from 'react-icons/io5'

export default function About() {
  const skills: string[] = [
    'nextjs',
    'typescript',
    'react',
    'html',
    'css',
    'tailwind',
    'c',
    'vim',
    'git',
    'java',
    'c#',
    'python',
    'blender',
    'unreal engine',
    'unity',
    'linux',
    'bash',
    'c++',
    'aws',
    'lua',
  ]

  return (
    <div className='mx-auto flex max-w-[70ch] flex-col justify-center gap-10 px-5 pb-20 pt-5 sm:flex-row sm:gap-20 sm:pt-14'>
      <div className='flex flex-col'>
        <div className='mx-auto w-1/2 sm:w-full'>
          <Image
            src='/sammy.png'
            width={400}
            height={400}
            alt='headshot image'
            className='dark:invert dark:opacity-75'
          />
          <p className='text-secondary pt-1 font-mono text-xs'>
            special thanks to Cengiz Ozel
          </p>
        </div>
        <div className='flex justify-around gap-4 pt-6 sm:flex-col sm:items-end sm:justify-center'>
          <Link
            href='https://github.com/0spotter0'
            rel='noopener noreferrer'
            target='_blank'
            className='flex flex-col items-center gap-3 underline transition-transform duration-150 sm:flex-row sm:flex-row-reverse'
          >
            <IoLogoGithub className='text-3xl' />
            <p className='font-mono font-light'>github</p>
          </Link>
          <Link
            href='https://scholar.google.com/citations?user=G8Cp2AMAAAAJ'
            rel='noopener noreferrer'
            target='_blank'
            className='flex flex-col items-center gap-3 underline transition-transform duration-150 sm:flex-row sm:flex-row-reverse'
          >
            <IoSchool className='text-3xl' />
            <p className='font-mono font-light'>
              <span className='hidden underline sm:inline-block'>google</span>{' '}
              scholar
            </p>
          </Link>
          <Link
            href='https://www.linkedin.com/in/pottersammy/'
            rel='noopener noreferrer'
            target='_blank'
            className='flex flex-col items-center gap-3 underline transition-transform duration-150 sm:flex-row sm:flex-row-reverse'
          >
            <IoLogoLinkedin className='text-3xl' />
            <p className='font-mono font-light'>linkedin</p>
          </Link>
          <Link
            href='mailto:s.potter@rochester.edu'
            rel='noopener noreferrer'
            target='_blank'
            className='flex flex-col items-center gap-3 underline transition-transform duration-150 sm:flex-row sm:flex-row-reverse'
          >
            <IoMail className='text-3xl' />
            <p className='font-mono font-light'>email</p>
          </Link>
        </div>
      </div>
      <div className='flex w-full flex-col gap-4 md:pt-5'>
        <div className='flex items-center gap-2'>
          <Image
            src='/flag.gif'
            width={20}
            height={11}
            alt='flag'
            className='image-pixelated pointer-events-none select-none'
          ></Image>
          <p className='font-medium'>Los Angeles, CA</p>
        </div>
        <p>Fourth-year computer science student at University of Rochester. Primary experience in full-stack web development and realtime 3D technology.</p>
        <p>I use vim btw</p>
        <div className='w-full pt-4 sm:pt-16'>
          <p className='pb-4 font-medium'>
            obligatory skills tray with little unclickable bubbles with hover
            animations:
          </p>
          <div className='flex flex-wrap gap-2'>
            {skills.map((skill) => (
              <SkillPill key={skill} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const SkillPill = (props: { name: string }) => {
  return (
    <p className='text-primary rounded-full border border-stone-300 px-4 py-1 pb-1 font-mono transition-transform duration-150 hover:scale-105'>
      {props.name}
    </p>
  )
}
