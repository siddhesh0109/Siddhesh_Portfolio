import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Siddhesh Dalavi</span>{" "}
            from <span className="purple">Kolhapur, India</span>.
            <br />
            I have completed 6 months Internship as an{" "}
            <span className="purple">Web Developer</span> at{" "}
            <span className="purple">Qweez Technology</span>.
            <br />Recently i have completed my masters deggree Master of Computer Application{" "}
            <span className="purple"></span> from{" "}
            <span className="purple">DY Patil  Agriculture and Technical University,Kolhapur</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> GYM
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Siddhesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
