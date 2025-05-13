import React from 'react';
import UserCard from './UserCard';

function UsersList() {
  const users = [
    {
      name: "გიორგი ნადირაძე",
      email: "giorgi@example.com",
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    {
      name: "ნანა ქავთარაძე",
      email: "nana@example.com",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "ლევან ბექაური",
      email: "levan@example.com",
      avatar: "https://i.pravatar.cc/150?img=23"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          email={user.email}
          avatar={user.avatar}
        />
      ))}
    </div>
  );
}

export default UsersList;
