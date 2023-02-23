import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Container, Row, Col} from "react-bootstrap"
import meter1 from "../assets/meter1.svg"
import meter2 from "../assets/meter2.svg"
import meter3 from "../assets/meter3.svg"
import prueba from "../assets/prueba.jpg"
import colorSharp from "../assets/color-sharp.png"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem IPSUMLorem IPSUMLorem IPSUMLorem IPSUMLorem IPSUMLorem IPSUMLorem IPSUMLorem IPSUM</p>
                            <Carousel responsive={ responsive} infinite={true} className="skill-slider">
                                <div className='item'>
                                    <img src={prueba} alt="image0"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="image1"/>
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="image2"/>
                                    <h5>Logo Designs</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt="image3"/>
                                    <h5>Web Development</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' alt='sharp' src={colorSharp}/>
        </section>
    )

};

export default Skills;