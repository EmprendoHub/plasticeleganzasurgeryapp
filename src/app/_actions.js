"use server";
import { localproducts } from "@/data/localproductsdatta";

export const getOneLocalProduct = async (_id) => {
  try {
    const product = localproducts.find((obj) => obj._id === _id);
    return product;
  } catch (error) {
    console.log(error);
  }
};
