import React, { useState } from "react";
import './registration.css';
const localStorageData = JSON.parse(localStorage.getItem("users_data"));
    let vehicleNumber=""
    let name=""
    let phone=""
    let position=""
    let permitted_days=""
    let email=""
const RegistrationForm = () => {
    const handleRegister= (event)=> {
        const data1={
             "vehicleNumber":vehicleNumber,
             "name":name,
             "phone":phone,
             "position":position,
             "permitted_days":permitted_days,
             "email":email,
        }
        
        const ans=[data1,...localStorageData];
        localStorage.setItem("users_data",JSON.stringify(ans));
        alert('Registration successfully');
        vehicleNumber=""
        name=""
        phone=""
        position=""
        permitted_days=""
        email=""
        window.location.reload();

    }
    const handleRcnum= (event) => { 
        vehicleNumber=(event.target.value);
    }
    const handleName= (event)=>{ name=(event.target.value);}
    const handlePhone= (event)=>{ phone=(event.target.value);}
    const handleposition= (event)=>{ position=(event.target.value);}
    const handlepermitted_days= (event)=>{ permitted_days=(event.target.value);}
    const handleIsMisssing= (event)=>{ email=(event.target.value);}
    return (<div>
        
        <div class="navbar">
            <a href="/home" class="nav-link">Home</a>
            <a href="/about" class="nav-link">About</a>
            <a href="/services" class="nav-link">Services</a>
            <a href="/" class="nav-link">Logout</a>
        </div>
        
        <div className="testbox">
            <h1 className="heading">Registration</h1>
            <form id="formData" onSubmit={e => {e.preventDefault();handleRegister(e)}} >
                <hr  />
                <input type="text" name="rcnum" id="rcnum" onChange={(e) => handleRcnum(e)} placeholder="Vehicle Registration Number" required/>
                <input type="text" name="name" id="name" placeholder="Name"  onChange={(e) => handleName(e)} required/>
                <input type="number" name="phone" id="name" placeholder="Mobile number"  onChange={(e) => handlePhone(e) }required/>
                <input type="text" name="position" placeholder="position"  onChange={(e) => handleposition(e)} required/>
                <input type="text" name="email" placeholder="email"  onChange={(e) => handlepermitted_days(e)} required/>
                <input typr="text" name="permitted_days" placeholder="Permitted days"  onChange={(e) => handleIsMisssing(e)} required/>
                <button type="submit" name="submit" className="button1">Register </button>
            </form>
        </div>
        </div>
        );
};


export default RegistrationForm;