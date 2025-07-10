import React from 'react';

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-purple-400">
      <div className="bg-transparent border-2 border-white p-8 rounded-2xl w-[400px]">
        <form className="flex flex-col space-y-4">
          <label className="text-white">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-white bg-transparent text-white px-3 py-2 rounded-lg"
          />

          <label className="text-white">Father Name</label>
          <input
            type="text"
            placeholder="Enter father's name"
            className="border border-white bg-transparent text-white px-3 py-2 rounded-lg"
          />

          <label className="text-white">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="border border-white bg-transparent text-white px-3 py-2 rounded-lg"
          />

          <button
            type="submit"
            className="mt-4 border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-red-600 hover:text-black transition cursor-pointer font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
