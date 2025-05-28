'use client';

import React from 'react';

export default function Home() {
  return (
    <main className="max-w-[580px] mx-auto px-6 flex flex-col justify-center items-center h-screen pt-0 mt-0">
      <div className="bio">
        <p className="mb-6 text-lg opacity-90">
          👋 hey there, you have landed on website of a stealth company, sit tight till we fire up a landing page.
        </p>
        <p className="text-lg opacity-90">
          <a href="mailto:founders@invade.dev" className="text-[var(--link-color)] hover:text-[var(--link-hover-color)] font-medium">
            say hi
          </a>
          {' '}to my creators if you can't wait to see what's been cooked.
        </p>
      </div>
    </main>
  );
}
