import React from 'react';
import '../static/css/Nabvar.css'


function Navbar() {
    return (
        <>
            <nav className='position-fixed top-0 '>
                <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
                <label class="logo"><img src={require('../static/images/images.png')} alt="" /></label>
                <ul className='mb-0'>
                    <li><a class="active" href="#">КОМПАНИЯ</a></li>
                    <li><a href="#">ФОЙДАЛАР</a></li>
                    <li><a href="#">ХИЗМАТЛАР</a></li>
                    <li><a href="#">ТАРИФЛАР</a></li>
                    <li><a href="#">КОНТАКТЛАР</a></li>
                    <li>
                        <div className='lang'>
                            <div className="uz">
                                <img src={require('../static/images/uzb-flag.png')} alt="" />
                                <p>uz</p>
                            </div>
                            <div className="ru">
                                <img src={require('../static/images/rus-flag.png')} alt="" />
                                <p>ru</p> 
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;