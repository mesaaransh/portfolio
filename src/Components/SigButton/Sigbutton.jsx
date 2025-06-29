import "./Sigbutton.css"

export default function Sigbutton({text, disabled = false}) {

    return (
        <button className='sigbutton' disabled={disabled}>
            {text}
        </button>
    )

}