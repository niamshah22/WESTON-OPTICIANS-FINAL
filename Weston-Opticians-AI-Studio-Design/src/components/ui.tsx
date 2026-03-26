import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Button({ className, variant = 'primary', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }) {
  const variants = {
    primary: 'bg-brand-purple text-white hover:bg-brand-purple-light',
    secondary: 'bg-black text-white hover:bg-zinc-800',
    outline: 'border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white',
  };
  return (
    <button
      className={cn(
        'px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 active:scale-95',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export const SectionTitle = ({ children, subtitle, light = false }: { children: ReactNode; subtitle?: string; light?: boolean }) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("text-4xl md:text-5xl font-serif font-bold mb-4", light ? "text-white" : "text-black")}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn("text-lg max-w-2xl", light ? "text-zinc-300" : "text-zinc-600")}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
