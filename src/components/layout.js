import React from "react";
import "./components.css"

import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar"

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header />
            <Navbar />
            <div className="layout-body">
                <div>{children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout