import React, { useState } from "react";
import './Contact.css';
import { Layout } from "../Layout/Layout";

export const Contact = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitHandle = (e) => {
        e.preventDefault();

        const { fname, lname, email, phone, address } = formData;

        if (fname === '' || lname === '' || phone === '' || address === '' || email === '') {
            alert("All fields are mandatory");
        } else if (!/^[A-Za-z]+$/.test(fname)) {
            alert("First name should only contain alphabets.");
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        } else if (!/^[A-Za-z]+$/.test(fname)) {
            alert("last name should only contain alphabets.");
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            alert("Please enter a valid email address.");
        } else if (phone.length !== 10) { 
            alert("Please enter a valid phone number with 10 digits.");
        } else {
            alert("Form submitted successfully!");
            console.log(formData);
        }
    };

    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="row contact">
                        <h1 className="mt-5">Feel free to get in touch with Sai Tour And Travels</h1>
                    </div>
                </div>
                <div className="container form">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={submitHandle}>
                                <input 
                                    type="text" 
                                    name="fname" 
                                    placeholder="Enter first name" 
                                    className="form-control mt-5" 
                                    onChange={handleChange}
                                />
                                <input 
                                    type="text" 
                                    name="lname" 
                                    placeholder="Enter last name" 
                                    className="form-control mt-4" 
                                    onChange={handleChange}
                                />
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Enter Email id" 
                                    className="form-control mt-4" 
                                    onChange={handleChange}
                                />
                                <input 
                                    type="number" 
                                    name="phone" 
                                    placeholder="Enter phone no." 
                                    className="form-control mt-4" 
                                    onChange={handleChange}
                                />
                                <input 
                                    type="text" 
                                    name="address" 
                                    placeholder="Enter address" 
                                    className="form-control mt-4" 
                                    onChange={handleChange}
                                />
                                <button type="submit" className="btn btn-primary  submit ">Submit </button>
                             </form>
                
       
               </div>
                        <div className="col-md-6">
                            <div className="mt-5">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.249273701112!2d76.78892532528985!3d30.71139192459464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed00440d2ccd%3A0xc6087e593c2acc1f!2sShirdi%20Sai%20Mandir!5e0!3m2!1sen!2sin!4v1729492394840!5m2!1sen!2sin" 
                                    width="600" 
                                    height="450" 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade" 
                                    className="map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section1 */}
            </Layout>
        </div>
    );
};
