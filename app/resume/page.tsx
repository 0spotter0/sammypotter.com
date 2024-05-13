import Link from 'next/link'
import { IoDownload } from 'react-icons/io5'

export default function Resume() {
  return (
    <div className='mx-auto flex max-w-prose flex-col items-center gap-6 px-5 pb-20 sm:pt-10'>
      <a href='/Resume_SammyPotter_2024.pdf' download className='mb-2'>
        <div className='flex gap-2 rounded-lg bg-stone-200 px-4 py-2 dark:bg-neutral-700'>
          <IoDownload className='text-xl' />
          <p>Download PDF</p>
        </div>
      </a>

      <h1 className='mb-4 w-full font-mono text-3xl font-medium'>
        Sammy Potter
      </h1>
      <ResumeSection title={'Education'}>
        <ResumeExperienceItem
          title='University of Rochester'
          subtitle='Bachelor of Science, Computer Science'
          location='Rochester, NY'
          date='Anticipated 2025'
        >
          <li>Dean’s Scholarship (all semesters)</li>
          <li>Best Space Themed App – DandyHacks 2021</li>
        </ResumeExperienceItem>
        <ResumeExperienceItem
          title='Universidad Complutense de Madrid'
          subtitle='Institute for the International Education of Students Abroad'
          location='Madrid, Spain'
          date='Jan 2024 – June 2024'
        />
      </ResumeSection>
      <ResumeSection title={'Skills'}>
        <ul className='ml-8 list-disc font-normal'>
          <li>
            Unity, Blender3D, Unreal Engine 5, Adobe Creative Suite, Git, Vim
          </li>
          <li>
            NextJS, React, TypeScript, Python, C#, Java, Bash, HTML/CSS, Lua
          </li>
          <li>Spanish (Intermediate conversational)</li>
        </ul>
      </ResumeSection>
      <ResumeSection title={'Experience'}>
        <ResumeExperienceItem
          title='Saudi Authority for Data and Artificial Intelligence'
          subtitle='Remote Researcher'
          location='Remote'
          date='Nov 2023 – Present'
        >
          <li>
            Developed a specialized 3D avatar system utilizing Unreal Engine 5
            and Large Language Models to create a conversational Al education
            tool.
          </li>
          <li>
            Coordinated with a multinational team of developers to integrate the
            3D avatar into the application, coordinate provisioning of Microsoft
            Azure cloud resources, and deploy the application online.
          </li>
        </ResumeExperienceItem>
        <ResumeExperienceItem
          title='University of Rochester Human Computer Interaction Lab'
          subtitle='Research Assistant'
          location='Rochester, NY'
          date='June 2022 – Present'
        >
          <li>
            Developed and tested methods for synthetic data generation for
            training hand tracking machine learning models using the Unity Game
            Engine.
          </li>
          <li>
            Leveraged GPT-4 and Unreal Engine 5 to develop a virtual chatbot for
            teaching, job interview and conversation practice.
          </li>
          <li>
            Created an interactive full stack website for the chatbot using
            Flask on Amazon Web Services.
          </li>
          <li>
            Co-authored, published, and demoed a paper at ACII 2023 Conference
            <a
              href='https://arxiv.org/abs/2308.03022'
              className='text-link pl-[.5rem] underline'
              rel='noopener noreferrer'
              target='_blank'
            >
              (View on arXiv)
            </a>
          </li>
        </ResumeExperienceItem>
        <ResumeExperienceItem
          title='University of Rochester | CSC 171: Intro to CS with Java'
          subtitle='Peer-Led Team Learning Workshop Leader'
          location='Rochester, NY'
          date='Jan 2022 – June 2022'
        >
          <li>Led two 75-minute workshops of 12 students each per week.</li>
          <li>
            Facilitated students to engage with course material and with each
            other in an interactive learning environment.
          </li>
          <li>
            Produced a final research project aimed at improving the learning
            experience for Computer Science courses through virtual online
            exercises.
          </li>
        </ResumeExperienceItem>
      </ResumeSection>
      <ResumeSection title={'Projects'}>
        <ResumeExperienceItem
          title='Spotify Song Predictor'
          location='April 2023'
        >
          <li>
            Performed data cleaning and feature selection on data from 30,000
            songs over 15 attributes.
          </li>
          <li>
            Trained a Decision Tree Classifier and a Gradient-Boosted Tree
            Classifier in Python to classify songs as hits or flops based on
            song attributes.
          </li>
          <li>
            Developed a front-end to allow users to interact with and test our
            model’s performance.
          </li>
          <li>
            Prepared and delivered a presentation on our results, winning ‘best
            presentation of the day.
          </li>
        </ResumeExperienceItem>
        <ResumeExperienceItem
          title='SpaceScape | DandyHacks 2021'
          location='October 2021'
        >
          <li>
            In a 3-person team, developed a two-player 2D space shooter with a
            custom physics & collision engine in Lua.
          </li>
          <li>
            Developed a working knowledge of Lua during the 48-hour event.
          </li>
        </ResumeExperienceItem>
      </ResumeSection>
      <ResumeSection title={'Campus Leadership Activities'}>
        <ResumeExperienceItem
          title='Google Developer Student Club'
          subtitle='Tech Team Member, E-board'
          location='Rochester, NY'
          date='Sep 2022 – Jan 2023'
        >
          <li>
            Introduced prospective developers to software development through
            weekly general member meetings.
          </li>
          <li>
            Led a workshop teaching basic command-line skills to new CS
            students.
          </li>
        </ResumeExperienceItem>
      </ResumeSection>
    </div>
  )
}

const ResumeSection = (props: {
  title: string
  children?: React.ReactNode
}) => {
  return (
    <div className='w-full'>
      <h2 className='text-lg font-semibold'>{props.title}</h2>
      <hr className='mb-4 h-px border-0 bg-stone-200 last:hidden dark:bg-neutral-600' />
      <div className='flex flex-col gap-5'>{props.children}</div>
    </div>
  )
}

const ResumeExperienceItem = (props: {
  title: string
  subtitle?: string
  location: string
  date?: string
  children?: React.ReactNode
}) => {
  return (
    <div>
      <div className='mb-1 flex justify-between font-medium'>
        <h3>{props.title}</h3>
        <p className='hidden sm:block'>{props.location}</p>
      </div>
      <div className='text-secondary mb-1 mb-2 flex justify-between font-light'>
        <h3>{props.subtitle}</h3>
        <p className='hidden sm:block'>{props.date}</p>
      </div>
      <ul className='ml-8 list-disc font-light'>{props.children}</ul>
    </div>
  )
}
