import { IoDownload } from 'react-icons/io5'

export const Resume = () => {
  return (
    <div className='flex flex-col items-center gap-10'>
      <a href='/Resume_SammyPotter_2024.pdf' download>
        <div className='flex items-center justify-center gap-2 bg-neutral-700 px-6 py-3 text-stone-50'>
          <IoDownload className='text-2xl' />
          <p className='text-lg'>download</p>
        </div>
      </a>

      <div className='h-[70vh] w-full'>
        <iframe src='/Resume_SammyPotter_2024.pdf' width='100%' height='100%' />
      </div>
    </div>
  )
}
