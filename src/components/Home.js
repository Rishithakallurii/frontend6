import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaFilePdf,
} from "react-icons/fa";

const Home = () => {
  const [state] = React.useState({
    title: "I am Kalluri.Rishitha",
    text: "pursuing a Bachelor of Technology at VIT-AP",
  });

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <a href="https://www.linkedin.com/in/rishitha-kalluri-19889127b/">
                    <li>
                      <FaLinkedin className="headerIcon" />
                    </li>
                  </a>
                  <a href="https://github.com/Rishithakallurii">
                    <li>
                      <FaGithub className="headerIcon" />
                    </li>
                  </a>
                  <a href="mailto:rishithakalluri22@gmail.com">
                    <li>
                      <FaMailBulk className="headerIcon" />
                    </li>
                  </a>
                  <a href="https://drive.google.com/file/d/1Gjjqbd4joEed0UxVwceukbLQxMBKcHzC/view?usp=sharing">
                    <li>
                      <FaFilePdf className="headerIcon" />
                    </li>
                  </a>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img className="img-fluid" src="../images/photo.png" alt="..." />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
