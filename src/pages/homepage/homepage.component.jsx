import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory.components/directory.components';

export const HomePage = () =>(
    <div className='homepage'>
        <div className='nav-bar'>
            <div className='brand-name'>Buylah</div>
            <div>
                <ul>
                    <a href="https://github.com"><li>Men</li></a>
                    <a href="https://github.com"><li>Women</li></a>
                    <a href="https://github.com"><li>About Us</li></a>
                    <a href="https://github.com"><li>Contact Us</li></a>
                </ul>
            </div>
        </div>
        <Directory />
    </div>
)