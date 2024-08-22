"use client";
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import { Editor } from '@/components/editor/Editor'
import NavBar from '@/components/NavBar'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
    <ClientSideSuspense fallback={<div>Loading…</div>}>
    <div className='collaborative-room'>
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
    </div>
      
    </ClientSideSuspense>
  </RoomProvider>

  )
}

export default CollaborativeRoom