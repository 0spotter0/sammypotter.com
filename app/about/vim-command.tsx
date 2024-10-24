'use client'

import { useEffect, useRef, useState } from 'react'
import { useStore } from '../global-state'

export function VimCommand() {
  const [isCommandUp, setIsCommandUp] = useState<boolean>(false)
  const [vimCommand, setVimCommand] = useState<string>('')
  const [isBackspaceKeyDown, setIsBackspaceKeyDown] = useState<boolean>(false)

  const commandRef = useRef<HTMLButtonElement>(null)

  const { isConsoleMode, updateConsoleMode } = useStore()

  function processVimCommand(command: string) {
    if (isConsoleMode) {
      return
    }
    console.log(`Processing command: ${command}`)
    switch (command) {
      case 'q':
        updateConsoleMode(true)
        break
    }
  }

  function isAlpha(char: string) {
    return /^[A-Za-z]$/.test(char)
  }

  function handleKeydown(e: KeyboardEvent) {
    if (isConsoleMode) {
      return
    }

    const key = e.key
    switch (key) {
      case 'Backspace':
        setVimCommand(vimCommand.length === 0 ? '' : vimCommand.slice(0, -1))
        setIsBackspaceKeyDown(true)
        break
      case 'Escape':
        if (vimCommand.length === 0) {
          setIsCommandUp(false)
          return
        }
        setVimCommand('')
        break
      case 'Enter':
        if (!isCommandUp) {
          return
        }
        processVimCommand(vimCommand)
        setVimCommand('')
        setIsCommandUp(false)
        break
      case ':':
        if (isCommandUp) {
          setVimCommand(vimCommand + key)
          return
        }
        commandRef.current!.focus()
        setIsCommandUp(true)
        setVimCommand('')
        break
      case ' ':
        setVimCommand(vimCommand + ' ')
        break
      default:
        if (key.length !== 1 || !isAlpha(key)) {
          return
        }
        if (isCommandUp) {
          setVimCommand(vimCommand + key)
        }
    }
  }

  function handleKeyup(e: KeyboardEvent) {
    if (isConsoleMode) {
      return
    }

    const key = e.key
    if (key !== 'Backspace') {
      return
    }
    setIsBackspaceKeyDown(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('keyup', handleKeyup)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('keyup', handleKeyup)
    }
  })

  if (isConsoleMode) {
    return <></>
  }

  return (
    <>
      <button ref={commandRef} className='invisible' />
      <div
        className={`sticky bottom-0 flex h-10 w-full items-center px-2 font-mono sm:absolute ${isCommandUp ? 'bg-main' : ''}`}
      >
        {isCommandUp && (
          <>
            <p className='mr-px w-[1ch] align-middle text-sm'>:</p>
            <p className='whitespace-pre'>{vimCommand}</p>
            <div
              className={`h-[2ch] w-[1ch] ${isBackspaceKeyDown ? '' : 'animate-blink'} bg-gray-400 dark:bg-gray-500`}
            />
          </>
        )}
      </div>
    </>
  )
}
