import React, { useState } from "react";
import { Layout } from "../Layout/Layout";
import './Onlinebooking.css';

export const Onlinebooking = () => {    
    const [formData, setFormData] = useState({
        fname: '',
        emailid: '',
        whatsno: '',
        bookdate: '',
        viechletype: '',
        persons: '',
        DriverRequired: '',
        Description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitForm = (e) => {
        e.preventDefault();
        const { fname, emailid, whatsno, bookdate, viechletype, persons, DriverRequired, Description } = formData;

        if (!fname || !emailid || !whatsno || !bookdate || !viechletype || !persons || !DriverRequired || !Description) {
            alert("All fields are mandatory");
        } else if (!/^[A-Za-z ]+$/.test(fname)) {
            alert("Full name required only alphabets");
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailid)) {
            alert('Enter a valid email');
        } else if (!/^\d{10}$/.test(whatsno)) {
            alert('Enter a valid phone number');
        } else if (!/^[A-Za-z ]+$/.test(viechletype)) {
            alert('Vehicle type should contain only alphabets');
        } else if (!/^[A-Za-z ]+$/.test(DriverRequired)) {
            alert("This field should contain only alphabets");
        } else if (!/^[A-Za-z ]+$/.test(Description)) {
            alert("This field should contain only alphabets");
        } else {
            alert('Form will be submitted successfully!');
            console.log(formData);
        }
    };

    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="row booking">
                        <h1 className="mt-5">BOOK YOUR TOUR TODAY WITH SAI CAR-TOUR-TRAVELS</h1>
                        <form onSubmit={submitForm}>
                            <input 
                                type="text" 
                                name='fname' 
                                placeholder="Full name"  
                                className="form-control mt-4" 
                                required
                                onChange={handleChange}
                            />

                            <input 
                                type="text" 
                                name='emailid'
                                placeholder="Email id" 
                                className="form-control mt-4" 
                                required
                                onChange={handleChange}
                            />

                            <input 
                                type="text" 
                                name='whatsno' 
                                placeholder="WhatsApp no." 
                                className="form-control mt-4" 
                                required
                                onChange={handleChange}
                            />

                            <label className="form-label mt-4">Enter your Booking date</label>
                            <input 
                                type="date" 
                                name='bookdate' 
                                className="form-control" 
                                required
                                onChange={handleChange}
                            />

                            <input 
                                type="text" 
                                name='viechletype'
                                placeholder="Vehicle type eg-innova" 
                                className="form-control mt-4" 
                                required
                                onChange={handleChange}
                            />

                            <input 
                                type="text" 
                                name='persons'
                                placeholder="How many persons" 
                                className="form-control mt-4" 
                                required
                                onChange={handleChange}
                            />

                            <input 
                                type="text" 
                                name='DriverRequired' 
                                placeholder="Driver Required eg-CHD" 
                                className="form-control mt-4" 
                                required
                                onChange={handleChange}
                            />

                            <input 
                                type="text" 
                                name='Description' 
                                placeholder="Description" 
                                className="form-control mt-4" 
                                required
                                onChange={handleChange}
                            />
                            <button type="submit" className="btn btn-primary  mt-4">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    );
};
