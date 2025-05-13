import React from 'react';

function ProfileCard({ name, surname, photo, bio }) {
  return (
    <div className="max-w-sm rounded-2xl shadow-lg bg-white p-6 text-center space-y-4">
      <img src={photo} alt={`${name} ${surname}`} className="w-32 h-32 rounded-full mx-auto" />
      <h2 className="text-xl font-bold">{name} {surname}</h2>
      <p className="text-gray-700">{bio}</p>
    </div>
  );
}

export default ProfileCard;
