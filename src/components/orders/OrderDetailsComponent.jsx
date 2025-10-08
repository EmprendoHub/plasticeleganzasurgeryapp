"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import ContainerComponent from "../containers/ContainerComponent";
import Image from "next/image";
import FormatedPrice from "@/helpers/FormatedPrice";
import { resetOrder } from "@/redux/shoppingSlice";
import Link from "next/link";

const OrderDetailsComponent = () => {
  const dispatch = useDispatch();

  const { orderData } = useSelector((state) => state?.shopping);
  const [totalAmnt, settotalAmnt] = useState(0);
  const [totalPending, setTotalPending] = useState(0);

  useEffect(() => {
    let amt = 0;
    let pndg = 0;
    orderData?.order?.map((item) => {
      amt += item.price;
      pndg += item.deposit - item.price;
      return;
    });
    settotalAmnt(amt);
    setTotalPending(pndg);
  }, [orderData.order]);
  return (
    <div className="py-10 w-[80%] mx-auto">
      {orderData?.order && orderData?.order.length > 0 ? (
        <ContainerComponent
          className={
            "mx-auto bg-gray-200 px-10 pt-10 pb-20 flex flex-col rounded-md"
          }
        >
          <div className="title-items-class justify-start">
            <div className="grid grid-cols-7 uppercase text-sm font-medium py-2 border-b-[1px] border-b-gray-300">
              <p className="col-span-4">Procedimientos</p>
              <p className="fñex items-center justify-center">Costo</p>
              <p className="fñex items-center justify-center">Deposito</p>
              <p className="fñex items-center justify-center">Balance</p>
            </div>
            <div className="">
              {orderData?.order?.map((item) => (
                <div
                  className="grid grid-cols-7 text-sm font-medium py-2 border-b-[1px] border-b-gray-300"
                  key={item?._id}
                >
                  <div className="col-span-4 flex items-start text-sm gap-4">
                    <Image
                      src={item?.imageUrls[0]}
                      alt="product image"
                      width={500}
                      height={500}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="">
                      <h3 className="text-xl font-headerFont">{item?.title}</h3>
                      <p>{item?.description.substring(0, 100)}...</p>
                    </div>
                  </div>

                  <p className="flex items-center justify-center">
                    <FormatedPrice amount={item?.deposit} />
                  </p>
                  <p className="flex items-center justify-center">
                    <FormatedPrice amount={item?.price} />
                  </p>
                  <p className="flex items-center justify-center">
                    <FormatedPrice amount={item?.deposit - item?.price} />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="paymment-details-class flex flex-col justify-end mt-20">
            <div className="text-ls font-medium py-2 border-b-[1px] border-b-gray-300">
              <p>Detalles de Pago</p>
            </div>
            <p>
              Pago recibido{" "}
              <span className="text-xl font-semibold">
                <FormatedPrice amount={totalAmnt} />
              </span>
            </p>
            <p>
              Balance Pendiente
              <span className="text-xl font-semibold">
                <FormatedPrice amount={totalPending} />
              </span>
            </p>
          </div>
          {/* <button onClick={() => dispatch(resetOrder())} className='mt-5 border-[1px] border-gray-500 py-1 px-4 font-medium rounded-md hover:border-yellow-600 cursor-pointer duration-500'>Cancelar Pedido</button> */}
        </ContainerComponent>
      ) : (
        <div className="bg-white h-[70vh] mx-auto flex flex-col items-center justify-center gap-y-8">
          <p className=" text-black text-4xl font-headerFont text-center">
            No tienes ordenes pendientes
          </p>
          <Link href={"/servicios"}>
            <button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-yellow-600 duration-500">
              Procedimientos
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsComponent;
