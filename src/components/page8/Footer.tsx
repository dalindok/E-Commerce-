import React from "react";

function Footer() {
  return (
    <div className="px-16">
      <div className="pt-5 uppercase">
        <p>studio</p>
        <p>moone</p>
      </div>
      <div className="flex flex-row justify-between">
        <p className="py-12 text-5xl italic">Get in Touch</p>
        <div className="flex flex-col pt-12">
          <p className="text-md">Mailing Address</p>
          <p className="text-xs">123 Anywhere St., Any City, State,</p>
          <p className="text-xs">Country 12345</p>
        </div>
        <div className="flex flex-col pt-12">
          <p className="text-md">Email Address</p>
          <p className="text-xs">hello@reallygreatsite.com</p>
        </div>
        <div className="flex flex-col pt-12 pr-20">
          <p className="text-md">Phone Number</p>
          <p className="text-xs">123 456 789</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
