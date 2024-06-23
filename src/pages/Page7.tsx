import React from "react";
import Left from "../components/page7/Left";
import Middle from "../components/page7/Middle";
import Right from "../components/page7/Right";
function Page6() {
  return (
    <div className="h-screen bg-amber-50">
      <p className="flex justify-center pb-10 pt-10 text-5xl italic font-light">
        Moone Light
      </p>
      <div className="flex justify-between pt-5">
        <Left />
        <Middle />
        <Right />
      </div>
    </div>
  );
}

export default Page6;
