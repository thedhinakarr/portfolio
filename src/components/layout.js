import React, { Children } from 'react'
import {Link} from 'gatsby'

export default function Layout({children,pageTitle,pageHeading}) {
    return (
        <main className='text-white'>
            <title>
                {pageTitle}
            </title>
            <nav>
                <ul>
                    <li className='hover:underline'><Link to="/">Home</Link></li>
                    <li className='hover:underline'><Link to="/about">About</Link></li>
                    <li className='hover:underline'><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <h1 className='text-green-300 text-6xl'>{pageHeading}</h1>
            {children}
        </main>
    )
}
