'use client';

import React, { useState } from 'react';
import { Sparkles, Book, Key, Lock, ArrowDown, ArrowRight, Ghost, Mail, FileText, MapPin, Newspaper, User } from 'lucide-react';
import MissionSection from './components/MissionSection';
import AuthorGuidelines from './components/AuthorGuidelines';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<null | string>(null);

  const seasonChapbooks = [
    {
      title: "GHOST LETTERS",
      author: "Sarah Chen",
      format: "Cootie Catcher",
      status: "Coming Fall 2024"
    },
    {
      title: "PAPER MACHINES",
      author: "Alex Rivera",
      format: "QR Code Collection",
      status: "Coming Fall 2024"
    },
    {
      title: "FOLD HERE",
      author: "Mai Wong",
      format: "Origami Sequence",
      status: "Coming Fall 2024"
    },
    {
      title: "STATIC",
      author: "Jordan Lee",
      format: "Photocopier Series",
      status: "Coming Fall 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-mono text-black cursor-crosshair">
      {/* Fixed Navigation */}
      <nav className="fixed top-4 right-4 flex gap-2 text-xs">
  <a href="#about" className="border border-black px-2 py-1 hover:bg-black hover:text-white group flex items-center gap-1">
    ABOUT<span className="inline-block transition-transform group-hover:translate-x-1">→</span>
  </a>
  <a href="#season" className="border border-black px-2 py-1 hover:bg-black hover:text-white group flex items-center gap-1">
    SEASON<span className="inline-block transition-transform group-hover:translate-x-1">→</span>
  </a>
  <a href="#access" className="border border-black px-2 py-1 hover:bg-black hover:text-white group flex items-center gap-1">
    ACCESS<span className="inline-block transition-transform group-hover:translate-x-1">→</span>
  </a>
  <a href="#contact" className="border border-black px-2 py-1 hover:bg-black hover:text-white group flex items-center gap-1">
    CONTACT<span className="inline-block transition-transform group-hover:translate-x-1">→</span>
  </a>
</nav>

      {/* Hero Section - Kept Original */}
      <section className="h-screen flex flex-col items-center justify-center p-8 border-b border-black">
        <h1 className="text-3xl mb-4 flex items-center gap-2">
          paper hag ✌︎✂︎
          <span className="animate-pulse">_</span>
        </h1>
        <p className="mb-8 opacity-70">a paper/pixel micropress</p>
        <div className="flex items-center gap-2">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span className="text-sm">scroll to explore</span>
        </div>
      </section>

      {/* Content Container - New Layout */}
      <div className="max-w-4xl mx-auto p-8 space-y-12">
        {/* About Section */}
        <section id="about" className="border border-black p-6">
          <h2 className="text-xl mb-8 flex items-center gap-2">
            <Ghost className="w-5 h-5" />
            ABOUT
          </h2>
          <div className="space-y-4">
            <p>Paper Hag Press creates experimental chapbooks that bridge physical and digital realms. Each physical chapbook is a key to its own digital universe.</p>
            <p>Founded in 2024, we specialize in:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Cootie catcher poetry collections
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                QR code storytelling
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Origami narratives
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Photocopier experiments
              </li>
            </ul>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="border border-black p-6">
          <h2 className="text-xl mb-8 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            ROADMAP
          </h2>
          <div className="space-y-6">
            <div className="border border-black p-6">
              <h3 className="font-bold mb-2">PHASE 1: PILOT</h3>
              <p>Single chapbook experiment testing digital integration</p>
            </div>
            <div className="border border-black p-6">
              <h3 className="font-bold mb-2">PHASE 2: SEASON ONE</h3>
              <p>Four invited poets, one collaborative season</p>
            </div>
            <div className="border border-black p-6">
              <h3 className="font-bold mb-2">PHASE 3: OPEN SUBMISSIONS</h3>
              <p>Expanding to accept submissions for future seasons</p>
            </div>
          </div>
        </section>

        {/* Season Section */}
        <section id="season" className="border border-black p-6">
          <h2 className="text-xl mb-8 flex items-center gap-2">
            <Book className="w-5 h-5" />
            FALL 2024 SEASON
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seasonChapbooks.map((book, i) => (
  <div key={i} className="border border-black p-4 hover:bg-black hover:text-white group cursor-pointer">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-bold mb-2">{book.title}</h3>
        <p className="text-sm mb-1">by {book.author}</p>
        <p className="text-sm mb-2 opacity-70">{book.format}</p>
        <p className="text-xs">{book.status}</p>
      </div>
      <span className="inline-block transition-transform group-hover:translate-x-2 opacity-0 group-hover:opacity-100">→</span>
    </div>
  </div>
))}
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="border border-black p-6">
          <h2 className="text-xl mb-8 flex items-center gap-2">
            <Newspaper className="w-5 h-5" />
            NEWS
          </h2>
          <article className="border-b border-black pb-4">
            <p className="text-sm mb-2">30 DEC 2024</p>
            <h3 className="font-bold mb-2">Launch Announcement</h3>
            <p>Paper Hag Press emerges from the swamp...</p>
          </article>
        </section>

        {/* Masthead Section */}
        <section id="masthead" className="border border-black p-6">
          <h2 className="text-xl mb-8 flex items-center gap-2">
            <User className="w-5 h-5" />
            MASTHEAD
          </h2>
          <h3 className="font-bold mb-4">EDITOR</h3>
          <p>[Your bio will go here]</p>
        </section>

        {/* Access Section */}
        <section id="access" className="border border-black p-6">
          <h2 className="text-xl mb-8 flex items-center gap-2">
            <Key className="w-5 h-5" />
            DIGITAL ACCESS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-black p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Book className="w-4 h-4" />
                PHYSICAL CHAPBOOKS
              </h3>
              <p className="text-sm mb-4">Each physical chapbook includes a unique code that unlocks its complete digital companion.</p>
              <button className="border border-black px-4 py-2 w-full hover:bg-black hover:text-white">
                ENTER CODE
              </button>
            </div>
            
            <div className="border-2 border-black p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                SEASON PASS
              </h3>
              <p className="text-sm mb-4">Get digital access to all chapbooks from the current season.</p>
              <button className="border border-black px-4 py-2 w-full hover:bg-black hover:text-white">
                BUY PASS ($40)
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="border border-black p-6">
          <h2 className="text-xl mb-8 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            NEWSLETTER
          </h2>
          <div className="max-w-md space-y-4">
            <p>Stay updated on our progress:</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-black p-2 focus:outline-none font-mono"
              />
              <button className="w-full border border-black p-2 hover:bg-black hover:text-white transition-colors">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border border-black p-6">
          <h2 className="text-xl mb-8 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            CONTACT
          </h2>
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <a href="mailto:hello@paperhag.press" className="hover:underline">
                hello@paperhag.press
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Ghost className="w-4 h-4" />
              <a href="https://instagram.com/paper.hag" className="hover:underline">
                @paper.hag
              </a>
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-black p-8 text-xs">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <p>est. 2024 | made with paper & pixels</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;