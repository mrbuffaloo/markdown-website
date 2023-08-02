import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <hr/>
            <p>
                &copy; Mike {new Date().getFullYear()}
            </p>
        </div>
    )
}

export default Footer