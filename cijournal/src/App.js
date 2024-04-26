import './App.css';
import Journal from './Components/journal';
import React from 'react';
import { AuthProvider } from './authContext';
import Login from './login';
import UserProfile from './userProfile';


function App() {
  return (
    <AuthProvider>
      <div>
        <h1>My App</h1>
        <Login />
        <UserProfile />
        <Journal/>
      </div>

    </AuthProvider>
  );
}

export default App;
