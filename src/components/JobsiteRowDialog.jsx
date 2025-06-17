import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { StatusSelect } from "./StatusSelect"
import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "./ui/button"

export const JobsiteRowDialog = ({ job }) => {
  const [status, setStatus] = useState(job.status.toLowerCase())

  return (
    <Dialog>
      <DialogTrigger asChild>
        
        <tr className="bg-white even:bg-gray-50 cursor-pointer hover:bg-gray-100">
    
          <td className="pl-6 lg:pl-70 py-3 text-blue-600 hover:underline">{job.name}</td>
          <td className="pl-6 lg:pr-50 py-3 ">
            <Button
              className={`rounded-md text-white font-medium px-3 py-1 w-32 ${
                status === "completed"
                  ? "bg-green-500"
                  : status === "on hold"
                  ? "bg-red-500"
                  : "bg-yellow-300 text-gray-800"
              }`}
            >
              {job.status}
            </Button>
          </td>
        </tr>
      </DialogTrigger>

      <DialogContent className="w-full max-w-[90vw] lg:max-w-[750px]">
        <DialogHeader>
          <DialogTitle>Jobsite Details</DialogTitle>
          <DialogDescription>Manage details for {job.name}</DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Label className="mb-2">Name</Label>
          <Input value={job.name} className="bg-gray-200" />
        </div>

        <div className="mt-4 flex gap-2">
            <div className="w-full"> 
                <Label className="mb-2">Category Included</Label>
                <Input placeholder="Select" className="bg-gray-200"/>
            </div>
            <div>
          <Label className="mb-2">Status</Label>
          <StatusSelect value={status} onChange={setStatus} />
            </div>
        </div>

        <div className="flex gap-2 justify-end mt-20">

        <Button className="w-fit bg-red-500 hover:bg-red-600">
        Cancel Changes
        <span className="border-l border-gray-300 h-9 pl-2 flex items-center">
          <X />
        </span>
      </Button>

         <Button className="w-fit bg-green-500 hover:bg-green-600">
        Save Changes
        <span className="border-l border-gray-300 h-9 pl-2 flex items-center">
          <Check />
        </span>
      </Button>

       
        </div>
      </DialogContent>
    </Dialog>
  )
}
