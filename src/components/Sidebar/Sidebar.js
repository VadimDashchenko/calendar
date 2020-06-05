import React from 'react';
import './styles.scss';

const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar__header">
            <span>impekable</span>
        </div>
        <ul className="sidebar__list">
            <li>
                <img className="sidebar__icon" src="../../assets/icons/home.svg" alt="home"/>
                <a href="#">Home</a>
            </li>
            <li>
                <img className="sidebar__icon" src="../../assets/icons/home.svg" alt="home"/>
                <a href="#">Dashboard</a>
            </li>
            <li>
                <img className="sidebar__icon" src="../../assets/icons/inbox.svg" alt="inbox"/>
                <a href="#">Inbox</a>
            </li>
            <li>
                <img className="sidebar__icon" src="../../assets/icons/home.svg" alt="home"/>
                <a href="#">Products</a>
            </li>
            <li>
                <img className="sidebar__icon" src="../../assets/icons/invoices.svg" alt="invoices"/>
                <a href="#">Invoices</a>
            </li>
            <li>
                <img className="sidebar__icon" src="../../assets/icons/home.svg" alt="home"/>
                <a href="#">Customers</a>
            </li>
            <li>
                <img className="sidebar__icon" src="../../assets/icons/home.svg" alt="home"/>
                <a href="#">Chat Room</a>
            </li>
            <li  className="active">
                <img className="sidebar__icon" src="../../assets/icons/calendar.svg" alt="calendar"/>
                <a href="#">Calendar</a>
            </li>
            <li>
                <img className="sidebar__icon" src="../../assets/icons/help.svg" alt="help"/>
                <a href="#">Help Center</a>
            </li>
            <li>
                <img className="sidebar__icon" src="../../assets/icons/settings.svg" alt="settings"/>
                <a href="#">Settings</a>
            </li>
        </ul>
    </div>
);

export default Sidebar;