import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useStateContext } from "../context/stateContext";

export const Banner = () => {

  console.log(` The Scroll Y is ::::: ${window.scrollY}`);

   const {showAnimate,setShowAnimate} = useStateContext();


  // The index of the word to be displayed
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // Single letter that is being displayed
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer","Mobile App Developer" ];
  const period = 2000;

  useEffect(() => {

    // if(window.scrollY > 700){
    //   setShowAnimate(false);
    // }else{
    //   setShowAnimate(true);
    // }
    
  },[window.screenY])

  useEffect(() => {

    // setShowAnimate(true);
    
    if(showAnimate){

      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }

  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const downloadCv = () => {
    console.log("Downloding the CV NOW...")
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline cursor-pointer" onClick={downloadCv}>Download my Resume</span>
                <h1>{`Hi! I'm Erikson Abraham a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a full stack web developer & mobile app developer based in Namibia, Windhoek. My skills are broad, from UX to design, front-end to back-end development. I enjoy each aspect, and love building web apps & mobile apps from start to finish. I am fluent in many programming languages such as Javascript, Dart , Python, HTML , CSS , Java ,Ballerina, Julia and PHP. I use a wide range of Frameworks to develop projects,Frameworks such as Flutter,React,Bootstrap,JQuery,NodeJs,Express Js,Tailwind. For the backend I use MongoDB,Firebase and MySQL. Most of my projects such as Mobile apps and Node js applications are all on my Github please feel free to check them out.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
