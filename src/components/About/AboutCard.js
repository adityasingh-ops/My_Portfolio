import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Singh </span>
            from <span className="purple"> Kushinagar, India.</span>
            <br />
            I am currently student at Scaler School of Technology.
            <br />
            I have completed my schooling from <span className="purple">Nav Jeevan Mission School , kushinagar</span> and currently pursuing my Bachelor in Computer Science from <span className="purple">Bits Pilani</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Technology is best when it brings people together"{" "}
          </p>
          <footer className="blockquote-footer">Matt Mullenweg</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
