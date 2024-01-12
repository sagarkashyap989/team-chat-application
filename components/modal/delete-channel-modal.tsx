"use client";

import qs from "query-string";


import { useParams, useRouter } from "next/navigation";

import { useModal } from "@/hooks/use-modal-store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";

const DeleteChannel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onClose, onOpen, type, data } = useModal();
  const router = useRouter()
  const { server, channel } = data;

  const isModalOpen = isOpen && type === "deleteChannel";

  

  const onClick = async() =>{
    try {
      setIsLoading(true)
      const url = qs.stringifyUrl({
        url: `/api/channels/${channel?.id}`,
        query:{
          serverId :server?.id
        }

      })
      await axios.delete(url)
      onClose();
      router.refresh();
      router.push(`/servers/${server?.id}`)

    } catch (error) {
      console.log(error) 
    }finally{
      setIsLoading(false)
    }
  }



  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Delete Channel
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Are you want to do this, <br/> this, will delete   <span className="font-semibold text-indigo-500">
              #{channel?.name}
            </span> permenently
          
          </DialogDescription>
        </DialogHeader>
          <DialogFooter className="bg-gray-100 px-6 py-4">

            <div className="flex items-center justify-between w-full">

              <Button
                disabled={isLoading}
                onClick={onClose}
                variant= 'ghost'
              >
                  Cancel
              </Button>


              <Button
                disabled={isLoading}
                onClick={onClick}
                variant= 'primary'
              >
                  Confirm
              </Button>

            </div>

          </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteChannel;
