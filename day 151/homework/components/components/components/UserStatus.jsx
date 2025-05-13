export default function UserStatus({ loggedIn }) {
    return (
      <h1 className="text-lg font-semibold">
        {loggedIn ? 'Welcome back!' : 'Please Register'}
      </h1>
    );
  }
  