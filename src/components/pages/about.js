import { useState } from "react"
import axios from 'axios'
function About() {
    const [data, setDate] = useState({
        name: '',
        age: '',
        gender: ''
    })
    const handler = (e) => {
        setDate({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const createUser = () => {
        console.log(data);
        axios.post('http://localhost:8080/', data, {
            headers: {
                'Authorization': 'Basic YWRtaW46MTIz'
            }
        })
        .then(()=>{
            console.log('Created')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return <>
        <h1>Create User</h1>
        <p>Name</p>
        <input onChange={handler} name="name" />
        <p>Age</p>
        <input type="number" onChange={handler} name="age" />
        <p>Gender</p>
        <input type="radio" name="gender" onChange={handler} value='male' /><label>Male</label>
        <input type="radio" name="gender" onChange={handler} value='female' /><label>Female</label>
        <button onClick={createUser}>Create</button>
    </>
}
export default About