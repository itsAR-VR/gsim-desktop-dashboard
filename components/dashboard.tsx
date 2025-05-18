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
      <header className="flex items-center justify-between h-16 px-6 border-b shrink-0">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Top Up
          </Button>
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              width={32}
              height={32}
              alt="User avatar"
              className="rounded-full"
            />
            <div className="text-sm">
              <div className="font-medium">John Doe</div>
              <div className="text-muted-foreground">+1 (555) 123-4567</div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 py-4 w-full overflow-y-auto">
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-l-4 border-l-primary">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Traveller Plan</div>
                  <div className="flex justify-between mt-2">
                    <div className="text-muted-foreground text-sm">3GB Data</div>
                    <div className="text-muted-foreground text-sm">Valid until 24 Jun 2025</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Manage Plan
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Data Usage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">1.8 GB used</span>
                    <span className="text-sm text-muted-foreground">3 GB total</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <div className="text-xs text-muted-foreground">1.2 GB remaining (60% used)</div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Purchase Data Add-On
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Talk & SMS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Voice</span>
                    </div>
                    <span className="text-sm font-medium">72 mins / 120 mins</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">SMS</span>
                    </div>
                    <span className="text-sm font-medium">120 sent / 200 SMS</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Add Talk & SMS Bundle
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* How it Works Section */}
            <Card className="bg-primary/5 border-dashed">
              <CardHeader>
                <CardTitle>How gSIM Works</CardTitle>
                <CardDescription>Get connected in 3 simple steps</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">1. Choose Country</h3>
                    <p className="text-sm text-muted-foreground">
                      Select one of our 7 supported destinations: Pakistan, Saudi Arabia, UAE, China, India, USA, or
                      Canada
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Wifi className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">2. Pick a Plan</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose a data+talk+text bundle that fits your travel needs and duration
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <PhoneCall className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">3. Connect & Talk</h3>
                    <p className="text-sm text-muted-foreground">
                      Install via QR code and immediately enjoy voice, data, and text in your selected region
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why gSIM Section */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose gSIM?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Regional Coverage</h3>
                      <p className="text-sm text-muted-foreground">
                        Direct partnerships with carriers in 7 countries for reliable service
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">No Surprise Fees</h3>
                      <p className="text-sm text-muted-foreground">
                        Single upfront cost with no hidden roaming charges
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Safe & Secure</h3>
                      <p className="text-sm text-muted-foreground">
                        Data encryption, optional ad blocking, and secure DNS
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Data, Talk & Text</h3>
                      <p className="text-sm text-muted-foreground">Complete communication solution in one eSIM</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Plus className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Easy Top-Ups</h3>
                      <p className="text-sm text-muted-foreground">Buy more data or minutes directly in the app</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Bell className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Customizable Alerts</h3>
                      <p className="text-sm text-muted-foreground">Set usage notifications and renewal reminders</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="data-usage">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
                <TabsTrigger value="data-usage">Data Usage</TabsTrigger>
                <TabsTrigger value="call-history">Call History</TabsTrigger>
                <TabsTrigger value="message-history">Message History</TabsTrigger>
              </TabsList>
              <TabsContent value="data-usage" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Data Usage</CardTitle>
                    <CardDescription>Your data usage for the last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DataUsageChart />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="call-history" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Call History</CardTitle>
                    <CardDescription>Your recent calls</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                              <User className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="font-medium">+1 (555) 987-654{i}</div>
                              <div className="text-sm text-muted-foreground">Outgoing • May {14 + i}, 2025</div>
                            </div>
                          </div>
                          <div className="text-sm">{2 + i}:15 min</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Calls
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="message-history" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Message History</CardTitle>
                    <CardDescription>Your recent messages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                              <User className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="font-medium">+1 (555) 123-765{i}</div>
                              <div className="text-sm text-muted-foreground">
                                {i % 2 === 0 ? "Sent" : "Received"} • May {14 + i}, 2025
                              </div>
                            </div>
                          </div>
                          <Badge variant={i % 2 === 0 ? "default" : "secondary"}>
                            {i % 2 === 0 ? "Sent" : "Received"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Messages
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeTab === "plans" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Browse Plans</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter Plan</CardTitle>
                  <CardDescription>Perfect for short trips</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$9.99</div>
                  <div className="text-muted-foreground mt-1">Valid for 7 days</div>
                  <Separator className="my-4" />
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-primary" />
                      1GB Data
                    </li>
                    <li className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-primary" />
                      60 minutes Voice
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      100 SMS
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      Coverage in 7 countries
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Select Plan</Button>
                </CardFooter>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Traveller Plan</CardTitle>
                    <Badge>Most Popular</Badge>
                  </div>
                  <CardDescription>Ideal for regular travelers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$19.99</div>
                  <div className="text-muted-foreground mt-1">Valid for 15 days</div>
                  <Separator className="my-4" />
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-primary" />
                      3GB Data
                    </li>
                    <li className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-primary" />
                      120 minutes Voice
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      200 SMS
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      Coverage in 7 countries
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Select Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Explorer Plan</CardTitle>
                  <CardDescription>For frequent travelers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$29.99</div>
                  <div className="text-muted-foreground mt-1">Valid for 30 days</div>
                  <Separator className="my-4" />
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-primary" />
                      5GB Data
                    </li>
                    <li className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-primary" />
                      240 minutes Voice
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      400 SMS
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      Coverage in 7 countries
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Select Plan</Button>
                </CardFooter>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Supported Countries & Carriers</CardTitle>
                <CardDescription>gSIM works with these carriers in 7 countries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl">🇵🇰</div>
                        <CardTitle className="text-base">Pakistan</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        <li>Ufone</li>
                        <li>Telenor</li>
                        <li>Jazz</li>
                        <li>Zong</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl">🇸🇦</div>
                        <CardTitle className="text-base">Saudi Arabia</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        <li>STC</li>
                        <li>Mobily</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl">🇦🇪</div>
                        <CardTitle className="text-base">UAE</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        <li>Du</li>
                        <li>Etisalat</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl">🇨🇳</div>
                        <CardTitle className="text-base">China</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        <li>China Mobile (roaming-based)</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl">🇮🇳</div>
                        <CardTitle className="text-base">India</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        <li>Airtel</li>
                        <li>Jio</li>
                        <li>BSNL</li>
                        <li>Vodafone</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl">🇺🇸</div>
                        <CardTitle className="text-base">USA</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        <li>AT&T</li>
                        <li>T-Mobile</li>
                        <li>Verizon</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl">🇨🇦</div>
                        <CardTitle className="text-base">Canada</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
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

            <div className="mt-8">
              <Card className="bg-primary/5 border-dashed">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">Need a Custom Plan?</h3>
                      <p className="text-muted-foreground">
                        We can tailor a plan based on your specific needs, including options for longer stays or
                        increased data, minutes, or SMS allowances.
                      </p>
                    </div>
                    <Button variant="outline" className="whitespace-nowrap">
                      Contact Sales
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "usage" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Usage & Billing</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Data Usage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">3.2 GB used</span>
                    <span className="text-sm text-muted-foreground">5 GB total</span>
                  </div>
                  <Progress value={64} className="h-2" />
                  <div className="text-sm text-muted-foreground">1.8 GB remaining</div>

                  <div className="mt-6">
                    <h4 className="text-sm font-medium mb-2">Usage Breakdown</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Web Browsing</span>
                        <span>1.2 GB</span>
                      </div>
                      <Progress value={24} className="h-1.5" />
                      <div className="flex justify-between text-sm">
                        <span>Streaming</span>
                        <span>1.5 GB</span>
                      </div>
                      <Progress value={30} className="h-1.5" />
                      <div className="flex justify-between text-sm">
                        <span>Social Media</span>
                        <span>0.5 GB</span>
                      </div>
                      <Progress value={10} className="h-1.5" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Add Data
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Voice Usage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">120 mins used</span>
                    <span className="text-sm text-muted-foreground">300 mins total</span>
                  </div>
                  <Progress value={40} className="h-2" />
                  <div className="text-sm text-muted-foreground">180 mins remaining</div>

                  <div className="mt-6">
                    <h4 className="text-sm font-medium mb-2">Call Destinations</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>United States</span>
                        <span>45 mins</span>
                      </div>
                      <Progress value={15} className="h-1.5" />
                      <div className="flex justify-between text-sm">
                        <span>Pakistan</span>
                        <span>30 mins</span>
                      </div>
                      <Progress value={10} className="h-1.5" />
                      <div className="flex justify-between text-sm">
                        <span>India</span>
                        <span>45 mins</span>
                      </div>
                      <Progress value={15} className="h-1.5" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Add Voice Minutes
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>SMS Usage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">45 SMS used</span>
                    <span className="text-sm text-muted-foreground">100 SMS total</span>
                  </div>
                  <Progress value={45} className="h-2" />
                  <div className="text-sm text-muted-foreground">55 SMS remaining</div>

                  <div className="mt-6">
                    <h4 className="text-sm font-medium mb-2">Message Destinations</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>United States</span>
                        <span>20 SMS</span>
                      </div>
                      <Progress value={20} className="h-1.5" />
                      <div className="flex justify-between text-sm">
                        <span>Canada</span>
                        <span>15 SMS</span>
                      </div>
                      <Progress value={15} className="h-1.5" />
                      <div className="flex justify-between text-sm">
                        <span>Saudi Arabia</span>
                        <span>10 SMS</span>
                      </div>
                      <Progress value={10} className="h-1.5" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Add SMS
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Billing History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                              Description
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                              Amount
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
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
                              <td className="p-4 align-middle">{item.date}</td>
                              <td className="p-4 align-middle">{item.desc}</td>
                              <td className="p-4 align-middle">{item.amount}</td>
                              <td className="p-4 align-middle">
                                <Badge
                                  variant="outline"
                                  className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
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
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Transactions
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "add-ons" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Country Add-ons</h2>
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
          <SidebarHeader className="flex items-center px-6 py-5 border-b">
            <Link href="/" className="flex items-center gap-2">
              <Radio className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">gSIM</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <div className="px-3 py-2">
              <h2 className="px-4 pb-4 text-xs font-medium text-muted-foreground">DASHBOARD</h2>
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
            <div className="px-3 py-2">
              <h2 className="px-4 pb-2 text-xs font-medium text-muted-foreground">COMMUNICATION</h2>
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
            <div className="px-3 py-2">
              <h2 className="px-4 pb-2 text-xs font-medium text-muted-foreground">ACCOUNT</h2>
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
          <SidebarFooter className="p-4 border-t">
            <Card className="bg-primary/5">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center space-y-2">
                  <Gift className="w-8 h-8 text-primary" />
                  <h3 className="font-medium">Refer a Friend</h3>
                  <p className="text-xs text-muted-foreground">Get $10 credit for each friend who signs up!</p>
                  <Button className="w-full" variant="default" size="sm">
                    Share Link
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
