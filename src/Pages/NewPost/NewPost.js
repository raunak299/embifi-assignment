import './NewPost.css';
import Form from './Form';
import Navbar from '../../Components/Navbar/Navbar';
import React from 'react';


function NewPost(){
    return(
        <React.Fragment>
        <Navbar/>
        <div className="newpost-page">
            <Form/>
        </div>
        </React.Fragment>
    )
}

export default NewPost;