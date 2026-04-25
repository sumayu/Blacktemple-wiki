'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "text-[10px] bg-zinc-800 px-2 py-1 text-zinc-300 uppercase transition-colors hover:bg-zinc-700 font-sans"
      )}
      aria-label="Copy to clipboard"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
