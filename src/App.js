
import './App.css';


import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NewPost from './Pages/NewPost/NewPost';
import Blog from './Pages/Blog/Blog';
import ExternalBlog from './Pages/ExternalBlog/ExternalBlog';
// import Navbar from './Components/Navbar/Navbar';

function App() {



  return (
 <React.Fragment>
     <Switch>

      <Route path='/home' exact>
         <Home></Home>
      </Route>

      <Route path='/add-blog' exact>
          <NewPost/>
      </Route>

      <Route path='/external-blog' exact>
          <ExternalBlog/>
      </Route>

      <Route path='/blog/:blogId' exact>
          <Blog/>
      </Route>

      <Route path='*'>
         <Home></Home>
      </Route>

     </Switch>
  </React.Fragment>
  );
}

export default App;
