import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

export default function index() {
  return (

    <div className="border-[#FADEBD] min-h-screen flex flex-col sm:flex-row items-center justify-center font-mono text-lg">
      <div className="max-w-md p-4 sm:p-8">
        <p className="text-lg sm:text-justify pb-4">
          {/* YO, I'm<text className="text-blue-500"> Dhinakarr,</text> */}
          Hey! I'm <span className="text-blue-500 text-2xl">Dhinakarr, </span>
          I like computers. In the realm of algorithms and coding, I navigate through lines of logic to build robust solutions.<br /><br />
          Check out my blog which documents my journey of continuous learning and exploration as I delve into the intricacies of the digital world.<br /><br />
        </p>
        <nav className="text-center sm:text-left text-xl">
          <div className='mb-4 sm:mb-0'>
            <Link className='block hover:underline hover:text-[#FADEBD]' to="/blog"> {"->"} Blog</Link>
          </div>
          <div className='mb-4 sm:mb-0'>
            <Link className='block hover:underline  hover:text-[#FADEBD]' to="/resume">{"->"} Resumé</Link>
          </div>
          <div>
            <a
              className='block hover:underline  hover:text-[#FADEBD]'
              href="https://github.com/thedhinakarr"
              target="_blank"
            >{"->"} Github </a>
          </div>
          <div>
            <a
              className='block hover:underline  hover:text-[#FADEBD]'
              href="https://open.spotify.com/show/4gNCCEuk0JDWuXJoBESWjA"
              target="_blank"
            >{"->"} Podcast </a>
          </div>
        </nav>
      </div>
    </div>

  )
}




