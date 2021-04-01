import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(){
    return <Link to="/" className="Navber-color"><div className="Navber" >My Diary</div></Link>
}

export default Navbar;