import React from "react"
import { Link } from "react-router-dom"
import "./MainNav.css"
const MainNav = ()=> {
    return(
        <div className="main-nav">
            <div className="link"><Link to={'/'}>Home</Link></div>
            <div className="link"><Link to={'/'}>about</Link></div>
            <div className="link"><Link to={'/'}>Contact</Link></div>
            <div className="link"><Link to={'/poke-list'}>Pokemon</Link></div>         
        </div>
    )
}
export default MainNav