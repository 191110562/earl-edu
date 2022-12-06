import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import Navigation from "./Navigation";

export default function Home() {
  const { currentUser } = useAuthContext();

  return (
    <div>
      <Navigation />
      <h1>Home </h1>
      {currentUser && currentUser.email}
    </div>
  );
}
