import React from 'react'
import './compoStyles.css';

function Stylesheets(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylsheets</h1>
        </div>
    )
}

export default Stylesheets
