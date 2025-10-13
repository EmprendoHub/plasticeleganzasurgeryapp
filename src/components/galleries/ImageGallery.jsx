"use client";
import React from "react";
import { gallery } from "@/data/gallerydata";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import PageTransition from "../transitions/PageTransition";

const ImageGallery = () => {
  const [galleryimgs, setGalleryImgs] = useState([]);

  useEffect(() => {
    const getData = setTimeout(async () => {
      try {
        const products = await gallery;
        setGalleryImgs(products);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  const [handleImages, setHandleImages] = useState({ img: "", i: 0 });
  const viewImage = (img, i) => {
    setHandleImages({ img, i });
  };

  const imageAction = (action) => {
    let i = handleImages.i;
    if (action === "close") {
      setHandleImages({ img: "", i: 0 });
    }
    if (action === "next") {
      let next_image = galleryimgs[i + 1].image;
      setHandleImages({ img: next_image, i: i + 1 });
    }
    if (action === "prev") {
      let prev_image = galleryimgs[i + 1].image;
      setHandleImages({ img: prev_image, i: i - 1 });
    }
  };
  return (
    <>
      <PageTransition />
      <div className="gallery-container-class">
        {handleImages.img && (
          <div className="w-full h-[100vh] fixed justify-center items-start flex top-12 bg-opacity-40 bg-black duration-500 ease-in-out z-0">
            <div className="relative flex items-center justify-center h-[100%] ">
              <button
                className="px-2 flex flex-col items-center justify-center text-red-600 text-xl bg-white rounded-full absolute top-20 right-16 z-[9999]"
                value="close"
                onClick={() => imageAction("close")}
              >
                x
              </button>
              <button
                className="px-2 flex  items-center justify-center text-yellow-600 text-7xl rounded-full absolute -left-5 z-[9999] cursor-pointer"
                value="close"
                onClick={() => imageAction("prev")}
              >
                {" "}
                <BsChevronLeft />
              </button>

              <motion.img
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                src={`images/${handleImages.img}`}
                alt="Cirugía Plástica en Zamora Michoacan"
                className="w-auto max-h-[80%] max-w-[90%]"
              ></motion.img>
              <button
                className="px-2 text-7xl text-yellow-600 rounded-full z-[9999] absolute -right-5"
                value="close"
                onClick={() => imageAction("next")}
              >
                <BsChevronRight />
              </button>
            </div>
          </div>
        )}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry
            columnsCount={5}
            gutter="20px"
            className="py-20 max-w-[1450px] px-5  mx-auto"
          >
            {galleryimgs.map((item, i) => (
              <motion.img
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
                key={i}
                src={`images/${item.image}`}
                style={{ width: "100%", display: "block" }}
                alt="Cirujano Plástico en Zamora Michoacan"
                onClick={() => viewImage(item.image, i)}
                className="cursor-pointer rounded-2xl shadow-lg shadow-black/20 bg-white"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default ImageGallery;
