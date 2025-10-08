import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { deleteProduct } from "@/redux/shoppingSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import FormatedPrice from "@/helpers/FormatedPrice";
import Image from "next/image";

const CartItem = () => {
  const { productData } = useSelector((state) => state?.shopping);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-xs font-normal md:hidden inline-flex items-center justify-between   bg-gray-200 py-3 px-5">
        <p className="text-black w-1/4">Procedimiento</p>
        <p className="flex items-center justify-start w-1/4">
          Deposito Inicial
        </p>
        <p className="flex items-center justify-center w-1/4">Descripción</p>
        <p className="flex items-center justify-end w-1/4">Costo Total</p>
      </div>
      {/* Generate product */}
      <div className="flex flex-col gap-y-2">
        {productData?.map((item) => (
          <div
            key={item?._id}
            className="w-full bg-gray-300 p-4 flex sm:flex-col flex-row items-center gap-4"
          >
            <div className="flex items-center gap-x-3 w-full ">
              <span
                onClick={() => dispatch(deleteProduct(item?._id))}
                className="text.lg hover:text-red-600 cursor-pointer duration-300"
              >
                <AiOutlineClose />
              </span>
              <Image
                src={item?.imageUrls[0]}
                width={500}
                height={500}
                alt="Imagen de Procedimiento"
                className="w-[50%] sm:w-full md:w-2/3 h-30 object-cover"
              />
            </div>
            {/* Model Value */}
            <div className="w-full flex  justify-start sm:pl-7 ">
              <p className="text-lg font-semibold">
                <FormatedPrice amount={item?.quantity * item?.price} />
              </p>
            </div>
            {/* Title and description */}
            <div className="w-full flex  justify-start sm:pl-7">
              <div className="flex flex-col">
                <p className="text-lg font-semibold justify-start">
                  {`${item?.title.substring(0, 25)}...`}
                </p>
                <p className="text-md justify-start">
                  {`${item?.description.substring(0, 25)}...`}
                </p>
              </div>
            </div>
            <div className="flex gap-x-3 border-[1px] border-slate-300 py-2 px-7 w-auto sm:w-full">
              <p className="text-md ">
                <FormatedPrice amount={item?.deposit} />
              </p>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default CartItem;
