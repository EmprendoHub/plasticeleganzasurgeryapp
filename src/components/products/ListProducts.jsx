import React from "react";
import ProductsData from "./ProductsData";

const ListProducts = async ({ products }) => {
  return (
    <section className="py-12 mx-auto px-20 md:px-5 lg:px-5 mb-40 ">
      <div className=" mx-auto flex justify-center items-center w-full">
        <div className="flex md:flex-col flex-row  w-[90%]">
          <div className=" md:w-full justify-center items-center gap-x-5">
            <main className=" grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 ">
              {products?.map((product, index) => (
                <ProductsData item={product} key={index} />
              ))}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListProducts;
