/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
  onClick?: () => void;
}

export default function Logo({ className = '', size = 'md', variant = 'dark', onClick }: LogoProps) {
  const logoHeights = {
    sm: 'h-4 sm:h-5',
    md: 'h-5.5 sm:h-6.5',
    lg: 'h-9 sm:h-11',
  };

  return (
    <div 
      onClick={onClick}
      className={`flex items-center select-none cursor-pointer ${className}`}
    >
      <img 
        src="/src/assets/images/mercury_logo.svg" 
        alt="MERCURY" 
        className={`${logoHeights[size]} w-auto object-contain transition-all duration-300 ${
          variant === 'light' ? 'brightness-0 invert' : ''
        }`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
