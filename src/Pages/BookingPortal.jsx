import React from "react";

const BookingPortal = () => {
  return (
    <div className="pt-24 px-6 md:px-20 pb-16">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Booking Portal</h1>
        <p className="text-gray-600 mt-3">
          Simplify online bookings for your business.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {["Online Booking","Calendar","Notifications"].map((t,i)=>(
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold">{t}</h3>
            <p className="text-sm text-gray-500 mt-2">
              Enhance customer experience with automation.
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BookingPortal;