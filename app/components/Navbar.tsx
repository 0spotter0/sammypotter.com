'use client'

import Link from 'next/link'
import { SetStateAction, useState } from 'react'
import { IoClose, IoMenu, IoMoon, IoSunny } from 'react-icons/io5'
import { toggleColorTheme } from '../actions'

export const Navbar = () => {
  const [currentPage, setCurrentPage] = useState<string>('about')
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false)

  return (
    <div>
      <div className='fixed left-0 top-0 hidden w-full bg-stone-200 transition-colors duration-200 ease-in-out sm:block dark:bg-neutral-900'>
        <HeaderLinks
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isBurger={false}
          setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        />
      </div>
      <div>
        <div className='flex w-full items-center justify-between p-5 sm:hidden'>
          <h1 className='w-36 text-4xl font-black'>SP</h1>
          <button
            onClick={() => {
              setIsBurgerMenuOpen(true)
            }}
          >
            <IoMenu className='text-5xl' />
          </button>
        </div>
        <div
          className={`visible absolute left-0 top-0 w-full overflow-hidden bg-stone-200 sm:hidden dark:bg-neutral-900 ${isBurgerMenuOpen ? 'h-full' : 'h-0'} transition-all duration-1000 ease-in-out`}
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
      className={`flex w-full items-center gap-4 p-8 text-xl font-medium sm:justify-start ${props.isBurger && 'flex-col gap-20'}`}
    >
      <h1 className='hidden w-36 text-4xl font-black sm:block'>SP</h1>
      <Link
        onClick={() => handlePageChange('resume')}
        href='/resume'
        className={`flex w-36 items-center justify-center rounded-md px-4 py-2 text-center ${props.currentPage === 'resume' && 'bg-stone-400 bg-opacity-50 dark:bg-neutral-800'}`}
      >
        resume
      </Link>
      <Link
        onClick={() => handlePageChange('research')}
        href='/research'
        className={`flex w-36 items-center justify-center rounded-md px-4 py-2 text-center ${props.currentPage === 'research' && 'bg-stone-400 bg-opacity-50 dark:bg-neutral-800'}`}
      >
        research
      </Link>
      <Link
        onClick={() => handlePageChange('blog')}
        href='/blog'
        className={`flex w-36 items-center justify-center rounded-md px-4 py-2 text-center ${props.currentPage === 'blog' && 'bg-stone-400 bg-opacity-50 dark:bg-neutral-800'}`}
      >
        blog
      </Link>
      <Link
        onClick={() => handlePageChange('about')}
        href='/about'
        className={`flex w-36 items-center justify-center rounded-md px-4 py-2 text-center ${props.currentPage === 'about' && 'bg-stone-400 bg-opacity-50 dark:bg-neutral-800'}`}
      >
        about
      </Link>
      <div className='flex w-full items-center justify-center pt-10 sm:justify-end sm:pt-0'>
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
