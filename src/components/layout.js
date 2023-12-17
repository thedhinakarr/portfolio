import * as React from 'react'
import { Link } from 'gatsby'


export default function Layout({pageTitle, pageHeading,children}) {

    return (
        <main className='text-white'>
            <title>
                {pageTitle} 
            </title>
            <p></p>
            <nav>
                <div className="container mx-auto flex justify-between items-center">
                    <div className='hover:underline'><Link to="/">Home</Link></div>
                    <div className='hover:underline'><Link to="/about">About</Link></div>
                    <div className='hover:underline'><Link to="/blog">Blog</Link></div>
                </div>
            </nav>
            <h1 className='text-green-300 text-6xl'>{pageHeading}</h1>
            {children}
        </main>
    )
}
