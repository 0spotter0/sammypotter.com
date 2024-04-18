import Image from 'next/image'
import Link from 'next/link'
import { IoBook, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

export const About = () => {
  const skills: string[] = [
    'java',
    'typescript',
    'c',
    'c++',
    'nextis',
    'react',
    'linux',
    'vim',
    'unreal engine',
    'unity',
    'blender',
    'git',
    'aws',
    'python',
    'c#',
    'bash',
    'html',
    'css',
    'tailwind',
    'lua',
  ]

  return (
    <div className='mx-auto flex max-w-[70ch] flex-col items-center gap-20'>
      <div className='flex w-full gap-8 pt-20'>
        <div className='w-1/3 shrink-0'>
          <Image
            src='/sammy.png'
            width={200}
            height={200}
            alt='headshot image'
          />
          <p className='pt-1 text-xs'>special thanks to Cengiz Ozel</p>
        </div>
        <div className='flex w-full flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <Image src='/flag.gif' width={20} height={11} alt='flag'></Image>
            <p>Los Angeles, CA</p>
          </div>
          <p>
            Strongly-typed fan, 3D tinkerer, space enthusiast, neovim
            evangelist, intermediate Spanish speaker.
          </p>
          <p>University of Rochester class of 2025, BS Computer Science.</p>
          <div className='flex gap-4 text-3xl'>
            <Link
              href='https://github.com/0spotter0'
              rel='noopener noreferrer'
              target='_blank'
            >
              <IoLogoGithub />
            </Link>
            <Link
              href='https://scholar.google.com/citations?user=G8Cp2AMAAAAJ'
              rel='noopener noreferrer'
              target='_blank'
            >
              <IoBook />
            </Link>
            <Link
              href='https://www.linkedin.com/in/pottersammy/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <IoLogoLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <p className='pb-4'>
          obligatory skills tray with little unclickable bubbles that still have
          a hover animation:
        </p>
        <div className='flex flex-wrap gap-2'>
          {skills.map((skill) => (
            <SkillPill name={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

const SkillPill = (props: { name: string }) => {
  return (
    <p className='rounded-full bg-gray-300 px-4 py-1 transition-transform duration-150 hover:scale-105'>
      {props.name}
    </p>
  )
}
