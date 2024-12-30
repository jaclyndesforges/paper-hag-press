'use client';
import React from 'react';
import { ScrollText, BookOpen, Map, Heart } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "BRIDGING DIGITAL & PRINT",
      description: "Every physical chapbook is a portal to a digital universe. We believe in preserving the tactile magic of paper while embracing the accessibility and possibilities of digital spaces."
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "LOCAL CONNECTIONS",
      description: "Based in Hamilton, we foster connections between authors and their local literary communities. Each chapbook creates a bridge between where it's made and where it finds its readers."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "EXPERIMENTAL FORMATS",
      description: "From cootie catchers to QR treasures, we explore unconventional forms that make reading an adventure. Each publication is an artifact to be discovered and explored."
    },
    {
      icon: <ScrollText className="w-6 h-6" />,
      title: "ACCESSIBLE LITERATURE",
      description: "We believe in making experimental literature accessible to all. Our digital companions ensure every work can be experienced regardless of physical limitations."
    }
  ];

  return (
    <section className="min-h-screen p-8 border-b border-black flex flex-col justify-center bg-white font-mono">
      <h2 className="text-xl mb-8 flex items-center gap-2">
        <ScrollText className="w-5 h-5" />
        MISSION & PHILOSOPHY
      </h2>
      
      <div className="max-w-3xl mb-12">
        <p className="mb-6 text-lg">
          Paper Hag Press celebrates the intersection of physical and digital literary spaces. We create precious objects that live both on paper and in pixels.
        </p>
        <p className="text-sm opacity-70">
          est. 2024 in Hamilton, Ontario
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((value, i) => (
          <div 
            key={i} 
            className="border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-200 p-6"
          >
            <div className="flex items-start gap-4">
              {value.icon}
              <div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-sm leading-relaxed">{value.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
