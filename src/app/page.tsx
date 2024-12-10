'use client';

import Link from "next/link";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <Link href="/dashboard">
        <div className="px-5 py-3 border-2 border-black rounded-lg hover:bg-gray-300">
          Go To Dashboard
        </div>
      </Link>
    </div>
  );
}

export default Home