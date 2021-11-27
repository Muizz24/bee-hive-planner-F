import React from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


function Home() {
    const wow = prompt('Please enter your name')
    return (
      <div className="bodyContainer" >
        <div className="homeContainer">
          <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true} delay={100}>
            <h1 className="whiteText">Bee Better</h1>
            {wow}
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true} delay={500}>
            <h5 className="whiteText">An App to help Track your Personal Growth!!</h5>
          </ScrollAnimation>
        </div>
      </div>
    );
  }

  export default Home;