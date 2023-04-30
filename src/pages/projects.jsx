/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { GitHubIcon } from '@/components/SocialIcons'

const projects = [
  {
    name: 'Github Finder',
    description:
      'React-based Github User Search app that enables quick and efficient search for Github users and displays comprehensive profile information, including social links, profile stats, and repository data.',
    link: { href: 'https://github-finder-jyazdan.vercel.app/', label: 'View Project' },
  },
  {
    name: 'React Notes',
    description:
      `Built using React.js and Bootstrap, this app allows users to create notes with ease by adding a title, tag, and body.
      With the added ability to filter notes by tags or keyword search, users can quickly locate and access the notes they need.`,
    link: { href: 'https://react-notes-app-ten.vercel.app/', label: 'View Project' },
  },
  {
    name: 'GameHub',
    description:
      'React-based web application that utilizes Chakra UI for styling and the RAWG.io API to provide detailed information about video games. GameHub offers a sleek and intuitive interface for browsing through a vast array of game data.',
    link: { href: 'https://game-hub-jyazdan.vercel.app/', label: 'View Project' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Full Stack Instagram Clone',
    description:
      'Next.js-based social media application built with Tailwind CSS, Firebase v9, and NextAuth for authentication. This clone of the popular social media network, Instagram, offers a familiar and feature-rich user experience, complete with posting, liking, and commenting functionality.',
    link: { href: 'https://instagram-clone-jyazdan.vercel.app/auth/signin?callbackUrl=https%3A%2F%2Finstagram-clone-jyazdan.vercel.app%2F', label: 'View Project' },
  },
  {
    name: 'Real Estate Marketplace',
    description:
      'React.js-based web application that enables users to log in and post real estate properties for sale or rent. With the ability to upload pictures of the property and display its location on a map using the address, this app offers a seamless and user-friendly experience for buyers and sellers.',
    link: { href: 'https://real-estate-marketplace-jyazdan.vercel.app/', label: 'View Project' },
  },
  
  {
    name: 'Wordle Clone',
    description:
      'A fun and engaging web application that brings the popular word game, Wordle, to life. Built using HTML, CSS, and Javascript, this clone offers a familiar and feature-rich user experience that closely mirrors that of the original game.',
    link: { href: 'https://worldle-clone-jyazdan.vercel.app/', label: 'View Project' },
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Jonathan Yazdanpanah</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro={
          <>
            {"I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are available to view on my"}{" "}
            <a className='text-teal-500' href="https://github.com/jyazdan" target="_blank" rel="noopener noreferrer">
              Github profile
            </a>
            {", so if you see something that piques your interest, check out the code!"}
          </>
        }
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
