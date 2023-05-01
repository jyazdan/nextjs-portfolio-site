import React, { useRef } from 'react'
import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'
import { toast } from 'react-toastify'

import emailjs from '@emailjs/browser'

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

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_o727s6s', 'template_s8452k9', form.current, '7kWBzm_WbavGXPlM1')
      .then((result) => {
          console.log(result.text)
          console.log('Message sent')
          toast.success('Message sent!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        },
        (error) => {
          console.log(error.text)
          toast.error('Error: something went wrong!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
      )
  }

  return (
    <>
    <Head>
      <title>Contact - Jonathan Yazdanpanah</title>
      <meta
        name="description"
        content="Let's Make Something Amazing Together." />
    </Head><SimpleLayout
      title="Let's Make Something Amazing Together."
      intro={<>
        {"If you're an employer looking to hire a skilled front-end developer, I'd love to hear from you. Simply fill out the form below, or if you prefer, you can also email me directly at "}{' '}
        <a
          className="text-teal-500"
          href="mailto:jon.yazdan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          jon.yazdan@gmail.com
        </a>
        {". Whether you're looking to discuss a project, explore new ideas, or just want to say hello, I'm here and ready to listen."}
      </>}
    >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
        >
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <MailIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">Contact</span>
          </h2>
          <div className="mt-6 flex flex-col items-center justify-center">
            <input
              type="name"
              // Name as to be the same as email.js template
              name="user_name"
              placeholder="Name"
              aria-label="Name"
              required
              className="mb-5 w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm" />
            <input
              type="email"
              // Name as to be the same as email.js template
              name="user_email"
              placeholder="Email address"
              aria-label="Email address"
              required
              className="mb-5 w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm" />
            <textarea
              type="message"
              // Name as to be the same as email.js template
              name="message"
              placeholder="Message"
              aria-label="Message"
              required
              className="mb-6 w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] pb-20 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm" />
            <Button
              type="submit"
              className="mt-4 flex w-full items-center justify-center lg:w-1/6"
            >
              Submit
            </Button>
          </div>
        </form>
      </SimpleLayout></>
  )
}
