import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <>
      <button className="bg-red-400">
        <Link href="/">Go back to home page</Link>
      </button>
      <div>this is the react documentation page</div>
    </>
  );
}
export default page