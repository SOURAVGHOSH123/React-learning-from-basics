import React from 'react';

const Card = ({ username, btnText = "visit to me" }) => {
  console.log(username, btnText)
  return (
    <div>
      <div className="relative h-[400px] w-[300px] rounded-md">
        <img src="https://images.pexels.com/photos/9324406/pexels-photo-9324406.jpeg?auto=compress&cs=tinysrgb&w=400&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro" className="z-0 h-full w-full rounded-md object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">
            She is an social activist from NewZeland, who is involved in many social activist program. You will know about its details here.
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
            {/* {btnText || "visit to me"} →     // default value */}
            {btnText} →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
