import React from "react";
import First from "../../assets/pic_page5/First.png";
import Second from "../../assets/pic_page5/Second.png";
import Third from "../../assets/pic_page5/Third.png";
function Photos() {
  return (
    <div className="flex flex-row w-full h-full">
      <img src={First} alt="first" className="w-1/3" />
      <img src={Second} alt="second" className="w-1/3" />
      <img src={Third} alt="third" className="w-1/3" />
    </div>
  );
}

export default Photos;
