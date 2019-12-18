import React from 'react';
import Profile from "./components/profile";
import Login from "./components/login";

export const mainRoute = {
    '/profile': () => <Profile/>,
    '/': () => <Login/>,
    '/login': () => <Login/>
};