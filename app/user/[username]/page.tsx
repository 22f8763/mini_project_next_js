"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UserPage() {
  const { username } = useParams();
  const router = useRouter();

  // 🔧 Hardcoded auth logic: only allow if username is "asif"
  const isAuthenticated: boolean = username === "asif";

  // 🔧 Custom hook for auth check and redirect
  useAuthRedirect(isAuthenticated, router);

  const goToSettings = () => {
    router.replace(`/user/${username}/settings`);
  };

  const goToAbout = () => {
    router.push(`/user/about`);
  };

  const goToHome = () => {
    router.push(`/`);
  };

  const handleReload = () => {
    window.location.reload(); // 🔄 Hard reload using browser API
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">This is {username} page</h1>

      <button
        onClick={goToSettings}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition mb-4"
      >
        Open Settings Page
      </button>

      <button
        onClick={goToAbout}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition mb-4"
      >
        Open About Page
      </button>

      <button
        onClick={goToHome}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow transition mb-4"
      >
        Open Home Page
      </button>

      <button
        onClick={handleReload}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition"
      >
        Reload
      </button>
    </div>
  );
}

// ✅ 🔧 Custom hook for auth redirect with TypeScript types
function useAuthRedirect(
  isAuthenticated: boolean,
  router: ReturnType<typeof useRouter>
) {
  useEffect(() => {
    // 🔍 Check: if user is not authenticated
    if (!isAuthenticated) {
      // 🔄 Redirect to home page without adding current page to history
      router.replace("/");
    }
  }, [isAuthenticated, router]);
}

