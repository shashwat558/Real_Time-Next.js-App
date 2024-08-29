"use client";
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import { Editor } from '@/components/editor/Editor'
import NavBar from '@/components/NavBar'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import ActiveCollaboraters from './ActiveCollaboraters';

const CollaborativeRoom = ({roomId, roomMetadata}: CollaborativeRoomProps) => {
  return (
    <RoomProvider id={roomId}>
    <ClientSideSuspense fallback={<div>Loading…</div>}>
    <div className='collaborative-room'>
    <div>
        <NavBar>
            <div className='flex w-fit items-center justify-center gap-2'>
                <p className='document-title'>Share</p>
            </div>
            <div className='flex w-full flex-1 justify-end gap-2 sm:gap-3'>
              <ActiveCollaboraters />
              <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
            </div>
            
        </NavBar>
        <Editor />
    </div>
    </div>
      
    </ClientSideSuspense>
  </RoomProvider>

  )
}

export default CollaborativeRoom