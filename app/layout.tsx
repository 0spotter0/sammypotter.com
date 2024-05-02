import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Navbar } from './components/Navbar'
import './globals.css'
import { cookies } from 'next/headers'

const futura = localFont({
  src: [
    {
      path: './fonts/FUTURA45LIGHT.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/FUTURA46LIGHTITALIC.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/FUTURA55REGULAR.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/FUTURA56ITALIC.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/FUTURA65MEDIUM.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/FUTURA66MEDIUMITALIC.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/FUTURA75BOLD.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/FUTURA76BOLDITALIC.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

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

  return (
    <html lang='en'>
      <body
        className={`${futura.className} ${theme === 'dark' && 'dark'} text-primary bg-main ease overflow-hidden overflow-y-auto transition-colors duration-200 ease-in-out`}
      >
        <Navbar />
        <div className='mt-10 sm:mt-28'>{children}</div>
      </body>
    </html>
  )
}
