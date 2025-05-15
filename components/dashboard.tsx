"use client"

import { useState } from "react"
import {
  Bell,
  CreditCard,
  Gift,
  Globe,
  Home,
  MessageSquare,
  PhoneCall,
  Plus,
  Radio,
  Settings,
  User,
  Wifi,
} from "lucide-react"
// Using standard <img> and <a> for easier Framer transition
// import Image from "next/image"
// import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataUsageChart } from "./data-usage-chart" // Ensure this component is also mobile-friendly
import { CountryAddOns } from "./country-add-ons" // Ensure this component is also mobile-friendly
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const { state: sidebarState, isMobile, open: isSidebarOpen } = useSidebar();

  let marginLeftClass = "";
  if (!isMobile) {
    if (isSidebarOpen && sidebarState === "expanded") {
      marginLeftClass = "md:ml-[16rem]"; // Corresponds to default --sidebar-width
    } else if (isSidebarOpen && sidebarState === "collapsed") {
      marginLeftClass = "md:ml-[3rem]"; // Corresponds to default --sidebar-width-icon
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background overflow-x-hidden">
        <Sidebar collapsible="icon"> {/* Key for desktop push behavior; mobile uses Sheet */}
          <SidebarHeader className="flex items-center px-4 md:px-6 py-5 border-b">
            <a href="#" className="flex items-center gap-2" onClick={(e) => e.preventDefault()}>
              <Radio className="w-6 h-6 text-primary" />
              <span className="text-lg md:text-xl font-bold">gSIM</span>
            </a>
          </SidebarHeader>
          <SidebarContent>
            <div className="px-2 md:px-3 py-2">
              <h2 className="px-2 md:px-4 pb-2 text-xs font-medium text-muted-foreground">DASHBOARD</h2>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={activeTab === "overview"}
                    onClick={() => setActiveTab("overview")}
                  >
                    <button>
                      <Home className="w-4 h-4" />
                      <span>Overview</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={activeTab === "plans"} onClick={() => setActiveTab("plans")}>
                    <button>
                      <Wifi className="w-4 h-4" />
                      <span>Browse Plans</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={activeTab === "usage"} onClick={() => setActiveTab("usage")}>
                    <button>
                      <CreditCard className="w-4 h-4" />
                      <span>Usage & Billing</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={activeTab === "add-ons"} onClick={() => setActiveTab("add-ons")}>
                    <button>
                      <Globe className="w-4 h-4" />
                      <span>Country Add-ons</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
            <div className="px-2 md:px-3 py-2">
              <h2 className="px-2 md:px-4 pb-2 text-xs font-medium text-muted-foreground">COMMUNICATION</h2>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <button>
                      <PhoneCall className="w-4 h-4" />
                      <span>Voice Calls</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <button>
                      <MessageSquare className="w-4 h-4" />
                      <span>SMS Messages</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
            <div className="px-2 md:px-3 py-2">
              <h2 className="px-2 md:px-4 pb-2 text-xs font-medium text-muted-foreground">ACCOUNT</h2>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <button>
                      <User className="w-4 h-4" />
                      <span>My Profile</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <button>
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
          </SidebarContent>
          <SidebarFooter className="p-2 md:p-4 border-t">
            <Card className="bg-primary/5">
              <CardContent className="p-3 md:p-4">
                <div className="flex flex-col items-center text-center space-y-1 md:space-y-2">
                  <Gift className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  <h3 className="font-medium text-sm md:text-base">Refer a Friend</h3>
                  <p className="text-xs text-muted-foreground">Get $10 credit!</p>
                  <Button className="w-full" variant="default" size="sm" >
                    Share Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </SidebarFooter>
        </Sidebar>

        <div
          className={`flex-1 flex flex-col w-full overflow-x-hidden ${marginLeftClass}`}
        >
          <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b shrink-0">
            <div className="flex items-center gap-2 md:gap-4">
              <SidebarTrigger /> {/* This button toggles the sidebar on mobile */}
              <h1 className="text-base sm:text-lg md:text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="outline" size="icon" className="w-8 h-8 md:w-9 md:h-9">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="gap-1 md:gap-2 text-xs px-2 md:px-3">
                <Plus className="w-3 h-3 md:w-4 md:h-4" />
                Top Up
              </Button>
              <div className="flex items-center gap-1 md:gap-2">
                <img
                  src="https://via.placeholder.com/32"
                  width={isMobile ? 28: 32}
                  height={isMobile ? 28: 32}
                  alt="User avatar"
                  className="rounded-full"
                />
                <div className={`text-sm ${isMobile ? 'hidden sm:block' : ''}`}> {/* Hide on very small screens */}
                  <div className="font-medium text-xs sm:text-sm">John Doe</div>
                  <div className="text-muted-foreground text-xs"> +1 (...) ...</div>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 px-3 sm:px-4 md:px-6 py-4 w-full overflow-y-auto">
            <div className="w-full max-w-screen-xl mx-auto"> {/* Centers content block */}
              {activeTab === "overview" && (
                <div className="space-y-4 md:space-y-6">
                  <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Overview Cards: Reduced padding and text for mobile */}
                    <Card className="border-l-4 border-l-primary">
                      <CardHeader className="pb-2 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
                        <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
                      </CardHeader>
                      <CardContent className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                        <div className="text-lg sm:text-xl md:text-2xl font-bold">Traveler Plan</div>
                        <div className="flex flex-col sm:flex-row sm:justify-between mt-1 sm:mt-2 text-xs">
                          <div className="text-muted-foreground">3GB Data</div>
                          <div className="text-muted-foreground">Valid until 24 Jun 2025</div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                        <Button variant="outline" className="w-full text-xs py-1.5 h-auto sm:text-sm">
                          Manage Plan
                        </Button>
                      </CardFooter>
                    </Card>
                     <Card>
                      <CardHeader className="pb-2 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
                        <CardTitle className="text-sm font-medium">Data Usage</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-1 sm:space-y-2 px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="font-medium">1.8 GB used</span>
                          <span className="text-muted-foreground">3 GB total</span>
                        </div>
                        <Progress value={60} className="h-1.5 sm:h-2" />
                        <div className="text-xs text-muted-foreground">1.2 GB remaining (60% used)</div>
                      </CardContent>
                      <CardFooter className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                        <Button variant="outline" size="sm" className="w-full text-xs py-1.5 h-auto sm:text-sm">
                          Purchase Add-On
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
                        <CardTitle className="text-sm font-medium">Talk & SMS</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-1 sm:space-y-2 px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                        <div className="flex justify-between items-center text-xs sm:text-sm">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                            <span>Voice</span>
                          </div>
                          <span className="font-medium text-right">72 / 120 mins</span>
                        </div>
                        <Progress value={60} className="h-1.5 sm:h-2" />
                        <div className="flex justify-between items-center text-xs sm:text-sm">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                            <span>SMS</span>
                          </div>
                          <span className="font-medium text-right">120 / 200 SMS</span>
                        </div>
                        <Progress value={60} className="h-1.5 sm:h-2" />
                      </CardContent>
                      <CardFooter className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                        <Button variant="outline" size="sm" className="w-full text-xs py-1.5 h-auto sm:text-sm">
                          Add Bundle
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <Tabs defaultValue="data-usage">
                    <TabsList className="grid w-full grid-cols-3 text-xs h-9 sm:text-sm sm:h-10">
                      <TabsTrigger value="data-usage" className="px-1">Data</TabsTrigger>
                      <TabsTrigger value="call-history" className="px-1">Calls</TabsTrigger>
                      <TabsTrigger value="message-history" className="px-1">Msgs</TabsTrigger>
                    </TabsList>
                    <TabsContent value="data-usage" className="mt-4">
                      <Card>
                        <CardHeader  className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
                          <CardTitle className="text-sm sm:text-base md:text-lg">Data Usage</CardTitle>
                          <CardDescription className="text-xs sm:text-sm">Last 30 days</CardDescription>
                        </CardHeader>
                        <CardContent className="px-1 py-2 sm:px-2 md:px-4 md:py-4"> {/* Reduced padding for chart on mobile */}
                          <DataUsageChart />
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="call-history" className="mt-4">
                       <Card>
                        <CardHeader  className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
                          <CardTitle className="text-sm sm:text-base md:text-lg">Call History</CardTitle>
                          <CardDescription className="text-xs sm:text-sm">Recent calls</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3 px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6">
                          {[1, 2, 3].map((i) => ( // Show fewer items on mobile
                            <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                  <User className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <div>
                                  <div className="font-medium text-xs sm:text-sm">+1 (555) 987-654{i}</div>
                                  <div className="text-xs text-muted-foreground">May {14 + i}, 2025</div>
                                </div>
                              </div>
                              <div className="text-xs sm:text-sm">{2 + i}:15 min</div>
                            </div>
                          ))}
                        </CardContent>
                        <CardFooter className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                          <Button variant="outline" className="w-full text-xs py-1.5 h-auto sm:text-sm">
                            View All Calls
                          </Button>
                        </CardFooter>
                      </Card>
                    </TabsContent>
                    <TabsContent value="message-history" className="mt-4">
                      <Card>
                        <CardHeader className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
                          <CardTitle className="text-sm sm:text-base md:text-lg">Message History</CardTitle>
                          <CardDescription className="text-xs sm:text-sm">Recent messages</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3 px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6">
                           {[1, 2, 3].map((i) => ( // Show fewer items on mobile
                            <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                  <User className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <div>
                                  <div className="font-medium text-xs sm:text-sm">+1 (555) 123-765{i}</div>
                                  <div className="text-xs text-muted-foreground">
                                    {i % 2 === 0 ? "Sent" : "Rcvd"} • May {14 + i}
                                  </div>
                                </div>
                              </div>
                              <Badge variant={i % 2 === 0 ? "default" : "secondary"} className="text-xs px-1.5 py-0.5">
                                {i % 2 === 0 ? "Sent" : "Rcvd"}
                              </Badge>
                            </div>
                          ))}
                        </CardContent>
                        <CardFooter className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                          <Button variant="outline" className="w-full text-xs py-1.5 h-auto sm:text-sm">
                            View All Messages
                          </Button>
                        </CardFooter>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              )}

              {activeTab === "plans" && (
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Browse Plans</h2>
                  <Tabs defaultValue="global">
                    <TabsList className="grid w-full grid-cols-3 text-xs h-9 sm:text-sm sm:h-10">
                      <TabsTrigger value="global" className="px-1">Global</TabsTrigger>
                      <TabsTrigger value="regional" className="px-1">Regional</TabsTrigger>
                      <TabsTrigger value="country" className="px-1">Country</TabsTrigger>
                    </TabsList>
                    <TabsContent value="global" className="mt-4">
                      <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {/* Global Plan Cards - apply similar responsive padding/text to Card children */}
                        {/* Example for one card, apply to others */}
                        <Card>
                          <CardHeader className="p-3 sm:p-4">
                            <CardTitle className="text-base sm:text-lg">Starter Plan</CardTitle>
                            <CardDescription className="text-xs sm:text-sm">For short trips</CardDescription>
                          </CardHeader>
                          <CardContent className="p-3 sm:p-4">
                            <div className="text-xl sm:text-3xl font-bold">$9.99</div>
                            <div className="text-muted-foreground text-xs mt-1">Valid 7 days</div>
                            <Separator className="my-2 sm:my-4" />
                            <ul className="space-y-1.5 text-xs sm:text-sm">
                              <li className="flex items-center gap-2"><Wifi className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />1GB Data</li>
                              <li className="flex items-center gap-2"><PhoneCall className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />60m Voice</li>
                              <li className="flex items-center gap-2"><MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />100 SMS</li>
                            </ul>
                          </CardContent>
                          <CardFooter className="p-3 sm:p-4"><Button className="w-full text-xs sm:text-sm py-1.5 h-auto">Select</Button></CardFooter>
                        </Card>
                        {/* Repeat for other global plan cards with responsive adjustments */}
                      </div>
                       <div className="mt-4 md:mt-8">
                        <Card className="bg-primary/5 border-dashed">
                          <CardContent className="p-4 md:p-6">
                            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                              <div className="flex-1 text-center md:text-left">
                                <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">Need a Custom Plan?</h3>
                                <p className="text-xs md:text-sm text-muted-foreground">
                                  Tailored plans for longer stays or specific needs.
                                </p>
                              </div>
                              <Button variant="outline" className="whitespace-nowrap w-full mt-2 md:w-auto md:mt-0 text-xs md:text-sm">
                                Contact Sales
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    <TabsContent value="regional" className="mt-4">
                      <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {/* Regional Plan Cards - apply similar responsive padding/text */}
                      </div>
                    </TabsContent>
                    <TabsContent value="country" className="mt-4">
                      <div className="flex flex-col gap-3 md:gap-4">
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          <h3 className="text-sm sm:text-base md:text-lg font-medium">Select a Country</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
                          {/* Country selection cards - already somewhat responsive */}
                           {[
                            "United States", "Japan", "United Kingdom", "France",
                            "Germany", "Australia", "China", "Canada",
                          ].map((country) => (
                            <Card key={country} className="cursor-pointer hover:border-primary transition-colors">
                              <CardContent className="p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center text-center">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-1 sm:mb-2">
                                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                                </div>
                                <div className="font-medium text-xs sm:text-sm">{country}</div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}

              {activeTab === "usage" && (
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Usage & Billing</h2>
                  <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Usage Cards - apply similar responsive padding/text adjustments */}
                  </div>
                  <div className="mt-4 md:mt-8">
                    <Card>
                      <CardHeader className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
                        <CardTitle className="text-sm sm:text-base md:text-lg">Billing History</CardTitle>
                      </CardHeader>
                      <CardContent className="px-0 sm:px-1 md:px-2">
                        <div className="rounded-md border">
                          <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-xs sm:text-sm">
                              {/* Table content... */}
                            </table>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                        <Button variant="outline" className="w-full text-xs py-1.5 h-auto sm:text-sm">
                          View All Transactions
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              )}

              {activeTab === "add-ons" && (
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Country Add-ons</h2>
                  {/* CountryAddOns component will need its own internal responsive review */}
                  <CountryAddOns />
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
