
import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

const AuthButtons = () => {
  return (
    <>
      <SignedOut>
        <div className="flex items-center space-x-2">
          <SignInButton mode="modal">
            <button className="text-gray-700 hover:text-gray-900 transition-colors px-3 py-1 rounded-md hover:bg-gray-100">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="bg-gray-900 text-white px-3 py-1 rounded-md hover:bg-gray-800 transition-colors">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton 
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-8 w-8"
            }
          }}
        />
      </SignedIn>
    </>
  );
};

export default AuthButtons;
