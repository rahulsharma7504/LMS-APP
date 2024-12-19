import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">
      <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
      <p>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
