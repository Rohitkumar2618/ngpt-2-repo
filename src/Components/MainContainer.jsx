import React from "react";
import FirstContainer from "./FirstContainer";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  return (
    <div className="w-full h-screen">
      <FirstContainer />
      <SecondaryContainer />
    </div>
  );
};

export default MainContainer;
