import React from "react";

const Tally = () => {
  return (
    <div className="pt-24 px-6 md:px-20 pb-16">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Tally</h1>
        <p className="text-gray-600 mt-3">
          Complete accounting and financial management solution.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {["GST","Reports","Security"].map((t,i)=>(
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold">{t}</h3>
            <p className="text-sm text-gray-500 mt-2">
              Manage finances with ease and accuracy.
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Tally;