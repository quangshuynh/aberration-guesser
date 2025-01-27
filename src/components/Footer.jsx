import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600 w-full">
      © {currentYear}{" "}
      <a
        href="https://www.linkedin.com/in/quangs/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Quang Huynh
      </a>
    </footer>
  );
};

export default Footer;
