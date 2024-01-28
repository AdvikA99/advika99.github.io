import React from 'react';
import './FooterBar.css';

function FooterBar() {
  return (
    <div id="footerBarCraigslist">
      <div id="footerColumnsRow">
        <div className="footerColumn">
          <p className="footerHeader">Help</p>
          <p className="footerLink">Posting</p>
          <p className="footerLink">Searching</p>
          <p className="footerLink">Account</p>
          <p className="footerLink">Billing</p>
          <p className="footerLink">FAQ</p>
        </div>

        <div className="footerColumn">
          <p className="footerHeader">Safety</p>
          <p className="footerLink">In person transactions</p>
          <p className="footerLink">Online scams</p>
          <p className="footerLink">Harassment</p>
        </div>

        <div className="footerColumn">
          <p className="footerHeader">Legal</p>
          <p className="footerLink">Privacy</p>
          <p className="footerLink">Terms of use</p>
          <p className="footerLink">Law enforcement (subpoenas, etc)</p>
          <p className="footerLink">Copyright violation</p>
        </div>

        <div className="footerColumn">
          <p className="footerHeader">About</p>
          <p className="footerLink">Our mission</p>
          <p className="footerLink">Contact form</p>
          <p className="footerLink">Careers</p>
          <p className="footerLink">Mobile App</p>
        </div>
      </div>
      <p id="copyrightNote">© 2024 craigslist</p>
    </div>
  );
}

export default FooterBar;
