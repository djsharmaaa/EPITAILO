// // components/SpinnerText.tsx

// import FixItBadge from '../badge/fixitbadge';
// // import { SpinningText } from '../ui/spinning-text';

// export function SpinnerText() {
//   return (
//     <div className="relative w-40 h-40 group cursor-pointer z-20">
//       {/* Orange Circle */}
//       <div className="absolute inset-0 rounded-full bg-orange-500 group-hover:bg-orange-600 transition-all duration-200 flex items-center justify-center overflow-hidden">
//         {/* Spinning Text Inside the Circle */}
//         {/* <SpinningText
//           radius={10.5}
//           fontSize={1}
//           className="text-white group-hover:animate-spin-slow"
//         >
//           {`Fix it! Forget it! • `.repeat(2)}
//         </SpinningText> */}


//             {/* Centered FixItBadge */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="scale-75">
//             <FixItBadge />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FixItBadge from '../badge/fixitbadge';

export function SpinnerText() {
  const ref = useRef(null);

  // Track scroll progress from 0 (start) to 1 (end) of this component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Scale the circle from 1 to 1.5 as you scroll into view
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className="relative w-40 h-40 group cursor-pointer z-20 mx-auto"
    >
      {/* Orange Circle */}
      <div className="absolute inset-0 rounded-full bg-orange-500 group-hover:bg-orange-600 transition-all duration-200 flex items-center justify-center overflow-hidden">
        {/* Centered FixItBadge */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="scale-75">
            <FixItBadge />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
