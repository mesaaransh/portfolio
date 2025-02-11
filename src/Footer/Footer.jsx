import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sigbutton from "../Components/SigButton/Sigbutton"
import "./Footer.css"
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {

    const d = new Date();

    return (
        <div className='footer'>

            <p>
                Copyright <FontAwesomeIcon icon={faCopyright} /> {d.getFullYear()} Saaransh Gupta
            </p>
            <p>
                All rights reserved
            </p>

        </div>
    )
}
