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
          <li>
            (Nominated) Computing Research Association Outstanding Undergraduate
            Researcher Award
          </li>
          <li>Best Space Themed App – DandyHacks 2021</li>
          <li>Dean’s Scholarship (all semesters)</li>
        </ResumeExperienceItem>
        <ResumeExperienceItem
          title='Universidad Complutense de Madrid'
          subtitle='Institute for the International Education of Students Abroad'
          location='Madrid, Spain'
          date='Jan 2024 – Jun 2024'
        />
      </ResumeSection>
      <ResumeSection title={'Publications'}>
        <div className='pl-4 font-light'>
          <p>
            M. Hasan, C. Ozel, <b>S. Potter</b> and E. Hoque, "SAPIEN: Affective
            Virtual Agents Powered by Large Language Models," in <i>2023 11th
            International Conference on Affective Computing and Intelligent
            Interaction Workshops and Demos (ACIIW)</i>, Cambridge, MA, USA, 2023
            pp. 1‐3.
          </p>
        </div>
      </ResumeSection>
      <ResumeSection title={'Experience'}>
        <ResumeExperienceItem
          title='Researcher | AI Engineer'
          subtitle='Saudi Authority for Data and Artificial Intelligence'
          location='Remote'
          date='Nov 2023 – Sep 2024'
        >
          <li>
            Co‐developed KALEEM: a humanoid tutor that is personalized,
            adaptive, multimodal and available anytime, anywhere.
          </li>
          <li>
            The system was premiered at the Global AI Summit 2024 organized by
            the Kingdom of Saudi Arabia.
          </li>
          <li>NDA – No further information available.</li>
        </ResumeExperienceItem>
        <ResumeExperienceItem
          title='Research Assistant'
          subtitle='University of Rochester Human Computer Interaction Lab'
          location='Rochester, NY'
          date='Jun 2022 – Present'
        >
          <li>
            Developed and tested methods for synthetic data generation for hand
            tracking machine learning models using Unity.
          </li>
          <li>
            Leveraged GPT‐4 and Unreal Engine 5 to develop a virtual chatbot for
            teaching, job interview and conversation practice.
          </li>
          <li>
            Created an interactive full stack website for the chatbot using
            Flask on Amazon Web Services.
          </li>
        </ResumeExperienceItem>
        <ResumeExperienceItem
          title='Teaching Assistant'
          subtitle='University of Rochester | CSC 171: Intro to CS with Java'
          location='Rochester, NY'
          date='Jan 2022 – Jun 2022'
        >
          <li>Led two 75-minute workshops of 12 students each per week.</li>
          <li>
            Facilitated students to engage with course material and with each
            other in an interactive learning environment.
          </li>
          <li>
            Produced a final research project aimed at improving the CS learning
            experience through virtual online exercises.
          </li>
        </ResumeExperienceItem>
      </ResumeSection>
      <ResumeSection title={'Projects'}>
        <ResumeExperienceItem title='ThankYouEpicDB' location='Present'>
          <li>
            Designed and implemented an index of 8,000+ images and videos for a
            ‘meme’ library, enabling semantic search.
          </li>
          <li>
            Integrated AI‐based content analysis, storing results in an SQL
            database to enable seamless search and retrieval.
          </li>
          <li>
            Developed front end website for querying the database using Next.js
            and ElasticSearch.
          </li>
        </ResumeExperienceItem>
        <ResumeExperienceItem
          title='Salendar: DandyHacks 2023'
          location='Nov 2023'
        >
          <li>
            Developed a full‐stack application with Next.js and Flask enabling
            automatic course schedule calendar setup.
          </li>
          <li>
            Utilized the Google Cloud and OpenAI API to streamline syllabus
            parsing and Google calender generation.
          </li>
        </ResumeExperienceItem>
        <ResumeExperienceItem
          title='Spotify Song Predictor: CSC 240: Data Mining'
          location='Apr 2023'
        >
          <li>
            Performed data cleaning and feature selection on data from 30,000
            songs over 15 attributes.
          </li>
          <li>
            Trained a Decision Tree Classifier and a Gradient‐Boosted Tree
            Classifier in Python to classify songs as hits or flops.
          </li>
          <li>
            Developed a front‐end to allow users to interact with and test our
            model’s performance.
          </li>
          <li>
            Prepared and delivered a presentation on our results, winning ‘best
            presentation of the day.’
          </li>
        </ResumeExperienceItem>
      </ResumeSection>
      <ResumeSection title={'Technical Skills'}>
        <ul className='ml-8 list-disc font-normal'>
          <li>
            <b>Languages:</b> Java, Python, C, C#, SQL (Postgres), TypeScript,
            HTML/CSS, Swift
          </li>
          <li>
            <b>Frameworks</b> React, Node.js, Next.js, Flask, Tailwind, SwiftUI
          </li>
          <li>
            <b>Tools:</b> Git, AWS, Google Cloud Platform, Neovim, Adobe
            Creative Suite, Unity, Unreal Engine 5, ElasticSearch
          </li>
        </ul>
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
