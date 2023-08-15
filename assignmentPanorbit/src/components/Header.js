import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const location = useLocation();
  const routeName = location.pathname.substring(1);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen((p) => !p);
  };
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center w-[100%] justify-between h-[50px] border-b-2">
        <div>{routeName}</div>
        <div className="flex items-center gap-2 relative">
          <div
            className="w-[30px] h-[30px] cursor-pointer"
            onClick={handleOpen}
          >
            <img
              src={data.profilepicture}
              alt=""
              width={"100%"}
              height={"100%"}
              className="rounded-full"
            />
          </div>
          <p>{data.name}</p>
          {open && (
            <div className="absolute top-[100%] h-[200px] w-[150px] z-10 bg-white border rounded shadow">
              <div className="p-2 flex flex-col items-center justify-center gap-2">
                <div
                  className="w-[60px] h-[60px] cursor-pointer"
                  onClick={handleOpen}
                >
                  <img
                    src={data.profilepicture}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                    className="rounded-full"
                  />
                </div>
                <p>{data.name}</p>
                <p>{data.email}</p>
                <button
                  className="bg-red-600 p-2 text-white rounded-full font-bold"
                  onClick={handleGoHome}
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
