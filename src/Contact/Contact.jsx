import "./Contact.css"
import axios from "axios"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import Sigbutton from "../Components/SigButton/Sigbutton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin"

export default function Contact() {

    let [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    })

    const scriptURL = process.env.VITE_LINK;

    function inputHandler(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const sendMessage = async (data) => {
        const response = await axios.post(scriptURL, JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    };

    const mutation = useMutation({
        mutationFn: sendMessage,
        onSuccess: (data) => {
            alert(data === "Success" ? "Message Sent!" : "Failed to send.");
        },
        onError: (error) => {
            alert("Something went wrong!");
            console.error(error);
        },
    });

    async function submitHandler(e) {

        e.preventDefault();
        let d = new FormData(e.target)
        mutation.isPending ? null : mutation.mutate(d);

    }

    return (
        <div className="wrapper contactMain" id="contact">

            <div className='contact'>
                <h3 className='subhead'>Contact Us</h3>
                <h1 className='head'>Let's Talk for <em> Your <br /> Next Projects </em> </h1>

                <p>
                    Got an exciting project, a wild idea, or just want to brainstorm over coffee? Let's connect and create something incredible together!
                </p>

                <div className="contacticons">

                    {/* <ContactItem icon={faPhone} text={"+91 84276-003331"} /> */}
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

                    <button type="Submit" className="contactSubmit" disabled={mutation.isPending}>
                        <Sigbutton text={mutation.isPending ? 'Sending' : 'Submit'} disabled={mutation.isPending} />
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