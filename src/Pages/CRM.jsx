import React from "react";

const CRM = () => {
  return (
    <div className="pt-24 px-6 md:px-20 bg-white pb-16">

      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">CRM Solution</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Build strong customer relationships and increase sales performance.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {["Lead Tracking","Customer Insights","Automation"].map((t,i)=>(
          <div key={i} className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold">{t}</h3>
            <p className="text-sm text-gray-500 mt-2">
              Improve engagement and conversion rates easily.
            </p>
          </div>
        ))}
      </div>

      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Why Choose CRM?</h2>
        <p className="text-gray-600">
          CRM helps you track interactions, manage leads, and improve customer satisfaction.
        </p>
      </div>

      
    </div>
  );
};

export default CRM;