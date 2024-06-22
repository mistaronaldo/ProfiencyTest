import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddCompany = ({ AddNewCompany }) => {

    const [companyName, setCompanyName] = React.useState('');
    const [dateOfRegistration, setDateOfRegistration] = React.useState('');
    const [companyRegistrationNumber, setCompanyRegistrationNumber] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [contactPerson, setContactPerson] = React.useState('');
    const [listOfDepartments, setListOfDepartments] = React.useState([]);
    const [contactPhone, setContactPhone] = React.useState('');
    const [emailAddress, setEmailAddress] = React.useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic here

        const newCompany = {
            companyName,
            dateOfRegistration,
            companyRegistrationNumber,
            address,
            contactPerson,
            listOfDepartments,
            contactPhone,
            emailAddress
        }

        AddNewCompany(newCompany);
        return navigate('/');

    };
    const handleSelect = (item) => {
        console.log(item);
        const alreadySelected = listOfDepartments.includes(item);
        setListOfDepartments((prevItems) =>
            alreadySelected
                ? prevItems.filter((listOfDepartments) => listOfDepartments !== item)
                : [...prevItems, item]
        );

    };



    return (
        <div className='container mx-auto p-4'>
            <form onSubmit={handleSubmit} className="mx-auto p-4 pt-6 pb-8 w-2/4 bg-white shadow-xl rounded-xl">
                <div className='grid grid-cols-2 gap-6'>
                    <div className="mb-3 col-span-2">
                        <label htmlFor="companyName" className="block text-sm text-gray-700 mb-2">Company Name</label>
                        <input required type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full ring-indigo-50 ring rounded-md focus:outline-none focus:ring-indigo-300 px-3 py-2 text-sm text-gray-700" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateOfRegistration" className="block text-sm text-gray-700 mb-2">Date of Registration</label>
                        <input required type="date" id="dateOfRegistration" value={dateOfRegistration} onChange={(e) => setDateOfRegistration(e.target.value)} className="w-full ring-indigo-50 ring rounded-md focus:outline-none focus:ring-indigo-300 px-3 py-2 text-sm text-gray-700" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="companyRegistrationNumber" className="block text-sm text-gray-700 mb-2">Company Registration Number</label>
                        <input required type="text" id="companyRegistrationNumber" value={companyRegistrationNumber} onChange={(e) => setCompanyRegistrationNumber(e.target.value)} className="w-full ring-indigo-50 ring rounded-md focus:outline-none focus:ring-indigo-300 px-3 py-2 text-sm text-gray-700" />
                    </div>
                    <div className="mb-3 col-span-2">
                        <label htmlFor="address" className="block text-sm text-gray-700 mb-2">Address</label>
                        <textarea required id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full ring-indigo-50 ring rounded-md focus:outline-none focus:ring-indigo-300 px-3 py-2 text-sm text-gray-700" />
                    </div>
                    <div className="mb-3 col-span-2">
                        <label htmlFor="contactPerson" className="block text-sm text-gray-700 mb-2">Contact Person</label>
                        <input required type="text" id="contactPerson" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} className="w-full ring-indigo-50 ring rounded-md focus:outline-none focus:ring-indigo-300 px-3 py-2 text-sm text-gray-700" />
                    </div>

                    <div className="mb-3 col-span-2">
                        <label htmlFor="listOfDepartments" className="block text-sm text-gray-700 mb-2">List of Departments</label>
                        <select required id="listOfDepartments" value={listOfDepartments} onChange={(e) => handleSelect(e.target.value)} className="w-full px-3 py-2 text-sm text-gray-700  ring-indigo-50 ring rounded-md focus:outline-none focus:ring-indigo-300 " multiple>
                            <option value="Sales">Sales</option>
                            <option value="Marketing">Marketing</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                            <option value="Finance">Finance</option>
                        </select>
                    </div>

                    <div className="mb-3 col-span-2">
                        <label htmlFor="contactPhone" className="block text-sm text-gray-700 mb-2">Contact Phone</label>
                        <input required type="tel" id="contactPhone" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} className="w-full ring-indigo-50 ring rounded-md focus:outline-none focus:ring-indigo-300 px-3 py-2 text-sm text-gray-700" />
                    </div>
                    <div className="mb-3 col-span-2">
                        <label htmlFor="emailAddress" className="block text-sm text-gray-700 mb-2">Email Address</label>
                        <input required type="email" id="emailAddress" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} className="w-full ring-indigo-50 ring rounded-md focus:outline-none focus:ring-indigo-300 px-3 py-2 text-sm text-gray-700" />
                    </div>
                    <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>

            </form>

        </div>
    )
}

export default AddCompany