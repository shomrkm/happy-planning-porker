import React from "react";

import { Button } from "../atoms/Button";

export const Header = async () => {
  return (
    <header className="flex bg-primary fixed p-4 top-0 left-0 items-center w-full h-14">
      <h1 className="font-bitter text-lg">Happy Planning Porker</h1>
      <Button className="ml-auto">Sign in</Button>
    </header>
  );
};
