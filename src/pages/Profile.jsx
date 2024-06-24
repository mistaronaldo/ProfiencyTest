import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const loggingout = () => {

        localStorage.clear();

        return navigate('/login');
    }
    const id = localStorage.getItem('userID');
    useEffect(() => {
        const getuserdata = async () => {

            const res = await fetch(`/api/users/${id}`)
            const data = await res.json();
            setUser(data);
        }
        getuserdata()
    }, [])





    return (
        <div>
            <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
                <div className="flex flex-col md:flex-row ">
                    <div className="w-1/6 p-4 ">
                        <svg className='fill-indigo-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                        </svg>
                    </div>
                    <div className="w-full py-10 md:w-1/2 xl:w-2/3 p-4">
                        <h1 className="text-3xl font-bold">{user.name}</h1>
                        <p className="text-sm">{user.email}</p>
                        <p className="text-sm">{user.phone}</p>
                        <button className='bg-red-600 text-white p-3 m-1 rounded' onClick={() => loggingout()}>Logout</button>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Profile