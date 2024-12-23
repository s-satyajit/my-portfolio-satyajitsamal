import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todoList from "../../Assets/Projects/todo-list.png";
import todoList2 from "../../Assets/Projects/todo-list-2.png";
import tictactoe from "../../Assets/Projects/tic-tac-toe.png";
import inventoryDashboard from "../../Assets/Projects/inventory-dashboard.png"
import geoLocation from "../../Assets/Projects/geo-location.png";
import currencyConverter from "../../Assets/Projects/currency-converter.png";
import codeStudio from "../../Assets/Projects/CodeStudio.png";
import ems from "../../Assets/Projects/ems.png";
import hirrd from "../../Assets/Projects/hirrd.png";
import chatApp from "../../Assets/Projects/chat-app.png";


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
              imgPath={chatApp}
              isBlog={false}
              title="LiveTalk - Multi User Chat App"
              description="A chat application that lets you chat with multiple people at the same time, designed to make communication easy and smooth."
              ghLink="https://github.com/s-satyajit/multi-user-chatApp"
              demoLink="https://multi-user-chat.vercel.app/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hirrd}
              isBlog={false}
              title="Hirrd - Job Portal App"
              description="A job portal project for connecting recruiters and job seekers with real-time job listings, secure authentication, and efficient job application processing."
              ghLink="https://github.com/s-satyajit/hirrd-jobPortal"
              demoLink="https://job-portal-eight-delta.vercel.app/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ems}
              isBlog={false}
              title="TeamZen - Employee Management System"
              description="A React based Employee Management System offering efficient employee data management with a responsive interface."
              ghLink="https://github.com/s-satyajit/employee-management-system"
              demoLink="https://teamzen.vercel.app/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeStudio}
              isBlog={false}
              title="CodeStudio - Web Code Editor"
              description="A web-based code editor for HTML, CSS, and JavaScript, offering live preview, and syntax highlighting. Perfect for seamless and intuitive web development!"
              ghLink="https://github.com/s-satyajit/WebCodeEditor"
              demoLink="https://web-code-editor-sigma.vercel.app/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventoryDashboard}
              isBlog={false}
              title="Inventory Dashboard"
              description="This Inventory Management Dashboard is designed to analyze and report data from a single Excel sheet, providing clear insights through interactive charts and detailed tables."
              ghLink="https://github.com/s-satyajit/inventory-dashboard"
              demoLink="https://inventory-dashboard-bice.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="This Tic Tac Toe game is built with React and Tailwind CSS, offering reset, undo, and redo functionalities for an enhanced user experience."
              ghLink="https://github.com/s-satyajit/TicTacToe-Reactjs"
              demoLink="https://tic-tac-toe-reactjs-gamma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoList2}
              isBlog={false}
              title="Todo List with Context API"
              description="This Todo App is an interactive application leveraging React and Context API to manage the tasks with features like adding, editing, deleting and toggling todos, and local storage for persistence"
              ghLink="https://github.com/s-satyajit/TodoApp-ContextLocalStorage"
              demoLink="https://todo-context-local-pink.vercel.app/"
            />
          </Col>

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
