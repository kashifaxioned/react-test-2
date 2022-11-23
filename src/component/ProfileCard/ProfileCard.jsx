import React from "react";

export default function ProfileCard(props) {
  const data = props.data;
  return (
    <div className="p-12 bg-[#CFF5E7] text-[#594545]">
      <h5 className="text-3xl font-medium">{data.name}</h5>
      <ul className="space-y-2 mt-3 ml-6">
        <li className="flex items-center">
          <h6 className="basis-1/6 text-2xl">Gender</h6>
          <figure>
            <img
              src={
                data.gender === "Male" ? "/image/male.png" : "/image/female.png"
              }
              alt={data.gender}
            />
          </figure>
        </li>
        <li className="flex items-center">
          <h6 className="basis-1/6 text-2xl">Culture</h6>
          {data.culture === "" ? (
            <span className="text-xl pl-7">-</span>
          ) : (
            <span className="text-xl">{data.culture}</span>
          )}
        </li>
        <li className="flex items-center">
          <h6 className="basis-1/6 text-2xl">Also known as</h6>
          {data.aliases.join() === "" ? (
            <p className="text-xl pl-7">-</p>
          ) : (
            <p className="text-xl">{data.aliases.join()}</p>
          )}
        </li>
        <li className="flex items-center">
          <h6 className="basis-1/6 text-2xl">Played By</h6>
          {data.playedBy.join() === "" ? (
            <span className="text-xl pl-7">-</span>
          ) : (
            <span className="text-xl">{data.playedBy.join()}</span>
          )}
        </li>
      </ul>
    </div>
  );
}
