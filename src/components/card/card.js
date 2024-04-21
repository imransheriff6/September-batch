import { useState } from 'react'
import './card.css'
function Card(props) {
    const [a,seta] = useState(10)
    const [b,setb] = useState(20)
    return <div className="child">
        <img src="https://m.media-amazon.com/images/I/61MmMqHUSKL.png"/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
}
export default Card