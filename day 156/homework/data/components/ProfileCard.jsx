import PropTypes from 'prop-types';
import { useState } from 'react';

function ProfileCard({ name, age, following, image }) {
  const [isFollowing, setIsFollowing] = useState(following);

  return (
    <div className="border p-4 text-center rounded">
      <img src={image} className="w-24 h-24 mx-auto rounded-full" />
      <h3 className="font-bold">{name}</h3>
      <p>Age: {age}</p>
      <button onClick={() => setIsFollowing(!isFollowing)} className="btn mt-2">
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  following: PropTypes.bool,
  image: PropTypes.string,
};

export default ProfileCard;
