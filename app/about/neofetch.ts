interface SystemInfo {
  os: string
  browser: string
  screenResolution: string
  colorScheme: string
  locale: string
  deviceType: string
  ipAddress: string
  location: string
  time: string
}

function horizontalStack(left: string, right: string): string {
  const leftSplit = left.split('\n')
  const rightSplit = right.split('\n')
  var output = ''
  let maxWidthLeft = Math.max(...leftSplit.map((line) => line.length))
  for (var i = 0; i < Math.max(leftSplit.length, rightSplit.length); i++) {
    output += leftSplit[i] ?? ''
    output += ' '.repeat(maxWidthLeft - (leftSplit[i]?.length ?? 0))
    output += '  '
    output += rightSplit[i] ?? ''
    output += '\n'
  }

  return output
}

export async function generateSystemInfo(): Promise<string> {
  let ipAddress = 'Unavailable'
  let location = 'Unavailable'

  try {
    const connectionDataResponse = await fetch('https://ipwhois.app/json/', {
      cache: 'no-store',
    })

    const connectionData = await connectionDataResponse.json()

    ipAddress = connectionData.ip
    location = `${connectionData.region}, ${connectionData.country}`
  } catch (e) {}

  const info: SystemInfo = {
    os: detectOS(),
    browser: detectBrowser(),
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    colorScheme: window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'Dark Mode'
      : 'Light Mode',
    locale: navigator.language,
    deviceType: detectDeviceType(),
    ipAddress: ipAddress,
    location: location,
    time: new Date().toLocaleTimeString('en-us', {
      hour12: false,
      timeZoneName: 'short',
    }),
  }

  // prettier-ignore
  const macos =
`
        .:'
     _ :'_
 .'\`_\`-'_\`\`.
:________.-'
:_______:
:_______:
 :_______\`-;
  \`._.-._.'
`

  // prettier-ignore
  const windows =
`
llllll  llllll
llllll  llllll
llllll  llllll

llllll  llllll
llllll  llllll
llllll  llllll
`

  // prettier-ignore
  const linux =
`
    .---.
   /     \\
   \\.@-@./
   /\`\\_/\`\\
  //  _  \\\\
 | \\     )|_
/\`\\_\`>  <_/ \\
\\__/'---'\\__/
`

  const infoString = `System info:
––––––––––––
OS: ${info.os}
Browser: ${info.browser} (${info.colorScheme})
Resolution: ${info.screenResolution}
Device: ${info.deviceType}
Locale: ${info.locale}
IP Address: ${info.ipAddress}
Location: ${info.location}
Time: ${info.time}`

  return horizontalStack(macos, infoString)
}

function detectOS(): string {
  const userAgent = navigator.userAgent.toLowerCase()
  if (userAgent.includes('win')) return 'Windows'
  if (userAgent.includes('mac')) return 'macOS'
  if (userAgent.includes('linux')) return 'Linux'
  return 'Unknown'
}

function detectBrowser(): string {
  const userAgent = navigator.userAgent.toLowerCase()
  if (userAgent.includes('firefox')) return 'Firefox'
  if (userAgent.includes('chrome')) return 'Chrome'
  if (userAgent.includes('safari')) return 'Safari'
  return 'Unknown'
}

function detectDeviceType(): string {
  return /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
}
