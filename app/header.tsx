import Link from 'next/link'

export const Header = (props: { currentPage: string }) => {
  return (
    <div className='flex justify-center gap-20 pb-5 pt-20'>
      <Link
        href='/resume'
        className={`text-center text-2xl ${props.currentPage === 'resume' && 'underline'}`}
      >
        resume
      </Link>
      <Link
        href='/blog'
        className={`text-center text-2xl ${props.currentPage === 'blog' && 'underline'}`}
      >
        blog
      </Link>
      <Link
        href='/research'
        className={`text-center text-2xl ${props.currentPage === 'research' && 'underline'}`}
      >
        research
      </Link>
      <Link
        href='/about'
        className={`text-center text-2xl ${props.currentPage === 'about' && 'underline'}`}
      >
        about
      </Link>
    </div>
  )
}
