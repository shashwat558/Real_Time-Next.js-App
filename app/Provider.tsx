"use client";
import Loader from '@/components/Loader';
import { getClerkUsers } from '@/lib/actions/user.action';
import {ClientSideSuspense, LiveblocksProvider, RoomProvider} from '@liveblocks/react'

const Provider = ({children}: {children: React.ReactNode}) => {
  return (
    
     <LiveblocksProvider authEndpoint='/api/liveblocks-auth'
      authEndPoint="/api/liveblocks-auth"
      resolveUsers={async ({userIds}) => {
        const users = await getClerkUsers({userIds});

        return users
      }}
     >
      
      
        <ClientSideSuspense fallback={<Loader/>}>
          {children}
        </ClientSideSuspense>
    
    </LiveblocksProvider>
    
  ) 
}

export default Provider