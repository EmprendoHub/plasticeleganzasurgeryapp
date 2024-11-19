import React from "react";
import ContactForm from "./ContactForm";
import { getCookiesName } from "@/helpers";
import { cookies } from "next/headers";

const ContactCompnt = async () => {
  //set cookies
  const nextCookies = cookies();
  const cookieName = getCookiesName();
  const nextAuthSessionToken = nextCookies.get(cookieName);
  const cookie = `${cookieName}=${nextAuthSessionToken?.value}`;

  return (
    <div className="flex flex-row md:flex-col ">
      <div className="w-full z-10">
        <div className=" w-[70%] sm:w-[95%] mx-auto pb-20 mt-10">
          <ContactForm cookie={cookie} />
        </div>
      </div>
    </div>
  );
};

export default ContactCompnt;
