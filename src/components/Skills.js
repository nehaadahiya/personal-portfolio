import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
// import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="akilll-bx">
              <h2>Skills</h2>
              <p>
                Fluent in data, I uncover insights using Python, SQL, Power BI,
                and Tableau, applying EDA, statistical modeling, and predictive
                analytics. Beyond numbers, I craft narratives through content
                strategy and SEO, blending analysis with creativity. With an eye
                for detail, I design intuitive web experiences using HTML, CSS,
                and JavaScript—where logic meets aesthetics.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5> Python </h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5> SQL </h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5> Tableau </h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5> Power BI </h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5> Excel </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} /> */}
    </section>
  );
};
