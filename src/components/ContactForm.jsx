import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <h1>contact form test page</h1>
                <form action="">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                    <br/>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                    <br/>
                    <label for="Number">Number:</label>
                    <input type="number" id="Number" name="Number" required/>
                    <br />
                    <label for="Message">Message:</label>
                    <textarea id="message" name="message" required/>
                    <br/>
                    {/* <button type="submit"></button> */}
                    <input type="submit" value="Submit"></input>
                </form>
        </div>
    );
};

export default ContactForm;