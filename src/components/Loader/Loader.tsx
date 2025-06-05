'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type LoaderProps = {
  onFinish: () => void;
};

export default function Loader({ onFinish }: LoaderProps) {
  const [stage, setStage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const checkImagesLoaded = () => {
      const cloudImages: HTMLImageElement[] = Array.from(
        document.querySelectorAll('img[src*="res.cloudinary.com"], img[src*="/_next/image"]')
      );

      if (cloudImages.length === 0) {
        setImagesLoaded(true);
        return;
      }

      let loadedCount = 0;
      const total = cloudImages.length;

      const onLoadOrError = () => {
        loadedCount++;
        if (loadedCount === total) {
          setImagesLoaded(true);
        }
      };

      cloudImages.forEach((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          onLoadOrError();
        } else {
          img.addEventListener('load', onLoadOrError, { once: true });
          img.addEventListener('error', onLoadOrError, { once: true });
        }
      });

      return () => {
        cloudImages.forEach((img) => {
          img.removeEventListener('load', onLoadOrError);
          img.removeEventListener('error', onLoadOrError);
        });
      };
    };

    checkImagesLoaded();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setStage(1), 300));
    timers.push(setTimeout(() => setStage(2), 900));
    timers.push(setTimeout(() => setStage(3), 1800));
    timers.push(setTimeout(() => {
      setStage(4);
      onFinish();
    }, 2200));

    return () => timers.forEach((t) => clearTimeout(t));
  }, [imagesLoaded, onFinish]);

  if (stage === 4) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div
        className={`transition-all duration-700 ease-in-out transform
          ${stage === 0 ? 'scale-0 opacity-0' : ''}
          ${stage === 1 || stage === 2 ? 'scale-100 opacity-100' : ''}
          ${stage === 3 ? 'scale-95 opacity-100' : ''}`}
        style={{ willChange: 'transform' }}
      >
        <Image
          src="/images/Tagline Round.png"
          alt="Fix it! Forget it!"
          width={180}
          height={150}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
