import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600 w-full">
      © {currentYear} Aberration Guesser
    </footer>
  );
};

export default Footer;
