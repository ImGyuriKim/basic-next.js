"use client";
import React from "react";
import Image from "next/image";
// import tomato from "/public/tomato.jpeg";
// import pasta from "/public/pasta.jpeg";
// import coconut from "/public/coconut.jpeg";
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

      {/* //! import 해준 변수가 들어가는 것이 아닌, 문자열 'tomato'가 들어가므로 */}
      {/* src가 읽히지 않음. */}

      {상품.map((el, i) => {
        return (
          <div key={i} className="product">
            <Image
              src={`/${el}.jpeg`}
              width={100}
              height={100}
              alt={`${el}`}
              className="product-img"
            ></Image>
            {el} $50
          </div>
        );
      })}
    </div>
  );
}

export default List;
