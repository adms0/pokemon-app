'use client'
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import React from "react"

const queryclient = new QueryClient()

interface QueryClientProps {
  children: React.ReactNode
}

export const ReactQueryProvider: React.FC<QueryClientProps> = ({children}) => {
  return (
    <QueryClientProvider client={queryclient}>
      {children}
    </QueryClientProvider>
  )
}