"use client";
import { useRouter } from "next/navigation";

type ProductDetailProps = {
  params: {
    id: string;
  };
};

export default function ProductDetail({ params } : ProductDetailProps ) {
  const router = useRouter();
  const { id } = params;

  const item = {
    id,
    name: `Product ${id}`,
    description: `Details of product ${id}`,
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
