import React from 'react';

const VehicleDetails = () => {
  const vehicleData = [
    { id: "001", owner: "John Doe", number: "ABC123", entryTime: "10:00 AM", exitTime: "2:00 PM", department: "HR" },
    { id: "002", owner: "Jane Smith", number: "XYZ456", entryTime: "11:00 AM", exitTime: "3:00 PM", department: "Finance" },
    { id: "003", owner: "Michael Brown", number: "LMN789", entryTime: "9:00 AM", exitTime: "1:00 PM", department: "IT" },
    { id: "004", owner: "Emily White", number: "QRS101", entryTime: "8:00 AM", exitTime: "12:00 PM", department: "Admin" },
    { id: "005", owner: "Daniel Green", number: "TUV202", entryTime: "1:00 PM", exitTime: "5:00 PM", department: "Sales" },
    { id: "006", owner: "Jessica Black", number: "WXY303", entryTime: "7:00 AM", exitTime: "11:00 AM", department: "Marketing" },
    // Add more rows to fill the screen
    { id: "007", owner: "Anna Blue", number: "ZXC404", entryTime: "6:00 AM", exitTime: "10:00 AM", department: "Operations" },
    { id: "008", owner: "Lucas Red", number: "VBN505", entryTime: "5:00 AM", exitTime: "9:00 AM", department: "Finance" },
    { id: "009", owner: "Sophia Pink", number: "CVB606", entryTime: "4:00 AM", exitTime: "8:00 AM", department: "HR" },
    { id: "010", owner: "Jack Yellow", number: "ASD707", entryTime: "3:00 AM", exitTime: "7:00 AM", department: "IT" }
  ];

  return (
    <div className="container mx-auto p-6 bg-blue-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Vehicle Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200">
          <thead>
            <tr className="bg-blue-200 text-blue-800 uppercase text-lg leading-normal">
              <th className="py-4 px-6 text-left">Owner ID</th>
              <th className="py-4 px-6 text-left">Owner</th>
              <th className="py-4 px-6 text-left">Vehicle Number</th>
              <th className="py-4 px-6 text-left">Entry Time</th>
              <th className="py-4 px-6 text-left">Exit Time</th>
              <th className="py-4 px-6 text-left">Department</th>
            </tr>
          </thead>
          <tbody className="text-blue-800 text-lg font-light">
            {vehicleData.map((vehicle, index) => (
              <tr key={index} className="border-b border-blue-200 hover:bg-blue-100">
                <td className="py-4 px-6 text-left whitespace-nowrap">{vehicle.id}</td>
                <td className="py-4 px-6 text-left whitespace-nowrap">{vehicle.owner}</td>
                <td className="py-4 px-6 text-left whitespace-nowrap">{vehicle.number}</td>
                <td className="py-4 px-6 text-left whitespace-nowrap">{vehicle.entryTime}</td>
                <td className="py-4 px-6 text-left whitespace-nowrap">{vehicle.exitTime}</td>
                <td className="py-4 px-6 text-left whitespace-nowrap">{vehicle.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleDetails;
