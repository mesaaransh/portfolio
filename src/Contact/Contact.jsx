import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Contact.css"
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin"
import Sigbutton from "../Components/SigButton/Sigbutton"

export default function Contact() {
    return (
        <div className="wrapper flex contactMain">

            <div className='contact'>
                <h3 className='subhead'>Contact Us</h3>
                <h1 className='head'>Let's Talk for <em> Your <br /> Next Projects </em> </h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
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

                <form className="contactFrom" action="">

                    <div className="formrow">
                        <label htmlFor="">Name</label>
                        <input type="text" />
                    </div>

                    <div className="formrow">
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </div>

                    <div className="formrow">
                        <label htmlFor="">Phone</label>
                        <input type="text" />
                    </div>

                    <div className="formrow">
                        <label htmlFor="">Message</label>
                        <textarea type="text" />
                    </div>

                    <Sigbutton text={'Submit'} />

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