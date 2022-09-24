
import React, { useEffect } from "react";
import { useState } from "react";
import {createStore,applyMiddleware,compose} from "react-redux";
import {useDispatch} from "react-redux";
import { Container,AppBar,Typography, } from "@mui/material";
import {Route ,Routes,BrowserRouter} from "react-router-dom";
import { getposts } from "./actions/action.js";
import Register from "./register/register.js";
import Login from "./login/login.js";
import makeStyles from "./style.js";
import Page from "./page/page.js";
import {Grid,Grow} from "@mui/material"
import Posts from "./components/posts/posts.js"
import Form from "./components/forms/forms.js";

function Main(){
    const classes = makeStyles();
    const [currentid,setcurrentid]=useState(null);
    
    const dispatch = useDispatch();
    useEffect(()=>{
     dispatch(getposts());
    },[currentid,dispatch]);
    return(
        <Container maxWidth="lg">
<AppBar className={classes.appBar} position="static" color="inherit">
    <Typography className={classes.heading} variant="h2" align="center">products</Typography>
</AppBar>
<Grow in>
    <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
         <Grid item xs={12} sm={7}>
          <Posts setcurrentid={setcurrentid}/>
         </Grid>
         <Grid item xs={12} sm={4}>
         <Form currentid={currentid} setcurrentid={setcurrentid}/>
         </Grid>
        </Grid>
    </Container>
</Grow>
</Container>
    )
}
export default Main;