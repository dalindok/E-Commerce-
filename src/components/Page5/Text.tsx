import React from "react";

function Text() {
  return (
    <div className="flex items-center flex-col p-8">
      <div className="flex items-center flex-col">
        <p className="text-orange-200 uppercase text-sm">
          Gia & Guistina Jewelry
        </p>
        <p className="text-orange-100 text-5xl p-4 pt-10">
          Put yourself forward with stylish
        </p>
        <p className="text-orange-100 text-5xl pb-7">
          jewelry that's made for you.
        </p>

        <p className="text-orange-100 pb-5">
          Discover bold and glamorous pieces from Brooknew's finest artisans.
        </p>
      </div>
      <div className="text-orange-200 flex flex-row py-8">
        <button className="border-2 border-orange-200 px-8 py-2 text-sm mx-3">
          Learn more
        </button>
        <button className="border-2 border-orange-200 px-10 py-2 text-sm mx-3">
          Email Us
        </button>
      </div>
    </div>
  );
}

export default Text;
