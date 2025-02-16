import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Contact.css"
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin"
import Sigbutton from "../Components/SigButton/Sigbutton"
import { useState } from "react"

export default function Contact() {

    let [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    })

    const [status, setStatus] = useState("");

    function inputHandler(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    async function submitHandler(e) {

        e.preventDefault();
        setStatus("Sending...");

        const scriptURL = process.env.VITE_LINK;
        let d = new FormData()
        Object.keys(data).forEach((key) => d.append(key, data[key]));

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                body: d,
            });
            const result = await response.text();
            setStatus(result === "Success" ? "Message Sent!" : "Failed to send.");
            console.log(status);
        } catch (error) {
            setStatus("Error sending message.");
            console.log(error);
        }

    }

    return (
        <div className="wrapper contactMain">

            <div className='contact'>
                <h3 className='subhead'>Contact Us</h3>
                <h1 className='head'>Let's Talk for <em> Your <br /> Next Projects </em> </h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit necessitatibus labore voluptas.
                </p>

                <div className="contacticons">

                    <ContactItem icon={faPhone} text={"+91 84276-003331"} />
                    <ContactItem icon={faMailBulk} text={"mesaaransh@gmail.com"} />
                    <ContactItem icon={faGithub} text={"mesaaransh"} />
                    <ContactItem icon={faLocationPin} text={"Ludhiana, Punjab"} />

                </div>
            </div>

            <div className="contactFormCont">

                <form className="contactFrom" action="" onSubmit={submitHandler}>

                    <div className="formrow">
                        <label htmlFor="">Name *</label>
                        <input type="text" name="name" required onChange={inputHandler} />
                    </div>

                    <div className="formrow">
                        <label htmlFor="">Email *</label>
                        <input type="text" name="email" required onChange={inputHandler} />
                    </div>

                    <div className="formrow">
                        <label htmlFor="">Phone</label>
                        <input type="text" name="phone" onChange={inputHandler} />
                    </div>

                    <div className="formrow">
                        <label htmlFor="">Message *</label>
                        <textarea type="text" name="message" required onChange={inputHandler} />
                    </div>

                    <button type="Submit" className="contactSubmit">
                        <Sigbutton text={'Submit'} />
                    </button>

                </form>

            </div>
        </div>
    )
}


function ContactItem({ icon, text }) {

    return (

        <div className="flex">
            <div className="icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <h4>{text}</h4>
        </div>

    )

}