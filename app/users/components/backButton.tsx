import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../styles"; 

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/"); // navigate to the main page
  };

  return <Button onClick={handleClick}>Back</Button>;
};

export default BackButton;
