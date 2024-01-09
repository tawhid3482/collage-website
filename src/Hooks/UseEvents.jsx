import { useEffect, useState } from "react";

const UseEvents = () => {
    const [evets,setEvents]=useState(null)
    useEffect(()=>{
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data=> setEvents(data))
    },[])
    return [evets]
};

export default UseEvents;