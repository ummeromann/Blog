import React from 'react';
import Image from 'next/image'; // Import Image from next/image

const HomePage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold sm:text-4xl md:text-4xl mt-10">The Balanced Life</h1>
      <p className="pt-6 text-lg sm:text-base md:text-lg items-center justify-center">
        Welcome to <strong>The Balanced Life</strong>, a space dedicated to helping you find harmony in the midst of
        life&apos;s chaos.<br /> Here, we explore practical tips, inspiring ideas, and thoughtful insights to help you
        create a life that feels fulfilling<br /> and centered. Whether it&apos;s balancing work and family, nurturing
        your physical and mental health, or finding<br /> joy in the simple moments, this blog is your companion on the
        journey to a more mindful, intentional way of living.<br /> Together, let&apos;s embrace balance—not as
        perfection, but as a dynamic, ever-evolving state of well-being.
      </p>
      <Image
        src="/balanced.jpg"
        alt="A balanced lifestyle image"
        width={600}
        height={400}
        className="mt-6"
      />
    </div>
  );
};

export default HomePage;
