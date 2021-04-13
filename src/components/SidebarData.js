import React from 'react';
import homeButton from './icons/home.png'
import dmsButton from './icons/dms.png'
import notificationsButton from './icons/notifications.png'
import profileButton from './icons/profile.png'


export const SidebarData = [
    {
        path: '/',
        icon: <img src={homeButton} alt = "Home" />,
        cName: 'nav-text'
    },
    {
        path: '/dms',
        icon: <img src={dmsButton} alt="Dms" />,
        cName: 'nav-text'
    },
    {
        path: '/notifications',
        icon: <img src={notificationsButton} alt = "Notification" />,
        cName: 'nav-text'
    },
    {
        path: '/profile',
        icon: <img src={profileButton} alt = "Profile" />,
        cName: 'nav-text'
    }
];