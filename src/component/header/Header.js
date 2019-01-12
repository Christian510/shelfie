
import React from 'react';
import './Header.css';
import shelfie_icon from './shelfie_icon.png';

export default function Header(props) {
    return <div>
        <header>
        <div id="logo">
            <img src ="./shelfie_icon.png" alt="Shelfie Icon" />
        </div>
        <ul id="links">
            <li class="header-links">
                <a href="#">About Us</a>
            </li>
            <li class="header-links">
                <a href="#">Our Team</a>
            </li>
            <li class="header-links">
                <a href="#">Our Impact</a>
            </li>
            <li class="header-links">
                <a href="#">Become a Client</a>
            </li>
        </ul>
    </header>
    </div>   
}