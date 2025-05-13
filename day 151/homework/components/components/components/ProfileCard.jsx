import React, { useState } from 'react';
import Name from './Name';
import Description from './Description';
import Avatar from './Avatar';

export default function ProfileCard({ name, description, image }) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="bg-white shadow-md p-6 rounded-lg max-w-sm text-center">
      <Avatar image={image} />
      <Name name={name} />
      <Description description={description} />
      <button
        className={`mt-4 px-4 py-2 rounded ${
          following ? 'bg-green-500' : 'bg-blue-500'
        } text-white`}
        onClick={() => setFollowing(!following)}
      >
        {following ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}
