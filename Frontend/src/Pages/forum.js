
import RightComponent from '../Components/RightComponent'
import UnsolvedPost from '../Components/unsolvedPosts'
import SolvedPost from '../Components/solvedPost'
import AllPost from '../Components/AllPost'
import FilterPost from '../Components/filterPost'
import PostForm from '../Components/postForm'
import Hilight from '../Components/Hilight'

import { useState, useEffect } from 'react'

const Forum = () => {
    const [filter, setFilter] = useState(0)
    return(
        <div className="main-container">

            <div className="forum-top-trending-container">
                    <Hilight/>
            </div>

            <div>
                <div className="forum-filter-container">
                    <FilterPost setFilter={setFilter} />
                </div>
            </div>

            <div className="forum-main-content-container">
                <div className="forum-post-container">{selectedFilter(filter)}</div>
                <div className="forum-sidebar-container">
                    <RightComponent/>
                </div>
            </div>

        </div>
    )
}

function selectedFilter (filter){
    console.log('filter=',filter)
    if(filter==1)
        return(<UnsolvedPost/>)
    
    if(filter==2)
        return(<SolvedPost/>)
    
    if(filter==3)
        return(<AllPost/>)
    
    if(filter==4)
        return(<PostForm/>)
    
}

export default Forum;