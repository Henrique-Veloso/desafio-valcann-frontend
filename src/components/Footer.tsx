import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Valcann Cloud Intelligence - Desafio Front-End
        </p>
      </div>
    </footer>
  );
};

export default Footer;