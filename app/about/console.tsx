import { useEffect, useRef, useState } from 'react'
import { useStore } from '../global-state'
import { generateSystemInfo } from './neofetch'

export function Console() {
  const { isConsoleMode, updateConsoleMode } = useStore()

  const [consoleContents, setConsoleContents] = useState<string[]>([])
  const [isKeyDown, setIsKeyDown] = useState<boolean>(false)
  const [command, setCommand] = useState<string>('')
  const [currentDirectory, setCurrentDirectory] = useState<string>('~')
  const consoleContentContainerRef = useRef<HTMLDivElement>(null)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number>(-1)
  const [isAwaitingCommand, setIsAwaitingCommand] = useState<boolean>(false)

  type Directory = {
    name: string
    files: string[] | []
    dirs: Directory[] | []
  }

  const dirs: Directory = {
    name: '~',
    files: ['back.sh', 'weather', 'README'],
    dirs: [
      {
        name: 'folder1',
        files: ['file1', 'file2'],
        dirs: [{ name: 'subdir1', files: ['yo', 'zoe'], dirs: [] }],
      },
      {
        name: 'folder2',
        files: ['file3', 'file4'],
        dirs: [{ name: 'subdir2', files: ['hi', 'bye'], dirs: [] }],
      },
    ],
  }

  // prettier-ignore
  const readmeFile =
`
Commands:

color <red | amber | green | blue | mono>
Change the terminal color

scan <on | off>
Enable/disable scanlines

grain <on | off>
Enable/disable grain

chroma <on | off>
Enable/disable chromatic aberration

exit
Go back
`

  function generateTree(dir: Directory, prefix = '', topLabel = '') {
    let treeOutput = `${topLabel}\n`

    const totalItems = dir.files.length + dir.dirs.length

    dir.files.forEach((file: string, index: number) => {
      const isLastFile = index === totalItems - 1 && dir.dirs.length === 0
      treeOutput += `${prefix}${isLastFile ? '└── ' : '├── '}${file}\n`
    })

    dir.dirs.forEach((subdir: Directory, index: number) => {
      const isLastDir = index === dir.dirs.length - 1
      const newPrefix = prefix + (isLastDir ? '    ' : '│   ')
      treeOutput += `${prefix}${isLastDir ? '└── ' : '├── '}${subdir.name}`
      treeOutput += generateTree(subdir, newPrefix)
    })

    return treeOutput
  }

  const addConsoleContent = (newContent: string) => {
    setConsoleContents((prevContents) => [...prevContents, newContent])
  }

  const clearConsoleContents = () => {
    setConsoleContents([])
  }

  const addCommandHistory = (newCommand: string) => {
    if (
      newCommand === '' ||
      newCommand === commandHistory[commandHistory.length - 1]
    ) {
      return
    }
    setCommandHistory((prevCommands) => [...prevCommands, newCommand])
  }

  const [isScanlinesEnabled, setIsScanlinesEnabled] = useState<boolean>(false)
  const [isGrainEnabled, setIsGrainEnabled] = useState<boolean>(false)
  const [isChromaticAberrationEnabled, setIsChromaticAberrationEnabled] =
    useState<boolean>(true)

  enum ConsoleTheme {
    red,
    amber,
    green,
    blue,
    mono,
  }

  function getTheme(theme: string): ConsoleTheme | undefined {
    return ConsoleTheme[theme as keyof typeof ConsoleTheme]
  }

  const colors: Record<ConsoleTheme, string> = {
    [ConsoleTheme.red]: 'bg-red-500',
    [ConsoleTheme.amber]: 'bg-orange-500',
    [ConsoleTheme.green]: 'bg-green-400',
    [ConsoleTheme.blue]: 'bg-sky-300',
    [ConsoleTheme.mono]: 'bg-neutral-300',
  }

  const [themeColor, setThemeColor] = useState(ConsoleTheme.green)

  function processCommand(command: string) {
    const args = command.split(/\s+/).filter((arg) => arg !== '')
    if (args.length === 0) {
      addConsoleContent('')
      return
    }
    addCommandHistory(command)
    addConsoleContent(`${currentDirectory} > ${command}`)
    switch (args[0]) {
      case 'clear':
        clearConsoleContents()
        break
      case 'ls':
        let output = '.\n..'
        dirs.files.forEach((file) => {
          output += `\n${file}`
        })
        dirs.dirs.forEach((subdir) => {
          output += `\n${subdir.name}/`
        })
        addConsoleContent(output)
        break
      case 'exit':
      case './back.sh':
        updateConsoleMode(false)
        break
      case 'cat':
        if (args[1] == 'README') {
          addConsoleContent(readmeFile)
        } else
          addConsoleContent(
            `cat: ${args[1] ? args[1] + ': ' : ''}No such file or directory`
          )
        break
      case 'scan':
        switch (args[1]) {
          case 'on':
            setIsScanlinesEnabled(true)
            break
          case 'off':
            setIsScanlinesEnabled(false)
            break
          default:
            addConsoleContent('Error: invalid argument')
        }
        break
      case 'chroma':
        switch (args[1]) {
          case 'on':
            setIsChromaticAberrationEnabled(true)
            break
          case 'off':
            setIsChromaticAberrationEnabled(false)
            break
          default:
            addConsoleContent('Error: invalid argument')
        }
        break
      case 'vim':
        addConsoleContent('too hard :(')
        break
      case 'neofetch':
        setIsAwaitingCommand(true)
        generateSystemInfo().then((result) => {
          addConsoleContent(result)
          setIsAwaitingCommand(false)
        })
        break
      case 'grain':
        switch (args[1]) {
          case 'on':
            setIsGrainEnabled(true)
            break
          case 'off':
            setIsGrainEnabled(false)
            break
          default:
            addConsoleContent('Error: invalid argument')
        }
        break
      case 'color':
        let theme = getTheme(args[1])
        if (theme === undefined) {
          addConsoleContent('Error: invalid argument')
          break
        }
        setThemeColor(theme)
        break
      case 'tree':
        addConsoleContent(generateTree(dirs, '', '.'))
        break
      case 'whoami':
        setIsAwaitingCommand(true)
        fetch('https://ipwhois.app/json/', {
          cache: 'no-store',
        })
          .then((response) => response.json())
          .then((data) =>
            addConsoleContent(`${data.ip} (${data.region}, ${data.country})`)
          )
          .catch(() => addConsoleContent('Network error'))
          .finally(() => {
            setIsAwaitingCommand(false)
          })
        break
      case 'sleep':
        let seconds = Number(args[1])
        if (!seconds && seconds !== 0) {
          addConsoleContent('Error: invalid argument')
          break
        }
        setIsAwaitingCommand(true)
        setTimeout(() => {
          addConsoleContent('')
          setIsAwaitingCommand(false)
        }, seconds * 1000)
        break
      default:
        addConsoleContent(`command not found: ${command}`)
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (isAwaitingCommand) {
      return
    }
    setIsKeyDown(true)
    const key = e.key
    switch (key) {
      case 'Backspace':
        setCommand(command.length === 0 ? '' : command.slice(0, -1))
        setHistoryIndex(-1)
        break
      case 'Enter':
        processCommand(command)
        setCommand('')
        setHistoryIndex(-1)
        break
      case ' ':
        setCommand(command + ' ')
        setHistoryIndex(-1)
        break
      case 'ArrowUp':
        const newHistoryIndexUp = historyIndex + 1
        if (newHistoryIndexUp > commandHistory.length - 1) {
          break
        }
        setHistoryIndex(newHistoryIndexUp)
        setCommand(
          commandHistory[commandHistory.length - 1 - newHistoryIndexUp]
        )
        break
      case 'ArrowDown':
        const newHistoryIndexDown = historyIndex - 1
        if (newHistoryIndexDown < 0) {
          if (command !== '') {
            setCommand('')
            setHistoryIndex(-1)
          }
          break
        }
        setHistoryIndex(newHistoryIndexDown)
        setCommand(
          commandHistory[commandHistory.length - 1 - newHistoryIndexDown]
        )
        break
      default:
        if (key.length !== 1) {
          return
        }
        setHistoryIndex(-1)
        setCommand(command + key)
    }
  }

  useEffect(() => {
    if (consoleContentContainerRef?.current) {
      consoleContentContainerRef.current!.scrollTop =
        consoleContentContainerRef.current!.scrollHeight
    }
  }, [consoleContents, command])

  function handleKeyup() {
    if (isAwaitingCommand) {
      return
    }

    setIsKeyDown(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('keyup', handleKeyup)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('keyup', handleKeyup)
    }
  })

  return (
    <div className='relative h-svh w-full overflow-hidden bg-black sm:-mt-24'>
      <div
        ref={consoleContentContainerRef}
        className={`relative flex h-[calc(100%-1rem)] w-full select-none items-center justify-center overflow-y-scroll text-nowrap bg-black font-mono scrollbar scrollbar-track-transparent scrollbar-thumb-transparent`}
        style={{ fontFamily: '' }}
      >
        <div
          className={`absolute inset-0 h-full w-full rounded-sm p-6 text-white opacity-60 blur-[4px]`}
        >
          <ConsoleContent
            consoleContents={consoleContents}
            currentDirectory={currentDirectory}
            command={command}
            isKeyDown={isKeyDown}
            isAwaitingCommand={isAwaitingCommand}
          />
        </div>
        <div
          className={`${isChromaticAberrationEnabled ? 'chromatic-aberration' : ''} absolute inset-0 p-6 text-white`}
        >
          <ConsoleContent
            consoleContents={consoleContents}
            currentDirectory={currentDirectory}
            command={command}
            isKeyDown={isKeyDown}
            isAwaitingCommand={isAwaitingCommand}
          />
        </div>
      </div>
      {isGrainEnabled && (
        <div className='pointer-events-none absolute left-0 top-0 h-full w-full bg-[url("/noise.gif")] bg-[length:400px] opacity-[5%]' />
      )}
      <div className='pointer-events-none absolute left-0 top-0 h-full w-full bg-white opacity-[12%]' />
      {isScanlinesEnabled && (
        <>
          <div className='image-pixelated pointer-events-none absolute left-0 top-0 h-full w-full bg-[url("/stripe-overlay.png")] bg-[length:128px_250px] opacity-50 mix-blend-multiply' />
          <div
            className={`scanline pointer-events-none absolute left-0 w-full bg-gradient-to-b from-black to-white opacity-[5%] mix-blend-lighten`}
          />
        </>
      )}
      <div
        className={`pointer-events-none absolute left-0 top-0 h-full w-full transition-colors duration-500 ${colors[themeColor]} mix-blend-multiply`}
      />
      <div className='vignette pointer-events-none absolute left-0 top-0 h-full w-full' />
      <div className='pointer-events-none absolute left-0 top-0 h-full w-full border-[12px] border-black ring-8 ring-black blur-[2px]' />
      <FilterProvider />
    </div>
  )
}

