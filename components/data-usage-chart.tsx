"use client"

import { Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "May 10", usage: 2.5 },
  { date: "May 11", usage: 3.8 },
  { date: "May 12", usage: 1.9 },
  { date: "May 13", usage: 4.7 },
  { date: "May 14", usage: 6.2 },
  { date: "May 15", usage: 5.3 },
  { date: "May 16", usage: 4.8 },
  { date: "May 17", usage: 3.1 },
  { date: "May 18", usage: 7.6 },
  { date: "May 19", usage: 5.4 },
  { date: "May 20", usage: 2.1 },
]

export function DataUsageChart() {
  return (
    <ChartContainer
      config={{
        usage: {
          label: "Data Usage (GB)",
          color: "hsl(var(--primary))",
        },
      }}
      className="aspect-[4/3] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart accessibilityLayer data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={10} />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickMargin={10}
            tickFormatter={(value) => `${value}GB`}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                indicator="dashed"
                itemNameFormatter={() => "Data Usage"}
                itemValueFormatter={(value) => `${value}GB`}
              />
            }
          />
          <Bar dataKey="usage" fill="var(--color-usage)" radius={[4, 4, 0, 0]} />
          <ReferenceLine
            y={60}
            stroke="hsl(var(--primary))"
            strokeDasharray="3 3"
            label={{ value: "60GB Plan Limit", fill: "hsl(var(--primary))", fontSize: 12, position: "insideTopRight" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
