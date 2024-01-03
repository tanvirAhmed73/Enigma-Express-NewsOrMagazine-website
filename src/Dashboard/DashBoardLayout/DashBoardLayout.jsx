import React from 'react';
import { Outlet } from 'react-router-dom';
import DnavBar from '../D_Navbar/DnavBar';

const DashBoardLayout = () => {
    return (
        <div>
            <DnavBar></DnavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoardLayout;