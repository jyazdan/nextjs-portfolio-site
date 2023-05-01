/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/profile.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jonathan Yazdanpanah</title>
        <meta
          name="description"
          content="I’m Jonathan Yazdanpanah. I live in New York City, where I build the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Jonathan Yazdanpanah. I live in New York City, where I build the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              I am a front-end developer. I've always been fascinated by technology and computers 
              ever since I was little. I remember spending countless hours tinkering with gadgets, 
              exploring new software and generally just trying to figure out how everything worked.
              </p>
              <p>
              As I got older, my interest in technology only grew and I knew that I wanted to pursue a career in the field.
               That's when I discovered programming and I was hooked. 
              I loved the challenge of creating something from scratch and the satisfaction of seeing my code come to life.
              </p>
              <p>
              I decided to study computer science at Queens College to further develop my skills and knowledge. 
              During my time there, I gained a strong foundation in programming concepts and algorithms, 
              which helped me to become a more effective developer.
              </p>
              <p>
              After graduating, I continued to learn and explore different areas of programming. 
              I found myself drawn to front-end development and front-end frameworks in particular. 
              The ability to create engaging user interfaces and experiences using HTML, CSS, and JavaScript was 
              incredibly appealing to me.
              </p>
              <p>
              Over the years, I've worked on a variety of projects, from simple websites to complex web applications. 
              I'm always looking for new challenges and opportunities to learn and grow as a developer. 
              I believe that my passion for technology and programming, 
              combined with my strong foundation in computer science, make me a valuable asset to any team.
              </p>
              <p>
              If you're interested in working together or just want to chat about front-end development, 
              feel free to reach out. I'd love to hear from you!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://github.com/jyazdan"  icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/jonathan-yazdanpanah/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:jon.yazdan@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                jon.yazdan@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
