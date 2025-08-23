import React, { useState } from 'react'
import './contact.css'
import { useFromStatus } from 'react-dom'

const Contact = () => {

    const [result, setResult] = useState("");
    const [errors, setErrors] = useState({});

    const validate = (form) => {
        const newErrors = {};
        const name = form["name"].value.trim();
        const email = form["email"].value.trim();
        const message = form["massage"].value.trim();

        if (!name) newErrors.name = "Name is required.";
        else if (name.length < 2) newErrors.name = "Enter Correct name .";
        if (!email) newErrors.email = "Email is required.";
        else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) newErrors.email = "Invalid email address.";
        if (!message) newErrors.massage = "Message is required.";
        else if (message.length < 15) newErrors.massage = "Message must be at least 15 characters.";
        return newErrors;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const validationErrors = validate(form);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            setResult("");
            return;
        }
        setResult("Sending....");
        const formData = new FormData(form);
        formData.append("access_key", "b39c081e-99eb-47b6-ba2c-a3c76e860105");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            form.reset();
            setErrors({});
        } else {
            setResult(data.message);
        }
    };
    return (
        <div>

            <div className='contact'>
                <div className='contact-title'>

                    <h1> Don't Miss Our Embroidery Deals!</h1>
                    <p>Reach out for special sale pricing on your custom embroidery needs.</p>

                    <a className="contact-whatsapp desktop-only" href="https://wa.me/7988901458" target="_blank" rel="noopener noreferrer">
                        <span className="contact-whatsapp-text">contact us</span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            alt="WhatsApp" width="40" height="40" />
                    </a>
                </div>
                <div className="rightSide">
                    <form onSubmit={onSubmit} className='form' noValidate>
                        <label>Your name</label>
                        <input type="text" placeholder='Enter your name' name='name' />
                        {errors.name && <div style={{ color: 'red', fontSize: '14px' }}>{errors.name}</div>}

                        <label>Your email</label>
                        <input type="email" name="email" placeholder='Enter your email' />
                        {errors.email && <div style={{ color: 'red', fontSize: '14px' }}>{errors.email}</div>}

                        <label>Message</label>
                        <textarea name="massage" rows='8' placeholder='Enter your message'></textarea>
                        {errors.massage && <div style={{ color: 'red', fontSize: '14px' }}>{errors.massage}</div>}

                        <button type='submit' className="submit">Submit </button>
                    </form>
                    {result && <div style={{ marginTop: '10px', color: result.includes('Success') ? 'green' : 'red' }}>{result}</div>}
                    
                </div>
            </div>


            <div id='footer' className="footer w-full  flex items-center justify-center">
                <p>©  Embroidery Shop. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Contact
