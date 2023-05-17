import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Navbar</h1>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                    style={({ isActive }) => {
                                        return {
                                            color: isActive ? "red" : " ",
                                        };
                                    }}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/about"
                                    style={({ isActive }) => {
                                        return {
                                            color: isActive ? "red" : " ",
                                        };
                                    }}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/album"
                                    style={({ isActive }) => {
                                        return {
                                            color: isActive ? "red" : " ",
                                        };
                                    }}
                                >
                                    相簿
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
