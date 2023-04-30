/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Jonathan Yazdanpanah</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Pro, Intel i5, 16GB RAM (2017)">
            The very first proper computer that I purchased back in college. 
            It holds a special place in my heart since I wrote my very first lines of code on this machine. 
            Now, it's my go-to computer for working on the go, and it's been with me through all of my coding adventures.  
            </Tool>
            <Tool title="Custom Gaming PC, 32GB RAM, 3060 GPU, AMD Ryzen 5 5600X">
            This was the very first computer that I ever built, and I meticulously picked out every single part. 
            Not only was it an amazing learning experience, but it's also become my main machine for web development. 
            Its powerful specs and lightning-fast performance make it the ideal tool for tackling complex coding projects with ease. 
            From coding to gaming, this PC can handle anything I throw at it, and it's been an indispensable part of my development journey.  
            </Tool>
            <Tool title="27” Gaming Monitor by Dark Matter, 240Hz (Dual Setup)">
              Ever since I switched to a monitor with a refresh rate of 120Hz or higher, I simply couldn't go back to anything else. 
              As a front-end developer, having a high-performance monitor is essential for creating and optimizing responsive applications. 
              I firmly believe that using a single monitor for front-end development should be considered a crime.
            </Tool>
            <Tool title="Logitech MX Keys">
            The Logitech MX Keys has become my go-to keyboard for boosting productivity at work. 
            Its ergonomic design, responsive keys, and intuitive layout make it easy to work efficiently, no matter the task. 
            </Tool>
            <Tool title="Logitech MX Master">
            Its comfortable design and long battery life make it the perfect tool for all-day use.
             While it has many advanced features, I mainly use it for its precision and ease of use, allowing me to work efficiently and effectively. 
             Whether I'm browsing the web or working on a project, the MX Master is the ideal tool for getting the job done quickly and comfortably.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
            Probably the absolute best and has become the industry standard for developers. 
            With a ton of extensions and plugins, I can customize it to fit my exact needs, making me more productive and efficient.
             From debugging to syntax highlighting, Git integration, and code completion, VS Code has everything I need to create amazing applications.
            </Tool>
            <Tool title="Git">
            With Git, I can easily manage and track changes to my codebase, allowing me to work more efficiently and collaborate seamlessly with other developers. 
            Whether I'm working on a large project or a small one, Git helps me keep track of changes and maintain a clear and organized development history. 
            </Tool>
            <Tool title="Vercel">
            With Vercel, I can easily deploy my applications to the cloud with just a few clicks, allowing me to focus on what really matters - writing high-quality code. 
            Its intuitive user interface and powerful integrations make it easy to deploy and manage my projects, 
            while its advanced features ensure that my applications are always fast, reliable, and scalable.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
            As a front-end developer, Figma is an essential tool in my workflow. 
            When I receive design files in Figma, I can easily translate those designs into fully functional front-end applications. 
            With Figma, I can accurately measure spacing, font sizes, and other design elements, ensuring that my final application is pixel-perfect and looks exactly like the original design.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Operating systems">
            <Tool title="Windows">
            Since I was young, Windows has been my go-to operating system. It's been my mainstay for a long time now and continues to be my primary OS for my main machine. 
            Its familiar interface and robust features make it an ideal choice for all my computing needs, whether I'm developing software, gaming, or just browsing the web.
            </Tool>
            <Tool title="MacOS">
            When it comes to programming on my laptops, MacOS has become my go-to operating system. 
            While I've been a long-time user of Windows on my main machine, I appreciate the reliability and consistency of MacOS, 
            as well as its seamless integration with development tools and frameworks. Having MacOS as another option in my toolkit allows me to work on projects with ease, 
            and provides an additional level of flexibility and versatility that I can't get with Windows alone.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
