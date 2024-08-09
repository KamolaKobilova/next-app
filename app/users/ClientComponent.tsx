// app/users/ClientComponent.tsx

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Title,
  Grid,
  Card,
  CardTitle,
  CardContent,
  Pagination,
  PageButton,
} from "./styles";
import SearchBar from "./searchbar";
import BackButton from "./components/backButton";
import { User } from "./types"; // Import the User type

const ClientComponent: React.FC<{ initialUsers: User[] }> = ({
  initialUsers,
}) => {
  const [userData, setUserData] = useState<User[]>(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Change this value to show more/less items per page

  const router = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredUsers = initialUsers.filter((user) =>
      user.name.toLowerCase().includes(query)
    );
    setUserData(filteredUsers);
    setCurrentPage(1); // Reset to first page after search
  };

  const handleCardClick = (userId: number) => {
    router.push(`/users/${userId}`); // Navigate to the user detail page
  };

  const totalPages = Math.ceil(userData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = userData.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container>
      <BackButton />
      <Title>Users</Title>
      <SearchBar value={searchQuery} onChange={handleSearch} />
      <Grid>
        {paginatedUsers.map((user) => (
          <Card key={user.id} onClick={() => handleCardClick(user.id)}>
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
      <Pagination>
        <PageButton onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </PageButton>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <PageButton
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </PageButton>
      </Pagination>
    </Container>
  );
};

export default ClientComponent;
