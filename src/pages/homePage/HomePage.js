import React from "react";
import axios from "axios";
import { history } from "../../history";

import "./styles.css";

const HomePage = () => {
  const handleSubmit = (values) => {
    axios.post("http://localhost:3333/api/auth", values).then((resp) => {
      const { data } = resp;
      if (data) {
        localStorage.setItem("app-token", data);
        history.push("/login");
      }
    });
  };

  return (
    <div id="main">
      <div className="container-header">
        <h1>Verzel</h1>
        <div>
          <button type="submit" className="button-sign-in">
            <a href="/login">Sign in</a>
          </button>
          <button
            type="submit"
            className="button-sign-up"
            onClick={handleSubmit}
          >
            <a href="/register">Sign up</a>
          </button>
        </div>
      </div>
      <div className="container-text">
        <div className="container-text-header">
          <h1>Where the world builds software</h1>
          <h2>
            Millions of developers and companies build, ship, and maintain their
            software on GitHub—the largest and most advanced development
            platform in the world. Millions of developers and companies build,
            ship, and maintain their software on GitHub—the largest and most
            advanced development platform in the world. Millions of developers
            and companies build, ship, and maintain their software on GitHub—the
            largest and most advanced development platform in the world.
          </h2>
        </div>
        <img
          src="https://github.githubassets.com/images/modules/site/home/globe.jpg"
          alt=""
          className="img-moon"
        />
      </div>
      <img
        className="home-hero-glow"
        src="https://github.githubassets.com/images/modules/site/home/hero-glow.svg"
        alt=""
      />
    </div>
  );
};

export default HomePage;
