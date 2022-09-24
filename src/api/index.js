import axios from "axios";


const url="http://localhost:3000/";
export const fetchposts=()=>axios.get(url);
export const createpost=(newpost)=>axios.post(url,newpost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);