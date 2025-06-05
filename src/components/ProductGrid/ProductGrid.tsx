'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Product = {
  title: string;
  image: string;
  imagestep?: string;
  titlestep?: string;
  features: string[];
  water?: string;
  potLife?: string;
  coverage?: string;
  mixRatio?: string;
  shelfLife?: string;
    price?: string;
  color: {
    base: string;
    text: string;
    border: string;
    bg: string;
    badgeBg: string;
    from: string;
    to: string;
  };
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      title: 'ET1 - SMALL SIZED FLOOR TILE ADHESIVE',
        price: '₹399',
      image:
        'https://res.cloudinary.com/ddztecdya/image/upload/v1748934013/Epitailo/yott6jard5m5ph6x5evs.png',
      imagestep:
        'https://res.cloudinary.com/ddztecdya/image/upload/v1748934001/Epitailo/axvfm7osdu81wcuycm4j.png',
      titlestep: 'How to Apply - ET1 - SMALL SIZED FLOOR TILE ADHESIVE',
      features: ['Ready To Use', 'High-quality Bonding Strength', 'Saves Time And Labour'],
      water: '23%–25%',
      potLife: '1.5 hrs @ 23°C',
      coverage: '30–40 sq ft / 20kg @ 6mm',
      color: {
        base: 'sky',
        text: 'text-sky-700',
        border: 'border-sky-200',
        bg: 'bg-sky-50',
        badgeBg: 'bg-sky-500',
        from: 'from-sky-50',
        to: 'to-sky-100',
      },
    },
    {
      title: 'ET2 - MEDIUM SIZED WALL TILE ADHESIVE',
        price: '₹499',
      image:
        'https://res.cloudinary.com/ddztecdya/image/upload/v1748934014/Epitailo/lysukiep8yno3ehgloha.png',
      imagestep:
        'https://res.cloudinary.com/ddztecdya/image/upload/v1748934001/Epitailo/ebesyev5v3zq8p6jh7ji.png',
      titlestep: 'How to Apply - ET2 - MEDIUM SIZED WALL TILE ADHESIVE',
      features: ['Excellent Bond Strength', 'Self-curing & Rapid Setting', 'No Shrinkage, No Cracks'],
      water: '24%–26%',
      potLife: '1.5 - 2 hours @ 23°C',
      coverage: '30–40 sq ft / 20kg @ 6mm',
      color: {
        base: '#4ba25c',
        text: 'text-[#4ba25c]',
        border: 'border-[#4ba25c]',
        bg: 'bg-[#e6f4ea]',
        badgeBg: 'bg-[#4ba25c]',
        from: 'from-[#e6f4ea]',
        to: 'to-[#4ba25c]',
      },
    },
    {
      title: 'ET3 - 4X8 WALL TILES & LARGE FORMAT TILE ADHESIVE',
        price: '₹599',
      image:
        'https://res.cloudinary.com/ddztecdya/image/upload/v1748934014/Epitailo/vqk50wdd86wddvmtxda2.png',
      imagestep:
        'https://res.cloudinary.com/ddztecdya/image/upload/v1748934001/Epitailo/bqo7eoke3o8rsbqmlnu0.png',
      titlestep: 'How to Apply - ET3 - 4X8 WALL TILES & LARGE FORMAT TILE ADHESIVE',
      features: ['Slip-resistant Formula', 'Long-lasting Adhesion', 'Works On Multiple Surfaces'],
      water: '24%–27%',
      potLife: '1.5 – 2 Hours @ 23°C',
      coverage: '30–40 sq ft per 20kg @ 6mm',
      color: {
        base: 'orange',
        text: 'text-orange-500',
        border: 'border-orange-200',
        bg: 'bg-orange-50',
        badgeBg: 'bg-orange-500',
        from: 'from-orange-50',
        to: 'to-orange-100',
      },
    },
    {
      title: 'ET4 - HEAVY DUTY STONE ADHESIVE',
        price: '₹699',
      image:
        'https://res.cloudinary.com/ddztecdya/image/upload/v1748934015/Epitailo/o9fmunedkhtz0r6gwwbx.png',
      imagestep:
        'https://res.cloudinary.com/ddztecdya/image/upload/v1748934001/Epitailo/v7lhrtka13pmm55hsrvz.png',
      titlestep: 'How to Apply - ET4 - HEAVY DUTY STONE ADHESIVE',
      features: ['High Compressive Strength', 'Superior Water Resistance', 'Perfect For Indoor & Outdoor Use'],
      water: '26%–28%',
      potLife: '1.5 - 2 hrs @ 23°C',
      coverage: '30–40 sq ft / 20kg @ 6mm',
      color: {
        base: '#7266a1',
        text: 'text-[#7266a1]',
        border: 'border-[#7266a1]',
        bg: 'bg-[#f0eef9]',
        badgeBg: 'bg-[#7266a1]',
        from: 'from-[#f0eef9]',
        to: 'to-[#7266a1]',
      },
    },
    {
      title: 'BLOCK JOINTING MORTAR',
        price: '₹599',
      image:
        'https://res.cloudinary.com/ddztecdya/image/upload/v1748934254/Epitailo/rakmveojobpeiohy50z1.png',
      imagestep:
        'https://res.cloudinary.com/ddztecdya/image/upload/v1748934001/Epitailo/vdycelm3s29jklnpr67c.png',
      titlestep: 'How to Apply - BLOCK JOINTING MORTAR',
      features: [
        'Pre-mixed, only water to be added',
        'Thin joint application (2–3 mm)',
        'Excellent adhesion & bonding',
        'Crack & shrink resistant',
        'Cost-effective & saves time',
      ],
      water: '24%–28%',
      potLife: '2 HOURS',
      mixRatio: '3:1(Powder:Water',
      coverage: '1.5–1.75 m² / 40kg @ 3mm',
      shelfLife: '6 Months',
      color: {
        base: '#a0a0a0',
        text: 'text-[#a0a0a0]',
        border: 'border-[#a0a0a0]',
        bg: 'bg-[#f5f5f5]',
        badgeBg: 'bg-[#a0a0a0]',
        from: 'from-[#f5f5f5]',
        to: 'to-[#a0a0a0]',
      },
    },
    {
      title: 'SP-5000 PREMIUM EPOXY TILE GROUT',

      image:
        'https://res.cloudinary.com/ddztecdya/image/upload/v1748934012/Epitailo/yj5xqyiha80ucv1ea1yj.png',
      features: [
        '100% Stain Free',
        'Anti-Bacterial & Anti-Fungal',
        'Strong & Durable',
        'Chemical & Temperature Resistant',
        'Non-Flammable | No Solvents',
      ],
      potLife: '1 hour (approx.)',
      shelfLife: '12 months',
      color: {
        base: 'orange',
        text: 'text-orange-500',
        border: 'border-orange-200',
        bg: 'bg-orange-50',
        badgeBg: 'bg-orange-500',
        from: 'from-orange-50',
        to: 'to-orange-100',
      },
    },
  ];

  return (
    <>
      <motion.div className="overflow-x-hidden">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 m-4 md:ml-45 p-4 md:p-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {products.map((product, i) => {
            // const direction = i % 2 === 0 ? -100 : 100;
            return (
<motion.div
  key={i}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: { opacity: 0, x: i % 2 === 0 ? -80 : 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        mass: 1,
        restDelta: 0.001,
        restSpeed: 0.001,
      },
    },
  }}
  onClick={() => setSelectedProduct(product)}
  className="cursor-pointer bg-white transition p-4"
  whileHover={{ scale: 1.03 }}
  style={{
    willChange: 'transform, opacity',
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
  }}
>
  <Image
    src={product.image}
    alt={product.title}
    width={300}
    height={300}
    className="w-full h-72 object-contain"
  />
  <h2 className="mt-4 text-lg font-semibold text-center">
    {product.title.startsWith('ET') ? (
      <div className="flex flex-col items-center space-y-1">
        <div className="flex overflow-hidden rounded shadow text-sm font-bold">
          <div className="bg-gray-700 text-white px-2 py-0.5 tracking-tight">
            {product.title.split(' - ')[0].slice(0, 2)}
          </div>
          <div className={`${product.color.badgeBg} text-white px-2 py-0.5 tracking-tight`}>
            {product.title.split(' - ')[0].slice(2)}
          </div>
        </div>
        <div className="text-base font-semibold text-center">
          {product.title.includes(' - ') ? product.title.split(' - ')[1] : product.title}
        </div>
      </div>
    ) : (
      product.title
    )}
  </h2>
</motion.div>


            );
          })}
        </motion.div>
      </motion.div>
