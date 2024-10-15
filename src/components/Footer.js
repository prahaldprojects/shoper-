import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-black">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="mb-4 text-white">Project of &copy; E-commerce Shop</p>
          <div className="flex justify-center space-x-6">
            {/* LinkedIn Text Link */}
            <a
              href="https://www.linkedin.com/in/prahalad-prajapat-b59bb0263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-blue-500"
            >
              LinkedIn
            </a>
            {/* GitHub Text Link */}
            <a
              href="https://github.com/prahaldprojects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-gray-500"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;