import { useState } from "react";

const images = [
  "https://placekitten.com/200/200",
  "https://placebear.com/200/200",
  "https://picsum.photos/200"
];

export default function RandomImage() {
  const [url, setUrl] = useState("");

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setUrl(images[randomIndex]);
  };

  return (
    <div className="mt-6">
      <button onClick={handleClick} className="bg-green-500 text-white px-4 py-2">Show Random Image</button>
      {url && <img src={url} alt="Random" className="mt-2" />}
    </div>
  );
}
