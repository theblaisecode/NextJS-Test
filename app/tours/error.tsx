"use client";

import Link from "next/link";

function Error({ error }: { error: Error }) {
  console.log(error);

  return (
    <div className="text-center">
      <h2 className="text-2xl">Ooops... Server Error</h2>
      <p className="text-1xl mt-2 mb-5">
        We&apos;re Experiencing Technical Difficulties
      </p>
      <Link href="/" className="bg-[#2b2a2a] py-3 px-6">
        Back to Home
      </Link>
    </div>
  );
}
export default Error;
