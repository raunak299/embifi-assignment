import { collection, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import './Blog.css'
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
function Blog(){
    const blogId= useParams().blogId;
    const [loading,setLoading] = useState(false);

    const [blogData,setBlogData]=useState([]);
    useEffect(()=>{
         setLoading(true);
        (async()=>{
        const userCollectionRef =collection(db,'blogData');
        const document= await getDoc(doc(userCollectionRef, 'postData'))
         let data =document.data()?.data;
         console.log(data);
         setBlogData(data[blogId])
         setLoading(false);}
         )();
    },[blogId])

    return(
        <div className="blog-page">
            <Navbar />

             <div className="blog-sec">
                {loading && <h1>Loading !!</h1>}
            {!loading && 
                <React.Fragment>
                 <h1>{blogData.title}</h1>
                 <img src={blogData.url} alt='img' />
                <div>{blogData.description}</div>
                <h3>{`Author: ${blogData.author}`}</h3>
                </React.Fragment>}
            </div>
        </div>
    )
}

export default Blog;