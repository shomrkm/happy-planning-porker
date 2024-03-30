// 'use client'

import React from 'react';

import { Button } from '../../atoms/Button';

export const Header: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 flex h-14 w-full items-center bg-primary p-4">
      <h1 className="text-lg text-gray-700">Happy Planning Porker</h1>
      <Button className="ml-auto">Sign in</Button>
    </header>
  );
};
