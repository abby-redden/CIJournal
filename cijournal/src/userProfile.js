// UserProfile.js

import React from 'react';
import { useAuth } from './authContext'

const UserProfile = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please login to view your profile</p>
      )}
    </div>
  );
};

export default UserProfile;
