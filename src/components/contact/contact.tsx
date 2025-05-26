
'use client';

import { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { toast } from 'sonner'; // ✅ Import toast

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const companyWhatsappNumber = '+917487089739';

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

    const enquiryMessage = `
📩 *New Enquiry Received*
👤 Name: ${fullName}
📧 Email: ${email}
📱 Phone: ${phone}
📌 Subject: ${subject}
📝 Message: ${message}
    `.trim();

    const whatsappURL = `https://wa.me/${companyWhatsappNumber}?text=${encodeURIComponent(enquiryMessage)}`;

    window.open(whatsappURL, '_blank'); // ✅ Directly open WhatsApp
    toast.success('Redirecting to WhatsApp...');

    // Optionally reset the form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="max-w-2xl mx-auto m-28 p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 transition-all">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800 dark:text-white">
        Get in Touch
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
        Fill out the form below and we will reach you!
      </p>

      <div className="grid grid-cols-1 gap-5">
        <Input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
        <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
        <Input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
        <Textarea name="message" placeholder="Your Message" rows={4} value={formData.message} onChange={handleChange} />

        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3"
          onClick={handleSend}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
