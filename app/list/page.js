"use client";
import React from "react";
import { useRouter } from "next/navigation";
// import Link from "next/link";

function List() {
  const router = useRouter();
  return (
    <div>
      <h1 className="title">상품 목록</h1>

      <p
        className="product"
        onClick={() => {
          router.push("/list/product_1");
        }}
      >
        상품 1 $40
      </p>

      <p className="product">상품 2 $50</p>
    </div>
  );
}

export default List;
