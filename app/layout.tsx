import type { Metadata } from 'next'
import { Navbar } from './components/Navbar'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  title: 'Sammy Potter',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className='text-primary bg-main overflow-hidden overflow-y-auto font-sans filter-none'>
        <Navbar />
        <div className='sm:mt-24'>{children}</div>
      </body>
    </html>
  )
}
