import { Link } from 'react-router-dom'
import React, { useContext } from 'react';
import { AiFillHome, AiFillFire } from 'react-icons/ai'
import { CiSearch } from "react-icons/ci";
import { FaGamepad } from 'react-icons/fa'
import { MenuContext } from '../../context/themecontext';

import './index.css'

const Menu = () => {
    const { activeTab, onChange } = useContext(MenuContext);



    return ( <div className="main-container">
            <div className='link-container'>
                <div className=''>
                    <img src="https://images-workbench.99static.com/8knarSwhHvBUEmHTUJaL8m4tYR0=/http://s3.amazonaws.com/projects-files/167/16748/1674816/ba553e35-f5f6-4667-954a-88769820f08d.png" alt='logo' className='logo' />
                </div>
                <div className='search-container'>
                    <input type='text' className='search' placeholder='search' />
                    <CiSearch className='search-icon' />
                </div>
                <Link
                    to="/"
                    className={`${activeTab === 'home' ? 'active' : ''} nav-link`}
                    onClick={() => { onChange('home') }}>
                    <div className='item'>
                        <div className='nav-item-container'>
                            <AiFillHome />
                            <p id="HOME" className={`${activeTab === 'home' ? 'active' : ''} caption`}>
                                Home
                            </p>
                        </div>
                    </div>
                </Link>
                <Link
                    to="/graph"
                    className={`${activeTab === 'graph' ? 'active' : ''} nav-link`}
                    onClick={() => { onChange('graph') }}>
                    <div className='item'>
                        <div className='nav-item-container'>
                            <FaGamepad />
                            <p id="GRAPH" className={`${activeTab === 'graph' ? 'active' : ''} caption`}>
                                Task2
                            </p>
                        </div>
                    </div>
                </Link>
                <Link
                    to="/task3"
                    className={`${activeTab === 'task3' ? 'active' : ''} nav-link`}
                    onClick={() => { onChange('task3') }}>
                    <div className='item'>
                        <div className='nav-item-container'>
                            <AiFillFire />
                            <p id="TASK3" className={`${activeTab === 'task3' ? 'active' : ''} caption`}>
                                Task3
                            </p>
                        </div>
                    </div>
                </Link>
                <Link
                    to="/task4"
                    className={`${activeTab === 'task4' ? 'active' : ''} nav-link`}
                    onClick={() => { onChange('task4') }}>
                    <div className='item'>
                        <div className='nav-item-container'>
                            <AiFillFire />
                            <p id="task4" className={`${activeTab === 'task4' ? 'active' : ''} caption`}>
                                Task4
                            </p>
                        </div>
                    </div>
                </Link>

            </div>
            <div>
                <p className='contact'>CONTACT US</p>
                <div className='image-container'>
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                        className='icon'
                    />
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                        className='icon'
                    />
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                        className='icon'
                    />
                </div>
                <p className='caption'>
                    Happy! Trading
                </p>
            </div>
        </div>

    )

}

export default Menu
