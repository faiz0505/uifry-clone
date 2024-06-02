"use client";
import { Button } from "@nextui-org/react";
import React from "react";

const CustomButton = ({ children, text, handleClick, ...props }) => {
  return (
    <Button {...props} onClick={() => handleClick()}>
      {children || text}
    </Button>
  );
};

export default CustomButton;
