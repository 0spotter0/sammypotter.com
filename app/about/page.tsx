import Image from 'next/image'
import Link from 'next/link'
import { IoBook, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

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
    <div className='mx-auto flex max-w-[70ch] flex-col items-center gap-10 pt-5 sm:gap-20'>
      <div className='flex w-full flex-col items-center gap-8 text-lg sm:flex-row'>
        <div className='shrink-0 sm:w-1/3'>
          <Image
            src='/sammy.png'
            width={200}
            height={200}
            alt='headshot image'
          />
          <p className='text-medium pt-1 text-xs'>
            special thanks to Cengiz Ozel
          </p>
        </div>
        <div className='flex w-full flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <Image
              src='/flag.gif'
              width={20}
              height={11}
              alt='flag'
              className='pointer-events-none select-none'
            ></Image>
            <p className='font-medium'>Los Angeles, CA</p>
          </div>
          <p>
            Strongly-typed fan, 3D tinkerer, space enthusiast, neovim
            evangelist, intermediate Spanish speaker.
          </p>
          <p>University of Rochester class of 2025, BS Computer Science.</p>
          <div className='flex justify-center gap-4 pt-2 text-3xl sm:justify-start sm:pt-0'>
            <Link
              href='https://github.com/0spotter0'
              rel='noopener noreferrer'
              target='_blank'
              className='transition-transform duration-150 hover:scale-105'
            >
              <IoLogoGithub />
            </Link>
            <Link
              href='https://scholar.google.com/citations?user=G8Cp2AMAAAAJ'
              rel='noopener noreferrer'
              target='_blank'
              className='transition-transform duration-150 hover:scale-105'
            >
              <IoBook />
            </Link>
            <Link
              href='https://www.linkedin.com/in/pottersammy/'
              rel='noopener noreferrer'
              target='_blank'
              className='transition-transform duration-150 hover:scale-105'
            >
              <IoLogoLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full'>
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
  )
}

const SkillPill = (props: { name: string }) => {
  return (
    <p className='text-dark rounded-full border border-stone-300 px-4 py-1 pb-1 transition-transform duration-150 hover:scale-105'>
      {props.name}
    </p>
  )
}
