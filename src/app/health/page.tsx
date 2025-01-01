import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Health = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold sm:text-4xl md:text-4xl mt-10">2. Healthy Habits</h1>
      <h3 className="text-2xl font-bold sm:text-2xl md:text-2xl mt-3">
        Healthy Habits: A Guide to Building a Balanced Life
      </h3>
      <p className="pt-3 text-lg sm:text-base md:text-lg items-center justify-center">
        Healthy habits are behaviors and practices that promote physical,
        <br /> mental, and emotional well-being. Incorporating healthy habits into
        <br /> your daily routine can improve your quality of life, boost your energy,
        <br /> and reduce the risk of chronic diseases. Here&apos;s an in-depth guide to
        <br /> developing and sustaining healthy habits.
      </p>
      <Link href="/health/health">
        <Image
          src="/health.jpg" 
          alt="Centered Image"
          width={600}
          height={400}
          className="mt-6"
        />
      </Link>
    </div>
  );
};

export default Health;
