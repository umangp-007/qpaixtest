import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container text-center py-3">
      <p className="m-0">&copy; {new Date().getFullYear()} Student Management System. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;