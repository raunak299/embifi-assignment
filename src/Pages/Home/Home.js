import Navbar from "../../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import './Home.css';
import { doc, getDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import PostCard from "../../Components/PostCard/PostCard";
import { Link } from "react-router-dom";

function Home(){

    let [currData,setCurrData] =useState([]);
    useEffect(()=>{
        (async()=>{
        const userCollectionRef =collection(db,'blogData');
        const document= await getDoc(doc(userCollectionRef, 'postData'));
         let newData =document.data()?.data;
         setCurrData(newData);
        console.log(newData)})();
    },[])


    return(
        <div className='home-page'>
        <Navbar/>
        <div className="blog-list">
        {currData.map((data,index)=>(
            <Link to={`/blog/${index}`}>
            <PostCard key={data.title} title={data.title} description={data.description} author={data.author} image={data.url}/>
             </Link>
            
        ))}
        
        </div>
        </div>
    )
}

export default Home;