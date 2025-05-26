'use client';

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from '../ui/morphing-dialog';

import { motion } from 'framer-motion';

const products = [
  {
    title: 'ET1 - Small Sized Floor Tile Adhesive',
    image: '/images/ET1.png',
    subtitle: 'TechTile Adhesive',
    features: ['Ready to Use', 'High Bond Strength', 'Saves Time & Labour'],
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
    title: 'ET2 - Medium Tile Adhesive',
    image: '/images/ET2.png',
    subtitle: 'TechTile Adhesive',
    features: ['Water Resistant', 'Easy Application', 'Strong Bonding'],
    water: '22%–24%',
    potLife: '2 hrs @ 23°C',
    coverage: '25–35 sq ft / 20kg @ 6mm',
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
    title: 'ET3 - Large Tile Adhesive',
    image: '/images/ET3.png',
    subtitle: 'TechTile Adhesive',
    features: ['Water Resistant', 'Easy Application', 'Strong Bonding'],
    water: '22%–24%',
    potLife: '2 hrs @ 23°C',
    coverage: '25–35 sq ft / 20kg @ 6mm',
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
    title: 'ET4 - Heavy Duty Adhesive',
    image: '/images/ET4.png',
    subtitle: 'TechTile Adhesive',
    features: ['Water Resistant', 'Easy Application', 'Strong Bonding'],
    water: '22%–24%',
    potLife: '2 hrs @ 23°C',
    coverage: '25–35 sq ft / 20kg @ 6mm',
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
    title: 'BJM - Tile Bond Mortar',
    image: '/images/BJM.png',
    subtitle: 'TechTile Adhesive',
    features: ['Water Resistant', 'Easy Application', 'Strong Bonding'],
    water: '22%–24%',
    potLife: '2 hrs @ 23°C',
    coverage: '25–35 sq ft / 20kg @ 6mm',
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
    title: 'Grout - Tile Joint Filler',
    image: '/images/Grout.png',
    subtitle: 'TechTile Adhesive',
    features: ['Water Resistant', 'Easy Application', 'Strong Bonding'],
    water: '22%–24%',
    potLife: '2 hrs @ 23°C',
    coverage: '25–35 sq ft / 20kg @ 6mm',
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

const cardVariantsLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const cardVariantsRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function ProductGrid() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-200">
      <h1 className="text-4xl font-bold text-center text-zinc-800 mb-12">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {products.map((product, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              variants={isLeft ? cardVariantsLeft : cardVariantsRight}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: false, amount: 0.3 }}
              className="flex justify-center"
            >
              <MorphingDialog transition={{ type: 'spring', bounce: 0.05, duration: 0.25 }}>
                <MorphingDialogTrigger
                  style={{ borderRadius: '16px' }}
                  className="flex w-full max-w-[420px] h-[450px] flex-col overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
                >
                  <MorphingDialogImage
                    src={product.image}
                    alt={product.title}
                    className="h-80 w-full object-contain bg-white p-4"
                  />
                  <div className="p-4 flex justify-center">
                    <MorphingDialogTitle className="text-center text-black text-lg font-bold px-4 py-2 border border-zinc-300 rounded-lg shadow-sm bg-gray-50 w-fit">
                      {product.title}
                    </MorphingDialogTitle>
                  </div>
                </MorphingDialogTrigger>

                <MorphingDialogContainer>
                  <MorphingDialogContent
                    style={{ borderRadius: '24px' }}
                    className={`relative flex flex-col overflow-hidden border-2 shadow-xl sm:w-[480px] max-w-full max-h-[calc(100vh-4rem)] bg-gradient-to-b from-white via-${product.color.base}-50 to-white`}
                    as={motion.div}
                    variants={dialogVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <MorphingDialogImage
                      src={product.image}
                      alt={product.title}
                      className="w-full h-[280px] object-contain bg-white p-6"
                    />
                    <div className="p-6 space-y-3 bg-white rounded-b-2xl flex flex-col">
                      <MorphingDialogTitle
                        className={`text-2xl font-bold border-b-2 pb-2 ${product.color.border} ${product.color.text}`}
                      >
                        {product.title}
                      </MorphingDialogTitle>

                      <MorphingDialogSubtitle className="text-md italic text-zinc-600">
                        {product.subtitle}
                      </MorphingDialogSubtitle>

                      <MorphingDialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.95, y: 50 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.95, y: 50 },
                        }}
                        className="text-sm flex-grow overflow-hidden"
                        as={motion.div}
                      >
                        <div>
                          <h4
                            className={`font-semibold mb-2 pb-1 border-b-2 inline-block w-fit ${product.color.border}`}
                          >
                            Features:
                          </h4>

                          <ul className="list-disc pl-6 space-y-1 leading-tight max-h-32 overflow-hidden">
                            {product.features.slice(0, 5).map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        </div>

                        <div className={`mt-4 grid grid-cols-3 gap-3 font-semibold ${product.color.text}`}>
                          {['Water Demand', 'Pot Life', 'Coverage'].map((label, i) => {
                            const value = [product.water, product.potLife, product.coverage][i];
                            return (
                              <div
                                key={label}
                                className={`bg-gradient-to-tr ${product.color.from} ${product.color.to} rounded-xl p-3 text-center shadow-md cursor-default`}
                              >
                                <p className={`mb-1 text-xs ${product.color.text}`}>{label}</p>
                                <p className={`text-sm font-bold truncate ${product.color.text}`}>{value}</p>
                              </div>
                            );
                          })}
                        </div>
                      </MorphingDialogDescription>
                    </div>
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
