import React from "react";
import { useGetUsersQuery } from "../../features/api/apiSlice";
import ProfileCard from "../ProfileCard/ProfileCard";

export default function Pages(props) {
  const { data, isSuccess } = useGetUsersQuery(props.num);
  return (
    <div className="container mx-auto 2xl space-y-5">
      {isSuccess && data.map((x,i) => x.name !== '' && <ProfileCard key={i} data={x} />)}
    </div>
  );
}
