import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

export const CreateJobsiteDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center text-sm mx-4">
        Create <span className="ml-2 text-lg font-bold">+</span>
      </Button>
    </DialogTrigger>
    <DialogContent className="w-full max-w-[90vw] lg:max-w-[750px]">
      <DialogHeader>
        <DialogTitle>Title</DialogTitle>
        <DialogDescription className="flex items-center gap-2">
          <span className="text-blue-500 text-xl">ℹ️</span>
          Informative piece of text that can be used regarding this modal.
        </DialogDescription>
      </DialogHeader>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full">
          <Label className="mb-2">Item</Label>
          <Input placeholder="Search and Select Item" className="bg-gray-200" />
        </div>
        <div className="w-full">
          <Label className="mb-2">Quantity</Label>
          <Input placeholder="Set Quantity" className="bg-gray-200" />
        </div>
      </div>

      <div className="mt-4">
        <Label className="mb-2">Description</Label>
        <Textarea placeholder="Type the description..." className="h-36 bg-gray-200" />
      </div>

      <div className="mt-4">
        <Label className="mb-2">Notes</Label>
        <Textarea placeholder="Type a note..." className="h-36 bg-gray-200" />
      </div>

    <div className="flex justify-end">

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
