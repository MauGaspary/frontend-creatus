import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'; 

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:3000/users', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="home-container">
      <h1>Usuários</h1>
      <table>
        <thead>
          <tr>
            <th>NOME</th>
            <th>EMAIL</th>
            <th>NÍVEL DE ACESSO</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
