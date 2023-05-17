import React, { useState } from 'react';
import './ViewAllUsersPage.css';


const ViewAllUsersPage = () => {
  const [users, setUsers] = useState([
    { _id: 1, name: 'John Doe' },
    { _id: 2, name: 'Jane Smith' },
    { _id: 3, name: 'Bob Johnson' },
  ]);

  return (
    <div className="container">
      <h1>All Users</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewAllUsersPage;
