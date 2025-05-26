'use client';

import { useRef, useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
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

    const companyWhatsappNumber = '+917487089739';

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

  // Animation config
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: '-80px 0px',
  });

  const variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 ring-1 ring-gray-200 dark:ring-black rounded-3xl shadow-xl p-10 md:p-14 transition-all duration-200"
      >
        <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800 dark:text-white">
          Contact Us
        </h1>
        <p className="text-center text-gray-800 dark:text-gray-400 mb-10 text-lg">
          Fill out the form and we’ll get back to you soon.
        </p>

        <div className="grid grid-cols-1 gap-6">
          {[{ name: 'fullName', placeholder: 'Full Name', type: 'text' },
            { name: 'email', placeholder: 'Email Address', type: 'email' },
            { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
            { name: 'subject', placeholder: 'Subject', type: 'text' },
          ].map(({ name, placeholder, type }) => (
            <div key={name} className="relative">
              <Input
                name={name}
                type={type}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                placeholder=" "
                className="peer h-14 px-4 pt-5 pb-2 text-gray-800 dark:text-white placeholder-transparent rounded-xl border border-gray-300 dark:border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 transition-all w-full"
              />
              <label
                htmlFor={name}
                className="absolute left-4 top-2 text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 transition-all"
              >
                {placeholder}
              </label>
            </div>
          ))}

          <div className="relative">
            <Textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className="peer px-4 pt-5 pb-2 text-gray-800 dark:text-white placeholder-transparent rounded-xl border border-gray-300 dark:border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 transition-all w-full"
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 transition-all"
            >
              Your Message
            </label>
          </div>

          <Button
            onClick={handleSend}
            className="w-full h-14 text-lg font-semibold bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900 text-white rounded-xl transition-all"
          >
            Send via WhatsApp
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
