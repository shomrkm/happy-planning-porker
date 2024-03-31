'use client';

import { Button } from '@/components/atoms/Button';
import { getSession } from '@/services/server/sessions/getSession';
import { logout } from '@/services/client/sessions/logout';
import React from 'react';

export const Logout: React.FC = () => {
  const handleClick = async () => {
    await getSession();
    await logout();
  };
  return (
    <Button variant="primary" size="sm" onClick={handleClick}>
      Logout
    </Button>
  );
};