<AnimatePresence>
  {selectedProduct && (
    <motion.div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProduct(null)}
    >
      <motion.div
        className="bg-white max-w-7xl w-full rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row relative max-h-[90vh]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-3xl font-bold z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded"
          aria-label="Close modal"
        >
          &times;
        </button>

      <div className="bg-gray-100 p-6 md:w-1/2 flex flex-col items-center">
  <Image
    src={selectedProduct.image}
    alt={selectedProduct.title}
    width={400}
    height={400}
    className="w-full max-h-[400px] object-contain"
  />
{selectedProduct.price && (
  <div
    className={`mt-4 text-lg font-bold text-white px-6 py-2 rounded-full shadow-md ${selectedProduct.color.badgeBg}`}
  >
    {selectedProduct.price}
  </div>
)}

</div>

        <div className="p-6 md:w-1/2 text-gray-800 font-sans space-y-6 overflow-y-auto max-h-[80vh]">
          <h2 className="text-xl font-bold flex items-center space-x-2">
            {selectedProduct.title.startsWith('ET') ? (
              <>
                <div className="flex overflow-hidden rounded shadow text-sm font-bold">
                  <div className="bg-gray-700 text-white px-2 py-0.5 tracking-tight">
                    {selectedProduct.title.split(' - ')[0].slice(0, 2)}
                  </div>
                  <div
                    className={`${selectedProduct.color?.badgeBg || 'bg-blue-500'} text-white px-2 py-0.5 tracking-tight`}
                  >
                    {selectedProduct.title.split(' - ')[0].slice(2)}
                  </div>
                </div>
                <span className="text-xl font-semibold">
                  {selectedProduct.title.includes(' - ')
                    ? selectedProduct.title.split(' - ')[1]
                    : selectedProduct.title}
                </span>
              </>
            ) : (
              selectedProduct.title
            )}
          </h2>

          <ul className="list-disc list-inside space-y-1">
            {selectedProduct.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          <div className="space-y-1 text-sm">
            {selectedProduct.water && (
              <p>
                <strong>Water:</strong> {selectedProduct.water}
              </p>
            )}
            {selectedProduct.potLife && (
              <p>
                <strong>Pot Life:</strong> {selectedProduct.potLife}
              </p>
            )}
            {selectedProduct.coverage && (
              <p>
                <strong>Coverage:</strong> {selectedProduct.coverage}
              </p>
            )}
            {selectedProduct.mixRatio && (
              <p>
                <strong>Mix Ratio:</strong> {selectedProduct.mixRatio}
              </p>
            )}
            {selectedProduct.shelfLife && (
              <p>
                <strong>Shelf Life:</strong> {selectedProduct.shelfLife}
              </p>
            )}
          </div>

          {selectedProduct.imagestep && (
            <div>
              <Image
                src={selectedProduct.imagestep}
                alt={selectedProduct.titlestep || 'Step image'}
                width={500}
                height={300}
                className="object-contain w-full max-h-64"
              />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
};

export default ProductGrid;