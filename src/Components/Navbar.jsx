import React from 'react';
import '../static/css/Nabvar.css'


function Navbar() {
    return (
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
                <label class="logo"><img src={require('../static/images/photo_2_2024-06-07_18-55-39.jpg')} alt="" /></label>
                <ul>
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;