import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Nature = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold sm:text-4xl md:text-4xl mt-10">4. Nature and Connection</h1>
      <h3 className="text-2xl font-bold sm:text-2xl md:text-2xl mt-3">
        Nature and Connection: Rebuilding the Bond with Our Environment
      </h3>
      <p className="pt-3 text-lg sm:text-base md:text-lg items-center justify-center">
        Nature and human beings have an intrinsic connection, one that is deeply
        <br /> rooted in our existence. Yet, in the fast-paced modern world, this bond is
        <br /> often overlooked or neglected. Reconnecting with nature is vital for physical
        <br /> health, mental well-being, and spiritual grounding. It reminds us of our
        <br /> place in the ecosystem and the importance of living harmoniously with the
        <br /> environment.
      </p>
      <Link href="/nature/nature">
        <Image
          src="/nature.jpg"
          alt="Centered Image"
          width={600}
          height={400}
          className="mt-6"
        />
      </Link>
    </div>
  );
};

export default Nature;
