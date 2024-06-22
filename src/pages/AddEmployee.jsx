import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

const AddEmployee = ({ addNewEmployee }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [Name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [role, setRole] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [departments, setDepartments] = React.useState([]);
    const [laoding, setLoading] = useState(true);
    const [company, setCompany] = useState({});


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


    const handleSubmit = (event) => {
        event.preventDefault();


        const newEmployee = {
            Name,
            email,
            role,
            department,
            companyID: id,
        };
        addNewEmployee(newEmployee);

        return navigate('/company/' + id);
    };
    return (
        <div className='container mx-auto p-4'>
            <form onSubmit={handleSubmit} className="mx-auto p-4 pt-6 pb-8 w-2/4 bg-white shadow-xl rounded-xl">
                <h1 className='text-2xl font-semibold'>{company.companyName}</h1>
                <div className=' gap-6'>
                    <div className="mb-3 ">
                        <label htmlFor="Name" className="block text-sm text-gray-700 mb-2">Employee Name</label>
                        <input required type="text" id="Name" value={Name} onChange={(e) => setName(e.target.value)} className="w-full ring-indigo-50 ring rounded-md focus:outline-none focus:ring-indigo-300 px-3 py-2 text-sm text-gray-700" />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="Email" className="block text-sm text-gray-700 mb-2">Email</label>
                        <input required type="email" id="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full ring-indigo-50 ring rounded-md focus:outline-none focus:ring-indigo-300 px-3 py-2 text-sm text-gray-700" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="department" className="block text-sm text-gray-700 mb-2">Department</label>
                        <select required type="date" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} className="w-full ring-indigo-50 ring rounded-md focus:outline-none focus:ring-indigo-300 px-3 py-2 text-sm text-gray-700" >
                            <option value="">Select Department</option>
                            {departments.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="Role" className="block text-sm text-gray-700 mb-2">Role</label>
                        <input required type="text" id="Role" value={role} onChange={(e) => setRole(e.target.value)} className="w-full ring-indigo-50 ring rounded-md focus:outline-none focus:ring-indigo-300 px-3 py-2 text-sm text-gray-700" />
                    </div>

                    <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>

            </form>

        </div>
    )
}

export default AddEmployee