"use server";

import {nanoid} from 'nanoid';
import { liveblocks } from '../liveblocks';
import { revalidatePath } from 'next/cache';
import { parseStringify } from '../utils';

export const createDocument = async ({userId, email}: CreateDocumentParams) => {
    const roomId = nanoid()

    try{
        const metadata = {
            creatorId: userId,
            email, 
            title: 'untitled'
        }
        const usersAccesses: RoomAccesses = {
            [email]: ['room:write']
        }



        const room = await liveblocks.createRoom(roomId, {
            metadata,
            usersAccesses,
            defaultAccesses:['room:write']
        } );

        revalidatePath('/');

        return parseStringify(room)

    }catch(err){
        console.log(`Error happened while creating a room: ${err}`)
    }
}

export const getDocument = async ({roomId, userId}: {roomId: string, userId:string}) => {
    try{
        const room = await liveblocks.getRoom(roomId);

    const hasAccess = Object.keys(room.usersAccesses).includes(userId);
    if(!hasAccess){
        throw new Error("you have not access to this Document")
    }

    return parseStringify(room)
    } catch(err) {
        console.log("Error happened while getting the room")
    }
}