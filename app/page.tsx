import Image from "next/image";
import Link from "next/link";
import { Button } from "./users/styles";

import React from "react";

export default function page() {
  return (
    <div>
      <Link href="users">
        <strong>Users list</strong>
      </Link>
    </div>
  );
}
