'use client'
import Link from 'next/link'
import { SetStateAction, useEffect, useState } from 'react'
import { IoClose, IoLogoGithub, IoMenu } from 'react-icons/io5'
import { usePathname } from 'next/navigation'

const availablePages = ['resume', 'research', 'about']

export const Navbar = () => {
  const pathname = usePathname()
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
      <div className='bg-main fixed top-0 left-0 hidden w-full items-center justify-between sm:flex'>
        <HeaderLinks
          isBurger={false}
          pathname={pathname}
          setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        />
        <Link
          href='https://github.com/0spotter0/sammypotter.com'
          rel='noopener noreferrer'
          target='_blank'
          className='px-10'
          aria-label="Visit source code for this site on GitHub"
        >
          <IoLogoGithub className='text-3xl' />
        </Link>
      </div>
      <div>
        <div className='flex w-full items-center justify-end p-5 sm:hidden'>
          <button
            aria-label='open menu'
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
              aria-label='close menu'
              onClick={() => {
                setIsBurgerMenuOpen(false)
              }}
              className='p-5'
            >
              <IoClose className='text-5xl' />
            </button>
          </div>
          <HeaderLinks
            isBurger={true}
            pathname={pathname}
            setIsBurgerMenuOpen={setIsBurgerMenuOpen}
          />
        </div>
      </div>
    </div>
  )
}

const HeaderLinks = ({
  pathname,
  isBurger,
  setIsBurgerMenuOpen,
}: {
  pathname: string
  isBurger: boolean
  setIsBurgerMenuOpen: React.Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div
      className={`flex w-full items-center p-[1.7rem] text-xl font-normal sm:justify-between ${isBurger && 'flex-col gap-20'}`}
    >
      <div className='flex w-fit flex-col gap-4 sm:flex-row'>
        {availablePages.map((page) => {
          const isActive = pathname.includes(page)
          return (
            <Link
              key={page}
              onClick={() => setIsBurgerMenuOpen(false)}
              href={`/${page}`}
              className={`flex w-32 items-center justify-center rounded-md px-4 py-2 text-center ${isActive && 'bg-stone-200 dark:bg-neutral-700'}`}
            >
              {page}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
