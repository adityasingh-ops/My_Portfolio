import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
 import weather from "../../Assets/project1.png";
 import quickquiz from "../../Assets/project2.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather"
              description="This Weather Project is a comprehensive application designed to provide real-time weather updates for any location worldwide. It combines user-friendly interfaces with robust functionality, making it an essential tool for anyone needing up-to-date weather information."
              ghLink="https://github.com/adityasingh-ops"
              demoLink="https://allweather.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickquiz}
              isBlog={false}
              title="QuizApp"
              description="The Quiz App is an engaging and interactive application designed to provide a fun and educational experience for users. This app allows users to test their knowledge on various topics, track their progress, and challenge themselves with different levels of difficulty.

              "
              ghLink="https://github.com/adityasingh-ops"
              demoLink="https://adityasingh-ops.github.io/QuickQuiz/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
