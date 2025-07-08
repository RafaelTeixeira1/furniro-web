import React from "react";
import { BrowserRouter } from "react-router-dom";

type CustomProvidersProps = {
  children: React.ReactNode;
};

export const CustomProviders = ({ children }: CustomProvidersProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
