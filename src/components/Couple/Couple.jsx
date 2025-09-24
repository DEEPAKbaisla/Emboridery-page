import React from "react";
import couplePic from "../../assets/Couples.png";

import "./couple.css";

const Couple = () => {
  return (
    <div id="couple-container">
      {" "}
      <h1>Handmade Couple Anniversary Gift Frame 💖✨</h1>
      <div className="couples">
        <div className="description">
          <p>
            Celebrate love and togetherness with this unique handcrafted
            anniversary frame. Perfectly designed for couples, this decorative
            piece features
          </p>

          <h3>
            This is not just a gift but a memory that will last forever ❤️
          </h3>

          <ul id="details">
            <li>🌸 Elegant Embroidery Work</li>
            <li>👩‍❤️‍👨 Couple Figurine Design</li>
            <li>📅Personalized Calendar Touch</li>
            <li>✨ Premium Look</li>
          </ul>
        </div>
        <div className="picture">
          <img src={couplePic} alt="" srcset="" />
        </div>
        <h3 id="h3">
          This is not just a gift but a memory that will last forever ❤️
        </h3>
      </div>
    </div>
  );
};

export default Couple;
