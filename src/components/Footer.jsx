import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import instagram from "../assets/instagram.png"



const Footer = () => {

    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                        <h2>MI PORTAFOLIO</h2>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div>
                            <a href="#"><img src={linkedin}/></a>
                            <a href="#"><img src={github}/></a>
                            <a href="#"><img src={instagram}/></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
