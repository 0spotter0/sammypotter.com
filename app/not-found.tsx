import Link from 'next/link'
import { IoArrowBack } from 'react-icons/io5'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center gap-8 pt-20'>
      <h1 className='font-mono text-xl font-medium'>Page not found</h1>
      <Link href='/'>
        <div className='flex items-center gap-2'>
          <IoArrowBack className='text-xl' />
          <p className='font-mono text-lg font-medium underline'>back</p>
        </div>
      </Link>
    </div>
  )
}
