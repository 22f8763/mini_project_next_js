"use client";
import { useParams } from "next/navigation";

export default function SettingsPage() {
  const { username } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Settings Page
        </h1>
        <p className="text-gray-600 text-center">
          Username: <span className="font-semibold">{username}</span>
        </p>

        <div className="mt-6">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
