import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <>
      <div>This is next js self made documentation page</div>
      <button>
        <Link href="/">Go back to home page</Link>

      </button>
    </>
  );
}

export default page