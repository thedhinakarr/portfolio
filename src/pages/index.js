import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

export default function index() {
  return (
    //  <Layout pageHeading="Home" pageTitle="Home">
    //   ;klaj;dfjka;jdf;akjd;fljasdkjfak;j
    //  </Layout>
    <div className="border-[#FADEBD] min-h-screen flex items-center justify-center font-semibold">
      <div className="max-w-md">
        <p className="text-lg text-justify pb-4">
          {/* YO, I'm<text className="text-blue-500"> Dhinakarr,</text> */}
          Hey! I'm<text className="text-blue-500 text-2xl"> Dhinakarr, </text>
          I like computers. In the realm of algorithms and coding, I navigate through lines of logic to build robust solutions.<br/><br/>
          Check out my blog which documents my journey of continuous learning and exploration as I delve into the intricacies of the digital world.<br /><br />
        </p>
        <nav>
          <div className="container mx-auto flex justify-between font-semibold text-2xl ">
            <div className='hover:underline hover:text-[#FADEBD]'><Link to="/blog">Blog</Link></div>
            <div className='hover:underline  hover:text-[#FADEBD]'><Link to="/about">Resumé</Link></div>
            <div className='hover:underline  hover:text-[#FADEBD]'><Link to="https://github.com/thedhinakarr" onClick="_blank">Github</Link></div>
          </div>
        </nav>
      </div>

    </div>

  )
}




