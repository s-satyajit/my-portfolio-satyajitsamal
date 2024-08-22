import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todoList from "../../Assets/Projects/todo-list.png";
import geoLocation from "../../Assets/Projects/geo-location.png";
import currencyConverter from "../../Assets/Projects/currency-converter.png";

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
              imgPath={todoList}
              isBlog={false}
              title="Todo List"
              description="This To-Do List app allows users to add, edit, and delete tasks, helping them manage their daily activities effeciently."
              ghLink="https://github.com/s-satyajit/todo-list-app-js"
              demoLink="todo-list-app-js-five.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geoLocation}
              isBlog={false}
              title="Geo Location"
              description="GeoLocator is a web application that fetches the latitude and longitude of a user's device using the HTML Geolocation API. It then displays the user's position on a map."
              ghLink="https://github.com/s-satyajit/geo-locator-app-js"
              demoLink="geo-locator-app-js.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencyConverter}
              isBlog={false}
              title="Currency Converter"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="currency-converter-reactjs-silk.vercel.app"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
