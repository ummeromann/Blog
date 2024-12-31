import Link from 'next/link'
import React from 'react'

const MindFul = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-white">
      <h1 className="text-4xl font-bold sm:text-4xl md:text-4xl mt-10">1. Mindful Living</h1>
      <h3 className="text-2xl font-bold sm:text-2xl md:text-2xl mt-3">Mindful Living: A Path to Balance and Fulfillment</h3>
      <p className="pt-3 text-lg sm:text-base md:text-lg items-center justify-center">Mindful living is a lifestyle practice that emphasizes being fully present<br/> and engaged in each moment. It encourages you to experience life without<br/> judgment, react thoughtfully, and appreciate the simple beauty of the<br/> world around you. By integrating mindfulness into daily life, you can create<br/> a sense of balance, reduce stress, and foster a deeper connection with<br/> yourself and others. Below is a detailed exploration of mindful living and<br/> how you can bring more mindfulness into your everyday routine.
      </p>
      <Link href="/mindful/mind">
        <img src="/mindful.jpg" alt="Centered Image" className="w-[600px] h-auto mt-6" />
      </Link>
    </div>
  )
}

export default MindFul