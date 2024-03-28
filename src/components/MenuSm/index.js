import { Link } from 'react-router-dom'
import React, { useState,useContext } from 'react';
import { AiFillHome, AiFillFire } from 'react-icons/ai'
import { FaGamepad } from 'react-icons/fa'
import { MenuContext } from '../../context/themecontext';

import './index.css'

const MenuSm = () => {
    const { activeTab, onChange } = useContext(MenuContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }



    return (

        <div className="menu-small">
            <div className='header'>
                <div className=''>
                    <img src="https://images-workbench.99static.com/8knarSwhHvBUEmHTUJaL8m4tYR0=/http://s3.amazonaws.com/projects-files/167/16748/1674816/ba553e35-f5f6-4667-954a-88769820f08d.png" alt='logo' className='logo-sm' />
                </div>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <div className={`menu-links ${isOpen ? 'open' : ''}`}>
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
        </div>



    )

}

export default MenuSm
