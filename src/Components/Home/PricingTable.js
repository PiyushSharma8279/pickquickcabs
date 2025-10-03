import React from "react";

const pricingData = [
  {
    vehicle: "Indica",
    airport: "₹700",
    insideCity8: "₹1,500",
    insideCity12: "₹1,800",
    outstation: "₹9",
  },
  {
    vehicle: "Indigo",
    airport: "₹750",
    insideCity8: "₹1,600",
    insideCity12: "₹1,900",
    outstation: "₹9.5",
  },
  {
    vehicle: "Swift Dzire",
    airport: "₹800",
    insideCity8: "₹1,700",
    insideCity12: "₹2,000",
    outstation: "₹10.5",
  },
  {
    vehicle: "Honda Amaze / Etios",
    airport: "₹850",
    insideCity8: "₹1,800",
    insideCity12: "₹2,200",
    outstation: "₹12.5",
  },
  {
    vehicle: "Mobilio / Ertiga",
    airport: "₹900",
    insideCity8: "₹2,650",
    insideCity12: "₹2,900",
    outstation: "₹15",
  },
  {
    vehicle: "Toyota Innova",
    airport: "₹1,100",
    insideCity8: "₹2,750",
    insideCity12: "₹3,250",
    outstation: "₹18",
  },
  {
    vehicle: "Toyota Innova Crysta",
    airport: "₹1,200",
    insideCity8: "₹2,850",
    insideCity12: "₹3,650",
    outstation: "₹19",
  },
  {
    vehicle: "Honda City",
    airport: "₹1,500",
    insideCity8: "₹2,600",
    insideCity12: "₹3,400",
    outstation: "₹19",
  },
  {
    vehicle: "Tempo Traveller",
    airport: "₹2,000",
    insideCity8: "₹5,650",
    insideCity12: "₹6,750",
    outstation: "₹25",
  },
];

export default function PricingTable() {
  return (
    <>
      <div className="p-6 overflow-x-auto">
        <div><div className="text-center mb-12">
          <p className="text-gray-600">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Our Taxi Fares</h2>
        </div></div>
        <table className="w-full border border-gray-300 text-center text-sm md:text-base">
          <thead>
            <tr className="bg-yellow-400 text-white">
              <th className="p-2 border">Vehicle Type</th>
              <th className="p-2 border">Airport (Pick/Drop)</th>
              <th className="p-2 border">Inside City (8Hr/80KM)</th>
              <th className="p-2 border">Inside City (12Hr/120KM)</th>
              <th className="p-2 border">Outstation (Per KM)</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((row, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <td className="p-2 border font-medium">{row.vehicle}</td>
                <td className="p-2 border">{row.airport}</td>
                <td className="p-2 border">{row.insideCity8}</td>
                <td className="p-2 border">{row.insideCity12}</td>
                <td className="p-2 border">{row.outstation}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer Notes */}
        <div className="mt-4 text-sm text-gray-700">
          <p>
            <strong>Driver Charges (After 10PM):</strong> Rs.250
          </p>
          <p>
            <strong>Outstation:</strong> Min. 250KM / Day
          </p>
        </div>
      </div>
    </>
  );
}
