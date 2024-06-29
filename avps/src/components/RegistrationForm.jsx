import React, { useState } from "react";
//import './registration.css';

const RegistrationForm = () => {
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState("");
    const [permittedDays, setPermittedDays] = useState("");
    const [email, setEmail] = useState("");

    const handleRegister = (event) => {
        const data1 = {
            vehicleNumber,
            name,
            phone,
            position,
            permitted_days: permittedDays,
            email,
        };

        const localStorageData = JSON.parse(localStorage.getItem("users_data")) || [];
        const ans = [data1, ...localStorageData];
        localStorage.setItem("users_data", JSON.stringify(ans));
        alert('Registration successful');
        
        setVehicleNumber("");
        setName("");
        setPhone("");
        setPosition("");
        setPermittedDays("");
        setEmail("");
        window.location.reload();
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="bg-gray-100 w-96 h-auto rounded-lg shadow-lg p-10 relative ">
                <h1 className="text-center text-xl font-bold mb-4">Registration</h1>
                <form onSubmit={e => { e.preventDefault(); handleRegister(e); }}>
                    <hr className="mb-4 opacity-30" />
                    <input
                        type="text"
                        name="rcnum"
                        id="rcnum"
                        value={vehicleNumber}
                        onChange={(e) => setVehicleNumber(e.target.value)}
                        placeholder="Vehicle Registration Number"
                        required
                        className="w-full h-10 mb-4 rounded-lg pl-3 border-none shadow-md focus:outline-none"
                    />
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                        className="w-full h-10 mb-4 rounded-lg pl-3 border-none shadow-md focus:outline-none"
                    />
                    <input
                        type="number"
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Mobile number"
                        required
                        className="w-full h-10 mb-4 rounded-lg pl-3 border-none shadow-md focus:outline-none"
                    />
                    <input
                        type="text"
                        name="position"
                        id="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder="Position"
                        required
                        className="w-full h-10 mb-4 rounded-lg pl-3 border-none shadow-md focus:outline-none"
                    />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="w-full h-10 mb-4 rounded-lg pl-3 border-none shadow-md focus:outline-none"
                    />
                    <input
                        type="text"
                        name="permitted_days"
                        id="permitted_days"
                        value={permittedDays}
                        onChange={(e) => setPermittedDays(e.target.value)}
                        placeholder="Permitted days"
                        required
                        className="w-full h-10 mb-4 rounded-lg pl-3 border-none shadow-md focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-green-600 text-white w-full h-10 rounded-lg mt-4 shadow-md hover:bg-green-400"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
