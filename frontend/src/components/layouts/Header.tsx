import React from 'react';

import { Button } from '../atoms/Button';

export const Header = async () => {
  return (
    <header className="fixed left-0 top-0 flex h-14 w-full items-center bg-primary p-4">
      <h1 className="font-bitter text-lg">Happy Planning Porker</h1>
      <Button className="ml-auto">Sign in</Button>
    </header>
  );
};
