// app/users/page.tsx

import React from "react";
import ClientComponent from "./ClientComponent";
import { User } from "./types";

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const initialUsers: User[] = await res.json();

  // Adding static age and gender for demonstration purposes
  const usersWithAgeAndGender = initialUsers.map((user) => ({
    ...user,
    age: 25, // Static for demonstration
    gender: "Male", // Assuming gender for demonstration
  }));

  return usersWithAgeAndGender;
};

const UsersPage = async () => {
  const initialUsers = await fetchUsers();

  return <ClientComponent initialUsers={initialUsers} />;
};

export default UsersPage;
