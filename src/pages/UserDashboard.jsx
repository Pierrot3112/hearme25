import React, { useEffect, useState } from 'react';
import userService from '../Auth/services/userService';

const UserDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
