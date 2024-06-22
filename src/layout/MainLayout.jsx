import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <>
            <div className='flex min-h-screen justify-between flex-col'>
                <section>
                    <Nav />
                    <Outlet />
                </section>

                <Footer />
            </div>

        </>
    )
}

export default MainLayout