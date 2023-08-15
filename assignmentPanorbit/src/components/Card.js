import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ProfileCard() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios("https://panorbit.in/api/users.json")
      .then((response) => {
        setUser(response.data.users);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleClick = (user) => {
    localStorage.setItem("data", JSON.stringify(user));
    navigate("/Profile");
  };

  return (
    <div className="flex absolute top-[20%] left-[32%] shadow-lg">
      <div className="w-[33rem]">
        <div className="bg-gray-100 text-center rounded-t-2xl border">
          <h2 className="font-medium text-lg text-gray-500 py-9">
            Select an account
          </h2>
        </div>
        <div className="h-[30rem] overflow-scroll rounded-b-2xl border">
          <div className="bg-white py-4 px-8">
            {user.map((user, idx) => (
              <div
                className="py-4 border-b-2 flex cursor-pointer"
                key={idx}
                onClick={() => handleClick(user)}
              >
                <img
                  src={user.profilepicture}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div className="py-2 px-3">{user.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
