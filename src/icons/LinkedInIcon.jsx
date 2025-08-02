import React from 'react';

const LinkedInIcon = ({ className = 'mt-4 w-8 h-8', fill = 'black', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`fill-current ${className}`}
    {...props}
  >
  <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.7-.7-1.7-1.6s.7-1.6 1.7-1.6 1.7.7 1.7 1.6-.7 1.6-1.7 1.6zm13 11.3h-3v-5.6c0-1.3-.5-2.1-1.6-2.1-.8 0-1.3.5-1.6 1-.1.2-.1.5-.1.8v5.9h-3v-10h3v1.4c.4-.6 1.2-1.5 2.9-1.5 2.1 0 3.4 1.4 3.4 4.3v5.8z"/>
   </svg>
);

export default LinkedInIcon;
