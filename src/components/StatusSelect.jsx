import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export const StatusSelect = ({ value, onChange }) => {
  const statusStyles = {
    completed: "bg-green-500 text-white",
    inprogress: "bg-green-200 text-gray-900",
    onhold: "bg-yellow-300 text-gray-800",
  }

  const displayLabel = {
    completed: "Completed",
    inprogress: "In Progress",
    onhold: "On Hold",
  }

  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className={`w-[180px] ${statusStyles[value] || "bg-gray-200 text-gray-700"}`}>
        <SelectValue placeholder="Select status">
          {value ? displayLabel[value] : "Select status"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="px-3 py-1 bg-gray-200 text-sm text-gray-600">
            Status
          </SelectLabel>
          <SelectItem value="completed" className="data-[state=checked]:bg-green-500 data-[highlighted]:bg-green-100">
            Completed
          </SelectItem>
          <SelectItem value="inprogress" className="data-[state=checked]:bg-green-200 data-[highlighted]:bg-green-100">
            In Progress
          </SelectItem>
          <SelectItem value="onhold" className="data-[state=checked]:bg-yellow-300 text-gray-800 data-[highlighted]:bg-yellow-100">
            On Hold
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
