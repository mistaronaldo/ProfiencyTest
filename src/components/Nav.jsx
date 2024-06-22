import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
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
                                <a className="nav-link text-white hover:text-gray-200" href="#">Employees</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white hover:text-gray-200" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white hover:text-gray-200" href="#">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav