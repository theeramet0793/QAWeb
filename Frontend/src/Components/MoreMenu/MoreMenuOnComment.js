
// อย่าลบบรรทัดนี้ มันจำเป็นต้องใช้ => import { Dropdown } from 'bootstrap'; 
import { Dropdown } from 'bootstrap';
import React, { useState } from 'react'
import './MoreMenuOnComment.css'
import axios from "axios";
import DeleteModal from '../Modal/Modal';


const MoreMenuOnComment = (prop) => {

    const [comment, setComment] = useState(prop.comment)
    const [showModal, setShowModal] = useState(false)
    const currentUserId = localStorage.getItem('UID')
    const isMyComment = currentUserId==comment.CommenterId;

    const onDelete = () => {
        var d = new Date();
        {
            axios.post('http://127.0.0.1:5000/DeleteComment',
            {
                commentId: comment.CommentId,
                deletedAt:  d.toDateString()+"  "+String(d.getHours())+":"+String(d.getMinutes())+":"+String(d.getSeconds()),
            })
            .then( res => {
                console.log('DeleteComment',res)
            })
            prop.setUpdateState(!prop.updateState)
        }
    }

    return(
            <div class="dropdown ">

                <button className='btn-more-menu' class="btn  dropdown " type="button" id="btn-more-menu-comment" data-bs-toggle="dropdown"  aria-expanded="true">
                    <img id='img-more-menu-on-comment' src ='/images/more-menu.svg'/>
                </button>

                <ul class="dropdown-menu dropdown-menu-end" id="more-menu-dropdown" >
                    {(isMyComment) && <li><a class="dropdown-item" onClick={prop.setIsDisable}>Edit</a></li>}
                    {(isMyComment) && <li><a class="dropdown-item" onClick={()=>setShowModal(true)}>Delete</a></li>}
                    {(!isMyComment) && <li><a class="dropdown-item" href="#">Report</a></li>}
                    {(!isMyComment) && <li><a class="dropdown-item" href="#">This comment is answer</a></li>}
                </ul>

                <DeleteModal 
                    show={showModal} 
                    onClickClose={()=>setShowModal(false)} 
                    onClickConfirm={()=>onDelete(prop.post)}
                    title={"Delete your comment"}
                    body={"Are you sure to delete comment?"}
                />

            </div>
    )
}

export default MoreMenuOnComment