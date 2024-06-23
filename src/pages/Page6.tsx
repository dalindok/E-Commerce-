import React from "react";
import Text from "../components/page6/Text";
import Picture from "../assets/pic_page6/Picture.png";
function Page6() {
  return (
    <div className="flex flex-row justify-between bg-amber-50">
      <img src={Picture} alt="earings" className="h-screen w-1/2" />
      <Text />
    </div>
  );
}

export default Page6;
