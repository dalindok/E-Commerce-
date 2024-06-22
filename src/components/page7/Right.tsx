import React from "react";
import Third from "../../assets/pic_page7/Third.png";
function Right() {
  return (
    <div className="flex flex-col items-center pr-28">
      <img src={Third} alt="third" className="w-64" />
      <div className="flex items-center flex-col text-md p-5 font-light">
        <p>My mom loved the earrings I gave</p>
        <p>her for her birthday. She loved that it</p>
        <p>was handmade and personalized.</p>
        <p>Thinking of getting a pair for"</p>
        <p>myself, too!</p>
      </div>
    </div>
  );
}

export default Right;
