import "./Sigbutton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Sigbutton({text, disabled = false}) {

    return (
        <button className='sigbutton' disabled={disabled}>
            <button>{text}</button>
            <button>
                <FontAwesomeIcon icon={faPlay} /> 
            </button>
        </button>
    )

}