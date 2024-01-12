"use client"

import  CreateServerModal from "@/components/modal/create-server-modal"
import { useEffect, useState } from "react"
import InviteModal from "@/components/modal/invite-modal"
import EditServerModal from "@/components/modal/edit-server-modal"
import ManageMemberModal from "@/components/modal/manage-member-modal"
import CreateChannelModal from "@/components/modal/create-channel-modal"
import LeaveServer from "../modal/leave-server-maodal"
import DeleteServer from "../modal/delete-server-modal"
import DeleteChannel from "../modal/delete-channel-modal"
import EditChannelModal from '@/components/modal/edit-channel-modal'
export const ModalProvider = () =>{

    const [isMounted, setIsMounted]  = useState(false)

    useEffect(() =>{
        setIsMounted(true)
    }, [])


    return (
        <>
        <CreateServerModal/>
        <InviteModal/>
        <EditServerModal/>
        <ManageMemberModal/>
        <CreateChannelModal/>
        <LeaveServer/>
        <DeleteServer/>
        <DeleteChannel/>
        <EditChannelModal/>
        </>
    )
}