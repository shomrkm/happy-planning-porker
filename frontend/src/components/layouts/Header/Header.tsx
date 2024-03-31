import React from 'react';

import { SignInDialog } from '@/components/organisms/SignInDialog/SignInDialog';
import { getMe } from '@/services/server/users/getMe';
import { UserIconWithEmail } from '@/components/organisms/UserIconWithEmail/UserIconWithEmail';
import { Logout } from '@/components/organisms/Logout/Logout';

export const Header: React.FC = async () => {
  const me = await getMe();
  console.log(me);

  return (
    <header className="fixed left-0 top-0 flex h-14 w-full items-center bg-primary p-4">
      <h1 className="text-lg text-gray-700">Happy Planning Porker</h1>
      <div className="ml-auto">
        {me ? (
          <div className="flex">
            <UserIconWithEmail user={me} />
            <Logout />
          </div>
        ) : (
          <SignInDialog />
        )}
      </div>
    </header>
  );
};
