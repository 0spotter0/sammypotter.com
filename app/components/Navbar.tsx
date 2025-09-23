'use client'

import Link from 'next/link'
import { SetStateAction, useEffect, useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()
  const initialPage = pathname.split('/')[1]
  const [currentPage, setCurrentPage] = useState<string>(initialPage ?? 'about')
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    if (isBurgerMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      setTimeout(() => (document.body.style.overflow = ''), 100)
    }
  }, [isBurgerMenuOpen])

  return (
    <div className='font-mono'>
      <div className='bg-main fixed top-0 left-0 hidden w-full sm:block'>
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
            name='open menu'
            onClick={() => {
              setIsBurgerMenuOpen(true)
            }}
          >
            <IoMenu className='text-5xl' />
          </button>
        </div>
        <div
          className={`bg-main burger-slide-transition visible fixed top-0 left-0 z-50 w-full overflow-hidden sm:hidden ${isBurgerMenuOpen ? 'h-full' : 'h-0'}`}
        >
          <div className='flex w-full justify-end'>
            <button
              name='close menu'
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

const availablePages = ['resume', 'research', 'about']

const HeaderLinks = (props: {
  currentPage: string
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
  isBurger: boolean
  setIsBurgerMenuOpen: React.Dispatch<SetStateAction<boolean>>
}) => {
  const handlePageChange = (page: string) => {
    console.log('hi', page, props.currentPage)
    if (props.currentPage === page) {
      props.setIsBurgerMenuOpen(false)
      return
    }
    props.setCurrentPage(page)
  }

  useEffect(() => {
    props.setIsBurgerMenuOpen(false)
  }, [props.currentPage])

  return (
    <div
      className={`flex w-full items-center p-[1.7rem] text-xl font-normal sm:justify-between ${props.isBurger && 'flex-col gap-20'}`}
    >
      <div className='flex w-fit flex-col gap-4 sm:flex-row'>
        {availablePages.map((page) => (
          <Link
            key={page}
            onClick={() => handlePageChange(page)}
            href={`/${page}`}
            className={`flex w-32 items-center justify-center rounded-md px-4 py-2 text-center ${props.currentPage === page && 'bg-stone-200 dark:bg-neutral-700'}`}
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  )
}
