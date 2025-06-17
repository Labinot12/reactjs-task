import React, { useState } from 'react';
import emptyImage from '../assets/Empty.png'
const ServicesPanel = () => {
  const [selectedService, setSelectedService] = useState(null);
  const services = ['Sidewalk Shed', 'Scaffold'];

  return (
    <div className="flex h-screen bg-gray-100 p-4 gap-4">
      {/* Left Panel */}
      <div className="w-1/4 bg-white rounded-lg shadow p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-md font-semibold mb-2">262 3rd Avenue, New York</h2>
          {services.map((service, index) => (
            <button
              key={index}
              className="w-full mb-2 px-4 py-2 text-center bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium"
              onClick={() => setSelectedService(service)}
            >
              {service}
            </button>
          ))}
        </div>
        <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded flex items-center justify-center hover:bg-blue-800">
          <span className="mr-2">Go Back</span>
          <span>&larr;</span>
        </button>
      </div>

      {/* Right Panel */}
      <div className="w-3/4 bg-white rounded-lg shadow p-4 relative">
        <div className="absolute top-4 right-4">
          <input
            type="text"
            placeholder="Search a driver"
            className="border rounded px-3 py-1 text-sm w-60"
          />
        </div>

        {!selectedService ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <img
              src={emptyImage}
              alt="No service"
              className="w-64 mb-4"
            />
            <p className="text-lg font-semibold">No Service Selected</p>
            <p className="text-sm text-gray-500">
              Please select a service on your left to proceed.
            </p>
          </div>
        ) : (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{selectedService}</h2>
            <p className="text-gray-600">Service data will appear here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPanel;
