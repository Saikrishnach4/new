import * as api from "../api";
import Post from "../components/posts/post/post";

export const getposts=()=>(dispatch)=>{
    try {
        const {data}=api.fetchposts();
    dispatch({type: "FETACH_ALL",payload:data});
    } catch (err) {
    console.log(err);    
    }
    
  
};
export const createpost=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.createpost(Post);
        dispatch({type:"CREATE",payload:data});
    } catch (error) {
        console.log(error);
    }
};
export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: "DELETE", payload: id });
    } catch (error) {
      console.log(error);
    }
};