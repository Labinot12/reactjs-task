import { JobsiteRowDialog } from "./JobsiteRowDialog"

export const JobsiteTable = ({ jobs }) => (
  <table className="min-w-full divide-y divide-gray-100 text-sm shadow-md">
    <thead>
      <tr>
        <th className="lg:pl-70 px-6 py-3 text-left font-semibold text-gray-700">Jobsite Name</th>
        <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100">
      {jobs.map((job, idx) => (
        <JobsiteRowDialog key={idx} job={job} />
      ))}
    </tbody>
  </table>
)
