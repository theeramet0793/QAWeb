
import {useState} from "react";
import axios from "axios";
import './AddComment.css'
import TextareaAutosize from 'react-textarea-autosize';
import Comment from "../Comment/comment";

const AddComment = (prop) => {

    const [value, setValue] = useState({text:""})
    const [stateChanger, setStateChanger] = useState(false);

    const handleTextInputChange = (event) =>{
        setValue({...value, text: event.target.value})
    }

    const btnClick = () =>{
        var d = new Date()
        axios.post('http://127.0.0.1:5000/CommentByUser ',
        {
            commentDetail: value.text, 
            postId: prop.post.PostId,
            commenterId: localStorage.getItem("UID"),
            createdAt: d.toDateString()+"  "+String(d.getHours())+":"+String(d.getMinutes())+":"+String(d.getSeconds()),
            lastUpdate: d.toDateString()+"  "+String(d.getHours())+":"+String(d.getMinutes())+":"+String(d.getSeconds()),
            isDeleted: false,
        } );
        setValue({text:""})
        setStateChanger(!stateChanger)
    }

    return(
        <div className="write-comment-container">
            <form className="form-comment" >
                <div className="text-area-comment">
                    <TextareaAutosize value={value.text} className="write-comment"  type="text" placeholder="  Write your comment here..." name="postform" onChange={handleTextInputChange}    />
                </div>
                <div id="cover-button-comment">
                    <button id="btn-comment" type="button" onClick={btnClick}>Comment</button>
                </div> 
            </form>

            <div className="post-section-comment">
                {!prop.hideComment && <Comment postId={prop.post.PostId} stateChanger={stateChanger}/>}
            </div>
        </div>
    )
}
export default AddComment;