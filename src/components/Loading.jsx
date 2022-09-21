import React from "react";
import { InfinitySpin } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <InfinitySpin width="80" height="550" color="#00bfff" />
    </div>
  );
};
