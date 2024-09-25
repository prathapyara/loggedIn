// src/components/Sidebar.js
import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const userRole = useSelector((state) => state.user.role);
  const menuItems = getMenuItems(userRole);

  return (
    <aside className="sidebar">
      <ul>
        {menuItems.map(item => (
          <li key={item.path}>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

// Sample function to determine menu items based on user role
const getMenuItems = (role) => {
  switch (role) {
    case 'Admin':
      return [
        { path: '/', label: 'Dashboard' },
        { path: '/user-management', label: 'User Management' },
        { path: '/role-management', label: 'Role Management' },
        { path: '/reports', label: 'Reports' },
      ];
    case 'Manager':
      return [
        { path: '/', label: 'Dashboard' },
        { path: '/team-management', label: 'Team Management' },
        { path: '/project-overview', label: 'Project Overview' },
        { path: '/reports', label: 'Reports' },
      ];
    case 'User':
      return [
        { path: '/', label: 'Dashboard' },
        { path: '/profile', label: 'Profile' },
        { path: '/my-tasks', label: 'My Tasks' },
        { path: '/notifications', label: 'Notifications' },
        { path: '/help', label: 'Help' },
      ];
    default:
      return [];
  }
};

export default Sidebar;
