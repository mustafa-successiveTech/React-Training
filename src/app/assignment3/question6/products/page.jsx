"use client";
import Link from "next/link";

const items = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" }
];

export default function ProductList() {
  return (
    <div>
      <h2>Products</h2>
      {items.map(item => (
        <div key={item.id}>
          <Link href={`/assignment3/question6/products/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
