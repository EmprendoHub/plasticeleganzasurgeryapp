"use client";

import React from "react";
import ContainerComponent from "@/components/containers/ContainerComponent";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "@/components/cart/CartItem";
import { resetCart } from "@/redux/shoppingSlice";
import Link from "next/link";
import PageTransition from "@/components/transitions/PageTransition";
import { ToastContainer, Bounce } from "react-toastify";
import PaypalPaymentForm from "@/components/cart/PaypalPaymentForm";

const CartPage = () => {
  const { productData } = useSelector((state) => state?.shopping);
  const dispatch = useDispatch();
  return (
    <div>
      <PageTransition />
      <ContainerComponent className="p-12 md:p-4 sm:p-2 w-[80%] md:w-[95%] h-full">
        {productData.length > 0 ? (
          <ContainerComponent>
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Carrito de Compra
            </h2>
            <div className="flex flex-col gap-5">
              <CartItem />

              <div className="flex items-center justify-end">
                <button
                  onClick={() => dispatch(resetCart())}
                  className="bg-yellow-600 text-base font-base text-slate-100 py-2 px-6 hover:bg-black hover:text-white duration-200 rounded-sm"
                >
                  Vaciar Carrito
                </button>
              </div>
              {/* Payment Cart */}
              <PaypalPaymentForm />
            </div>
          </ContainerComponent>
        ) : (
          <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4">
            <p className="border-[1px] border-yellow-600 w-full p-2 text-center">
              Tu carrito se encuentra vació.
            </p>
            <Link href={"/servicios"}>
              <button className="bg-darkText text-white py-2 px-6 rounded-md hover:bg-yellow-600 duration-500">
                Regresa a Servicios
              </button>
            </Link>
          </div>
        )}
      </ContainerComponent>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default CartPage;
