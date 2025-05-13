import React from 'react';
import ProfileCard from './rofilecard';

function App() {
  const profile = {
    name: "ნიკოლოზი",
    surname: "აბაშიძე",
    photo: "https://i.pravatar.cc/150?img=68", 
    bio: "მე ვარ რეაქტ დეველოპერი დამწყები ეტაპზე. მიყვარს კოდის წერა და ტექნოლოგიები."
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ProfileCard
        name={profile.name}
        surname={profile.surname}
        photo={profile.photo}
        bio={profile.bio}
      />
    </div>
  );
}

export default App;
