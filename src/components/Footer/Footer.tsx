'use client';

import React, { useRef, useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import Image from 'next/image';
import { toast } from 'sonner';
import { motion, useInView } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    const { fullName, email, phone, subject, message } = formData;

    if (!fullName || !email || !phone || !subject || !message) {
      toast.error('Please fill in all the fields before sending your enquiry.');
      return;
    }

    const companyWhatsappNumber = '917600001884'; // removed the + sign
    const enquiryMessage = `
📩 *New Enquiry Received*
👤 Name: ${fullName}
📧 Email: ${email}
📱 Phone: ${phone}
📌 Subject: ${subject}
📝 Message: ${message}
    `.trim();

    const whatsappURL = `https://wa.me/${companyWhatsappNumber}?text=${encodeURIComponent(
      enquiryMessage
    )}`;
    window.open(whatsappURL, '_blank');
    toast.success('Redirecting to WhatsApp...');

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  // Framer Motion Animation
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: '-80px 0px',
  });

  const variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  };

  const handleClick = () => {
    // Scroll to the contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }

    // Trigger brochure download
    const link = document.createElement('a');
    link.href = '/EPITAILO BROCHURE.pdf';
    link.download = 'EPITAILO BROCHURE.pdf';
    link.click();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full  relative">
      {/* Contact Form Floating */}
      <div id="contact-form" className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2/3 w-full px-4 pb-16 md:px-0 z-20">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mx-auto max-w-3xl bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-800 ring-1 ring-gray-200 dark:ring-black rounded-xl md:rounded-3xl shadow-xl p-6 md:p-14"
        >
          {/* Form Content */}
          <div className="grid grid-cols-1 gap-4 md:gap-6 mt-0">
            <h2 className="text-center text-2xl md:text-4xl font-extrabold text-gray-800 dark:text-white px-4">
              What can we do for you?
            </h2>
            <p className="text-center text-base md:text-lg text-gray-600 dark:text-gray-300 mt-2 px-4">
              Fill out the form and we&apos;ll get back to you soon.
            </p>
            {[
              { name: 'fullName', placeholder: 'Full Name', type: 'text' },
              { name: 'email', placeholder: 'Email Address', type: 'email' },
              { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
              { name: 'subject', placeholder: 'Subject', type: 'text' },
            ].map(({ name, placeholder, type }) => (
              <div key={name} className="relative">
                <Input
                  id={name} // add id for label association
                  name={name}
                  type={type}
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer h-12 md:h-14 px-4 pt-4 md:pt-5 pb-1 md:pb-2 text-gray-800 dark:text-white placeholder-transparent rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-700 focus:border-[#898989] focus:ring-2 focus:ring-[#898989]/20 dark:focus:ring-[#898989]/50 transition-all w-full"
                />
                <label
                  htmlFor={name}
                  className="absolute left-4 top-1 md:top-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 transition-all"
                >
                  {placeholder}
                </label>
              </div>
            ))}

            <div className="relative">
              <Textarea
                id="message" // add id for label association
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                className="peer px-4 pt-4 md:pt-5 pb-1 md:pb-2 text-gray-800 dark:text-white placeholder-transparent rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-700 focus:border-[#898989] focus:ring-2 focus:ring-[#898989]/20 dark:focus:ring-[#898989]/50 transition-all w-full"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-1 md:top-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 transition-all"
              >
                Your Message
              </label>
            </div>

            <Button
              type="button" // avoid form submit on enter
              onClick={handleSend}
              className="w-full h-12 md:h-14 text-base md:text-lg font-semibold bg-[#898989] hover:bg-[#4D4D4D] focus:outline-none focus:ring-4 focus:ring-[#898989]/30 text-white rounded-lg md:rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              Send
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-[#5C5C5C] text-white relative overflow-hidden pt-36 md:pt-48">
        <div
          className="absolute inset-0 opacity-33 bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/images/Footer.png')",
            zIndex: 0,
          }}
        ></div>

        {/* Footer Info Section */}
        <div className="relative z-10 max-w-6xl mx-auto py-8 md:py-16 px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 text-white">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/EPITailo Logo Light.png"
              alt="EPITAILO"
              width={160} // specify width and height for next/image
              height={64}
              className="w-32 md:w-40"
            />
            <p className="text-sm md:text-base w-50 leading-relaxed">
              S. N. 610, The Gateway, Nr. Parikh Hospital, Gangotri to Sardar Patel Ring Road,
              Nikol, Ahmedabad, Gujarat 380038.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaPhone className="text-sm" />
                <a href="tel:+917600001884" className="text-sm md:text-base hover:underline">
                  +91 7600001884
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-sm" />
                <a
                  href="mailto:info@epitailo.com"
                  className="text-sm md:text-base hover:underline"
                >
                  info@epitailo.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-sm" />
                <a
                  href="https://wa.me/917600001884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold">Quick Links</h3>
            {[
              { label: 'About Us', id: 'about' },
              { label: 'How It Works', id: 'reel' },
              { label: 'Insights', id: 'blogs' },
              { label: 'Products', id: 'products' },
              { label: 'Contact Us', id: 'contact-form' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm md:text-base hover:underline block text-left w-full"
                type="button"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Empty space for layout symmetry */}
          <div />

          {/* Social Media and Brochure */}
          <div className="space-y-6 flex flex-col items-start">
            <h3 className="text-xl md:text-2xl font-semibold">Connect with us</h3>
            <div className="flex space-x-4 text-white text-lg">
              <a
                href="https://www.facebook.com/epitailo.tileadhesive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-gray-300 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/epitailo.tileadhesive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-gray-300 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
            <Button
              type="button"
              onClick={handleClick}
              className="bg-[#898989] hover:bg-[#4D4D4D] rounded-md px-6 py-3 text-white font-semibold transition-colors"
            >
              Download Brochure
            </Button>
            <div className="mt-4">
              <Image
                src="https://res.cloudinary.com/ddztecdya/image/upload/v1748934430/Epitailo/t33lhji1iu2iwid838he.png"
                alt="Make in India"
                width={150}
                height={130}
                className="object-contain ml-5"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-4 text-xs md:text-sm text-gray-300 select-none">
          <div className="text-center md:text-left w-full md:w-auto mb-2 md:mb-0">
            © 2025 EPITAILO™ - All rights reserved.
          </div>
          <div className="text-center md:text-right w-full md:w-auto">
            Designed by{' '}
            <span className="font-semibold">
              <a
                href="https://www.instagram.com/unicolors.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Unicolors
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
