import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center flex-column h-96">
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="transparent"
        color="#3b82f6"
      />
    </div>
  );
};
