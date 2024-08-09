import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
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
            <Button asChild variant='secondary' className=' bg-blue-400 text-white hover:bg-blue-700 shadow-lg'>
                <SignInButton/>
            </Button>
        </SignedOut>
    </div>
  )
}

export default Header