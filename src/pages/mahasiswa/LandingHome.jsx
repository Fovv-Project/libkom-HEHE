import React from 'react';
import { Link } from "react-router-dom";
const LandingHome = () => {
    return (
        <div>
            <p>Ini halaman landing page</p>
            <Link to={"/mhsProfile"}>Profile</Link>
        </div>
    );
}

export default LandingHome;
