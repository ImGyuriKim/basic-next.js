"use client";
import React from "react";
import { useRouter } from "next/navigation";

function List() {
  const router = useRouter();
  let 상품 = ["tomato", "pasta", "coconut"];

  return (
    <div>
      <h1 className="title">상품 목록</h1>

      {/* <div
        className="product"
        onClick={() => {
          router.push("/list/product_1");
        }}
      >
        {상품[0]} 40$
      </div>

      <div className="product">{상품[1]} $50</div>
      <div className="product">{상품[2]} $50</div> */}

      {상품.map((el, i) => {
        return (
          <div key={i} className="product">
            <img
              src={`/${el}.jpeg`}
              alt={`${el}`}
              className="product-img"
            ></img>
            {el} $50
          </div>
        );
      })}
    </div>
  );
}

export default List;
