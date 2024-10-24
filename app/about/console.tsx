import { useState } from 'react'

export function Console() {
  const [inputValue, setInputValue] = useState<string>(
`~ > fastfetch
                                  sammypotter@dhcp-00-0-000-00
                 ,xNMM.           ----------------------------
               .OMMMMo            OS: macOS Sequoia 15.0 arm64
               lMM"               Host: MacBook Air (M2, 2022)
     .;loddo:.  .olloddol;.       Kernel: Darwin 24.0.0
   cKMMMMMMMMMMNWMMMMMMMMMM0:     Uptime: 7 days, 8 hours, 46 mins
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.     Packages: 227 (brew), 62 (brew-cask)
 XMMMMMMMMMMMMMMMMMMMMMMMX.       Shell: zsh 5.9
;MMMMMMMMMMMMMMMMMMMMMMMM:        Display (Color LCD): 2940x1912 @ 60 Hz (as 1470x956) in 14″ ]
:MMMMMMMMMMMMMMMMMMMMMMMM:        DE: Aqua
.MMMMMMMMMMMMMMMMMMMMMMMMX.       WM: Quartz Compositor
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.     WM Theme: Multicolor (Dark)
 'XMMMMMMMMMMMMMMMMMMMMMMMMMMk    Font: .AppleSystemUIFont [System], Helvetica [User]
  'XMMMMMMMMMMMMMMMMMMMMMMMMK.    Cursor: Fill - Black, Outline - White (32px)
    kMMMMMMMMMMMMMMMMMMMMMMd      Terminal: iTerm 3.5.5
     ;KMMMMMMMWXXWMMMMMMMk.       Terminal Font: MesloLGS-NF-Regular (11.5pt)
       "cooc*"    "*coo'"         CPU: Apple M2 (8) @ 3.50 GHz
                                  GPU: Apple M2 (10) @ 1.40 GHz [Integrated]
                                  Memory: 17.17 GiB / 24.00 GiB (72%)
                                  Swap: 1.07 GiB / 2.00 GiB (54%)
                                  Disk (/): 432.09 GiB / 460.43 GiB (94%) - apfs [Read-only]
                                  Local IP (en0): 00.0.000.00/00
                                  Battery: 68% [AC connected, Charging]
                                  Power Adapter: 67W USB-C Power Adapter
                                  Locale: en_US.UTF-8
~ > ls -la
.
..
start.sh
weather.sh
Resume.txt
> █
`
  )
  const [isScanlinesEnabled, setIsScanlinesEnabled] = useState<boolean>(true)
  const [isGrainEnabled, setIsGrainEnabled] = useState<boolean>(false)

  enum ConsoleTheme {
    red,
    amber,
    green,
    blue,
    mono,
  }

  const colors: Record<ConsoleTheme, string> = {
    [ConsoleTheme.red]: 'bg-red-500',
    [ConsoleTheme.amber]: 'bg-orange-500',
    [ConsoleTheme.green]: 'bg-green-400',
    [ConsoleTheme.blue]: 'bg-sky-300',
    [ConsoleTheme.mono]: 'bg-neutral-300',
  }

  const [themeColor, setThemeColor] = useState(ConsoleTheme.green)

  return (
    <div className='relative -mt-24 h-svh w-full overflow-hidden bg-black'>
      <div
        className={`relative flex h-full w-full items-center justify-center overflow-hidden text-nowrap bg-black`}
        style={{ fontFamily: 'VCR OSD Mono' }}
      >
        <div
          className={`absolute inset-0 h-full w-full rounded-sm p-6 text-white opacity-60 blur-[4px]`}
        >
          <p className='whitespace-pre leading-5'>{inputValue}</p>
        </div>
        <div className={`absolute inset-0 p-6 text-white`}>
          <p className='whitespace-pre leading-5'>{inputValue}</p>
        </div>
      </div>
      {isScanlinesEnabled ? (
        <>
          <div className='crt pointer-events-none absolute left-0 top-0 h-full w-full opacity-[15%]' />
          <div
            className={`scanline pointer-events-none absolute left-0 w-full bg-gradient-to-b from-black to-white opacity-[5%] mix-blend-lighten`}
          />
        </>
      ) : (
        <div className='pointer-events-none absolute left-0 top-0 h-full w-full bg-white opacity-[12%]' />
      )}
      {isGrainEnabled && (
        <div className='grain pointer-events-none absolute left-0 top-0 h-full w-full opacity-[8%]' />
      )}
      <div
        className={`pointer-events-none absolute left-0 top-0 h-full w-full ${colors[themeColor]} mix-blend-multiply`}
      />
      <div className='vignette pointer-events-none absolute left-0 top-0 h-full w-full' />
      <div className='pointer-events-none absolute left-0 top-0 h-full w-full border-[12px] border-black ring-8 ring-black blur-[2px]' />
    </div>
  )
}
