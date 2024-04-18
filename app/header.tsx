'use client'

import Link from 'next/link'
import { SetStateAction, useState } from 'react'
import { IoMenu } from 'react-icons/io5'

export const Header = (props: { currentPage: string }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false)

  return (
    <>
      <div className='hidden sm:block'>
        <HeaderLinks
          currentPage=''
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
          className={`visible absolute left-0 top-0 w-full overflow-hidden bg-stone-50 sm:hidden ${isBurgerMenuOpen ? 'h-full' : 'h-0'} transition-all duration-200`}
        >
          <div className='flex w-full justify-end'>
            <button
              onClick={() => {
                setIsBurgerMenuOpen(false)
              }}
              className='p-5'
            >
              <IoMenu className='text-5xl' />
            </button>
          </div>
          <HeaderLinks
            currentPage=''
            isBurger={true}
            setIsBurgerMenuOpen={setIsBurgerMenuOpen}
          />
        </div>
      </div>
    </>
  )
}

const HeaderLinks = (props: {
  currentPage: string
  isBurger: boolean
  setIsBurgerMenuOpen: React.Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div
      className={`flex justify-center gap-20 pb-5 pt-20 text-xl ${props.isBurger && 'flex-col'}`}
      onClick={() => {
        props.setIsBurgerMenuOpen(false)
      }}
    >
      <Link
        href='/resume'
        className={`text-center ${props.currentPage === 'resume' && 'underline'}`}
      >
        resume
      </Link>
      <Link
        href='/blog'
        className={`text-center ${props.currentPage === 'blog' && 'underline'}`}
      >
        blog
      </Link>
      <Link
        href='/research'
        className={`text-center ${props.currentPage === 'research' && 'underline'}`}
      >
        research
      </Link>
      <Link
        href='/about'
        className={`text-center ${props.currentPage === 'about' && 'underline'}`}
      >
        about
      </Link>
    </div>
  )
}
