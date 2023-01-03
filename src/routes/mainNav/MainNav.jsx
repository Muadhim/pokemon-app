import React from "react"
import { Link } from "react-router-dom"

const MainNav = ()=> {
    return(
        <div className="main-nav">
            <Link to={'/'}>Home</Link> 
            | 
            <Link to={'/poke-list'}>Pokemon List</Link>
        </div>
    )
}
export default MainNav