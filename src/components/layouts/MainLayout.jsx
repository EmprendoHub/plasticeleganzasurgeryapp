"use client";
import React from "react";
import { store, persistor } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import HeaderComponent from "../header/HeaderComponent";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import FooterComponent from "../footer/FooterComponent";
import BackToTopButton from "../buttons/BackToTopButton";
import WhatsAppButton from "../buttons/WhatsAppButton";
import NewFooter from "../footer/NewFooter";

const MainLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SessionProvider>
          <HeaderComponent />
          {children}
          <NewFooter />
          <BackToTopButton />
          <WhatsAppButton />
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
};

export default MainLayout;
