"use client";
import { useParams } from "next/navigation";

export default function DynamicRoute() {
  const params = useParams();
  const { username } = params;

  return (
    <div>
      <h1>This is {username} page</h1>
    </div>
  );
}
