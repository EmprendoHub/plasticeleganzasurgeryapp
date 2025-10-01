import React from "react";
import Image from "next/image";
import mainlogoimage from "@/images/Eleganza_Plastic_Surgery_Logo_wide_small.png";
import Link from "next/link";

const LogoComponent = () => {
  return (
    <Link href={"/"}>
      <Image
        width={250}
        height={60}
        priority={true}
        className=""
        alt="Eleganza Plastic Surgery"
        src={mainlogoimage}
      />
    </Link>
  );
};

export default LogoComponent;
