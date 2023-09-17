'use client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {ReactNode} from "react"
const queryClient = new QueryClient()

interface ProviderProps {
  children: ReactNode
}

const Provider: React.FC<ProviderProps> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default Provider