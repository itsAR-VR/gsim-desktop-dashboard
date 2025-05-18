"use client"

import { useState } from "react"
import { Check, ChevronsUpDown, Globe, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

// Updated to only include the 7 supported countries
const supportedCountries = [
  { name: "Pakistan", code: "PK", flag: "🇵🇰", carriers: ["Ufone", "Telenor", "Jazz", "Zong"] },
  { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", carriers: ["STC", "Mobily"] },
  { name: "UAE", code: "AE", flag: "🇦🇪", carriers: ["Du", "Etisalat"] },
  { name: "China", code: "CN", flag: "🇨🇳", carriers: ["China Mobile (roaming-based)"] },
  { name: "India", code: "IN", flag: "🇮🇳", carriers: ["Airtel", "Jio", "BSNL", "Vodafone"] },
  { name: "USA", code: "US", flag: "🇺🇸", carriers: ["AT&T", "T-Mobile", "Verizon"] },
  { name: "Canada", code: "CA", flag: "🇨🇦", carriers: ["Koodo", "Freedom", "Lucky Mobile", "Chatr"] },
]

export function CountryAddOns() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [selectedCountry, setSelectedCountry] = useState(null)

  const handleCountrySelect = (currentValue) => {
    setValue(currentValue === value ? "" : currentValue)
    setOpen(false)
    setSelectedCountry(supportedCountries.find((country) => country.code === currentValue))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-medium">Country-Specific Add-ons</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="justify-between w-full md:w-[240px]"
              >
                {value ? supportedCountries.find((country) => country.code === value)?.name : "Select country..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full md:w-[240px] p-0">
              <Command>
                <CommandInput placeholder="Search country..." />
                <CommandList>
                  <CommandEmpty>No country found.</CommandEmpty>
                  <CommandGroup>
                    {supportedCountries.map((country) => (
                      <CommandItem key={country.code} value={country.code} onSelect={handleCountrySelect}>
                        <Check className={cn("mr-2 h-4 w-4", value === country.code ? "opacity-100" : "opacity-0")} />
                        <span className="mr-2">{country.flag}</span>
                        {country.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search by name or keyword..." className="pl-9 w-full" />
          </div>
        </div>
      </div>

      {selectedCountry ? (
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="text-4xl">{selectedCountry.flag}</div>
              <div>
                <CardTitle>{selectedCountry.name}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  Select a plan for {selectedCountry.name}
                  <div className="mt-1">
                    <Badge variant="outline" className="mr-1">
                      {selectedCountry.carriers.join(", ")}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="data">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="data">Data</TabsTrigger>
                  <TabsTrigger value="voice">Voice</TabsTrigger>
                  <TabsTrigger value="combo">Combo</TabsTrigger>
                </TabsList>
                <TabsContent value="data" className="mt-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">1GB Data</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$9.99</div>
                        <div className="text-muted-foreground text-sm mt-1">Valid for 7 days</div>
                        <Separator className="my-3" />
                        <div className="text-sm">1GB of high-speed data in {selectedCountry.name}</div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Add to Plan
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-primary">
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-base">3GB Data</CardTitle>
                          <Badge>Best Value</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$19.99</div>
                        <div className="text-muted-foreground text-sm mt-1">Valid for 30 days</div>
                        <Separator className="my-3" />
                        <div className="text-sm">3GB of high-speed data in {selectedCountry.name}</div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Add to Plan</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">5GB Data</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$29.99</div>
                        <div className="text-muted-foreground text-sm mt-1">Valid for 30 days</div>
                        <Separator className="my-3" />
                        <div className="text-sm">5GB of high-speed data in {selectedCountry.name}</div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Add to Plan
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="voice" className="mt-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">100 Minutes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$7.99</div>
                        <div className="text-muted-foreground text-sm mt-1">Valid for 7 days</div>
                        <Separator className="my-3" />
                        <div className="text-sm">100 minutes of voice calls in {selectedCountry.name}</div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Add to Plan
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-primary">
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-base">300 Minutes</CardTitle>
                          <Badge>Best Value</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$17.99</div>
                        <div className="text-muted-foreground text-sm mt-1">Valid for 30 days</div>
                        <Separator className="my-3" />
                        <div className="text-sm">300 minutes of voice calls in {selectedCountry.name}</div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Add to Plan</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">500 Minutes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$24.99</div>
                        <div className="text-muted-foreground text-sm mt-1">Valid for 30 days</div>
                        <Separator className="my-3" />
                        <div className="text-sm">500 minutes of voice calls in {selectedCountry.name}</div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Add to Plan
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="combo" className="mt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Basic Combo</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$24.99</div>
                        <div className="text-muted-foreground text-sm mt-1">Valid for 15 days</div>
                        <Separator className="my-3" />
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            2GB Data
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            100 Minutes Voice
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            50 SMS
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Add to Plan
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-primary">
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-base">Premium Combo</CardTitle>
                          <Badge>Best Value</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$39.99</div>
                        <div className="text-muted-foreground text-sm mt-1">Valid for 30 days</div>
                        <Separator className="my-3" />
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            5GB Data
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            300 Minutes Voice
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            100 SMS
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Add to Plan</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="space-y-6">
          <h3 className="text-lg font-medium">Supported Countries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {supportedCountries.map((country) => (
              <Card
                key={country.code}
                className="cursor-pointer hover:border-primary transition-colors"
                onClick={() => {
                  setValue(country.code)
                  setSelectedCountry(country)
                }}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="text-3xl">{country.flag}</div>
                  <div>
                    <div className="font-medium">{country.name}</div>
                    <div className="text-xs text-muted-foreground">{country.carriers.length} carriers available</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
