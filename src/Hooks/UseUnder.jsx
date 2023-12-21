import { useEffect, useState } from "react";

const UseUnder = () => {
    const [underpart, setunder]=useState()
    useEffect(()=>{
        fetch('/under.json')
        .then(res => res.json())
        .then(data => setunder(data))
    },[])
    return [underpart]
};

export default UseUnder;