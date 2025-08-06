'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

interface Props{
    children: React.ReactNode
}

export default function TanStackProvider({children}:Props) {
    const [qClient] = useState( () => new QueryClient())

    return (
        <QueryClientProvider client={qClient}>{children}</QueryClientProvider>
    )
}