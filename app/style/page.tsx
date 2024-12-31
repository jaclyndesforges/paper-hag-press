'use client';
import React from 'react';
import { Book, ArrowLeft, Type, Palette, FileText, Layout } from 'lucide-react';

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-white font-mono text-black cursor-crosshair">
      {/* Navigation */}
      <nav className="fixed top-4 left-4 z-50">
        <a 
          href="/" 
          className="border border-black px-2 py-1 hover:bg-black hover:text-white flex items-center gap-2 text-xs bg-white"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK
        </a>
      </nav>

      {/* Header */}
      <header className="h-32 flex items-center justify-center border-b border-black">
        <h1 className="text-2xl flex items-center gap-2">
          <Book className="w-5 h-5" />
          STYLE GUIDE
          <span className="animate-pulse">_</span>
        </h1>
      </header>

      <div className="max-w-4xl mx-auto p-8 space-y-12">
        {/* Typography */}
        <section className="border border-black p-6">
          <h2 className="text-xl mb-6 flex items-center gap-2">
            <Type className="w-5 h-5" />
            TYPOGRAPHY
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-sm mb-4">TITLE FONT</h3>
              <p className="font-sans text-4xl mb-2">Arial</p>
              <p className="text-sm opacity-70">Used for main headings and titles. Intentionally standard, clean, readable.</p>
            </div>

            <div>
              <h3 className="text-sm mb-4">INTERFACE FONT</h3>
              <p className="font-mono text-lg mb-2">Monospace</p>
              <p className="text-sm opacity-70">Used for interface elements, body text, and technical content.</p>
            </div>
          </div>
        </section>

        {/* Color */}
        <section className="border border-black p-6">
          <h2 className="text-xl mb-6 flex items-center gap-2">
            <Palette className="w-5 h-5" />
            COLOR PALETTE
          </h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-black"></div>
              <div className="w-20 h-20 border border-black bg-white"></div>
            </div>
            <p className="text-sm opacity-70">
              Strictly black and white. No gradients or opacity effects except for specific UI states.
            </p>
          </div>
        </section>

       {/* Symbols */}
       <section className="border border-black p-6">
          <h2 className="text-xl mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            SYMBOLS
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm mb-4">APPROVED PICTOGRAPHS</h3>
              <div className="text-2xl space-x-4 mb-4">
                <span>✎</span>
                <span>✂</span>
                <span>✉</span>
                <span>⌘</span>
                <span>✧</span>
                <span>⌥</span>
                <span>⎙</span>
                <span>▤</span>
                <span>▨</span>
                <span>⌗</span>
                <span>◈</span>
                <span>⚐</span>
                <span>✌</span>
                <span>✤</span>
                <span>∴</span>
              </div>
              <p className="text-sm opacity-70">Monochrome symbols only. No modern color emojis.</p>
            </div>

            <div className="border-t border-black pt-4">
              <h3 className="text-sm mb-4">USAGE RULES</h3>
              <ul className="space-y-2 text-sm">
                <li>• Symbols must remain monochrome</li>
                <li>• Use sparingly for emphasis or navigation</li>
                <li>• Avoid mixing with modern emojis</li>
                <li>• Maintain consistent size within context</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Visual Elements */}
        <section className="border border-black p-6">
          <h2 className="text-xl mb-6 flex items-center gap-2">
            <Layout className="w-5 h-5" />
            VISUAL ELEMENTS
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-black p-4">
              <h3 className="text-sm mb-2">BORDERS</h3>
              <div className="border-2 border-black p-2 mb-2">Solid</div>
              <div className="border-2 border-dashed border-black p-2">Dashed</div>
            </div>

            <div className="border border-black p-4">
              <h3 className="text-sm mb-2">HOVER STATES</h3>
              <button className="border border-black px-2 py-1 hover:bg-black hover:text-white w-full mb-2">
                Invert Effect
              </button>
              <button className="border border-black px-2 py-1 w-full group">
                <span className="inline-block transition-transform group-hover:translate-x-2">→</span> Slide Effect
              </button>
            </div>

            <div className="border border-black p-4">
              <h3 className="text-sm mb-2">PAPER FOLDS</h3>
              <div className="space-y-2">
                <div className="h-12 border border-black" style={{ background: 'linear-gradient(45deg, transparent 49%, black 49%, black 51%, transparent 51%)' }}></div>
                <div className="h-12 border border-black" style={{ background: 'linear-gradient(-45deg, white 49%, black 49%, black 51%, white 51%), linear-gradient(45deg, white 49%, black 49%, black 51%, white 51%)' }}></div>
              </div>
            </div>

            <div className="border border-black p-4">
              <h3 className="text-sm mb-2">TEXTURES</h3>
              <div className="space-y-2">
                <div className="h-12 border border-black bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                <div className="h-12 border border-black" style={{ background: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 4px)' }}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StyleGuide;