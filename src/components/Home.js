import React from "react";
import { useAuthContext } from "../contexts/AuthContext";

export default function Home() {
  const { currentUser } = useAuthContext()

  return (
    <div>
      <h1>Home </h1>
      {currentUser && currentUser.email}
    </div>
  );
};
