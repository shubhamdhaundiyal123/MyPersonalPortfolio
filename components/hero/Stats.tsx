"use client";

import CountUp from "react-countup";

export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-10 mt-12">
      <div>
        <h2 className="text-4xl font-bold text-blue-500">
          <CountUp end={2.3} duration={2} decimals={1} />+
        </h2>

        <p className="text-gray-400 mt-2">Years Experience</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-blue-500">
          <CountUp end={20} duration={2} />+
        </h2>

        <p className="text-gray-400 mt-2">Features Delivered</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-blue-500">
          <CountUp end={3} duration={2} />
        </h2>

        <p className="text-gray-400 mt-2">Enterprise Projects</p>
      </div>
    </div>
  );
}
