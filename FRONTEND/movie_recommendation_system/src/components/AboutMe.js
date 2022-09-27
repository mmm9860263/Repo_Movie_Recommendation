import React from "react";
import "../styles/AboutMe.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function AboutMe() {
  return (
    <>
      <center>
        <h1 className="title about_title">About Creator</h1>
        <br />
      </center>
      <div className="aboutme_container">
        <div className="aboutme_card">
          <img
            className="aboutme_card__image"
            src={`${process.env.PUBLIC_URL}/assets/Imag.jpg`}
            alt="Picture "
          />
          <div className="aboutme_card__content">
            <h1 className="about_name">Mayank Mishra </h1>
            <div
              className="stroke"
              style={{
                backgroundColor: "white",
                height: "1px",
                width: "100%",
                marginTop: "4px",
              }}
            ></div>
            <br />
            <p>
              Welcome to my project, the movie recommendation system. Enter your movie to get the recommendation. 
            </p>
            <div className="aboutme_card__sociallinks">
              <div>
                <a
                  href="https://linkedin.com/in/mayankmishraiitg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className="icon social_icon_linkedin" />
                </a>
                <a
                  href="https://github.com/mm9860263"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="social_icon_github " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
