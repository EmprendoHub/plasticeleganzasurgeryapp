"use client";
import React from "react";
import { useSelector } from "react-redux";
useSelector;
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import trustfactorimage from "@/images/stripe-badge-transparente.webp";
import Image from "next/image";
import Link from "next/link";

const PaypalPaymentForm = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const isLoggedIn = Boolean(session?.user);
  const { productData, userInfo } = useSelector((state) => state.shopping);

  const [totalQty, settotalQty] = useState(0);
  const [totalAmnt, settotalAmnt] = useState(0);
  const [subtotalAmnt, setsubtotalAmnt] = useState(0);
  const [totalTax, settotalTax] = useState(0);
  const [totalPending, setTotalPending] = useState(0);
  const [shippingCost, setshippingCost] = useState(0);

  useEffect(() => {
    let amt = 0;
    let pndg = 0;
    let tax = 0;
    let sub = 0;
    //let taxrate = 16 / 100;
    let taxrate = 0;
    let ship = 0;
    let qty = 0;
    productData.map((item) => {
      sub += item.price;
      tax = sub * taxrate;
      amt = tax + sub + ship;
      qty += item.quantity;
      pndg += item.deposit - item.price;

      return;
    });

    setTotalPending(pndg);
    settotalQty(qty);
    setshippingCost(ship);
    setsubtotalAmnt(sub);
    settotalTax(tax);
    settotalAmnt(amt);
  }, [productData]);

  //=============================== Stripe Payment starts here ============================
  return (
    <div className="w-full bg-white p-10 flex flex-col justify-between ">
      <div className="flex items-center justify-center gap-5">
        <Link href={"https://www.paypal.com/ncp/payment/Z5YRN5QSSNMEN"}>
          <button className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-yellow-700 cursor-pointer duration-500">
            APARTADO $500 USD
          </button>
        </Link>
        <Link href={"https://www.paypal.com/ncp/payment/F4KDFWAFCSXV8"}>
          <button className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-yellow-700 cursor-pointer duration-500">
            APARTADO $10,000 MXN
          </button>
        </Link>
      </div>
      <div className="trustfactor-class">
        <Image
          src={trustfactorimage}
          width={500}
          height={200}
          alt="Stripe Payment"
        />
      </div>
    </div>
  );
};

export default PaypalPaymentForm;
