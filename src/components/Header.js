import React from 'react'

import logo from '../assets/images/iterLogo.png';

const Header = (props) => (
    <header id="header" className="alt">
       { <span className="logo"><img src={logo} alt="" /></span>}
        <h1>Iter Canada</h1>
        <p>Dedicated to the study and teaching of the Middle Ages and Renaissance</p>
    </header>
)

export default Header
