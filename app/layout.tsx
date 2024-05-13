import type { Metadata } from 'next'
import { Navbar } from './components/Navbar'
import { cookies } from 'next/headers'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  title: 'Sammy Potter',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = cookies()
  const theme: string = cookieStore.get('theme')?.value ?? ''
  const themeIsDark: boolean = theme === 'dark'

  return (
    <html lang='en'>
      <body
        className={
          `${GeistSans.variable} ${GeistMono.variable} ${themeIsDark && 'dark'}` +
          ' ' +
          'text-primary bg-main overflow-hidden overflow-y-auto font-sans filter-none transition-colors duration-200'
        }
      >
        <Navbar />
        <div className='sm:mt-24'>{children}</div>
      </body>
    </html>
  )
}
