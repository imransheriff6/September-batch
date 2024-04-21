import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function SingleUser(){
    const {id} = useParams();
    const [user,setUser] = useState({})
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
            setUser(res.data)
        })
    },[])
    return (
        <>
            <p>id : {id}</p>
            <p>Name : {user.name}</p>
            <p>email : {user.email}</p>
            <p>phone : {user.phone}</p>
            <p>website : {user.website}</p>
        </>
    )
}
export default SingleUser