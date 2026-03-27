import React from "react";

const TSPlus = () => {
  return (
    <div className="mt-[90px] px-6 md:px-20 pb-16 bg-gray-50">

      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">TS Plus</h1>
        <p className="text-gray-600 mt-3">
          Secure remote access and business tools.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {["Remote Access", "Security", "Performance"].map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-blue-600 font-semibold">{t}</h3>
            <p className="text-sm text-gray-500 mt-2">
              Work from anywhere with secure infrastructure.
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TSPlus;