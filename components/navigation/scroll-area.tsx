"use client"

import {ScrollArea} from '@/components/ui/scroll-area'
import NavigationItem from './navigation-item';

interface ScrollAreaDivProps  {
    servers: { id: string;
        name: string;
        imageUrl: string;
        inviteCode: string;
        profileId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]
}

const ScrollAreaDiv = ({servers}: ScrollAreaDivProps) => {
    return ( 
        
        <ScrollArea className = 'flex-1 w-full'>
            {servers?.map((server) =>(
              <NavigationItem 
              key={server.id}
              id ={server.id} 
              imageUrl = {server.imageUrl}
              name = {server.name}
             />
            ))}

        </ScrollArea>
     );
}
 
export default ScrollAreaDiv;