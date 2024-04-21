import axios from "axios"
import { useEffect, useState } from "react"

function UseEffectExample() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/', {
            headers: {
                'Authorization': 'Basic YWRtaW46MTIz'
            }
        })
            .then((res) => {
                setData(res.data)
            })
    }, [])
    return <>
        {data.map((ele) => {
            return <h1>{ele.name}</h1>
        })}
    </>
}
export default UseEffectExample