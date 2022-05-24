import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Components/Context";
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import './style.scss';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
init("user_x49cGtlaIEAlVj75cUqXP");


const Contact = () => {

    const { theme } = useContext(ThemeContext)

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const failMessage = () => {
        const formMessage = document.querySelector('.alert-message');
        formMessage.textContent = ' Veuillez remplir les champs obligatoires *';
        formMessage.style.color = '#ff0000';
    };

    const successMessage = () => {
        const formMessage = document.querySelector('.alert-message');
        formMessage.textContent = 'Votre message a été envoyé !';
        formMessage.style.color = '#008000';
    };

    const sendFeedback = (templateId, variables) => {

        emailjs
            .send("service_csilb7n", templateId, variables)

            .then((res) => {
                successMessage();
                setName("");
                setCompany("");
                setPhone("");
                setEmail("");
                setMessage("");
            })
            .catch(
                (err) => {
                    const formMessage = document.querySelector('.form-message');
                    formMessage.innerHTML = "Une erreur s'est produite, veuillez réessayer";
                })
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (name && email && message) {

            sendFeedback("template_ehvxpds", {
                name,
                company,
                phone,
                email,
                message,
            });

        } else {
            failMessage();
        }

    };

    return (
        <section className={theme ? "contact light" : "contact dark"}>
            <form onSubmit={sendEmail} className="contact-form ">
                <h2 className="contact-title ">Contact me</h2>
                <div className="alert-message"></div>
                <label htmlFor="name" className="contact-label label-one">
                    Name *
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        value={name}
                    />
                </label>
                <label htmlFor="company" className="contact-label label-two ">
                    Company
                    <input
                        type="text"
                        name="company"
                        id="company"
                        onChange={(event) => {
                            setCompany(event.target.value);
                        }}
                        value={company}
                    />
                </label>
                <label htmlFor="phone" className="contact-label 3">
                    Phone
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        onChange={(event) => {
                            setPhone(event.target.value);
                        }}
                        value={phone}
                    />
                </label>
                <label htmlFor="email" className="contact-label 4">
                    Email *
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        value={email}
                    />
                </label>
                <label htmlFor="message" className="contact-message">
                    Your message *
                    <textarea
                        name="message"
                        id="message"
                        onChange={(event) => {
                            setMessage(event.target.value);
                        }}
                        value={message}
                    />
                </label>
                {/* <button type="submit" className="contact-button ">Envoyer</button> */}
                <Button variant="contained" endIcon={<SendIcon />} type="submit" color="secondary">Send</Button>
            </form>
        </section >
    )

};

export default Contact;