'use client';

import { useState, useEffect } from 'react';

const desktopImages = [
  'https://res.cloudinary.com/ddztecdya/image/upload/v1748684200/hocqndm7h4jpesaedugk.jpg',
  'https://res.cloudinary.com/ddztecdya/image/upload/v1748684198/rxkqatcb3njzojrpp9r8.jpg',
];

const mobileImages = [
  'https://res.cloudinary.com/ddztecdya/image/upload/v1748962480/Epitailo/gxsantpdzzkc0z3qlm8u.jpg',
  'https://res.cloudinary.com/ddztecdya/image/upload/v1748962483/Epitailo/b2dfmz3jfd1k4curincu.jpg',
];

const titles = [
  "Smart Adhesive Made in Bharat",
  "Engineers choice Tilers Trust"
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setAnimating(true);

      setTimeout(() => {
        setAnimating(false);
        setPrevIndex(null);
      }, 2000);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <section className="relative h-[100vw] md:h-screen w-full bg-black text-white flex items-center justify-start px-6 overflow-hidden font-poppins mt-16 md:mt-0">
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Previous Image Sliding Out */}
        {prevIndex !== null && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[prevIndex]})`,
              animation: animating ? 'slideDownOut 2s forwards ease-in-out' : 'none',
              zIndex: 5,
            }}
          />
        )}

        {/* Current Image Sliding In */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            animation: animating ? 'slideDownIn 0.8s forwards ease-in-out' : undefined,
            zIndex: 10,
          }}
        >
          {/* Zoom effect after slide finishes */}
          {!animating && (
            <div
              className="absolute inset-0 bg-cover bg-center zoomIn"
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-left w-11/12 sm:w-10/12 md:w-3/4 max-w-[1000px] lg:ml-28 md:ml-20 px-4">
        <h1 className="hidden md:block text-4xl md:text-6xl font-bold leading-snug tracking-tight transition-opacity duration-1000 ease-in-out w-[30%]">
          {titles[currentIndex]}
        </h1>
      </div>

      {/* Social Links Bottom Left */}
      <div className="absolute bottom-6 left-6 z-20 flex gap-6 sm:gap-6 text-sm">
        <a
          href="https://www.facebook.com/epitailo.tileadhesive"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline cursor-pointer"
        >
          FACEBOOK
        </a>
        <a
          href="https://www.instagram.com/epitailo.tileadhesive?igsh=NzByc21pd2t0dmxt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline cursor-pointer"
        >
          INSTAGRAM
        </a>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideDownIn {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        @keyframes slideDownOut {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes zoomInEffect {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }

        .zoomIn {
          animation: zoomInEffect 6s ease-in-out forwards;
          will-change: transform;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          z-index: 15;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
