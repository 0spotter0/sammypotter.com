import Link from 'next/link'
import { IoDownload } from 'react-icons/io5'
import LinkButton from '../components/LinkButton'

export default function Resume() {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-4 sm:justify-start sm:pt-16'>
      <a href='/Resume_SammyPotter_2024.pdf' download>
        <LinkButton>
          <IoDownload className='text-xl' />
          <p>Download</p>
        </LinkButton>
      </a>

      <p>or</p>

      <Link
        className='text-link'
        href='/Resume_SammyPotter_2024.pdf'
        rel='noopener noreferrer'
        target='_blank'
      >
        <p className='text-lg font-medium underline'>view in browser</p>
      </Link>
    </div>
  )
}
