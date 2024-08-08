"use client"; // Ensure the file is treated as a Client Component

import React, { useState, useEffect } from "react";
import { Container, Title, Grid, Card, CardTitle, CardContent } from "./styles";
import SearchBar from "./searchbar";

interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const initialUsers: User[] = await res.json();

  return initialUsers.map((user) => ({
    ...user,
    age: 25, // Static for demonstration
    gender: "Male", // Assuming gender for demonstration
  }));
};

const ClientComponent: React.FC<{ initialUsers: User[] }> = ({
  initialUsers,
}) => {
  const [userData, setUserData] = useState<User[]>(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Handle side effects if needed
  }, [userData]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredUsers = initialUsers.filter((user) =>
      user.name.toLowerCase().includes(query)
    );
    setUserData(filteredUsers);
  };

  return (
    <Container>
      <Title>Users</Title>
      <SearchBar value={searchQuery} onChange={handleSearch} />
      <Grid>
        {userData.map((user) => (
          <Card key={user.id}>
            <CardTitle>{user.name}</CardTitle>
            <CardContent>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Gender:</strong> {user.gender}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Address:</strong> {user.address.street},{" "}
                {user.address.suite}, {user.address.city},{" "}
                {user.address.zipcode}
              </p>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

const UsersPage: React.FC = async () => {
  const users = await fetchUsers();
  return <ClientComponent initialUsers={users} />;
};

export default UsersPage;
