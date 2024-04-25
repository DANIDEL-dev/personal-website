import React from "react";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Skills = () => {
  return (
    <div className="middle-2">
      <hr className="rule f-rule" />
      <div id="work" className="skills">
        <h2>My Skills.</h2>
        <div className="skill-row">
          <img
            className="worker-row"
            src={`${PUBLIC_URL}/image/worker.png`}
            alt="worker-image"
          />
          <h3>Web Development</h3>
          <p>
            I firmly believe that startups play a pivotal role in shaping the
            future of any economy. My keen interest lies in crafting compelling
            and purposeful content and brands. I am deeply passionate about
            educating children in technology. My primary focus is on efficiently
            executing tasks and effectively communicating the desired message..
          </p>
        </div>

        <div className="skill-row">
          <div>
            <img
              className="Event-row devops"
              src={`${PUBLIC_URL}/image/devops.jpg`}
              alt="Software enineering"
            />
          </div>
          
        </div>
      </div>
      <hr className="rule" />
      <div id="contact-me">
        <h2>Get In Touch</h2>
        <p className="hire-me touch">
          I'm currently available for freelancing work as well as
          handling your projects.
        </p>
        <p className="coach touch">
          Do you have a project you want to get started? do you want to have fun as well
          as learn how to code in a smart way or you want to get insight from
          your data ?
        </p>
        <p className="c-footer__text">
          <span className="u-d-block@md">
            <a className="btn" href="mailto:oshilijrdaniel@gmail.com">
              MESSAGE ME
            </a>{" "}
            or{" "}
            <a href="#contact-me" class="c-footer__link js-mykelbot">
              <span>let's chat</span>
            </a>
            .
          </span>
        </p>
      </div>
    </div>
  );
};

export default Skills;
