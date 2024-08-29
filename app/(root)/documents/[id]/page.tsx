import CollaborativeRoom from '@/components/CollaborativeRoom'
import { Editor } from '@/components/editor/Editor'
import NavBar from '@/components/NavBar'
import { getDocument } from '@/lib/actions/room.actions'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const Documents = async ({params: {id}}: SearchParamProps) => {
  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in')

  const room= await getDocument({
      roomId: id,
      userId: clerkUser.emailAddresses[0].emailAddress,
    })
    if(!room) redirect('/')
  return (
    <main className='flex w-full flex-col items-center'>
      <CollaborativeRoom roomId={id}
      roomMetadata={room.roommetadata}
       />
    </main>
  )
}

export default Documents