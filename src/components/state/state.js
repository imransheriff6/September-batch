import { useState } from "react"

function StateExample() {
    let [data, setData] = useState('Welcome');
    return <>
        <h1>{data}</h1>
        <button onClick={function(){setData('Hello')}}>Change</button>
    </>
}
export default StateExample