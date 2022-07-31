
import RightComponent from '../Components/Sidebar/RightComponent'
import AllPost from '../Components/PostType/AllPost'
import FilterPost from '../Components/Filter/filterPost'
import PostForm from '../Components/Post/postForm'
import Hilight from '../Components/TopTrend/Hilight'

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
        return(<div></div>)
    
    if(filter==2)
        return(<div></div>)
    
    if(filter==3)
        return(<AllPost/>)
    
    if(filter==4)
        return(<PostForm/>)
    
}

export default Forum;