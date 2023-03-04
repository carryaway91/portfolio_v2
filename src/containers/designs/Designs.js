import React, { useEffect, useState } from "react";
import clock from "../../img/clock.png";
import book from "../../img/book.png";
import city from "../../img/city.png";
import dog from "../../img/dog.jpg";
import pokemon from "../../img/pokemon.png";
import plant from "../../img/plant.jpg";
import { Heading, Inner, Overlay, Wrap } from "./DesignsStyles";
import Popup from "../../components/popup/Popup";

const Designs = () => {
  const designs = [clock, book, city, dog, pokemon, plant];
  const [popup, setPopup] = useState(false);
  const [chosen, setChosen] = useState();

  const managePopup = (img) => {
    if (window.innerWidth > 1140) {
      setChosen(img);
      setPopup(true);
    }
  };
  return (
    <Wrap id="designs">
      <Heading>Designs</Heading>
      {designs &&
        designs.map((d, idx) => (
          <Inner key={idx}>
            <img
              src={d}
              style={{ cursor: "pointer", width: "100%" }}
              onClick={() => managePopup(d)}
            />
          </Inner>
        ))}
      {popup && <Popup design={chosen} />}
      {popup && <Overlay onClick={() => setPopup(false)} />}
    </Wrap>
  );
};

export default Designs;
