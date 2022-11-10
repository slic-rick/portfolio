import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import dialslic from "../assets/img/dialslic.png";
import drummer from "../assets/img/website-1.png";
import eyakulo from "../assets/img/website-3.png";
import kidcare from "../assets/img/website-4.png";
import portfolio from "../assets/img/website-5.png";
import cms from "../assets/img/website-2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Github } from "react-bootstrap-icons";
import { useStateContext } from "../context/stateContext";
import { useEffect } from "react";


export const Projects = () => {

  const {showAnimate,setShowAnimate} = useStateContext();

  // useEffect(() => {
  //   setShowAnimate(false);
  //   console.log(` Projects component :::${showAnimate}`);
  // },[])
  

  const projects = [
    {
      title: "Business Startup",
      description: "A software development company I founded ",
      imgUrl: dialslic,
      weblink:"https://dialslic.com/",
      githubLink:"https://github.com/slic-rick/",

    },
    {
      title: "Javascript Drummer",
      description: "Developed using Javascript and HTML",
      imgUrl: drummer,
      weblink:"https://slic-rick.github.io/Online-Drummer/",
      githubLink:"https://github.com/slic-rick/Online-Drummer/",
    },
    {
      title: "ELCIN Management Sytem",
      description: "Developed in HTML,CSS JAVASCRIPT with React JS framework",
      imgUrl: cms,
      weblink:"https://slic-rick.github.io/Online-Drummer/",
      githubLink:"https://github.com/slic-rick/cms",
    },
    {
      title: "My portfolio",
      description: "Design & Development with React JS",
      imgUrl: portfolio,
      weblink:"",
      githubLink:"https://github.com/slic-rick/",
    },
    {
      title: "Kidcare kollege website",
      description: "Design & Development, developed with PHP and Wordpress",
      imgUrl: kidcare,
      weblink:"https://kidcarekollege.org/",
      githubLink:"https://github.com/slic-rick/",
    },
    {
      title: "Eyakulo Trading CC",
      description: "Design & Development, developed with PHP and Wordpress",
      weblink:"https://eyakulotradingcc.com/",
      githubLink:"https://github.com/slic-rick/",
      imgUrl: eyakulo,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have worked on quite a large number of projects. When i first got into tech i use to develop simple androind apps with Java and XML, until i came across Flutter, i've built more than 10 mobile apps and Progressive Web Apps with Flutter. When it comes to website i use HTML,CSS and Javascript for the front end, and PHP,nodeJs, Express JS for the backend but i'm open to learning new Technologies </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">AI</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div c>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/PIwP9t6QVHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Yet to add data science notebooks</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
