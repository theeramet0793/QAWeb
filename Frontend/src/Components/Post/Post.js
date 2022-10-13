import { useState } from "react";
import AddComment from "../Comment/AddComment";
import CountComment from '../PostFooter/CountComment'
import SortComment from "../PostFooter/SortComment";
import FollowPost from "../PostFooter/FollowPost";
import HideComment from "../PostFooter/HideComment";
import PostHeader from "../PostHeader/PostHeader"
import TextareaAutosize from 'react-textarea-autosize';
import './Post.css'


const Post = (prop) => {

    const [post, setPost] = useState(prop.post)
    const [hideComment, setHideComment] = useState(false)

    const onHide = () => {
        setHideComment(!hideComment)
    }

     console.log('post=',post)

    return(
        <div className="Post">
            
            <div className="post-header"> 
                <PostHeader post={post}  onDelete={prop.onDelete}/>
            </div>

            <div className="post-body">
                <TextareaAutosize className='post-postdetail-container' disabled>
                    {post.PostDetail}
                </TextareaAutosize>
            </div>

            <div className="post-footer">

                <CountComment/>

                <SortComment/>

                <FollowPost/>

                <HideComment onHide={onHide}/>

            </div>

            <div className="post-comment-section">
                <AddComment post={post} hideComment={hideComment}/>
            </div>

        </div>
    )   
}

export default Post;