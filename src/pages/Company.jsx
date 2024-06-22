import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Company = () => {


    const { id } = useParams();
    const [company, setCompany] = useState({});
    const [laoding, setLoading] = useState(true);
    const [Departments, setDepartments] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [rawEmployees, setRawEmployees] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [searching, setSearching] = useState(true);
    const [totalCompanies, setTotalCompanies] = useState(0);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await fetch(`/api/companies/${id}`)
                const data = await res.json();
                setCompany(data);
                setDepartments(data.listOfDepartments)
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false)
            }
        }
        fetchCompanies();
    }, []);

    useEffect(() => {
        const fetchCompanies = async () => {

            try {
                const res = await fetch('/api/employees/')
                const data = await res.json();
                const companysEmployees = data.filter((item) => {
                    const searchString = `${item.companyID} `;
                    return searchString.toLowerCase().includes(id);
                });

                setRawEmployees(companysEmployees);
                setEmployees(companysEmployees);
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
        <div className='container mx-auto my-4'>
            <div>
                <h1 className='text-5xl font-bold'>{company.companyName}</h1>
                <div className='flex gap-8 my-8'>
                    <div>
                        <h1>Email Address:</h1>
                        <h1 className='leading-8 font-semibold'>{company.emailAddress}</h1>
                    </div>
                    <div>
                        <h1>Address:</h1>
                        <h1 className='leading-8 font-semibold'>{company.address}</h1>
                    </div>
                    <div>
                        <h1>Date Of Registration:</h1>
                        <h1 className='leading-8 font-semibold'>{company.dateOfRegistration}</h1>
                    </div>
                    <div>
                        <h1>Company Registration Number:</h1>
                        <h1 className='leading-8 font-semibold'>{company.companyRegistrationNumber}</h1>
                    </div>
                    <div>
                        <h1>Contact Person:</h1>
                        <h1 className='leading-8 font-semibold'>{company.contactPerson}</h1>
                    </div>
                </div>
                <div>
                    <h1>List Of Departments:</h1>
                    <ul className='pl-8'>
                        {Departments.map((item, index) => (
                            <li className=' list-disc' key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr className='my-10' />
            <div>
                <div className='flex items-center justify-between  my-4'>
                    <div className='gap-8 flex'>
                        <h1 className='text-3xl'>Employees</h1>
                        <div className="flex w-80 bg-slate-100 rounded-full items-center">
                            <svg className='w-6 h-6  fill-gray-500 mx-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                            <input type="text" onChange={handleSearch} id="search" placeholder="Search Employee" className="py-2 text-xl w-full rounded-full   text-gray-700 bg-transparent focus:outline-none focus:ring-indigo-600 ring-indigo-300" />

                            {laoding && <div className='spinner'>
                                <svg className='w-6 h-6  fill-gray-500 mx-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" /></svg>
                            </div>}
                        </div>
                    </div>

                    <Link to={`/add-employee/${company.id}`} className='py-2 px-4 bg-indigo-400 text-white rounded-full'>Add Employee</Link>
                </div>



                <div className="table-container overflow-x-auto">
                    <table className=" table w-full h-full text-sm text-gray-700">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="p-2 w-5">#</th>
                                <th className="p-2 ">Name</th>
                                <th className="p-2 ">Employee ID number</th>
                                <th className="p-2 ">Department</th>
                                <th className="p-2 "></th>

                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, index) => (
                                <tr className=' w-2' key={company.id}>
                                    <th>{index + 1}</th>
                                    <td>{employee.Name}</td>
                                    <td>{employee.id}</td>
                                    <td>{employee.department}</td>

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
    )
}

export default Company