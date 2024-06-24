import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ }) => {
    const username = localStorage.getItem('userName')
    return (
        <nav className="navbar sticky top-0 bg-indigo-400 py-4 md:py-6">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <div className="navbar-brand">
                        <Link className="text-xl font-bold text-white" to='/'>Talent Verify</Link>
                    </div>
                    <div className="navbar-links hidden md:block">
                        <ul className="flex items-center gap-6">

                            <li className="nav-item">
                                <Link to='/' className="nav-link text-white hover:text-gray-200" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/add-company' className="nav-link text-white hover:text-gray-200" href="#">Add Company</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/profile' className="nav-link hover:underline bg-indigo-200 p-4 text-gray-700 rounded-lg" >Hi {username}!</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav