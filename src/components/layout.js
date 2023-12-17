import * as React from 'react'
import { Link } from 'gatsby'


export default function Layout({ pageTitle, pageHeading, children }) {

    return (
        <main className='text-white font-mono text-lg'>
            <title>
                {pageTitle}
            </title>
            <nav className="p-4">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="flex space-x-4">
                        <Link to="/" className="text-lg font-semibold hover:underline text-blue-500 hover:text-[#FADEBD]">Home</Link>
                        <Link to="/blog" className="text-lg font-semibold hover:underline text-blue-500 hover:text-[#FADEBD]">Blog</Link>
                        <Link to="/resume" className="text-lg font-semibold hover:underline text-blue-500 hover:text-[#FADEBD]">Resumé</Link>
                    </div>
                </div>
            </nav>
             
            {children}
            
        </main>
    )
}
