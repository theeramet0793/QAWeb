import { useState } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PostHeader.css'
import MoreMenuOnPost from "../MoreMenu/MoreMenuOnPost";

const PostHeader = (prop) =>{

    const [post, setPost] = useState(prop.post)

    return(
        <div className="post-header-component">
            <div className="post-header-img">
                <img src='/images/profile-picture.png' className="post-img-poster-profile"></img>  
            </div>

            <div className="post-header-name">
                <Row className="justify-content-center">
                    <Col md="auto" className="post-user-name">{post.UserName}</Col>
                    <Col className='post-date'>{post.LastUpdate}</Col>
                </Row>

            </div>

            <div className="post-header-icon">
                <MoreMenuOnPost post={post}/>
            </div>
        </div>
    )
}

export default PostHeader