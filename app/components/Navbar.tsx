'use client'

import Link from 'next/link'
import { SetStateAction, useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'

export const Navbar = () => {
  const [currentPage, setCurrentPage] = useState<string>('about')

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false)

  return (
    <>
      <div className='hidden sm:block'>
        <HeaderLinks
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isBurger={false}
          setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        />
      </div>
      <div>
        <div className='flex w-full justify-end sm:hidden'>
          <button
            onClick={() => {
              setIsBurgerMenuOpen(true)
            }}
            className='p-5'
          >
            <IoMenu className='text-5xl' />
          </button>
        </div>
        <div
          className={`visible absolute left-0 top-0 w-full overflow-hidden bg-stone-200 sm:hidden ${isBurgerMenuOpen ? 'h-full' : 'h-0'} transition-all duration-1000 ease-in-out`}
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
    </>
  )
}

const HeaderLinks = (props: {
  currentPage: string
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
  isBurger: boolean
  setIsBurgerMenuOpen: React.Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div
      className={`flex justify-center pb-5 pt-20 text-xl font-bold ${props.isBurger && 'flex-col gap-20'}`}
      onClick={() => {
        props.setIsBurgerMenuOpen(false)
      }}
    >
      <Link
        onClick={() => props.setCurrentPage('resume')}
        href='/resume'
        className={`px-10 text-center ${props.currentPage === 'resume' && 'underline'}`}
      >
        resume
      </Link>
      <Link
        onClick={() => props.setCurrentPage('research')}
        href='/research'
        className={`px-10 text-center ${props.currentPage === 'research' && 'underline'}`}
      >
        research
      </Link>
      <Link
        onClick={() => props.setCurrentPage('blog')}
        href='/blog'
        className={`px-10 text-center ${props.currentPage === 'blog' && 'underline'}`}
      >
        blog
      </Link>
      <Link
        onClick={() => props.setCurrentPage('about')}
        href='/about'
        className={`px-10 text-center ${props.currentPage === 'about' && 'underline'}`}
      >
        about
      </Link>
    </div>
  )
}
