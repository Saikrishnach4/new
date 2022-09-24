
import React, { useEffect } from "react";
import { useState } from "react";
import {createStore,applyMiddleware,compose} from "react-redux";
import {useDispatch} from "react-redux";
import { Container,AppBar,Typography, } from "@mui/material";
import {Route ,Routes,BrowserRouter,Switch, Redirect,} from "react-router-dom";
import { getposts } from "./actions/action.js";
import Register from "./register/register.js";
import Login from "./login/login.js";
import makeStyles from "./style.js";
import Page from "./page/page.js";
import {Grid,Grow} from "@mui/material"
import Posts from "./components/posts/posts.js"
import Form from "./components/forms/forms.js";
import Main from "./main.js";


function App(){
    
    return(
       <div>
      
       <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Main/>}/>
          
            <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/page" element={<Page/>}/>
        </Routes>
       </BrowserRouter>

       </div>

    )
}
export default App;