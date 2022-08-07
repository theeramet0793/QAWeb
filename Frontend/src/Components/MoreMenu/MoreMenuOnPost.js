
// อย่าลบบรรทัดนี้ มันจำเป็นต้องใช้ => import { Dropdown } from 'bootstrap'; 
import { Dropdown } from 'bootstrap';
import React, { useState } from 'react'
import './MoreMenuOnPost.css'
import axios from "axios";


const MoreMenuOnPost = (prop) => {

    const [post, setPost] = useState(prop.post)

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
    }

    return(
        <div>
            <div class="dropdown ">

                <button className='btn-more-menu' class="btn  dropdown " type="button" id="btn-more-menu" data-bs-toggle="dropdown"  aria-expanded="true">
                    <img className='img-more-menu' src ='/images/more-menu.svg'/>
                </button>

                <ul class="dropdown-menu dropdown-menu-end" id="more-menu-dropdown" aria-labelledby="user-navbar-dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">Solved</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Edit</a></li>
                    <li><a class="dropdown-item" href="#" onClick={onDelete}>Delete</a></li>
                    <li><a class="dropdown-item" href="#">Report</a></li>
                </ul>

            </div>
        </div>
    )
}

export default MoreMenuOnPost