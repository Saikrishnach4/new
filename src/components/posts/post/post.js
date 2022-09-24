import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';

import useStyles from "./style.js"
import { deletePost } from '../../../actions/action.js';

const Post =({post,setcurrentid})=>{
    const classes = useStyles();
    const dispatch =useDispatch();
   return(
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.nameofpro}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setcurrentid(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.nameofpro}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.price}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{post.quantity}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
   )
 
    
};


export default Post;