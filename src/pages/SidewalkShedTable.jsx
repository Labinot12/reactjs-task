import React from 'react';

const tableData = [
  { nr: 1, item: 'G42295', quantity: 10 },
  { nr: 2, item: 'M721', quantity: 83 },
  { nr: 3, item: 'M94796', quantity: 31 },
  { nr: 4, item: 'S25907', quantity: 47 },
  { nr: 5, item: 'A68446', quantity: 52 },
  { nr: 6, item: 'F3786', quantity: 10 },
  { nr: 7, item: 'R69895', quantity: 30 },
  { nr: 8, item: 'A29259', quantity: 32 },
  { nr: 9, item: 'A41878', quantity: 16 },
  { nr: 10, item: 'A37244', quantity: 13 },
  { nr: 11, item: 'M89319', quantity: 10 },
];

const SidewalkShedTable = () => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto border rounded-lg shadow">
        <table className="min-w-full table-auto border-collapse text-sm text-left">
          <thead>
            <tr>
              <th
                colSpan="5"
                className="bg-gray-100 text-lg font-semibold text-gray-800 px-4 py-3 border-b"
              >
                Sidewalk Shed
              </th>
            </tr>
            <tr className="bg-gray-100 text-gray-700 font-semibold border-b">
              <th className="px-4 py-2">Nr.</th>
              <th className="px-4 py-2">Item</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr
                key={row.nr}
                className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="px-4 py-2 border-t">{row.nr}</td>
                <td className="px-4 py-2 border-t">{row.item}</td>
                <td className="px-4 py-2 border-t">{row.quantity}</td>
                <td className="px-4 py-2 border-t">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </td>
                <td className="px-4 py-2 border-t">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SidewalkShedTable;
