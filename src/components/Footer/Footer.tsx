'use client';


import { toast } from 'sonner'; // ✅ Add this import

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (

    <footer className="bg-gray-200 text-black pt-0">
      {/* Full-width image at top without spacing */}
  

      {/* Footer content without top padding */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-6">
        
        {/* Logo + Description */}
        <div>
          {/* <h2 className="text-2xl font-bold mb-2 text-orange-400">Epitailo</h2> */}
           <Image
                src="/images/EpitailoLogo.png"
                alt="Epitailo Logo"
                width={100}
                height={30}
              />
          <p className="text-sm opacity-80 mt-2">
           
The Strenght of any masterpiece lies in the bonds you dont see.
          </p>

        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">About</a></li>
            <li><a href="#" className="hover:text-orange-400">Products</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <p className="text-sm mb-2 opacity-70">Stay updated with our latest tech</p>
          <div className="flex items-center border-b border-gray-700">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent outline-none text-sm text-black flex-1 py-2"
            />
            <button className="text-orange-500 hover:text-orange-400 text-sm font-medium px-2">
              Subscribe
            </button>
          </div>
        </div> */}

        {/* Social Icons */}

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-orange-500 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-orange-300">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-orange-300">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-orange-300">
              <FaLinkedinIn />
            </a>
          </div>


          {/* Download Button */}
          <div className="mt-7">
            <a
              href="/EPITAILO BROCHURE.pdf"
              download
              onClick={() => toast.success('📥 Brochure download started!')}
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md"
            >
              📄 Download Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 border-t border-orange-200 py-4">
        &copy; {new Date().getFullYear()} Epitailo&trade; | All rights reserved.
      </div>

    </footer>
  );
}