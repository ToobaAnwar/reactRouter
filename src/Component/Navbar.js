import React from 'react';
import { Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav className="nav-wrapper black darken-3">        
        <div className="container">
            <a className="brand-logo">Tooba's Site</a>
            <ul className="right">
                <li><Link to="/posts">Posts</Link></li>
                <li><NavLink to="/comments">Comments</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
        </nav>
    )
}

export default withRouter(Navbar);