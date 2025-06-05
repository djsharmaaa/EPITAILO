'use client';

export default function EnquireNow() {
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

  return (
    <button
      onClick={handleClick}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 bg-[#898989] hover:bg-[#4D4D4D] text-white font-semibold py-2 px-4 rounded-lg rotate-90 origin-bottom-right shadow-md"
    >
      Enquire Now
    </button>
  );
}
