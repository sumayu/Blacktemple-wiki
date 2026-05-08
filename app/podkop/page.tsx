import React from 'react';
import PodkopInstruction from '@/components/podkop/PodkopInstruction';

export default function PodkopPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="container mx-auto">
        <PodkopInstruction />
      </main>
    </div>
  );
}
