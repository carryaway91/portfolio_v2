import React from "react";
import Me from "../../img/me2.png";
import SecondBlob from "../../img/SecondBlob";
import { Img, Wrap } from "./RightPanelStyles";
const RightPanel = () => {
  return (
    <Wrap>
      <Img src={Me} />
    </Wrap>
  );
};

export default RightPanel;
