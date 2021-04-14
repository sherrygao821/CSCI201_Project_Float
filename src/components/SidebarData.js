import React from 'react';
import homeButton from './icons/home.png'
import dmsButton from './icons/dms.png'
import notificationsButton from './icons/notifications.png'
import profileButton from './icons/profile.png'
import addButton from './icons/add.png'


export const SidebarData = [
    {
        path: '',
        icon: <img src={addButton} alt = "Add Post" draggable="false" />,
    },
    {
        path: '/',
        icon: <img src={homeButton} alt = "Home" draggable="false" />,
    },
    {
        path: '/dms',
        icon: <img src={dmsButton} alt="Dms" draggable="false" />,
    },
    {
        path: '/notifications',
        icon: <img src={notificationsButton} alt = "Notification" draggable="false" />,
    },
    {
        path: '/profile',
        icon: <img src={profileButton} alt = "Profile" draggable="false" />,
    }
];