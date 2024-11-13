import React from 'react';
import BottomNav from './BottomNav';
import { Outlet } from 'react-router-dom';


const HomePage = () => (
    <div>
        <Outlet />
        <BottomNav />


    </div>
);

export default HomePage;
