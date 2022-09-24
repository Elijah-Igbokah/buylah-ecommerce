import React from 'react';
import './homepage.styles.scss';


export const HomePage = () =>(
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='menu-title'>HATS</h1>
                    <span className='menu-subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='menu-title'>JACKETS</h1>
                    <span className='menu-subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='menu-title'>SNEAKERS</h1>
                    <span className='menu-subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='menu-title'>WOMENS</h1>
                    <span className='menu-subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='menu-title'></h1>
                    <span className='menu-subtitle'></span>
                </div>
            </div>
        </div>
    </div>
)