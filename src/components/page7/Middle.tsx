import React from "react";
import Second from "../../assets/pic_page7/Second.png";
function Middle() {
  return (
    <div className="flex flex-col items-center">
      <img src={Second} alt="second" className="w-64" />

      <div className="flex items-center flex-col text-md p-5 font-light">
        <p>I love my engagement ring from</p>
        <p>Studio Moone because my fiancé </p>
        <p>worked closely with them to design</p>
        <p>the ring literally just for me!"</p>
      </div>
    </div>
  );
}

export default Middle;
