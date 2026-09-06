import React from 'react';

export default function AppSheetIcon({ size = 24, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer App Frame */}
      <rect x="3" y="2" width="18" height="20" rx="4" fill="#0284C7" />
      {/* Display Screen */}
      <rect x="5" y="4" width="14" height="13" rx="2" fill="#FFFFFF" />
      {/* AppSheet Multi-layer sheets graphic */}
      <path d="M7 7H17V9H7V7Z" fill="#0284C7" />
      <path d="M7 10.5H14V12.5H7V10.5Z" fill="#38BDF8" />
      <path d="M7 14H11V15.5H7V14Z" fill="#0284C7" />
      {/* Database / Action Node Circle */}
      <circle cx="15.5" cy="13.5" r="2.5" fill="#10B981" />
      <path d="M14.8 13.5L15.3 14.2L16.3 12.8" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bottom Phone Bar */}
      <circle cx="12" cy="19" r="1" fill="#FFFFFF" />
    </svg>
  );
}
