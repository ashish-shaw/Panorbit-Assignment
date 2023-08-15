import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const CardDetails = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="flex gap-4 mt-4 p-4">
      <div className="w-[20%] h-full">
        <Sidebar />
      </div>

      <div className="w-[80%]">
        <Header className="w-[100%]" />
        <div className="flex justify-between w-[100%] p-8 gap-[10%]">
          <div className="w-[40%] flex flex-col gap-4 border-r-2">
            <div>
              <div className="flex items-center gap-2 flex-col">
                <div className="w-[180px] h-[180px]">
                  <img
                    src={data.profilepicture}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                    className="rounded-full"
                  />
                </div>
                <p className="text-gray-800 font-bold">{data.name}</p>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <div className="text-gray-500">
                  Username :{" "}
                  <span className="text-gray-800 font-bold">
                    {data.username}
                  </span>{" "}
                </div>
                <div className="text-gray-500">
                  e-mail :{" "}
                  <span className="text-gray-800 font-bold">{data.email}</span>{" "}
                </div>
                <div className="text-gray-500">
                  Phone :{" "}
                  <span className="text-gray-800 font-bold">{data.phone} </span>{" "}
                </div>
                <div className="text-gray-500">
                  Website :{" "}
                  <span className="text-gray-800 font-bold">
                    {data.website}{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="border-t-2 w-[90%]">
              <div className="mt-2 text-center mb-4 text-[20px] text-gray-500">
                Company
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  Name :{" "}
                  <span className="text-gray-800 font-bold">
                    {data.company.name}{" "}
                  </span>
                </div>
                <div>
                  catchphrase :{" "}
                  <span className="text-gray-800 font-bold">
                    {data.company.catchPhrase}{" "}
                  </span>{" "}
                </div>
                <div>
                  bs :{" "}
                  <span className="text-gray-800 font-bold">
                    {data.company.bs}{" "}
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60%] flex flex-col gap-4">
            <div>
              <div className="mb-2 text-[20px] text-gray-500 font-bold">
                Address:
              </div>
              <div className="flex flex-col gap-1 ml-10">
                <div className="text-gray-500">
                  Street :{" "}
                  <span className="text-gray-800 font-bold">
                    {" "}
                    {data.address.street}{" "}
                  </span>
                </div>
                <div className="text-gray-500">
                  Suite :{" "}
                  <span className="text-gray-800 font-bold">
                    {" "}
                    {data.address.suite}{" "}
                  </span>{" "}
                </div>
                <div className="text-gray-500">
                  City :{" "}
                  <span className="text-gray-800 font-bold">
                    {" "}
                    {data.address.city}{" "}
                  </span>{" "}
                </div>
                <div className="text-gray-500">
                  Zipcode :{" "}
                  <span className="text-gray-800 font-bold">
                    {" "}
                    {data.address.zipcode}{" "}
                  </span>{" "}
                </div>
              </div>
            </div>
            <div>
              <div className="w-[100%]">
                <figure>
                  <img
                    src="https://i.stack.imgur.com/HILmr.png"
                    alt=""
                    width={"100%"}
                    height={"100%"}
                  />
                </figure>
                <div className="text-[12px] text-right">
                  Lat: {data.address.geo.lat} Lng: {data.address.geo.lng}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
