import React from 'react';
import { useSelector } from 'react-redux';

const MainContent = () => {
  const menu = useSelector((state) => state.menu.menu);

  return (
    <div className="main-content">
      {menu.includes('Dashboard') && <Dashboard />}
      {menu.includes('Profile') && <Profile />}
      {menu.includes('My Tasks') && <MyTasks />}
      {menu.includes('Team Management') && <TeamManagement />}
      {menu.includes('User Management') && <UserManagement />}
      {menu.includes('Reports') && <Reports />}
    </div>
  );
};

const Dashboard = () => <div>Dashboard Content</div>;
const Profile = () => <div>Profile Content</div>;
const MyTasks = () => <div>My Tasks Content</div>;
const TeamManagement = () => <div>Team Management Content</div>;
const UserManagement = () => <div>User Management Content</div>;
const Reports = () => <div>Reports Content</div>;

export default MainContent;
