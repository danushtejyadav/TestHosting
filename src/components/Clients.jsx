// src/components/Clients.jsx

import React from "react";
import '../styles/client.css'; // Adjust the path if necessary
import Section from "./Section";
import { clientLogos } from "../constants"; // Ensure the path is correct

const Clients = () => {
  return (
    <Section id="clients">
      <div className="container">
        <h2 className="h4 mb-6 text-center">Our Clients</h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto object-contain"
              />
            ))}
            {/* Duplicate for continuous scrolling effect */}
            {clientLogos.map((logo, index) => (
              <img
                key={`duplicate-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
