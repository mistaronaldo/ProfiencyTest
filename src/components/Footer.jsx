import React from 'react'

const Footer = () => {
    return (
        <footer className="footer bg-gray-200 py-8  w-full">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <div className="footer-left">
                        <p className="text-sm text-gray-600">Copyright © 2024 Talent Verify</p>
                    </div>
                    <div className="footer-right">
                        <ul className="flex items-center">
                            <li className="mx-4">
                                <a className="text-sm text-gray-600 hover:text-gray-800" href="#">Contact Us</a>
                            </li>
                            <li className="mx-4">
                                <a className="text-sm text-gray-600 hover:text-gray-800" href="#">About Us</a>
                            </li>
                            <li className="mx-4">
                                <a className="text-sm text-gray-600 hover:text-gray-800" href="#">Whatsapp</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer