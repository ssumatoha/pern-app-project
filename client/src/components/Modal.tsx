import { title } from "process"
import React from "react"

interface IModalProps {
    children: React.ReactNode,
    title: string
}

export const Modal = ({children, title} : IModalProps) => {
    return (<>
            <div
                className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
            />
            <div className="w-[500px] p5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2 p-4">
                <h1 className="text-2xl text-center mb-2"> { title } </h1>
                { children }
            </div>
        </>
    )
}