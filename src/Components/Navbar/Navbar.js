

// import { AuthContext } from '../../Store/AuthContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';
import './Navbar.css'

function Navbar(){

  

  return(
    <div className="Navbar">
      <Link to='/home'>
        <h1><span>Q</span>Blog</h1>
      </Link>
        <div className="Navigation">
        <Link to='/add-blog'>
                <button>Add Blog</button>
        </Link>
        <Link to='/external-blog'>
                <button>External Blogs</button>
        </Link>
        </div>
       
    </div>
  )
}

export default Navbar;