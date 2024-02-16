import { useEffect, useState } from "react";

const UseNews = () => {
    const [news , setNews]=useState(null)
    useEffect(()=>{
        fetch('https://collage-website-server.vercel.app/news')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    return [news]
  
};

export default UseNews;