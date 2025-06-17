import { CreateJobsiteDialog } from "@/components/CreateJobsiteDialog";
import { JobsiteTable } from "@/components/JobSitesTable";
import React, { useState } from "react";

const ProductsList = () => {
  const jobSites = [
    { name: "1658 E 23rd St, Brooklyn, NY 11229, USA", status: "Completed" },
    { name: "1705 E 22nd St, Brooklyn, NY 11229, USA", status: "On Hold" },
    { name: "47 Lake St, Brooklyn, NY 11223, USA", status: "Completed" },
    { name: "256 Bay 19th St, Brooklyn, NY 11214, USA", status: "On Hold" },
    { name: "86-04 Shore Pkwy, Jamaica, NY 11414, USA", status: "On Hold" },
    { name: "95-01 Linden Blvd, Jamaica, NY 11417, USA", status: "On Hold" },
  ];


  const [searchQuery, setSearchQuery] = useState("")

  const filteredJobSites = jobSites.filter((job) =>
    job.name.toLowerCase().includes(searchQuery.toLowerCase())
  )



  return (
    <div className="p-6 space-y-6 min-h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-2 bg-white rounded-xl p-2 shadow-md">
        <div className="bg-yellow-300 text-white text-center py-6 rounded-xl font-semibold text-lg shadow-md border border-yellow-400">
          14 On Road
        </div>
        <div className="bg-green-500 text-white text-center py-6 rounded-xl font-semibold text-lg shadow-md border border-green-600">
          3 Completed
        </div>
        <div className="bg-red-500 text-white text-center py-6 rounded-xl font-semibold text-lg shadow-md border border-red-600">
          2 On Hold
        </div>
      </div>

      <div className=" bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 bg-gray-50 px-4 py-3">Title</h2>
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div className="flex items-center text-sm text-gray-600 max-w-lg px-4 py-3 justify-center">
              <span className="text-blue-500 text-xl mr-2 rounded-full">ℹ️</span>
              <p>Informative piece of text that can be used regarding this modal.</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Search a driver"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            
          <CreateJobsiteDialog/>
            </div>
          </div>
        </div>

       <JobsiteTable jobs={filteredJobSites}/>
      </div>
    </div>
    </div>
  );
};

export default ProductsList;
