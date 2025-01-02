'use client';

import React from 'react';
import { CircleUser } from 'lucide-react';

const EditorSection = () => {
  return (
    <section id="editor" className="border border-black p-6">
      <h2 className="text-xl mb-8 flex items-center gap-2">
        <CircleUser className="w-5 h-5" />
        MASTHEAD
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Polaroid Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative" style={{ width: 'fit-content' }}>
            <div className="bg-white p-3 pb-6 shadow-lg transform hover:rotate-1 transition-transform duration-300 cursor-pointer">
              <img 
                src="/facebw.png" 
                alt="Editor Jaclyn Desforges"
                className="w-64 h-auto grayscale"
              />
              <div className="mt-2 font-mono text-xs text-center opacity-70">
                PAPER HAG-IN-CHIEF <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <div className="font-mono space-y-4">
          <p className="leading-relaxed">
            Jaclyn Desforges is the queer and neurodivergent author of <span className="italic">Danger Flower</span>, winner of the 2022 Hamilton Literary Award for Poetry and one of CBC's picks for Best Canadian Poetry of 2021. Selected for the New York Times-featured Lunar Codex Project, her poetry collection will travel to the moon in 2025.
          </p>
          
          <p className="leading-relaxed">
            She is also the author of the picture book <span className="italic">Why Are You So Quiet?</span> and has received Canada Council for the Arts support for both her forthcoming short story collection, <span className="italic">Weird Babies</span> (Porcupine's Quill Press, 2026), and her novel-in-progress, <span className="italic">Eyelash Person</span>.
          </p>
          
          <p className="leading-relaxed">
            A Bread Loaf alumna and RBC/PEN Canada New Voices Award winner, Jaclyn teaches poetry at Wilfrid Laurier University.
          </p>

          {/* Social Links */}
          <div className="pt-4 flex flex-row gap-2">
            <a href="https://instagram.com/jaclyndesforges" className="border border-black px-3 py-1 hover:bg-black hover:text-white transition-colors text-center">
              INSTA
            </a>
            <a href="mailto:jaclyn@paperhag.ca" className="border border-black px-3 py-1 hover:bg-black hover:text-white transition-colors text-center">
              EMAIL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorSection;