import React from "react";
import { useState } from "react";

const SiderBar = () => {
  return (
    <section>
      <div className="w-64 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6 text-green-300">GreenRH</h2>
        <ul>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">Home</li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">Profile</li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">Settings</li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">Logout</li>
        </ul>
      </div>
    </section>
  );
};

export default SiderBar;
