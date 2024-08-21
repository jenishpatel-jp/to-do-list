import { RedirectToSignIn, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <div className='flex p-2 m-2'> 
        <SignedIn>
            <UserButton appearance={{
              elements: {
                avatarBox:{
                  height: 50,
                  width:50,
                }
              }
            }} />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
    </div>
  )
}

export default Header