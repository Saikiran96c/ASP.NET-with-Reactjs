import React, { Component } from 'react';
import "./Contact.css";
const Contact = () => {
    return (
        <div>
            
                <div className="contact-page">
                    <h1>Contact Me</h1>
                    <p>If you have any questions or inquiries, feel free to get in touch!</p>
                    <form>
                        <label htmlFor="name">Name:</label>
                    <input type="text" id="name" asp-for="name" placeholder="Your Name" required />
                        <span asp-validation-for="name" class="text-danger"></span>

                        <label htmlFor="email">Email:</label>
                    <input type="email" id="email" asp-for="email" placeholder="Your Email" required />
                    <span asp-validation-for="email" class="text-danger"></span>

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>

                        <button type="submit" className="contact-btn">Send</button>
                    </form>
                </div>
            
        </div>
    )
};
export default Contact;  