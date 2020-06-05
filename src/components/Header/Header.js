import React from "react";
import './styles.scss';

const Header = () => (
    <div className="header">
        <div className="header__search">
            <img src="../../assets/icons/search.svg" alt="search"/>
            <input type="text" placeholder="Search transactions, invoices or help" />
        </div>
        <div className="header__user-block">
            <div className="header__icons">
                <img src="../../assets/icons/help.svg" alt="help"/>
                <img src="../../assets/icons/bell.svg" alt="chat"/>
                <img src="../../assets/icons/bell.svg" alt="notification"/>
            </div>
            <div className="header__user">
                <span className="header__user-name">John Doe</span>
                <img src="../../assets/icons/arrow.svg" alt="down"/>
                <img className="header__user-avatar" src="../../assets/icons/avatar.png" alt="user"/>
            </div>
        </div>
    </div>
);

export default Header;