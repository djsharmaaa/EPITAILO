'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function FixItBadge() {
  const [scale, setScale] = useState(0.1); // Start tiny

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScale = 1;
      const minScale = 0;
      const maxScroll = 200; // After 500px scroll, reach max scale

      const progress = Math.min(scrollTop / maxScroll, 1);
      const newScale = minScale + progress * (maxScale - minScale);

      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-[100px] h-[100] md:h-[200px] md:w-[200] rounded-full overflow-hidden mx-auto">
      <div
        className="w-full h-full transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        <Image
          src="/images/Tagline Round.png" // ✅ Update this path to match your image
          alt="Fix It Badge"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
