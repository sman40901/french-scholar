import React, { useState } from "react";
import Reaptcha from "reaptcha";
import '../css/ContactUs.css';

function ContactUs(/*{ addCustomer }*/) {
    const FormTitle = "Please contact us with your questions!";

    const [verified, setVerified] = React.useState(false);

    const onVerify = e => {
        setVerified(true);
    };

    const [customer, setCustomer] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        age: -3,
        contactNo: "",
        email: "",
        message: "Your message here"
    });

    const handleChange = (event) => {
        setCustomer({
            ...customer,
            // Trimming any whitespace
            [event.target.name]: event.target.value.trim()
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (customer.age < 18) {
            alert("You are not of legal age");
            return;
        }
        console.log(` ${JSON.stringify(customer)}`);
    };

    return (
        <div className="table-responsive">
            <h1>{FormTitle}</h1>
            {/* <form onSubmit={event=>handleSubmit(event)}> */}
            <form onSubmit={handleSubmit}>
                <table border="0">
                    <tr>
                        <td>
                            First Name :
                        </td>
                        <td>
                            <input
                                type="text"
                                name="firstName"
                                onChange={handleChange}
                                value={customer.firstName}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Middle Name :
                        </td>
                        <td> <input
                            type="text"
                            name="middleName"
                            onChange={handleChange}
                            value={customer.middleName}
                        />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last Name :
                        </td>
                        <td><input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            value={customer.lastName}
                        />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Age :
                        </td>
                        <td>
                            <input
                                type="text"
                                name="age"
                                onChange={handleChange}
                                value={customer.age}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phone Number :
                        </td>
                        <td>
                            <input
                                type="text"
                                name="contactNo"
                                onChange={handleChange}
                                value={customer.contactNo}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email :
                        </td>
                        <td>
                            <input
                                type="text"
                                name="email"
                                onChange={handleChange}
                                value={customer.email}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Problem statement :
                        </td>
                        <td>
                            <textarea
                                name="message"
                                onChange={handleChange}
                                value={customer.message}
                                rows="5" cols="33">

                            </textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <Reaptcha
                                sitekey="your_key"
                                onVerify={onVerify}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <center>
                                <input type="submit"
                                    className="btn btn-default btn-success"
                                    value="Submit!" />
                            </center>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default ContactUs;

