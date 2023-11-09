'use client';

import Image from 'next/image';
import { IoIosStar, IoMdHeart, IoMdCart } from 'react-icons/io';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { calculatePercentage } from '@/helpers';
import FormatedPrice from '@/helpers/FormatedPrice';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/shoppingSlice';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProductsData = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const startArray = Array.from({ length: item?.rating }, (_, index) => (
    <span key={index} className="text-yellow-500">
      <IoIosStar />
    </span>
  ));

  return (
    <div className="w-full  overflow-hidden ">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0 }}
        className="border-[1px] border-yellow-400 rounded-lg"
      >
        <a href={`/details/${item._id}`}>
          <div className="w-full h-[300px] group overflow-hidden relative">
            <Image
              src={item?.imageUrls[0]}
              alt="product image"
              className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
              width={500}
              height={500}
            />

            {item?.isPromo && (
              <span className="absolute top-2 right-2  border-[1px] border-yellow-600 font-medium text-xs py-1 px-3 rounded-full bg-black text-yellow-500 group-hover:bg-yellow-600 group-hover:text-white duration-200">
                Promo
              </span>
            )}
            {item?.promoPrice ? (
              <div>
                <div className="absolute top-2 left-2  border-[1px] border-yellow-600 w-fit py-1 px-4 rounded-full text-xs bg-black text-yellow-500 group-hover:bg-yellow-600 group-hover:text-white duration-200">
                  <p>
                    {calculatePercentage(item?.deposit, item?.promoPrice)}%
                    menos
                  </p>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </a>
        <div className=" px-4 py-4 flex flex-col bg-black rounded-b-lg">
          {/* star icons
            <div className="flex items-center gap-x-1">{startArray}</div> */}
          <p className="text-white tracking-widest">{item?.title}</p>
          <p className=" text-yellow-600 text-sm">Desde</p>
          <div className="pricing-class flex fle-row items-center gap-x-2">
            <div className="flex flex-col gap-y-1">
              <p className="font-semibold text-white tracking-wider text-xl">
                <FormatedPrice amount={item?.deposit} />
              </p>
            </div>
            {item?.promoPrice ? (
              <div>
                <div className="flex items-center gap-x-2">
                  <p className="line-through text-sm text-white font-bodyFont">
                    <FormatedPrice amount={item?.promoPrice} />
                  </p>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="">
            <p className="text-xs text-yellow-600">Reserva tu Cirugía</p>
            <p className="font-semibold text-white tracking-wider">
              <FormatedPrice amount={item?.price} />
            </p>
          </div>
          <div className="flex items-center justify-between my-5">
            {/* add to cart button */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.9 }}
              className="bg-yellow-600 px-4 py-2 text-sm flex flex-row justify-between gap-x-2 items-center tracking-wide rounded-full text-slate-100 hover:bg-black hover:text-white duration-500"
              onClick={() =>
                dispatch(addToCart(item)) &&
                toast.success(
                  `${item?.title.substring(0, 15)} se agrego al carrito!`
                ) &&
                router.push('/cart')
              }
            >
              Agregar a carrito
              <IoMdCart className="" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductsData;
