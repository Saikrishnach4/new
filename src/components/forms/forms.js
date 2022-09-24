import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
 import useStyles from "./styles.js"
 import { getposts } from "../../api/index.js";
import { createpost } from "../../api/index.js";
import {updatePost} from "../../api/index.js";


const Form =({currentid,setcurrentid})=>{
    const [postdata,setpostdata]=useState({
        nameofpro:"",price:"",quantity:""
    });
    const posts=useSelector((state)=>currentid?state.posts.find((p)=>p._id===currentid):null);
    const styles = useStyles();
    const dispatch=useDispatch();
    useEffect(()=>{
      if(posts) setpostdata(posts);
    },[posts]);
    const clear = () => {
      setcurrentid(0);
      setpostdata({nameofpro:"",price:"",quantity:"" });
      
    };
    const handlesubmit=(e)=>{
      e.preventDefault()
      if (currentid === 0) {
        dispatch(createpost(postdata));
        console.log(postdata);
        clear();
      } else {
        dispatch(updatePost(currentid, postdata));
        clear();
      }
    };
  return(
     <Paper className={styles.paper}>
    <form autoComplete="off" noValidate className={styles.form} onSubmit={handlesubmit}>
      <Typography variant="h6">products</Typography>
      <TextField name="productname" variant="outlined" label="productname" fullWidth value={postdata.productname} onChange={(e)=>setpostdata({...postdata, name:e.target.value})}/>
      <TextField name="price" variant="outlined" label="price" fullWidth value={postdata.price} onChange={(e)=>setpostdata({...postdata, price:e.target.value})}/>
      <TextField name="quantity" variant="outlined" label="quantity" fullWidth value={postdata.quantity} onChange={(e)=>setpostdata({...postdata, quantity:e.target.value})}/>

      <Button className={styles.buttonsubmit} varient="contained" color="primary" size="large" type="submit" fullWidth>submit</Button>
      <Button  varient="contained" color="secondary" size="small" onClick={clear} fullWidth>clear</Button>
    </form>
  

      </Paper>

  )
};


export default Form;