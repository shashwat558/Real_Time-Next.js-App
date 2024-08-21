"use client";
import Loader from '@/components/Loader';
import {ClientSideSuspense, LiveblocksProvider, RoomProvider} from '@liveblocks/react'

const Provider = ({children}: {children: React.ReactNode}) => {
  return (
    
     <LiveblocksProvider authEndpoint='/api/liveblocks-auth'>
      
        <ClientSideSuspense fallback={<Loader/>}>
          {children}
        </ClientSideSuspense>
    
    </LiveblocksProvider>
    
  )
}

export default Provider