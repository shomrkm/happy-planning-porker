import React from "react";
import Image from "next/image";

export const Header = async () => {
  return (
    <header className="flex bg-primary fixed p-4 top-0 left-0 items-center w-full h-14">
      <h1 className="text-lg">Happy Planning Porker</h1>
    </header>
  );
};
