import { Container, Row, Col, Tab } from "react-bootstrap";
import projImg1 from "../assets/project-img1.png"
import projImg2 from "../assets/project-img2.png"
import projImg3 from "../assets/project-img3.png"
import Nav from "react-bootstrap/Nav"
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/color-sharp2.png"



const Projects = () =>{

    const projects = [
        {
            title : "Country App",
            description: "Desing & Development",
            imgUrl: projImg1
        },
        {
            title : "Country App",
            description: "Desing & Development",
            imgUrl: projImg2
        },
        {
            title : "Country App",
            description: "Desing & Development",
            imgUrl: projImg3
        },
        {
            title : "Country App",
            description: "Desing & Development",
            imgUrl: projImg1
        },
        {
            title : "Country App",
            description: "Desing & Development",
            imgUrl: projImg2
        },
        {
            title : "Country App",
            description: "Desing & Development",
            imgUrl: projImg3
        },
    ]

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Pojects</h2>
                        <p> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) =>{
                                        return(
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
                        Lorem Ipsum
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        Lorem Ipsum
                        </Tab.Pane>

                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="#"/>
        </section>


    )
}

export default Projects;