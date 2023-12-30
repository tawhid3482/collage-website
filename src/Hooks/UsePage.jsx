import { useEffect, useState } from "react";

const UsePage = () => {
    const [services, setServices]=useState(null)
    useEffect(()=>{
        fetch('/pageService.json')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    return [services]
};

export default UsePage;