import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 mb-20">
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      </div>
      {/* Banner Image */}
      <div className="w-full">
        <Image
          src="/images/ABOUT.jpg"
          alt="About Banner"
          width={1920}
          height={300}
          className="w-full object-cover"
          priority
        />
        <Image
          src="/images/About2.png"
          alt="About Banner"
          width={1920}
          height={300}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Content Section */}
    </div>
  );
}