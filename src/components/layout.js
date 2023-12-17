import React, { Children } from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'


export default function Layout({ children, pageTitle, pageHeading }) {

    // const data = useStaticQuery(graphql`
    //     query MyQuery {
    //         site {
    //         siteMetadata {
    //             title
    //         }
    //         }
    //     }
    // `);

    // console.log(data)


    return (
        <main className='text-white'>
            <title>
                {pageTitle} 
            </title>
            <p></p>
            <nav>
                <div className="container mx-auto flex justify-between items-center">
                    <a className='hover:underline'><Link to="/">Home</Link></a>
                    <a className='hover:underline'><Link to="/about">About</Link></a>
                    <a className='hover:underline'><Link to="/blog">Blog</Link></a>
                </div>
            </nav>
            <h1 className='text-green-300 text-6xl'>{pageHeading}</h1>
            {children}
        </main>
    )
}
