'use client';

import './globals.css';
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ScrollonTop from '@/components/ScrollTop/ScrollTop';
import EnquireNow from '@/components/Enquire/Enquire';
import Loader from '@/components/Loader/Loader'; // Make sure this path is correct

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metaata = {
  title: 'Epitailo',
  description:
    'Epitailo is India’s trusted brand for smart bonding solutions including tile adhesives, epoxy grout, block mortar, and wall putty. Made in Bharat, crafted with care.',
  metadataBase: new URL('https://www.epitailo.com'),
  openGraph: {
    title: 'Epitailo – Strong Bonds Forever',
    description:
      'Epitailo offers premium tile adhesives, epoxy grouts, block mortar, and more. Trusted across India.',
    url: 'https://www.epitailo.com',
    siteName: 'Epitailo',
    images: [
      {
        url: 'https://www.epitailo.com/assets/epitailo-og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Epitailo – Premium Tile Adhesives & Grouts',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <html lang="en" className={poppins.className}>
      <body className="scroll-smooth">
        {!isLoaded && <Loader onFinish={() => setIsLoaded(true)} />}
        {isLoaded && (
          <>
            <Navbar />
            {children}
            <ScrollonTop />
            <EnquireNow />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
