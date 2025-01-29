'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const GallerySection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Container width animation
  const width = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["70%", "100%", "100%", "70%"]);

  // Image opacity transitions for 8 images
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.45, 0.55, 0.65], [0, 1, 0]);
  const opacity5 = useTransform(scrollYProgress, [0.6, 0.7, 0.8], [0, 1, 0]);
  const opacity6 = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [0, 1, 0]);
  const opacity7 = useTransform(scrollYProgress, [0.85, 0.9, 0.95], [0, 1, 0]);
  const opacity8 = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  const images = [
    { id: 1, opacity: opacity1 },
    { id: 2, opacity: opacity2 },
    { id: 3, opacity: opacity3 },
    { id: 4, opacity: opacity4 },
    { id: 5, opacity: opacity5 },
    { id: 6, opacity: opacity6 },
    { id: 7, opacity: opacity7 },
    { id: 8, opacity: opacity8 },
  ];

  return (
    <div ref={containerRef} className="min-h-[900vh] w-full"> {/* Adjusted height to accommodate all images */}
      <motion.div
        style={{ width }}
        className="sticky top-0 h-screen mx-auto rounded-[2.5rem] overflow-hidden"
      >
        {images.map((image) => (
          <motion.div
            key={image.id}
            style={{ opacity: image.opacity }}
            className="absolute inset-0 h-screen w-full" // Ensure each image takes full height and width
          >
            <Image
              src={`/gallery/${image.id}.jpg`}
              alt={`Gallery image ${image.id}`}
              fill
              className="object-cover"
              priority={image.id === 1}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GallerySection;