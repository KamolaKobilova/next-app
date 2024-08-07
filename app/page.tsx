import Image from "next/image";
import Link from "next/link";

import React from "react";
import ProductCard from "./users/components/ProductCard";

export default function page() {
  return (
    <div>
      page <hr />
      <Link href="users">user</Link>
      <ProductCard />
    </div>
  );
}
