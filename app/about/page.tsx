'use client'

import { useStore } from '../global-state'
import { AboutContent } from './about-content'
import { VimCommand } from './vim-command'
import { Console } from './console'

export default function About() {
  const { isConsoleMode } = useStore()

  return (
    <>
      {!isConsoleMode && (
        <div className='relative h-[calc(100vh-5.5rem)] w-full sm:h-[calc(100vh-6.0rem)]'>
          <AboutContent />
          <VimCommand />
        </div>
      )}
      {isConsoleMode && <Console />}
    </>
  )
}
