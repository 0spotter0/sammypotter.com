export const Research = () => {
  const articles: Article[] = [
    {
      title: 'Hi5 : 2D Hand Pose Estimation with Zero Human Annotation',
      authors:
        'Cengiz Ozel, Alexander Martin, Sammy Potter, Nina Long, Sangwu Lee, Tariq Adnan, Amir Zadeh, Ehsan Hoque',
      conference: '2024 Conference on Neural Information Processing Systems',
      doi: 'doi: 10.1109/ACIIW59127.2023.10388188',
      date: '1 May 2024',
    },
    {
      title:
        'SAPIEN: Affective Virtual Agents Powered by Large Language Models',
      authors: 'Masum Hasan, Cengiz Ozel, Sammy Potter, and Ehsan Hoque',
      conference:
        '2023 11th International Conference on Affective Computing and Intelligent Interaction Workshops and Demos (ACIIW)',
      doi: 'doi: 10.1109/ACIIW59127.2023.10388188',
      date: '6 Aug 2023',
    },
  ]

  return (
    <div className='mx-auto w-fit pt-16'>
      <div className='flex w-full flex-col gap-14'>
        {articles.map((article) => (
          <ResearchArticle article={article} />
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
  date: string
}

const ResearchArticle = (props: { article: Article }) => {
  return (
    <div className='max-w-[100ch]'>
      <div className='flex justify-between pb-2'>
        <div className='max-w-[60ch]'>
          <h1 className='pb-2 text-xl font-bold'>{props.article.title}</h1>
          <p className='text-lg'>{props.article.authors}</p>
        </div>
        <p>{props.article.date}</p>
      </div>
      <p className='pb-2 italic text-neutral-500'>{props.article.conference}</p>
      <a className='pb-2 text-blue-600 underline' href={props.article.doi}>
        {props.article.doi}
      </a>
    </div>
  )
}
