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
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          <h3 className="text-base sm:text-lg font-medium">Country-Specific Add-ons</h3>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="justify-between w-full sm:w-[200px] text-xs sm:text-sm"
              >
                {value ? supportedCountries.find((country) => country.code === value)?.name : "Select country..."}
                <ChevronsUpDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full sm:w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search country..." className="text-xs sm:text-sm" />
                <CommandList>
                  <CommandEmpty>No country found.</CommandEmpty>
                  <CommandGroup>
                    {supportedCountries.map((country) => (
                      <CommandItem
                        key={country.code}
                        value={country.code}
                        onSelect={handleCountrySelect}
                        className="text-xs sm:text-sm"
                      >
                        <Check
                          className={cn(
                            "mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4",
                            value === country.code ? "opacity-100" : "opacity-0",
                          )}
                        />
                        <span className="mr-1 sm:mr-2">{country.flag}</span>
                        {country.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <div className="relative">
            <Search className="absolute left-2 top-2 sm:left-2.5 sm:top-2.5 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name..."
              className="pl-7 sm:pl-9 w-full text-xs sm:text-sm h-8 sm:h-10"
            />
          </div>
        </div>
      </div>

      {selectedCountry ? (
        <div className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader className="px-3 sm:px-6">
              <div className="flex flex-col items-center text-center mb-2">
                <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">{selectedCountry.flag}</div>
                <CardTitle className="text-lg sm:text-xl">{selectedCountry.name}</CardTitle>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground text-center">
                Select a plan for {selectedCountry.name}
                <div className="mt-2 flex flex-wrap justify-center gap-1">
                  {selectedCountry.carriers.map((carrier) => (
                    <Badge key={carrier} variant="outline" className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-0.5">
                      {carrier}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-3 sm:px-6">
              <Tabs defaultValue="data">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="data" className="text-xs sm:text-sm">
                    Data
                  </TabsTrigger>
                  <TabsTrigger value="voice" className="text-xs sm:text-sm">
                    Voice
                  </TabsTrigger>
                  <TabsTrigger value="combo" className="text-xs sm:text-sm">
                    Combo
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="data" className="mt-3 sm:mt-4">
                  <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
                    <Card>
                      <CardHeader className="px-3 py-2 sm:px-4 sm:py-3">
                        <CardTitle className="text-sm sm:text-base">1GB Data</CardTitle>
                      </CardHeader>
                      <CardContent className="px-3 sm:px-4">
                        <div className="text-xl sm:text-2xl font-bold">$9.99</div>
                        <div className="text-muted-foreground text-xs sm:text-sm mt-1">Valid for 7 days</div>
                        <Separator className="my-2 sm:my-3" />
                        <div className="text-xs sm:text-sm">1GB of high-speed data in {selectedCountry.name}</div>
                      </CardContent>
                      <CardFooter className="px-3 sm:px-4">
                        <Button variant="outline" className="w-full text-xs sm:text-sm">
                          Add to Plan
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-primary">
                      <CardHeader className="px-3 py-2 sm:px-4 sm:py-3">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-sm sm:text-base">3GB Data</CardTitle>
                          <Badge className="text-xs px-1.5 py-0.5">Best Value</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="px-3 sm:px-4">
                        <div className="text-xl sm:text-2xl font-bold">$19.99</div>
                        <div className="text-muted-foreground text-xs sm:text-sm mt-1">Valid for 30 days</div>
                        <Separator className="my-2 sm:my-3" />
                        <div className="text-xs sm:text-sm">3GB of high-speed data in {selectedCountry.name}</div>
                      </CardContent>
                      <CardFooter className="px-3 sm:px-4">
                        <Button className="w-full text-xs sm:text-sm">Add to Plan</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="px-3 py-2 sm:px-4 sm:py-3">
                        <CardTitle className="text-sm sm:text-base">5GB Data</CardTitle>
                      </CardHeader>
                      <CardContent className="px-3 sm:px-4">
                        <div className="text-xl sm:text-2xl font-bold">$29.99</div>
                        <div className="text-muted-foreground text-xs sm:text-sm mt-1">Valid for 30 days</div>
                        <Separator className="my-2 sm:my-3" />
                        <div className="text-xs sm:text-sm">5GB of high-speed data in {selectedCountry.name}</div>
                      </CardContent>
                      <CardFooter className="px-3 sm:px-4">
                        <Button variant="outline" className="w-full text-xs sm:text-sm">
                          Add to Plan
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="voice" className="mt-3 sm:mt-4">
                  <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
                    <Card>
                      <CardHeader className="px-3 py-2 sm:px-4 sm:py-3">
                        <CardTitle className="text-sm sm:text-base">100 Minutes</CardTitle>
                      </CardHeader>
                      <CardContent className="px-3 sm:px-4">
                        <div className="text-xl sm:text-2xl font-bold">$7.99</div>
                        <div className="text-muted-foreground text-xs sm:text-sm mt-1">Valid for 7 days</div>
                        <Separator className="my-2 sm:my-3" />
                        <div className="text-xs sm:text-sm">100 minutes of voice calls in {selectedCountry.name}</div>
                      </CardContent>
                      <CardFooter className="px-3 sm:px-4">
                        <Button variant="outline" className="w-full text-xs sm:text-sm">
                          Add to Plan
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-primary">
                      <CardHeader className="px-3 py-2 sm:px-4 sm:py-3">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-sm sm:text-base">300 Minutes</CardTitle>
                          <Badge className="text-xs px-1.5 py-0.5">Best Value</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="px-3 sm:px-4">
                        <div className="text-xl sm:text-2xl font-bold">$17.99</div>
                        <div className="text-muted-foreground text-xs sm:text-sm mt-1">Valid for 30 days</div>
                        <Separator className="my-2 sm:my-3" />
                        <div className="text-xs sm:text-sm">300 minutes of voice calls in {selectedCountry.name}</div>
                      </CardContent>
                      <CardFooter className="px-3 sm:px-4">
                        <Button className="w-full text-xs sm:text-sm">Add to Plan</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="px-3 py-2 sm:px-4 sm:py-3">
                        <CardTitle className="text-sm sm:text-base">500 Minutes</CardTitle>
                      </CardHeader>
                      <CardContent className="px-3 sm:px-4">
                        <div className="text-xl sm:text-2xl font-bold">$24.99</div>
                        <div className="text-muted-foreground text-xs sm:text-sm mt-1">Valid for 30 days</div>
                        <Separator className="my-2 sm:my-3" />
                        <div className="text-xs sm:text-sm">500 minutes of voice calls in {selectedCountry.name}</div>
                      </CardContent>
                      <CardFooter className="px-3 sm:px-4">
                        <Button variant="outline" className="w-full text-xs sm:text-sm">
                          Add to Plan
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="combo" className="mt-3 sm:mt-4">
                  <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                    <Card>
                      <CardHeader className="px-3 py-2 sm:px-4 sm:py-3">
                        <CardTitle className="text-sm sm:text-base">Basic Combo</CardTitle>
                      </CardHeader>
                      <CardContent className="px-3 sm:px-4">
                        <div className="text-xl sm:text-2xl font-bold">$24.99</div>
                        <div className="text-muted-foreground text-xs sm:text-sm mt-1">Valid for 15 days</div>
                        <Separator className="my-2 sm:my-3" />
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                          <li className="flex items-center gap-1 sm:gap-2">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            2GB Data
                          </li>
                          <li className="flex items-center gap-1 sm:gap-2">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            100 Minutes Voice
                          </li>
                          <li className="flex items-center gap-1 sm:gap-2">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            50 SMS
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter className="px-3 sm:px-4">
                        <Button variant="outline" className="w-full text-xs sm:text-sm">
                          Add to Plan
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-primary">
                      <CardHeader className="px-3 py-2 sm:px-4 sm:py-3">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-sm sm:text-base">Premium Combo</CardTitle>
                          <Badge className="text-xs px-1.5 py-0.5">Best Value</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="px-3 sm:px-4">
                        <div className="text-xl sm:text-2xl font-bold">$39.99</div>
                        <div className="text-muted-foreground text-xs sm:text-sm mt-1">Valid for 30 days</div>
                        <Separator className="my-2 sm:my-3" />
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                          <li className="flex items-center gap-1 sm:gap-2">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            5GB Data
                          </li>
                          <li className="flex items-center gap-1 sm:gap-2">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            300 Minutes Voice
                          </li>
                          <li className="flex items-center gap-1 sm:gap-2">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            100 SMS
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter className="px-3 sm:px-4">
                        <Button className="w-full text-xs sm:text-sm">Add to Plan</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-base sm:text-lg font-medium">Supported Countries</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {supportedCountries.map((country) => (
              <Card
                key={country.code}
                className="cursor-pointer hover:border-primary transition-colors"
                onClick={() => {
                  setValue(country.code)
                  setSelectedCountry(country)
                }}
              >
                <CardContent className="p-3 sm:p-4 flex flex-col items-center text-center">
                  <div className="text-3xl sm:text-4xl mb-2">{country.flag}</div>
                  <div>
                    <div className="font-medium text-xs sm:text-sm">{country.name}</div>
                    <div className="text-xs text-muted-foreground">{country.carriers.length} carriers</div>
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
