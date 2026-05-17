import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
      transition={{ duration: 0.6, ease: "easeOut", delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
};