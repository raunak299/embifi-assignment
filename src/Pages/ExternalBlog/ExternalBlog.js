import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PostCard from "../../Components/PostCard/PostCard";


function ExternalBlog(){

   const [externalBlogData,setExternalBlogData]=useState([]);
   const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        (async()=>{
        try{
       const response= await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1e607b4bad374fe3ad834507a0eaef01');
       console.log(response);
         const data =await response.json();
         console.log(data.articles);
         setExternalBlogData(data.articles);
         setLoading(false);
        }
       catch(error){
        console.log(error); }
      })();
    },[]);

    return(
        <div className='external-blog-page'>
        <Navbar/>
         {loading && <h1>Loading !!</h1>}

        {!loading && 
        <div className="blog-list">
            {console.log(externalBlogData,loading)}
        {externalBlogData.map((data,index)=>(
            <a href={data.url}>
            <PostCard key={index} title={data.title} description={data.description} author={data.author} image={data.urlToImage}/>   
             </a>
        ))}
        </div>}


        </div>
    )
}

export default ExternalBlog;