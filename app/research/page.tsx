import Link from 'next/link'
import { IoLinkOutline } from 'react-icons/io5'

export default function Research() {
  const articles: Article[] = [
    {
      title: 'Hi5: 2D Hand Pose Estimation with Zero Human Annotation',
      authors:
        'Masum Hasan, Cengiz Ozel, Nina Long, Alexander Martin, Sammy Potter, Tariq Adnan, Sangwu Lee, Amir Zadeh, Ehsan Hoque',
      conference: '2024 Conference on Neural Information Processing Systems',
      doi: 'doi: 10.48550/arXiv.2406.03599',
      link: 'https://arxiv.org/abs/2406.03599',
      date: '5 June 2024',
    },
    {
      title:
        'SAPIEN: Affective Virtual Agents Powered by Large Language Models',
      authors: 'Masum Hasan, Cengiz Ozel, Sammy Potter, and Ehsan Hoque',
      conference:
        '2023 11th International Conference on Affective Computing and Intelligent Interaction Workshops and Demos (ACIIW)',
      doi: 'doi: 10.1109/ACIIW59127.2023.10388188',
      link: 'https://ieeexplore.ieee.org/document/10388188',
      date: '6 Aug 2023',
    },
  ]

  return (
    <div className='mx-auto w-fit px-5 pb-20 pt-10 sm:pt-16'>
      <div className='flex w-full flex-col gap-14'>
        {articles.map((article) => (
          <ResearchArticle key={article.doi} article={article} />
        ))}
      </div>
    </div>
  )
}

type Article = {
  title: string
  authors: string
  conference: string
  doi: string
  link: string
  date: string
}

const ResearchArticle = (props: { article: Article }) => {
  return (
    <div className='max-w-[75ch]'>
      <h2 className='text-primary pb-4 text-xl font-bold leading-5 dark:font-medium'>
        {props.article.title}
      </h2>
      <p className='text-secondary pb-2 text-lg leading-5'>
        {props.article.authors}
      </p>
      <p className='text-tertiary text-md pb-3 font-light leading-5'>
        {props.article.conference}
      </p>
      <div className='text-secondary flex items-center gap-4'>
        <p className='text-md font-mono'>{props.article.date}</p>
        <p>|</p>
        <Link
          className='text-md flex w-fit items-center gap-2 font-mono underline'
          href={props.article.link}
          rel='noopener noreferrer'
          target='_blank'
        >
          <p>View paper</p>
          <IoLinkOutline className='text-xl' />
        </Link>
      </div>
    </div>
  )
}
