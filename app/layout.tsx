import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Navbar } from './components/Navbar'
import './globals.css'

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
  return (
    <html lang='en'>
      <body
        className={`${futura.className} text-dark overflow-hidden bg-stone-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
