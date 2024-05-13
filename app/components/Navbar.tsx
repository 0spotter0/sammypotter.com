'use client'

import Link from 'next/link'
import { SetStateAction, useState } from 'react'
import { IoClose, IoMenu, IoMoon, IoSunny } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import { toggleColorTheme } from '../actions'

export const Navbar = () => {
  const pathname = usePathname()
  const initialPage = pathname.split('/')[1]
  const [currentPage, setCurrentPage] = useState<string>(initialPage ?? 'about')
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false)

  return (
    <div className='font-mono'>
      <div className='bg-main fixed left-0 top-0 hidden w-full transition-colors duration-200 ease-in-out sm:block'>
        <HeaderLinks
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isBurger={false}
          setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        />
      </div>
      <div>
        <div className='flex w-full items-center justify-end p-5 sm:hidden'>
          <button
            onClick={() => {
              setIsBurgerMenuOpen(true)
            }}
          >
            <IoMenu className='text-5xl' />
          </button>
        </div>
        <div
          className={`bg-main visible absolute left-0 top-0 w-full overflow-hidden sm:hidden ${isBurgerMenuOpen ? 'h-full' : 'h-0'} transition-all duration-500 ease-in-out`}
        >
          <div className='flex w-full justify-end'>
            <button
              onClick={() => {
                setIsBurgerMenuOpen(false)
              }}
              className='p-5'
            >
              <IoClose className='text-5xl' />
            </button>
          </div>
          <HeaderLinks
            currentPage={currentPage}
            isBurger={true}
            setCurrentPage={setCurrentPage}
            setIsBurgerMenuOpen={setIsBurgerMenuOpen}
          />
        </div>
      </div>
    </div>
  )
}

const HeaderLinks = (props: {
  currentPage: string
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
  isBurger: boolean
  setIsBurgerMenuOpen: React.Dispatch<SetStateAction<boolean>>
}) => {
  const handlePageChange = (page: string) => {
    props.setCurrentPage(page)
    props.setIsBurgerMenuOpen(false)
  }

  return (
    <div
      className={`flex w-full items-center p-[1.7rem] text-xl font-normal sm:justify-between ${props.isBurger && 'flex-col gap-20'}`}
    >
      <div className='flex w-fit flex-col gap-4 sm:flex-row'>
        <Link
          onClick={() => handlePageChange('resume')}
          href='/resume'
          className={`flex w-32 items-center justify-center rounded-md px-4 py-2 text-center transition-colors duration-200 ${props.currentPage === 'resume' && 'bg-stone-200 dark:bg-neutral-700'}`}
        >
          resume
        </Link>
        <Link
          onClick={() => handlePageChange('research')}
          href='/research'
          className={`flex w-32 items-center justify-center rounded-md px-4 py-2 text-center transition-colors duration-200 ${props.currentPage === 'research' && 'bg-stone-200 dark:bg-neutral-700'}`}
        >
          research
        </Link>
        <Link
          onClick={() => handlePageChange('blog')}
          href='/blog'
          className={`flex w-32 items-center justify-center rounded-md px-4 py-2 text-center transition-colors duration-200 ${props.currentPage === 'blog' && 'bg-stone-200 dark:bg-neutral-700'}`}
        >
          blog
        </Link>
        <Link
          onClick={() => handlePageChange('about')}
          href='/about'
          className={`flex w-32 items-center justify-center rounded-md px-4 py-2 text-center transition-colors duration-200 ${props.currentPage === 'about' && 'bg-stone-200 dark:bg-neutral-700'}`}
        >
          about
        </Link>
      </div>
      <div className='flex w-fit items-center justify-center pt-10 sm:justify-end sm:pt-0'>
        <button
          onClick={() => {
            toggleColorTheme()
          }}
          className='flex justify-end text-2xl'
        >
          <IoSunny className='dark:hidden' />
          <IoMoon className='hidden dark:block' />
        </button>
      </div>
    </div>
  )
}
