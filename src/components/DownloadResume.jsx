import React from 'react'
import { Button } from '@/components/Button'
import { saveAs } from 'file-saver';

function handleDownload() {
  const fileUrl = '/downloads/jonathan-yazdanpanah-resume.pdf';
  const fileName = 'jonathan-yazdanpanah-resume.pdf';

  // initiate the download using FileSaver.js
  saveAs(fileUrl, fileName);
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const DownloadResume = ({buttonStyles}) => {
  return (
    <Button onClick={handleDownload} variant="secondary" className={`${buttonStyles}`}>
    Download Resume
    <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
  </Button>
  )
}

export default DownloadResume