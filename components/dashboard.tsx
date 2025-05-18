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
  Shield,
  User,
  Wifi,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataUsageChart } from "./data-usage-chart"
import { CountryAddOns } from "./country-add-ons"
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
} from "@/components/ui/sidebar"

// Create a separate client component for the dashboard content
function DashboardContent({ activeTab, setActiveTab }) {
  return (
    <div className="flex-1 flex flex-col w-full overflow-x-hidden transition-all duration-300 ease-in-out">
      <header className="flex items-center justify-between h-16 px-2 sm:px-6 border-b shrink-0">
        <div className="flex items-center gap-2 sm:gap-4">
          <SidebarTrigger />
          <h1 className="text-lg sm:text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center gap-1 sm:gap-4">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="gap-1 sm:gap-2 px-2 sm:px-3 text-xs sm:text-sm">
            <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
            Top Up
          </Button>
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              width={32}
              height={32}
              alt="User avatar"
              className="rounded-full w-7 h-7 sm:w-8 sm:h-8"
            />
            <div className="text-xs sm:text-sm hidden sm:block">
              <div className="font-medium">John Doe</div>
              <div className="text-muted-foreground">+1 (555) 123-4567</div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 px-2 sm:px-6 py-3 sm:py-4 w-full overflow-y-auto overflow-x-hidden">
        {activeTab === "overview" && (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid gap-3 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-l-4 border-l-primary">
                <CardHeader className="pb-2 px-3 sm:px-6">
                  <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
                </CardHeader>
                <CardContent className="px-3 sm:px-6">
                  <div className="text-xl sm:text-2xl font-bold">Traveller Plan</div>
                  <div className="flex flex-col sm:flex-row sm:justify-between mt-2 text-xs sm:text-sm">
                    <div className="text-muted-foreground">3GB Data</div>
                    <div className="text-muted-foreground">Valid until 24 Jun 2025</div>
                  </div>
                </CardContent>
                <CardFooter className="px-3 sm:px-6">
                  <Button variant="outline" className="w-full text-xs sm:text-sm">
                    Manage Plan
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2 px-3 sm:px-6">
                  <CardTitle className="text-sm font-medium">Data Usage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 px-3 sm:px-6">
                  <div>
                    <span className="text-xs sm:text-sm font-medium">3.2/5 GB used</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <div className="text-xs text-muted-foreground">1.2 GB remaining (60% used)</div>
                </CardContent>
                <CardFooter className="px-3 sm:px-6">
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    Purchase Data Add-On
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2 px-3 sm:px-6">
                  <CardTitle className="text-sm font-medium">Talk & SMS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 px-3 sm:px-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                      <span className="text-xs sm:text-sm">Voice</span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium">72/120 mins</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                      <span className="text-xs sm:text-sm">SMS</span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium">120/200 SMS</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </CardContent>
                <CardFooter className="px-3 sm:px-6">
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    Add Talk & SMS Bundle
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* How it Works Section */}
            <Card className="bg-primary/5 border-dashed">
              <CardHeader className="px-3 sm:px-6">
                <CardTitle className="text-base sm:text-lg">How gSIM Works</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Get connected in 3 simple steps</CardDescription>
              </CardHeader>
              <CardContent className="px-3 sm:px-6">
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">1. Choose Country</h3>
                    <p className="text-xs text-muted-foreground">Select one of our 7 supported destinations</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">2. Pick a Plan</h3>
                    <p className="text-xs text-muted-foreground">Choose a data+talk+text bundle that fits your needs</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">3. Connect & Talk</h3>
                    <p className="text-xs text-muted-foreground">Install via QR code and enjoy voice, data, and text</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why gSIM Section */}
            <Card>
              <CardHeader className="px-3 sm:px-6">
                <CardTitle className="text-base sm:text-lg">Why Choose gSIM?</CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-6">
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-sm">Regional Coverage</h3>
                      <p className="text-xs text-muted-foreground">Direct partnerships with carriers in 7 countries</p>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-sm">No Surprise Fees</h3>
                      <p className="text-xs text-muted-foreground">Single upfront cost with no hidden charges</p>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-sm">Safe & Secure</h3>
                      <p className="text-xs text-muted-foreground">Data encryption and secure DNS</p>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-sm">Data, Talk & Text</h3>
                      <p className="text-xs text-muted-foreground">Complete solution in one eSIM</p>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-sm">Easy Top-Ups</h3>
                      <p className="text-xs text-muted-foreground">Buy more data or minutes in the app</p>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-sm">Customizable Alerts</h3>
                      <p className="text-xs text-muted-foreground">Set usage notifications and reminders</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="data-usage">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
                <TabsTrigger value="data-usage" className="text-xs sm:text-sm">
                  Data Usage
                </TabsTrigger>
                <TabsTrigger value="call-history" className="text-xs sm:text-sm">
                  Call History
                </TabsTrigger>
                <TabsTrigger value="message-history" className="text-xs sm:text-sm">
                  Message History
                </TabsTrigger>
              </TabsList>
              <TabsContent value="data-usage" className="mt-4">
                <Card>
                  <CardHeader className="px-3 sm:px-6">
                    <CardTitle className="text-base sm:text-lg">Data Usage</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Your data usage for the last 30 days
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 sm:px-6 overflow-x-auto">
                    <div className="min-w-[300px]">
                      <DataUsageChart />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="call-history" className="mt-4">
                <Card>
                  <CardHeader className="px-3 sm:px-6">
                    <CardTitle className="text-base sm:text-lg">Call History</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Your recent calls</CardDescription>
                  </CardHeader>
                  <CardContent className="px-3 sm:px-6">
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center">
                              <User className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="font-medium text-xs sm:text-sm">+1 (555) 987-654{i}</div>
                              <div className="text-xs text-muted-foreground">Outgoing • May {14 + i}</div>
                            </div>
                          </div>
                          <div className="text-xs sm:text-sm">{2 + i}:15</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-3 sm:px-6">
                    <Button variant="outline" className="w-full text-xs sm:text-sm">
                      View All Calls
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="message-history" className="mt-4">
                <Card>
                  <CardHeader className="px-3 sm:px-6">
                    <CardTitle className="text-base sm:text-lg">Message History</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Your recent messages</CardDescription>
                  </CardHeader>
                  <CardContent className="px-3 sm:px-6">
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center">
                              <User className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="font-medium text-xs sm:text-sm">+1 (555) 123-765{i}</div>
                              <div className="text-xs text-muted-foreground">
                                {i % 2 === 0 ? "Sent" : "Received"} • May {14 + i}
                              </div>
                            </div>
                          </div>
                          <Badge variant={i % 2 === 0 ? "default" : "secondary"} className="text-xs">
                            {i % 2 === 0 ? "Sent" : "Received"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-3 sm:px-6">
                    <Button variant="outline" className="w-full text-xs sm:text-sm">
                      View All Messages
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeTab === "plans" && (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold">Browse Plans</h2>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
              <Card>
                <CardHeader className="px-3 sm:px-6">
                  <CardTitle className="text-base sm:text-lg">Starter Plan</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Perfect for short trips</CardDescription>
                </CardHeader>
                <CardContent className="px-3 sm:px-6">
                  <div className="text-2xl sm:text-3xl font-bold">$9.99</div>
                  <div className="text-muted-foreground mt-1 text-xs sm:text-sm">Valid for 7 days</div>
                  <Separator className="my-3 sm:my-4" />
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li className="flex items-center gap-2">
                      <Wifi className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      1GB Data
                    </li>
                    <li className="flex items-center gap-2">
                      <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      60 minutes Voice
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      100 SMS
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      Coverage in 7 countries
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="px-3 sm:px-6">
                  <Button className="w-full text-xs sm:text-sm">Select Plan</Button>
                </CardFooter>
              </Card>
              <Card className="border-primary">
                <CardHeader className="px-3 sm:px-6">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base sm:text-lg">Traveller Plan</CardTitle>
                    <Badge className="text-xs">Most Popular</Badge>
                  </div>
                  <CardDescription className="text-xs sm:text-sm">Ideal for regular travelers</CardDescription>
                </CardHeader>
                <CardContent className="px-3 sm:px-6">
                  <div className="text-2xl sm:text-3xl font-bold">$19.99</div>
                  <div className="text-muted-foreground mt-1 text-xs sm:text-sm">Valid for 15 days</div>
                  <Separator className="my-3 sm:my-4" />
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li className="flex items-center gap-2">
                      <Wifi className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      3GB Data
                    </li>
                    <li className="flex items-center gap-2">
                      <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      120 minutes Voice
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      200 SMS
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      Coverage in 7 countries
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="px-3 sm:px-6">
                  <Button className="w-full text-xs sm:text-sm">Select Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="px-3 sm:px-6">
                  <CardTitle className="text-base sm:text-lg">Explorer Plan</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">For frequent travelers</CardDescription>
                </CardHeader>
                <CardContent className="px-3 sm:px-6">
                  <div className="text-2xl sm:text-3xl font-bold">$29.99</div>
                  <div className="text-muted-foreground mt-1 text-xs sm:text-sm">Valid for 30 days</div>
                  <Separator className="my-3 sm:my-4" />
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li className="flex items-center gap-2">
                      <Wifi className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      5GB Data
                    </li>
                    <li className="flex items-center gap-2">
                      <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      240 minutes Voice
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      400 SMS
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      Coverage in 7 countries
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="px-3 sm:px-6">
                  <Button className="w-full text-xs sm:text-sm">Select Plan</Button>
                </CardFooter>
              </Card>
            </div>

            <Card className="mt-4 sm:mt-8">
              <CardHeader className="px-3 sm:px-6">
                <CardTitle className="text-base sm:text-lg">Supported Countries & Carriers</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  gSIM works with these carriers in 7 countries
                </CardDescription>
              </CardHeader>
              <CardContent className="px-3 sm:px-6 overflow-x-auto">
                <div className="grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-w-[300px]">
                  <Card>
                    <CardHeader className="pb-2 px-3">
                      <div className="flex items-center gap-2">
                        <div className="text-xl sm:text-2xl">🇵🇰</div>
                        <CardTitle className="text-sm sm:text-base">Pakistan</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-3">
                      <ul className="space-y-1 text-xs sm:text-sm">
                        <li>Ufone</li>
                        <li>Telenor</li>
                        <li>Jazz</li>
                        <li>Zong</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2 px-3">
                      <div className="flex items-center gap-2">
                        <div className="text-xl sm:text-2xl">🇸🇦</div>
                        <CardTitle className="text-sm sm:text-base">Saudi Arabia</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-3">
                      <ul className="space-y-1 text-xs sm:text-sm">
                        <li>STC</li>
                        <li>Mobily</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2 px-3">
                      <div className="flex items-center gap-2">
                        <div className="text-xl sm:text-2xl">🇦🇪</div>
                        <CardTitle className="text-sm sm:text-base">UAE</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-3">
                      <ul className="space-y-1 text-xs sm:text-sm">
                        <li>Du</li>
                        <li>Etisalat</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2 px-3">
                      <div className="flex items-center gap-2">
                        <div className="text-xl sm:text-2xl">🇨🇳</div>
                        <CardTitle className="text-sm sm:text-base">China</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-3">
                      <ul className="space-y-1 text-xs sm:text-sm">
                        <li>China Mobile (roaming-based)</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2 px-3">
                      <div className="flex items-center gap-2">
                        <div className="text-xl sm:text-2xl">🇮🇳</div>
                        <CardTitle className="text-sm sm:text-base">India</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-3">
                      <ul className="space-y-1 text-xs sm:text-sm">
                        <li>Airtel</li>
                        <li>Jio</li>
                        <li>BSNL</li>
                        <li>Vodafone</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2 px-3">
                      <div className="flex items-center gap-2">
                        <div className="text-xl sm:text-2xl">🇺🇸</div>
                        <CardTitle className="text-sm sm:text-base">USA</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-3">
                      <ul className="space-y-1 text-xs sm:text-sm">
                        <li>AT&T</li>
                        <li>T-Mobile</li>
                        <li>Verizon</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2 px-3">
                      <div className="flex items-center gap-2">
                        <div className="text-xl sm:text-2xl">🇨🇦</div>
                        <CardTitle className="text-sm sm:text-base">Canada</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-3">
                      <ul className="space-y-1 text-xs sm:text-sm">
                        <li>Koodo</li>
                        <li>Freedom</li>
                        <li>Lucky Mobile</li>
                        <li>Chatr</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 sm:mt-8">
              <Card className="bg-primary/5 border-dashed">
                <CardContent className="p-3 sm:p-6">
                  <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Need a Custom Plan?</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        We can tailor a plan based on your specific needs, including options for longer stays or
                        increased data, minutes, or SMS allowances.
                      </p>
                    </div>
                    <Button variant="outline" className="whitespace-nowrap text-xs sm:text-sm w-full md:w-auto">
                      Contact Sales
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "usage" && (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold">Usage & Billing</h2>
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="px-3 sm:px-6">
                  <CardTitle className="text-base sm:text-lg">Data Usage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-6">
                  <div>
                    <span className="text-xs sm:text-sm font-medium">3.2/5 GB used</span>
                  </div>
                  <Progress value={64} className="h-2" />
                  <div className="text-xs sm:text-sm text-muted-foreground">1.8 GB remaining</div>

                  <div className="mt-3 sm:mt-4">
                    <h4 className="text-xs sm:text-sm font-medium mb-2">Usage Breakdown</h4>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span>Web Browsing</span>
                        <span>1.2 GB</span>
                      </div>
                      <Progress value={24} className="h-1.5" />
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span>Streaming</span>
                        <span>1.5 GB</span>
                      </div>
                      <Progress value={30} className="h-1.5" />
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span>Social Media</span>
                        <span>0.5 GB</span>
                      </div>
                      <Progress value={10} className="h-1.5" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-3 sm:px-6">
                  <Button variant="outline" className="w-full text-xs sm:text-sm">
                    Add Data
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="px-3 sm:px-6">
                  <CardTitle className="text-base sm:text-lg">Voice Usage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-6">
                  <div>
                    <span className="text-xs sm:text-sm font-medium">120/300 mins used</span>
                  </div>
                  <Progress value={40} className="h-2" />
                  <div className="text-xs sm:text-sm text-muted-foreground">180 mins remaining</div>

                  <div className="mt-3 sm:mt-4">
                    <h4 className="text-xs sm:text-sm font-medium mb-2">Call Destinations</h4>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm items-center gap-2">
                        <span className="truncate">United States</span>
                        <span className="whitespace-nowrap">45 mins</span>
                      </div>
                      <Progress value={15} className="h-1.5" />
                      <div className="flex justify-between text-xs sm:text-sm items-center gap-2">
                        <span className="truncate">Pakistan</span>
                        <span className="whitespace-nowrap">30 mins</span>
                      </div>
                      <Progress value={10} className="h-1.5" />
                      <div className="flex justify-between text-xs sm:text-sm items-center gap-2">
                        <span className="truncate">India</span>
                        <span className="whitespace-nowrap">45 mins</span>
                      </div>
                      <Progress value={15} className="h-1.5" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-3 sm:px-6">
                  <Button variant="outline" className="w-full text-xs sm:text-sm">
                    Add Voice Minutes
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="px-3 sm:px-6">
                  <CardTitle className="text-base sm:text-lg">SMS Usage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-6">
                  <div>
                    <span className="text-xs sm:text-sm font-medium">45/100 SMS used</span>
                  </div>
                  <Progress value={45} className="h-2" />
                  <div className="text-xs sm:text-sm text-muted-foreground">55 SMS remaining</div>

                  <div className="mt-3 sm:mt-4">
                    <h4 className="text-xs sm:text-sm font-medium mb-2">Message Destinations</h4>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm items-center gap-2">
                        <span className="truncate">United States</span>
                        <span className="whitespace-nowrap">20 SMS</span>
                      </div>
                      <Progress value={20} className="h-1.5" />
                      <div className="flex justify-between text-xs sm:text-sm items-center gap-2">
                        <span className="truncate">Canada</span>
                        <span className="whitespace-nowrap">15 SMS</span>
                      </div>
                      <Progress value={15} className="h-1.5" />
                      <div className="flex justify-between text-xs sm:text-sm items-center gap-2">
                        <span className="truncate">Saudi Arabia</span>
                        <span className="whitespace-nowrap">10 SMS</span>
                      </div>
                      <Progress value={10} className="h-1.5" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-3 sm:px-6">
                  <Button variant="outline" className="w-full text-xs sm:text-sm">
                    Add SMS
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-4 sm:mt-8">
              <Card>
                <CardHeader className="px-3 sm:px-6">
                  <CardTitle className="text-base sm:text-lg">Billing History</CardTitle>
                </CardHeader>
                <CardContent className="px-3 sm:px-6 overflow-x-auto">
                  <div className="rounded-md border min-w-[300px]">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-10 sm:h-12 px-2 sm:px-4 text-left align-middle font-medium text-muted-foreground">
                              Date
                            </th>
                            <th className="h-10 sm:h-12 px-2 sm:px-4 text-left align-middle font-medium text-muted-foreground">
                              Description
                            </th>
                            <th className="h-10 sm:h-12 px-2 sm:px-4 text-left align-middle font-medium text-muted-foreground">
                              Amount
                            </th>
                            <th className="h-10 sm:h-12 px-2 sm:px-4 text-left align-middle font-medium text-muted-foreground">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {[
                            {
                              date: "May 15, 2025",
                              desc: "Explorer Plan",
                              amount: "$29.99",
                              status: "Paid",
                            },
                            {
                              date: "Apr 15, 2025",
                              desc: "Explorer Plan",
                              amount: "$29.99",
                              status: "Paid",
                            },
                            { date: "Apr 02, 2025", desc: "Data Add-on 2GB", amount: "$15.99", status: "Paid" },
                            {
                              date: "Mar 15, 2025",
                              desc: "Explorer Plan",
                              amount: "$29.99",
                              status: "Paid",
                            },
                            {
                              date: "Feb 15, 2025",
                              desc: "Explorer Plan",
                              amount: "$29.99",
                              status: "Paid",
                            },
                          ].map((item, i) => (
                            <tr
                              key={i}
                              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                            >
                              <td className="p-2 sm:p-4 align-middle">{item.date}</td>
                              <td className="p-2 sm:p-4 align-middle">{item.desc}</td>
                              <td className="p-2 sm:p-4 align-middle">{item.amount}</td>
                              <td className="p-2 sm:p-4 align-middle">
                                <Badge
                                  variant="outline"
                                  className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700 text-xs"
                                >
                                  {item.status}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-3 sm:px-6">
                  <Button variant="outline" className="w-full text-xs sm:text-sm">
                    View All Transactions
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "add-ons" && (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold">Country Add-ons</h2>
            <CountryAddOns />
          </div>
        )}
      </main>
    </div>
  )
}

// Main Dashboard component
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar>
          <SidebarHeader className="flex items-center px-4 sm:px-6 py-4 sm:py-5 border-b">
            <Link href="/" className="flex items-center gap-2">
              <Radio className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-lg sm:text-xl font-bold">gSIM</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <div className="px-2 sm:px-3 py-2">
              <h2 className="px-3 sm:px-4 pb-3 sm:pb-4 text-xs font-medium text-muted-foreground">DASHBOARD</h2>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={activeTab === "overview"}
                    onClick={() => setActiveTab("overview")}
                  >
                    <button className="text-xs sm:text-sm">
                      <Home className="w-4 h-4" />
                      <span>Overview</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={activeTab === "plans"} onClick={() => setActiveTab("plans")}>
                    <button className="text-xs sm:text-sm">
                      <Wifi className="w-4 h-4" />
                      <span>Browse Plans</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={activeTab === "usage"} onClick={() => setActiveTab("usage")}>
                    <button className="text-xs sm:text-sm">
                      <CreditCard className="w-4 h-4" />
                      <span>Usage & Billing</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={activeTab === "add-ons"} onClick={() => setActiveTab("add-ons")}>
                    <button className="text-xs sm:text-sm">
                      <Globe className="w-4 h-4" />
                      <span>Country Add-ons</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
            <div className="px-2 sm:px-3 py-2">
              <h2 className="px-3 sm:px-4 pb-2 text-xs font-medium text-muted-foreground">COMMUNICATION</h2>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <button className="text-xs sm:text-sm">
                      <PhoneCall className="w-4 h-4" />
                      <span>Voice Calls</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <button className="text-xs sm:text-sm">
                      <MessageSquare className="w-4 h-4" />
                      <span>SMS Messages</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
            <div className="px-2 sm:px-3 py-2">
              <h2 className="px-3 sm:px-4 pb-2 text-xs font-medium text-muted-foreground">ACCOUNT</h2>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <button className="text-xs sm:text-sm">
                      <User className="w-4 h-4" />
                      <span>My Profile</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <button className="text-xs sm:text-sm">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
          </SidebarContent>
          <SidebarFooter className="p-3 sm:p-4 border-t">
            <Card className="bg-primary/5">
              <CardContent className="p-3 sm:p-4">
                <div className="flex flex-col items-center text-center space-y-2">
                  <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  <h3 className="font-medium text-sm sm:text-base">Refer a Friend</h3>
                  <p className="text-xs text-muted-foreground">Get $10 credit for each friend who signs up!</p>
                  <Button className="w-full" variant="default" size="sm">
                    <span className="text-xs">Share Link</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </SidebarFooter>
        </Sidebar>
        <DashboardContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </SidebarProvider>
  )
}
