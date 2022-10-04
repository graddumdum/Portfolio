import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cisco - CCNP R&S",
          "Palo Alto Networks - PCNSE",
          "Forescout CounterACT & Silentdefense",
          "Microsoft Server Administration",
          "Linux Administration",
          "Google Cloud platform",
          "Amazon Cloud",
          "Microsoft Azure Cloud",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
