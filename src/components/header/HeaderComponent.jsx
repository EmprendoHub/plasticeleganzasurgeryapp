"use client";
import HeaderContainerComponent from "../containers/HeaderContainerComponent";
import MainMenuComponent from "./MainMenuComponent";

const HeaderComponent = () => {
  return (
    <>
      <HeaderContainerComponent>
        <MainMenuComponent />
      </HeaderContainerComponent>
    </>
  );
};

export default HeaderComponent;
