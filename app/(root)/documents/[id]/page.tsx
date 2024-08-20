import { Editor } from '@/components/editor/Editor'
import NavBar from '@/components/NavBar'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Documents = () => {
  return (
    <div>
        <NavBar>
            <div className='flex w-fit items-center justify-center gap-2'>
                <p className='document-title'>Share</p>
            </div>
            <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </NavBar>
        <Editor />
    </div>
  )
}

export default Documents