/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import Sharpen from '@/images/logos/sharpen.jpg'
import QueensCollegeLogo from '@/images/logos/queens-college-logo.png'
import htmlLogo from '@/images/logos/html.png'
import CssLogo from '@/images/logos/css.webp'
import javascriptLogo from '@/images/logos/javascript.webp'
import reactLogo from '@/images/logos/react.png'
import nextLogo from '@/images/logos/next.png'
import javaLogo from '@/images/logos/java.png'
import cLogo from '@/images/logos/c++.png'
import tailwindLogo from '@/images/logos/tailwind.png'
import visualStudioCodeLogo from '@/images/logos/visualstudiocode.png'
import gitLogo from '@/images/logos/git.png'
import ComputerImage from '@/images/photos/computer.jpg'
import CollegeImage from '@/images/photos/queens-college.jpg'
import NewYorkImage from '@/images/photos/new-york.jpg'
import CodeImage from '@/images/photos/code.jpg'
import TechImage from '@/images/photos/tech.jpg'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

import DownloadResume from '@/components/DownloadResume'

const projects = [
  {
    id: 2,
    heading: 'Highlight Project',
    title: 'GameHub',
    description: `React-based web application that utilizes Chakra UI for styling and the RAWG.io API to provide detailed information about video games. GameHub offers a sleek and intuitive interface for browsing through a vast array of game data.`,
    link: 'https://game-hub-three-iota.vercel.app/',
  },
  {
    id: 2,
    heading: 'Highlight Project',
    title: 'Full Stack Real Estate Marketplace',
    description: `React.js-based web application that enables users to log in and post real estate properties for sale or rent. 
    With the ability to upload pictures of the property and display its location on a map using the address, 
    this app offers a seamless and user-friendly experience for buyers and sellers.`,
    link: `https://real-estate-marketplace-jyazdan.vercel.app/`,
  },
  {
    id: 3,
    heading: 'Highlight Project',
    title: 'Full Stack Instagram Clone',
    description: `Next.js-based social media application built with Tailwind CSS, Firebase v9, and NextAuth for authentication. This clone of the popular social media network, Instagram, offers a familiar and feature-rich user experience, complete with posting, liking, and commenting functionality.`,
    link: `https://instagram-clone-jyazdan.vercel.app/auth/signin?callbackUrl=https%3A%2F%2Finstagram-clone-jyazdan.vercel.app%2F`,
  },
  {
    id: 3,
    heading: 'Highlight Project',
    title: 'Github Finder',
    description: `React-based Github User Search app that enables quick and efficient search for Github users and displays comprehensive profile information, including social links, profile stats, and repository data.`,
    link: `https://github-finder-jyazdan.vercel.app/`,
  },
]

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
</svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Project({ project }) {
  return (
    <Card as="project">
      <Card.Title href={`${project.link}`}>{project.title}</Card.Title>
      <Card.Eyebrow decorate>{project.heading}</Card.Eyebrow>
      <Card.Description>{project.description}</Card.Description>
      <Card.Cta>View Project</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'SharpenCX',
      title: 'Software Engineer II',
      logo: Sharpen,
      start: '2022',
      end: '2023',
    },
    {
      company: 'Queens College - City University of New York',
      title: 'Bachlors of Arts, Computer Science',
      logo: QueensCollegeLogo,
      start: '2016',
      end: '2021',
      minor: 'Math',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work & Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-lg"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <DownloadResume buttonStyles={'group mt-6 w-full'} />
    </div>
  )
}

function Skills() {
  let skills = [
    {
      id: 1,
      language: 'HTML',
      logo: htmlLogo,
    },
    {
      id: 2,
      language: 'CSS',
      logo: CssLogo,
    },
    {
      id: 3,
      language: 'JavaScript',
      logo: javascriptLogo,
    },
    {
      id: 5,
      language: 'React.js',
      logo: reactLogo,
    },
    {
      id: 6,
      language: 'Next.js',
      logo: nextLogo,
    },
    {
      id: 7,
      language: 'Java',
      logo: javaLogo,
    },
    {
      id: 8,
      language: 'C++',
      logo: cLogo,
    },
    {
      id: 9,
      language: 'TailwindCSS',
      logo: tailwindLogo,
    },
    {
      id: 10,
      language: 'Visual Studio Code',
      logo: visualStudioCodeLogo,
    },
    {
      id: 11,
      language: 'Git',
      logo: gitLogo,
    },
  ]


  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <CodeIcon className="h- w-6 flex-none" />
        <span className="ml-3">Skills & Technologies</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {skills.map((skill, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={skill.logo}
                alt=""
                className="h-7 w-7 rounded-lg"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap items-center gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {skill.language}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[NewYorkImage, CollegeImage, ComputerImage, CodeImage, TechImage].map(
          (image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Jonathan Yazdanpanah - Software engineer, university graduate, and tech
          enthusiast.
        </title>
        <meta
          name="description"
          content="I’m Jonathan, a results-driven software engineer with a passion for
          developing cutting-edge technologies. Based in New York City, I
          specialize in creating innovative solutions that solve complex
          problems and drive business growth."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer, university graduate, and tech enthusiast.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm Jonathan, a results-driven software engineer based in New York
            City with a passion for developing cutting-edge technologies. As a
            tech enthusiast, I stay up-to-date with the latest trends and
            advancements in the field to create innovative solutions that solve
            complex problems and drive business growth. With my expertise in
            software engineering, I specialize in delivering high-quality,
            user-friendly solutions that exceed expectations.
          </p>
          <div className="mt-6 flex items-center gap-6">
            <SocialLink
              href="https://github.com/jyazdan"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/jonathan-yazdanpanah"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <DownloadResume buttonStyles="group w-[180px]" />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <Skills />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
