import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Relationships = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold sm:text-4xl md:text-4xl mt-10">Relationships</h1>
      <h3 className="text-2xl font-bold sm:text-2xl md:text-2xl mt-3">
        Relationships: The Foundation of Human Connection
      </h3>
      <p className="pt-3 text-lg sm:text-base md:text-lg items-center justify-center">
        Relationships play a vital role in shaping our lives. They provide support,
        <br /> companionship, and a sense of belonging, helping us navigate the
        <br /> complexities of life. Whether they are romantic, familial, friendships,
        <br /> or professional connections, healthy relationships enrich our experiences,
        <br /> contribute to personal growth, and enhance overall well-being.
      </p>
      <Link href="/relationship/relation">
        <Image
          src="/relationship.jpg"
          alt="Centered Image"
          width={600}
          height={400}
          className="mt-6 mb-10"
        />
      </Link>
    </div>
  );
};

export default Relationships;
