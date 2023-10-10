
import './Box.css'

const BlueBox = ({name, lastName}) => {
    return (
        <div className="blue-box">
            <h1>{name}</h1>
            <h1>{lastName}</h1>
        </div>
    )
}

export default BlueBox;