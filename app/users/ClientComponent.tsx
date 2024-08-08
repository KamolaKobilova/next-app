// app/users/ClientComponent.tsx
"use client"; // Ensure this is a Client Component

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Title, Grid, Card, CardTitle, CardContent } from "./styles"; // Adjust path as necessary
import SearchBar from "./searchbar";
import BackButton from "./components/backButton";

interface User {
  id: number;
  name: string;
  email: string;
}

const ClientComponent: React.FC<{ initialUsers: User[] }> = ({
  initialUsers,
}) => {
  const [userData, setUserData] = useState<User[]>(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredUsers = initialUsers.filter((user) =>
      user.name.toLowerCase().includes(query)
    );
    setUserData(filteredUsers);
  };

  const handleCardClick = (userId: number) => {
    router.push(`/users/${userId}`);
  };

  return (
    <Container>
      <BackButton />
      <Title>Users</Title>
      <SearchBar value={searchQuery} onChange={handleSearch} />
      <Grid>
        {userData.map((user) => (
          <Card key={user.id} onClick={() => handleCardClick(user.id)}>
            <CardTitle>{user.name}</CardTitle>
            <CardContent>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default ClientComponent;
