import React from "react";
import "../CSS/CreditPage.css";
import { Button } from "antd";

const CreditPage = () => {
  return (
    <div className="credit-container">
      <div className="credit-content">
        <h1 className="credit-title">Designed and Created by Me</h1>
        <h2 className="credit-name">Kimia Naghash Moghaddam</h2>
        <p className="credit-description">
          With a passion for blending art and technology, I am the mastermind
          behind the creation of this enchanting magical experience. Through my
          artistry, I have carefully crafted a world filled with mystery, wonder,
          and a sense of discovery. My vision has brought life to every corner of
          this map, where every detail is meticulously designed to captivate the
          imagination.
        </p>
        <p className="credit-description">
          Drawing inspiration from both the fantastical and the real, I merge
          the traditional with the contemporary, infusing my design with elements
          of magic, fantasy, and wonder. The magical atmosphere you experience
          within this world is a direct result of my creative spirit and
          technical prowess.
        </p>
        <p className="credit-description">
          Beyond just design, I have woven a story into the very fabric of this
          map, where each location, each path, and each symbol has its own story
          to tell. It’s not just an interface; it’s an experience that draws you
          deeper into the mystery and magic that I have created. From the
          breathtaking visuals to the carefully crafted interactions, every
          aspect is a testament to my dedication to bringing magic to life.
        </p>
        <p className="credit-thankyou">
          Thank you for exploring this world, and remember, the adventure doesn't
          end here. The map you hold in your hands is just the beginning.
        </p>
        <Button
          type="primary"
          ghost
          size="large"
          style={{ display: "block", margin: "2rem auto 0" }}
          onClick={() => window.history.back()}
        >
          Back To Map🔙
        </Button>
      </div>
    </div>
  );
};

export default CreditPage;
