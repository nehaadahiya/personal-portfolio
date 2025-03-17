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
              thrive on turning raw numbers into compelling narratives. Just as
              a well-brewed cup of coffee awakens the senses, I find
              exhilaration in extracting insights from complex datasets—whether
              through SQL, Python, Power BI, or Tableau. Each dataset tells a
              story, and I take pride in crafting it with precision and clarity.{" "}
              <br />
              Pursuing a Bachelor’s in Computer Science Engineering, I’ve worked
              on projects like Netflix Data Analysis, Stock Market Performance
              Analysis, and Customer Satisfaction Prediction, where I explored
              shifting trends, modeled user behavior, and transformed insights
              into interactive visualizations. My expertise lies in data
              wrangling, exploratory analysis, and intuitive dashboard design,
              turning raw numbers into something as layered and rich as an aged
              manuscript.
              <br />
              Beyond analytics, I have a deep-rooted passion for Content
              Strategy and SEO, where I navigate the ever-evolving landscape of
              digital presence. From SEO-driven content creation to audience
              engagement strategies, I help brands craft stories that resonate.
              I also enjoy Frontend Web Development, designing interfaces that
              are as elegant as a vintage book cover—structured, timeless, and
              functional. <br />I believe that data, like literature, holds
              profound meaning—waiting for the right mind to interpret it. If
              you share a love for insightful storytelling, thoughtful strategy,
              or simply a good cup of coffee, let's connect.
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
