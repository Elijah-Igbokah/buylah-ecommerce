import React from "react";

import "./menu-item.styles.scss";

export const MenuItem = ({title, imageUrl, size}) =>{
    return (
        <div className={ `${size} menu-item` }>
            <div style={{
            backgroundImage: `url(${ imageUrl })`
        }} className="background-image"/>
            <div className='content'>
                <h1 className='menu-title'>{title.toUpperCase()}</h1>
                <span className='menu-subtitle'>SHOP NOW</span>
            </div>
        </div>
       )
}