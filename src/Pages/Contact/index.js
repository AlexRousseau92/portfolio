import React, { useState } from "react";
import './style.css';
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
init("user_x49cGtlaIEAlVj75cUqXP");
const Contact = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        sendFeedback("template_ehvxpds", {
            name,
            phone,
            email,
            message,
        });
    };

    const sendFeedback = (templateId, variables) => {

        emailjs
            .send("service_csilb7n", templateId, variables)
            .then((res) => {
                console.log('success !');
                setName("");
                setPhone("");
                setEmail("");
                setMessage("");
            })
            .catch(
                (err) =>
                    document.querySelector('.form-message').innerHTML =
                    "Une erreur s'est produite, veuillez réessayer.")
    };

    return (
            <section className="container container-contact">
                    <h2 className="title-form">Contact me</h2>
                    <form className="contact-form">
                    <div className="form-content">
                        <input
                        className="input"
                            type="text"
                            required
                            id="name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            value={name}
                            autoComplete="off" />
                        <div className="ligne"></div>
                        <input
                        className="input"
                            type="text"
                            required
                            id="phone"
                            name="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone"
                            value={phone} />
                            <div className="ligne"></div>
                        <div className="email-content">
                            {/* <label id="not-mail">Email non valide</label> */}
                            <input
                            className="input"
                                type="mail"
                                id="email"
                                name="email"
                                required="required"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email *"
                                value={email}
                                autoComplete="off" />
                                <div className="ligne"></div>
                        </div>
                        <textarea
                        className="input input-textarea"
                            id="message"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Message *"
                            value={message} />
                            <div className="ligne"></div>
                    </div>
                    <input
                        className="button"
                        type="button"
                        value="Envoyer"
                        onClick={handleSubmit} />
                        <div className="ligne--button"></div>
                    <div className="form-message"></div>
                </form>
            </section>
    );
};

export default Contact;