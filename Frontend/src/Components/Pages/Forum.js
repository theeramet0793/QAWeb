
import RightComponent from '../Sidebar/RightComponent'
import AllPost from '../PostType/AllPost'
import FilterPost from '../Filter/FilterPost'
import PostForm from '../Post/PostForm'
import Hilight from '../TopTrend/Hilight'
import './Forum.css'
import { useState, useEffect } from 'react'

const Forum = () => {
    const [filter, setFilter] = useState(0)
    return(
        <div className="forum-page-container">

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
    if(filter===1)
        return(<div></div>)
    
    if(filter===2)
        return(<div></div>)
    
    if(filter===3)
        return(<AllPost/>)
    
    if(filter===4)
        return(<PostForm/>)
    
}

export default Forum;