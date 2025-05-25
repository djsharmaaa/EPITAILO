'use client';
import { useEffect } from 'react';

const INSTAGRAM_REELS = [
  'https://www.instagram.com/reel/DJUNedRNRhB/',
  'https://www.instagram.com/reel/DJWryQZtzlq/',
  'https://www.instagram.com/reel/DJZSqa1JTzz/',
  'https://www.instagram.com/reel/DJb0D5bpk7c/',
  'https://www.instagram.com/reel/DJegK4fJS0-/',
  'https://www.instagram.com/reel/DJhCuSzp7NO/',
  'https://www.instagram.com/reel/DJjjvB3JWyM/',
  'https://www.instagram.com/reel/DJo30Mfi4s5/',
  'https://www.instagram.com/reel/DJrTIN6NwLP/',
];

export default function Reel() {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', '//www.instagram.com/embed.js');
    script.setAttribute('async', '');
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-4 px-6 py-10 bg-black hide-scrollbar">
      {INSTAGRAM_REELS.map((url, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 w-[320px] md:w-[340px] h-[600px] snap-center rounded-xl overflow-hidden bg-neutral-900 shadow-lg transition-all duration-300 ease-in-out"
        >
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={`${url}?utm_source=ig_embed&amp;utm_campaign=loading`}
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: 0,
              borderRadius: 12,
              boxShadow:
                '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: 'auto',
              maxWidth: 340,
              minWidth: 326,
              padding: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      ))}
    </div>
  );
}
