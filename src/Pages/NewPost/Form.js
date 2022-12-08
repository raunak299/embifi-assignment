
import {  useRef, useState } from 'react';
import './Form.css';
import { storage } from '../../firebase';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useHistory } from 'react-router-dom';

function Form(){

  const [image,setImage]=useState(null);
//   const [formValid,setFormValid]=useState(false);

  
  const [loading,setLoading]= useState(false);
  const history=useHistory();

  const titleRef= useRef();
  const descriptionRef= useRef();
  const authorRef= useRef();

  const userCollectionRef =collection(db,'blogData');
 
  let imgUrl='';
  const imgUpload= ()=>{

    let titleValue=titleRef.current.value;
    let descriptionValue= descriptionRef.current.value;
    let authorValue=authorRef.current.value;

    if(image===null || !titleValue || !descriptionValue || !authorValue ){
        alert('No Field Can be Empty !!')
        return;  }
        setLoading(true);
        let time = new Date;
        let imgName= image.name + time.toString();
        storage.ref(`/images/${imgName}`).put(image)
        .on("state_changed",console.log("img uploaded"),alert,
        ()=>{
            storage.ref("images").child(imgName).getDownloadURL().then((url)=>{
                // console.log(imgUrl);
               imgUrl=url;
            }).then(()=>{
                postHandler();
            })
        });
    
    }

  const postHandler=()=>{
    // imgUpload();
    let titleValue=titleRef.current.value;
    let descriptionValue= descriptionRef.current.value;
    let authorValue=authorRef.current.value;


    try{ 
        const addData=async()=>{
          const document= await getDoc(doc(userCollectionRef, 'postData'));
         let currData =document.data()?.data;
        //  console.log(currData);
         let newData= currData ? [{title:titleValue,description:descriptionValue,author:authorValue,url:imgUrl},...currData] : [{title:titleValue,description:descriptionValue,author:authorValue,url:imgUrl}];
          let ref =await updateDoc(doc(userCollectionRef, 'postData'),  {data: newData}); 
          console.log(ref);
          setLoading(false);
            history.replace('/home');}
          addData();

          
        }   
        catch(error){
            console.log(error);
          }
  }


  return(
     <div className="form-sec">
        {loading && <h1>Loading !!</h1>}
         <div className={`${loading ? 'loading':'form-content'}`}>
         {/* <div className='form-content'> */}
        <h1>New Post</h1>

        <div>
        <label>Title</label>
        <input type='text' ref={titleRef}/>
        </div>

        <div>
        <label>Description</label>
        <textarea ref={descriptionRef}/>
        </div>

        
        <div>
        <label>Author</label>
        <input type='text' ref={authorRef}/>
        </div>

        <div className="img-upload">
            <label>Image</label>
            <input type='file' 
            onChange={(e)=>(setImage(e.target.files[0]))}>
            </input>
        </div>

        {/* <div>{url}</div> */}
 
        <button onClick={imgUpload} >Post</button>
        </div>
     </div>
  );
}

export default Form;