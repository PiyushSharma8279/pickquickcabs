import React, { useState } from "react";

export default function CarSearchForm() {
  const [formData, setFormData] = useState({
    year: "",
    make: "",
    model: "",
    engine: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Data:", formData);
    // You can send this data to API or backend here
  };

  return (
    <div className="py-10 px-4 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 shadow-md rounded-lg p-6 md:p-10 flex flex-wrap gap-4 items-center w-full md:w-[90%]"
      >
        {/* Year */}
        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="border rounded-lg px-3 h-12 md:h-14 py-2 w-full sm:w-[48%] md:w-[20%]"
        >
          <option value="">Year</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>

        {/* Make */}
        <select
          name="make"
          value={formData.make}
          onChange={handleChange}
          className="border rounded-lg px-3 h-12 md:h-14 py-2 w-full sm:w-[48%] md:w-[20%]"
        >
          <option value="">Make</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Ford">Ford</option>
        </select>

        {/* Model */}
        <select
          name="model"
          value={formData.model}
          onChange={handleChange}
          className="border rounded-lg px-3 h-12 md:h-14 py-2 w-full sm:w-[48%] md:w-[20%]"
        >
          <option value="">Model</option>
          <option value="Camry">Camry</option>
          <option value="Civic">Civic</option>
          <option value="Mustang">Mustang</option>
        </select>

        {/* Engine */}
        <select
          name="engine"
          value={formData.engine}
          onChange={handleChange}
          className="border rounded-lg px-3 h-12 md:h-14 py-2 w-full sm:w-[48%] md:w-[20%]"
        >
          <option value="">Engine</option>
          <option value="V4">V4</option>
          <option value="V6">V6</option>
          <option value="V8">V8</option>
        </select>

        {/* Button */}
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold w-full sm:w-auto px-8 py-3 md:py-4 rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
}
