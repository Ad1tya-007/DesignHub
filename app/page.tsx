'use client';

import Live from '@/components/Live';
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <div className="">
      <main className="h-screen overflow-hidden">
        <Navbar />
        <section className="flex flex-row h-full">
          <Live />
        </section>
      </main>
    </div>
  );
}
