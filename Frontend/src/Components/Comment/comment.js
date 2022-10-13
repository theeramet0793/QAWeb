
import axios from "axios";
import { useEffect, useState } from "react";
import './Comment.css'
import TextareaAutosize from 'react-textarea-autosize';
import MoreMenuOnComment from "../MoreMenu/MoreMenuOnComment";

const Comment = (prop) =>{

    const [comments, setComments] = useState([])
    const [updateState, setUpdateState] = useState(false)
    const [isDisable, setIsDisable] = useState(true);

    const getComment = () =>{
        axios.get('http://127.0.0.1:5000/GetComment/'+prop.postId)
        .then( res => {
            console.log('GetComment',res)
            setComments(res.data)
        })
    }

    useEffect( ()=>{ getComment()}, [prop.stateChanger, updateState]);

    return(
        <div>
            {comments.map( function(comment, index){
                return(
                    <div key={index} className="comment-container">
                        <div className="commenter-profile">
                            <img className="post-img-commenter-icon" src='images/profile-picture.png'></img>
                        </div>
                        <div className="comment-detail-container">
                            <div className="commenter-detail">
                                <span className='commenter-name'>{comment.CommenterName}</span>
                                <span className='comment-createdAt'>{comment.LastUpdate}</span>
                                <div className='more-menu-on-comment'>
                                    <MoreMenuOnComment 
                                    comment={comment} 
                                    updateState={updateState} 
                                    setUpdateState={setUpdateState}
                                    setIsDisable={()=>setIsDisable(false)}
                                    />
                                </div>
                            </div>
                            <TextareaAutosize className="comment-detail" disabled={isDisable}>
                                {comment.CommentDetail}
                            </TextareaAutosize>
                        </div>

                    </div>
                )
            })
            }
        </div>
    )
}

export default Comment;