import React, { useState } from "react";
import data from "./data.json";
import "./Admin.scss";

const UsersTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleMouseEnter = (id) => setHoveredRow(id);
  const handleMouseLeave = () => setHoveredRow(null);

  return (
    <div className="users-table-container">
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom Complet</th>
            <th>Date</th>
            <th>Points</th>
            <th>Niveau</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user, index) => (
            <tr
              key={user.id}
              className={`row ${index % 2 === 0 ? "even" : "odd"} ${
                hoveredRow === user.id ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(user.id)}
              onMouseLeave={handleMouseLeave}
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.date}</td>
              <td>{user.points}</td>
              <td>{user.level}</td>
              <td className="actions">
                <button className="edit-btn">✏️</button>
                <button className="delete-btn">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
