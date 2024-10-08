// app/users/styles.ts

import styled from "styled-components";

// Define breakpoints
const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5em;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px;
  }
`;

export const CardTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5em;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2em;
  }
`;

export const CardContent = styled.div`
  p {
    margin: 5px 0;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 0.9em;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
// Define breakpoints
// const breakpoints = {
//   mobile: "480px",
//   tablet: "768px",
//   desktop: "1024px",
// };

export const SearchBarInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
    padding: 8px;
  }
`;
export const Button = styled.button`
  background-color: green;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;