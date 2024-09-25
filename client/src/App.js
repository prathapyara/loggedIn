// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/profile" component={Profile} />
              <Route path="/my-tasks" component={MyTasks} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/help" component={Help} />
              <Route path="/team-management" component={TeamManagement} />
              <Route path="/project-overview" component={ProjectOverview} />
              <Route path="/user-management" component={UserManagement} />
              <Route path="/role-management" component={RoleManagement} />
              <Route path="/reports" component={Reports} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
