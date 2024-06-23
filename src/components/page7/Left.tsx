import React from "react";
import First from "../../assets/pic_page7/First.png";
function Left() {
  return (
    <div className="flex flex-col items-center pl-28">
      <img src={First} alt="first" className="w-64" />

      <div className="flex items-center flex-col text-md p-5 font-light">
        <p>"To celebrate a work milestone, I</p>
        <p>rewarded myself a necklace from </p>
        <p>Studio Moone and I couldn't be</p>
        <p>happier with my decision."</p>
      </div>
    </div>
  );
}

export default Left;
