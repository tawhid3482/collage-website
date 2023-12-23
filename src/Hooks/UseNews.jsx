import { useEffect, useState } from "react";

const UseNews = () => {
    const [news , setNews]=useState(null)
    useEffect(()=>{
        fetch('/news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    return [news]
  
};

export default UseNews;