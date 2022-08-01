
import axios from "axios";
import { useEffect, useState } from "react";
import '../../Css/PostType/AllPost.css'
import Post from '../Post/Post'

const AllPost = () =>{

    const [posts, setPosts] = useState([])

    const getAllPost = () =>{
        axios.get('http://127.0.0.1:5000/GetAllPost')
        .then( res => {
            console.log(res)
            setPosts(res.data)
            console.log(posts)
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