'use client';

import React from 'react';
import { PenTool, DollarSign, Truck, Store, Calendar } from 'lucide-react';

const AuthorGuidelines = () => {
  const steps = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "MANUSCRIPT ACCEPTANCE",
      description: "Upon acceptance, authors sign a simple contract granting Paper Hag Press first publication rights while retaining copyright of their work."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "PAYMENT & COPIES",
      description: "Authors receive an advance payment and 25 complimentary copies of their chapbook to sell or share. Additional copies available at author discount."
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "LOCAL DISTRIBUTION",
      description: "We encourage and support authors in connecting with local bookstores and literary venues in their area. Your chapbook becomes part of your local literary ecosystem."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "EVENTS & PROMOTION",
      description: "Authors are supported in organizing readings and events. We provide promotional materials and help coordinate with local venues and festivals."
    }
  ];

  return (
    <section className="min-h-screen p-8 border-b border-black flex flex-col justify-center bg-white font-mono">
      <h2 className="text-xl mb-8 flex items-center gap-2">
        <PenTool className="w-5 h-5" />
        FOR AUTHORS
      </h2>
      
      <div className="max-w-3xl mb-12">
        <p className="mb-6">
          Paper Hag Press is dedicated to supporting authors in creating unique works that bridge physical and digital spaces. Here's what you can expect when working with us:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="border-2 border-black bg-white p-6"
          >
            <div className="flex items-start gap-4">
              {step.icon}
              <div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 border-2 border-black">
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <Truck className="w-4 h-4" />
          SUBMISSION GUIDELINES
        </h3>
        <div className="space-y-4 text-sm">
          <p>We're currently accepting submissions for:</p>
          <ul className="list-disc pl-4 space-y-2">
            <li>Poetry collections suitable for cootie catcher format (8 poems)</li>
            <li>Short experimental works that play with form</li>
            <li>Text-based art that can exist in both physical and digital spaces</li>
          </ul>
          <p className="mt-6">Send queries and submissions to: hello@paperhag.press</p>
        </div>
      </div>
    </section>
  );
};

export default AuthorGuidelines;