import ImageGallery from "@/components/galleries/ImageGallery";
import React from "react";
import AnimatedText from "@/components/texts/AnimatedText";

const GalleryPage = () => {
  return (
    <div className="pt-10">
      <AnimatedText
        text={`Explora nuestra galería de pacientes `}
        text2={`Satisfechos`}
        className="  font-headerFont text-gravel text-center text-4xl"
      />

      <ImageGallery />
    </div>
  );
};

export default GalleryPage;
