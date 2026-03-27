import React from "react";

const GMB = () => {
  return (
    <div className="pt-24 px-6 md:px-20 pb-16">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Google My Business</h1>
        <p className="text-gray-600 mt-3">
          Improve your local presence and attract more customers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {["Visibility","Reviews","Insights"].map((t,i)=>(
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold">{t}</h3>
            <p className="text-sm text-gray-500 mt-2">
              Grow your business with local SEO tools.
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default GMB;