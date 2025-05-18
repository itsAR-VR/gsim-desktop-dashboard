"use client"

import dynamic from "next/dynamic"

// Import the Dashboard component with no SSR
const Dashboard = dynamic(() => import("@/components/dashboard"), { ssr: false })

export default function DashboardWrapper() {
  return <Dashboard />
}
