import React, { useState } from "react";

const NutritionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    height: "",
    weight: "",
    bmi: "",
    fat: "",
    appointment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Appointment scheduled successfully!");
    setFormData({
      name: "",
      phone: "",
      height: "",
      weight: "",
      bmi: "",
      fat: "",
      appointment: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-80 h-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Nutrition Center</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="height">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your height"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="weight">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your weight"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="bmi">
              BMI
            </label>
            <input
              type="number"
              id="bmi"
              name="bmi"
              value={formData.bmi}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your BMI"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="fat">
              Fat Percentage (%)
            </label>
            <input
              type="number"
              id="fat"
              name="fat"
              value={formData.fat}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your fat percentage"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="appointment">
              Appointment Date
            </label>
            <input
              type="date"
              id="appointment"
              name="appointment"
              value={formData.appointment}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          >
            Schedule Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default NutritionForm;
