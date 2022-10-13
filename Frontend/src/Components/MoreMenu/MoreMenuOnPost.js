
// อย่าลบบรรทัดนี้ มันจำเป็นต้องใช้ => import { Dropdown } from 'bootstrap'; 
import { Dropdown } from 'bootstrap';
import React, { useState } from 'react'
import './MoreMenuOnPost.css'
import axios from "axios";
import DeleteModal from '../Modal/Modal';
import EditPostModal from '../Modal/EditPostModal';


const MoreMenuOnPost = (prop) => {

    const [showEditModal, setShowEditModal] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [post, setPost] = useState(prop.post)
    const currentUserId = localStorage.getItem('UID')
    const isMyPost = currentUserId==post.PosterId;
    const onDelete = () => {
        var d = new Date();
        {
            axios.post('http://127.0.0.1:5000/DeletePost',
            {
                postId: post.PostId,
                deletedAt:  d.toDateString()+"  "+String(d.getHours())+":"+String(d.getMinutes())+":"+String(d.getSeconds()),
            })
            .then( res => {
                console.log('DeletePost',res)
            })
        }
        prop.setStateUpdate(!prop.stateUpdate)
    }
    const updatePost = (newPostDetail) => {
        var d = new Date();
        axios.post('http://127.0.0.1:5000/UpdatePost',
        {
            postDetail: newPostDetail,
            lastUpdate: d.toDateString()+"  "+String(d.getHours())+":"+String(d.getMinutes())+":"+String(d.getSeconds()),
            postId: post.PostId
        }).then( res =>{
            console.log(res)
        })
        setShowEditModal(false)
        window.location.reload()
    }

    return(
        <div>
            <div class="dropdown ">

                <button className='btn-more-menu' class="btn  dropdown " type="button" id="btn-more-menu" data-bs-toggle="dropdown"  aria-expanded="true">
                    <img className='img-more-menu' src ='/images/more-menu.svg'/>
                </button>

                <ul class="dropdown-menu dropdown-menu-end" id="more-menu-dropdown" aria-labelledby="user-navbar-dropdownMenuButton">
                    {(isMyPost) && <li><a class="dropdown-item" href="#">Solved</a></li>}
                    {(isMyPost) && <li><hr class="dropdown-divider"/></li>}
                    {(isMyPost) && <li><a class="dropdown-item" onClick={()=>setShowEditModal(true)}>Edit</a></li>}
                    {(isMyPost) && <li><a class="dropdown-item" onClick={()=>setShowModal(true)}>Delete</a></li>}
                    {(!isMyPost) && <li><a class="dropdown-item" href="#">Report</a></li>}
                </ul>

                <DeleteModal 
                    show={showModal} 
                    onClickClose={()=>setShowModal(false)} 
                    onClickConfirm={()=>prop.onDelete(post)}
                    title={"Delete your post"}
                    body={"Are you sure to delete post?"}
                />
                <EditPostModal
                    show={showEditModal} 
                    onClickClose={()=>setShowEditModal(false)} 
                    onClickConfirm={(newPostContent)=>{updatePost(newPostContent)}}
                    title={"Edit your post"}
                    body={post.PostDetail}
                />
            </div>
        </div>
    )
}

export default MoreMenuOnPost