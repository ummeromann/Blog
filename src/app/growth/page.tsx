import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Growth = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold sm:text-4xl md:text-4xl mt-10">3. Personal Growth</h1>
      <h3 className="text-2xl font-bold sm:text-2xl md:text-2xl mt-3">
        Personal Growth: A Journey of Self-Improvement
      </h3>
      <p className="pt-3 text-lg sm:text-base md:text-lg items-center justify-center">
        Personal growth is the ongoing process of self-development in various
        <br /> aspects of life, including mental, emotional, social, and spiritual areas. It
        <br /> involves enhancing self-awareness, expanding knowledge, and striving
        <br /> to become the best version of oneself. Personal growth not only improves
        <br /> one&apos;s capabilities but also fosters a sense of purpose and fulfillment.
      </p>
      <Link href="/growth/growth">
        <Image
          src="/growth.jpg"
          alt="Centered Image"
          width={600}
          height={600}
          className="mt-6"
        />
      </Link>
    </div>
  );
};

export default Growth;
