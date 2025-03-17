import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Data Analyst", "Content Strategist", "Creator"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome to my Portfolio</span>
            <h1>
              {" "}
              {"Hi, I am Neha Dahiya ~ "}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              With a passion for unraveling patterns hidden within data, I
              thrive on transforming raw numbers into meaningful narratives.
              Just as a well-brewed coffee awakens the senses, I find
              exhilaration in extracting insights from complex datasets using
              SQL, Python, Power BI, and Tableau. Pursuing a Bachelor’s in
              Computer Science Engineering, I’ve worked on projects like Netflix
              Data Analysis, Stock Market Performance Analysis, and Customer
              Satisfaction Prediction, exploring trends, modeling user behavior,
              and designing interactive dashboards. Beyond analytics, my
              expertise extends to Content Strategy and SEO, where I craft
              digital narratives that resonate, blending storytelling with
              data-driven insights. I also have experience in Frontend Web
              Development, creating interfaces that are structured, timeless,
              and functional. With a deep appreciation for well-crafted
              stories—whether in literature, data, or design—I believe that the
              right interpretation can turn information into something truly
              powerful. If you share a love for insightful storytelling,
              thoughtful strategy, or simply a good cup of coffee, let’s
              connect.
            </p>
            <button onClick={() => console.log("connect")}>
              let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
