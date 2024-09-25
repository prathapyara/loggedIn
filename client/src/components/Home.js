import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenu } from '../actions/authActions';
import MainContent from './MainContent'; // Import the MainContent component

const Home = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.menu);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="layout">
        {menu.includes('Dashboard') && <Sidebar />}
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

const Header = () => <div>Header</div>;
const Sidebar = () => <div>Sidebar</div>;
const Footer = () => <div>Footer</div>;

export default Home;
