
import axios from "axios";
import { useEffect, useState } from "react";
import './AllPost.css'
import Post from '../Post/Post'

const AllPost = () =>{

    let [posts, setPosts] = useState([])

    useEffect( ()=>{ getAllPost()}, []);

    const getAllPost = () =>{
        axios.get('http://127.0.0.1:5000/GetAllPost')
        .then( res => {
            console.log('GetAllPost',res)
            setPosts(res.data)
        })
    }

    const onDelete = (post) => {
        var d = new Date()
        
            axios.post('http://127.0.0.1:5000/DeletePost',
            {
                postId: post.PostId,
                deletedAt:  d.toDateString()+"  "+String(d.getHours())+":"+String(d.getMinutes())+":"+String(d.getSeconds()),
            })
            .then( res => {
                console.log('DeletePost',res)
                getAllPost()  
            })

    }

    return(
        <div>
            {posts && posts.map( function(post){
                return(
                    <Post key={post.PostId} post={post} onDelete={onDelete}/>
                )      
            })}
        </div>
    )

}

export default AllPost;