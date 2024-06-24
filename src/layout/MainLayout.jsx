import React, { useEffect } from 'react'
import { Outlet, redirect, useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const MainLayout = () => {

    const loggedin = localStorage.getItem('LoggedIn')
    console.log(loggedin);
    const navigate = useNavigate();
    useEffect(() => {
        if (loggedin === 'false' || !loggedin) {
            console.log('redirecting ');
            return navigate('/login');
        } else {
            console.log('User must be logged in');
        }
    }, [])




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