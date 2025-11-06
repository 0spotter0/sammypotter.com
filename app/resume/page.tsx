import { IoDownload } from 'react-icons/io5'
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

export default function Resume() {
  const filePath = path.join(process.cwd(), 'resume-data.yaml')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const resumeData = yaml.load(fileContents) as ResumeData

  return (
    <div className='mx-auto flex max-w-prose flex-col items-center gap-6 px-5 pb-20 sm:pt-10'>
      <a href='/resume/download' download className='mb-2'>
        <div className='flex gap-2 rounded-lg bg-stone-200 px-4 py-2 dark:bg-neutral-700'>
          <IoDownload className='text-xl' />
          <p>Download PDF</p>
        </div>
      </a>

      <h1 className='mb-4 w-full font-mono text-3xl font-medium'>
        {resumeData.personal.name}
      </h1>

      <ResumeSection title={'Education'}>
        {resumeData.education.map((edu, index) => (
          <ResumeExperienceItem
            key={index}
            title={edu.name}
            subtitle={edu.degree}
            location={edu.location}
            date={edu.date}
          >
            {edu.awards?.map((award, awardIndex) => (
              <li key={awardIndex}>{award}</li>
            ))}
          </ResumeExperienceItem>
        ))}
      </ResumeSection>

      <ResumeSection title={'Publications'}>
        {resumeData.publications.map((pub, index) => (
          <div key={index} className='pl-4 font-light'>
            <p dangerouslySetInnerHTML={{ __html: pub.citation }} />
          </div>
        ))}
      </ResumeSection>

      <ResumeSection title={'Experience'}>
        {resumeData.experience.map((exp, index) => (
          <ResumeExperienceItem
            key={index}
            title={exp.role}
            subtitle={exp.name}
            location={exp.location}
            date={exp.date}
          >
            {exp.points.map((point, pointIndex) => (
              <li key={pointIndex}>{point}</li>
            ))}
          </ResumeExperienceItem>
        ))}
      </ResumeSection>

      <ResumeSection title={'Projects'}>
        {resumeData.projects.map((project, index) => (
          <ResumeExperienceItem
            key={index}
            title={project.name}
            location={project.date}
          >
            {project.points.map((point, pointIndex) => (
              <li key={pointIndex}>{point}</li>
            ))}
          </ResumeExperienceItem>
        ))}
      </ResumeSection>

      <ResumeSection title={'Technical Skills'}>
        <ul className='ml-8 list-disc font-normal'>
          {resumeData.skills.map((skillGroup, index) => (
            <li key={index}>
              <b>{skillGroup.category}:</b> {skillGroup.skills}
            </li>
          ))}
        </ul>
      </ResumeSection>
    </div>
  )
}

const ResumeSection = ({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) => {
  return (
    <div className='w-full'>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <hr className='mb-4 h-px border-0 bg-stone-200 last:hidden dark:bg-neutral-600' />
      <div className='flex flex-col gap-5'>{children}</div>
    </div>
  )
}

const ResumeExperienceItem = ({
  title,
  subtitle,
  location,
  date,
  children,
}: {
  title: string
  subtitle?: string
  location: string
  date?: string
  children?: React.ReactNode
}) => {
  return (
    <div>
      <div className='mb-1 flex justify-between font-medium'>
        <h3>{title}</h3>
        <p className='hidden sm:block'>{location}</p>
      </div>
      {subtitle && (
        <div className='text-secondary mb-1 mb-2 flex justify-between font-light'>
          <h3>{subtitle}</h3>
          <p className='hidden sm:block'>{date}</p>
        </div>
      )}
      <ul className='ml-8 list-disc font-light'>{children}</ul>
    </div>
  )
}

// Type definitions
interface ResumeData {
  personal: {
    name: string
    phone: string
    email: string
    linkedin: string
    site: string
  }
  education: Array<{
    name: string
    degree: string
    location: string
    date: string
    courses?: string
    awards?: string[]
  }>
  publications: Array<{
    citation: string
  }>
  experience: Array<{
    role: string
    name: string
    location: string
    date: string
    points: string[]
  }>
  projects: Array<{
    name: string
    skills: string
    date: string
    points: string[]
  }>
  skills: Array<{
    category: string
    skills: string
  }>
}
