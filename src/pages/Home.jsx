import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

    // const loggedin = localStorage.getItem('LoggedIn')
    // console.log(loggedin);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (loggedin) {
    //         console.log('redirecting ');
    //         return navigate('/login');
    //     }
    // }, [])

    const [searchQuery, setSearchQuery] = useState("");
    const [CompaniesRaw, setRawCompanies] = useState([]);
    const [Companies, setCompanies] = useState([]);
    const [laoding, setLoading] = useState(true);
    const [searching, setSearching] = useState(true);
    const [totalCompanies, setTotalCompanies] = useState(0);
    const [totalEmployees, setTotalEmployees] = useState(0);

    useEffect(() => {
        const fetchCompanies = async () => {

            try {
                const res = await fetch('/api/companies')
                const emps = await fetch('/api/employees')
                const data = await res.json();
                const total = await emps.json();
                setRawCompanies(data);
                setCompanies(data);
                setTotalCompanies(data.length)
                setTotalEmployees(total.length)
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false)
            }


        }
        fetchCompanies();
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase().trim();

        const filteredData = CompaniesRaw.filter((item) => {
            const searchString = `${item.companyName} ${item.contactPerson} ${item.emailAddress} ${item.listOfDepartments} ${item.companyRegistrationNumber}`;
            return searchString.toLowerCase().includes(query);
        });

        setSearchQuery(query);
        setCompanies(filteredData);

    };



    return (
        <>
            <div className='h-full'>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-6 items-center gap-5 m-5">
                        <div className='p-4 shadow-lg rounded-lg bg-indigo-50'>
                            <h1 className='leading-8'>Total Companies</h1>
                            <h1 className='text-4xl font-bold text-gray-700 '>{totalCompanies}</h1>
                        </div>
                        <div className='p-4 shadow-lg rounded-lg bg-indigo-50'>
                            <h1 className='leading-8'>Total Employees</h1>
                            <h1 className='text-4xl font-bold text-gray-700 '>{totalEmployees}</h1>
                        </div>
                    </div>


                    <div className="search-bar bg-slate-100 mt-10 flex w-2/4 mx-auto rounded-full items-center">
                        <svg className='w-6 h-6  fill-gray-500 mx-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        <input type="text" onChange={handleSearch} id="search" placeholder="Search Company" className="py-2 text-xl w-full rounded-full text-sm  text-gray-700 bg-transparent h-16 focus:outline-none focus:ring-indigo-600 ring-indigo-300" />

                        {laoding && <div className='spinner'>
                            <svg className='w-6 h-6  fill-gray-500 mx-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" /></svg>
                        </div>}
                    </div>


                    <div className='flex justify-end mb-3'>
                        <Link to='/add-company' className='py-2 px-4 bg-indigo-400 text-white rounded-full'>Add New</Link>
                    </div>

                    <div className="table-container overflow-x-auto">
                        <table className=" table w-full h-full text-sm text-gray-700">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="p-2 w-5">#</th>
                                    <th className="p-2 ">Company Name</th>
                                    <th className="p-2 ">Date of Registration</th>
                                    <th className="p-2 ">Company Registration number</th>
                                    <th className="p-2 ">Adress</th>
                                    {/* <th className="p-2 ">Contact Person</th> */}
                                    <th className="p-2 ">List of Departments</th>
                                    <th className="p-2 ">Contact Phone</th>
                                    <th className="p-2 ">Email Adress</th>
                                    <th className="p-2 "></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Companies.map((company, index) => (
                                    <tr className=' w-2' key={company.id}>
                                        <th>{index + 1}</th>
                                        <td>{company.companyName}</td>
                                        <td>{company.dateOfRegistration}</td>
                                        <td>{company.companyRegistrationNumber}</td>
                                        <td>{company.address}</td>
                                        {/* <td>{company.contactPerson}</td> */}
                                        <td>{company.listOfDepartments.join(', ')}</td>
                                        <td>{company.contactPhone}</td>
                                        <td>{company.emailAddress}</td>
                                        <td>
                                            <div>
                                                <Link to={'company/' + company.id} className='bg-indigo-100 p-1 px-4 rounded'>
                                                    View
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>


                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Home