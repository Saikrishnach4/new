import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { ReactDOM } from 'react';
import Post from "./post/post.js";
import makeStyles from './styles';

const Posts = ({ setcurrentid }) => {
  const posts = useSelector((state) => state.posts);
  const classes = makeStyles();

  return (
    !posts.length ? <h3>need to Enter</h3>: (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setcurrentid={setcurrentid} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;