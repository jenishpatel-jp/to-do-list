import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <div className='flex p-2 m-2'> 
        <SignedIn>
            <UserButton/>
        </SignedIn>
        <SignedOut>
            <Button asChild variant='secondary'>
                <SignInButton/>
            </Button>
        </SignedOut>
    </div>
  )
}

export default Header