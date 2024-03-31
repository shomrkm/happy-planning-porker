'use client';

import { Button } from '@/components/atoms/Button';
import { getSession } from '@/services/server/sessions/getSession';
import { submitWithVirtualForm } from '@/utils/submitWithVirtualForm';
import React from 'react';

export const GoogleAuthButton: React.FC = () => {
  const handleClick = async () => {
    await getSession();
    submitWithVirtualForm('auth/google_oauth2');
  };
  return (
    <Button variant="secondary" onClick={handleClick}>
      Login with Google Acount
    </Button>
  );
};