const FilterProvider = () => {
  return (
    <svg width='0' height='0'>
      <filter id='chromaticAberration'>
        <feColorMatrix
          type='matrix'
          result='red_'
          values='4 0 0 0 0
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 1 0'
        />
        <feOffset in='red_' dx='.7' dy='0' result='red' />
        <feColorMatrix
          type='matrix'
          in='SourceGraphic'
          result='blue_'
          values='0 0 0 0 0
              0 3 0 0 0
              0 0 10 0 0
              0 0 0 1 0'
        />
        <feOffset in='blue_' dx='-.7' dy='0' result='blue' />
        <feBlend mode='screen' in='red' in2='blue' />
      </filter>
    </svg>
  )
}

interface ConsoleContentProps {
  consoleContents: string[]
  currentDirectory: string
  command: string
  isKeyDown: boolean
  isAwaitingCommand: boolean
}

const ConsoleContent = ({
  consoleContents,
  currentDirectory,
  command,
  isKeyDown,
  isAwaitingCommand,
}: ConsoleContentProps) => (
  <>
    {consoleContents.map((content: string, index: number) => (
      <p key={index} className='whitespace-pre text-wrap leading-5'>
        {content}
      </p>
    ))}
    {isAwaitingCommand ? (
      <div className={`h-[2ch] w-[1ch] bg-white`} />
    ) : (
      <div className='flex items-center leading-5'>
        <p className='mr-[1ch]'>{`${currentDirectory} >`}</p>
        <p className='whitespace-pre'>{command}</p>
        <div
          className={`h-[2ch] w-[1ch] ${isKeyDown ? '' : 'animate-blink'} bg-white`}
        />
      </div>
    )}
  </>
)
