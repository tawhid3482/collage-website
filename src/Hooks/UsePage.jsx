import { useEffect, useState } from "react";

const UsePage = () => {
    const [services, setServices]=useState(null)
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    return [services]
};

export default UsePage;