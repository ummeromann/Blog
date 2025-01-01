import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Self = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold sm:text-4xl md:text-4xl mt-10">5: Self-Care</h1>
      <h3 className="text-2xl font-bold sm:text-2xl md:text-2xl mt-3">
        Self-Care: Nurturing Your Mind, Body, and Soul
      </h3>
      <p className="pt-3 text-lg sm:text-base md:text-lg items-center justify-center">
        Self-care is the intentional practice of looking after your mental, emotional,
        <br /> and physical health. It&apos;s more than occasional indulgence—it&apos;s about creating
        <br /> a lifestyle that prioritizes your well-being and helps you function at your best.
        <br /> In today&apos;s demanding world, self-care is essential for maintaining
        <br /> balance, reducing stress, and fostering personal growth.
      </p>
      <Link href="/self-care/self">
        <Image
          src="/self-care.jpg"
          alt="Centered Image"
          width={600}
          height={400}
          className="mt-6"
        />
      </Link>
    </div>
  );
};

export default Self;
