import AddDocumentBtn from '@/components/AddDocumentBtn'
import NavBar from '@/components/NavBar'
import { Button } from '@/components/ui/button'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const Home = async() => {
  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in');


  const documents = [];
  return (
    <div>
        <main className='home-container'>
            <NavBar className='stiky left-0 top-0'>
                <div className='flex items-center gap-2 lg:gap-4'>
                    Notification
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </NavBar>
            {documents.length > 0 ? (
                <div>

                </div>
            ): (
                <div className='document-list-empty'>
                    <Image 
                    src='/assets/icons/doc.svg'
                    alt='Document'
                    width={40}
                    height={40}
                    className='mx-auto'
                    />
                <AddDocumentBtn 
                userId = {clerkUser.id}
                email = {clerkUser.emailAddresses[0].emailAddress}
                />
                </div>
            )}
        </main>
    </div>
  )
}

export default Home