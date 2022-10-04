import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="green">Sushanta Das </span>
            from <span className="green"> Kolkata, India.</span>
            <br />
            Apart from technology, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games , Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Music , Documentaries 
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "keep learning......"{" "}
          </p>
          <footer className="blockquote-footer">Sushanta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
