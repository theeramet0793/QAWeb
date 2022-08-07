
import axios from "axios";
import { useEffect, useState } from "react";
import './AllPost.css'
import Post from '../Post/Post'

const AllPost = () =>{

    const [posts, setPosts] = useState([])

    const getAllPost = () =>{
        axios.get('http://127.0.0.1:5000/GetAllPost')
        .then( res => {
            console.log('GetAllPost',res)
            setPosts(res.data)
        })
    }

    useEffect( ()=>{ getAllPost()}, []);
    
    return(
        <div>
            {posts.map( function(post){
                return(
                    <Post post={post}/>
                )      

            })}
        </div>
    )

}

export default AllPost;