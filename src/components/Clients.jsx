import React from "react";
import '../styles/client.css'; // Adjust the path if necessary
import Section from "./Section";
import { clientLogos } from "../constants"; // Ensure the path is correct

const Clients = () => {
  return (
    <Section id="clients">
      <div className="container">
        <h2 className="h4 mb-6 text-center">Our Clients</h2>
        <div className="logo-container">
          <div className="logo-marquee">
            {/* Render logos without any for-loop logic */}
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="logo"
              />
            ))}
            {/* Render logos again to simulate endless scrolling */}
            {clientLogos.map((logo, index) => (
              <img
                key={`duplicate-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="logo"
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
