'use server'

import { Header } from '../Header'
import { About } from './about'
import { Blog } from './blog'
import { Research } from './research'
import { Resume } from './resume'

type MainProps = {
  params: {
    pageSlug: string
  }
}

export default async function Main(props: MainProps) {
  function getPageComponent(name: string) {
    switch (name) {
      case 'resume':
        return <Resume />
      case 'blog':
        return <Blog />
      case 'research':
        return <Research />
      case 'about':
        return <About />
      default:
        return <></>
    }
  }

  return (
    <div className='w-svh h-svh'>
      <Header currentPage={props.params.pageSlug} />
      <div className='h-full w-full overflow-hidden overflow-y-auto px-5 pb-32 sm:px-20 sm:py-10'>
        {getPageComponent(props.params.pageSlug)}
      </div>
    </div>
  )
}
