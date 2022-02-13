import react, { Component } from "react";
import natasha from "../assets/natasha.jpg";
import benis from "../assets/benis.jpeg";
import jen from "../assets/jen.jpeg";
import pema from "../assets/pema.png";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about-cortadito">
          <h1>Why do we need Cortadito?</h1>
          <p className="resourcedescription">
            The parts that make the Latinx community so diverse are also the
            ones that bring the community together. However, it's not without
            its challenges.
          </p>
          <p className="resourcedescription">
            When people emmigrate from Latin America to the U.S. they bring with
            them their culture and language. Preserving those traditions and
            finding their identities in their new homes can be a challenge for
            many immigrants.
          </p>
          <p className="resourcedescription">
            Whether the circumstances of their arrival is planned or forced,
            lawfully or unlawfully, moving to a foreign land with a new language
            can be very stressful. It is in familiarity that we find comfort,
            which could be why that percentage is so high for Miami.
          </p>
        </div>
          <h1>Get to know the mujeres behind Cortadito</h1>
          <div className="about-creators">
          <div className="each-creator">
            <h3>Benis</h3>
            <img className="aboutpic" src={benis} alt="benis"></img>
            <p>
              https://github.com/tbenis <a href="https://github.com/tbenis" />{" "}
            </p>
            <p>
              https://www.linkedin.com/in/tbenis/{" "}
              <a href="https://www.linkedin.com/in/tbenis/" />{" "}
            </p>
          </div>
          <div className="each-creator">
            <h3>Jen</h3>
            <img className="aboutpic" src={jen} alt="natasha"></img>
            <p>
              https://github.com/hopesunknown{" "}
              <a href="https://github.com/hopesunknown" />{" "}
            </p>
            <p>
              https://www.linkedin.com/in/jentchai/ <a href="" />{" "}
            </p>
          </div>
          <div className="each-creator">
            <h3>Natasha</h3>
            <img className="aboutpic" src={natasha} alt="natasha"></img>
            <p>
              https://github.com/KollerCode{" "}
              <a href="https://github.com/KollerCode" />{" "}
            </p>
            <p>
              https://www.linkedin.com/in/kollernatasha/{" "}
              <a href="https://www.linkedin.com/in/kollernatasha/" />{" "}
            </p>
          </div>
          <div className="each-creator">
            <h3>Pema</h3>
            <img className="aboutpic-1" src={pema} alt="pema"></img>
            <p>
              https://github.com/PemaL <a href="https://github.com/PemaL" />{" "}
            </p>
            <p>
              https://www.linkedin.com/in/pemal/{" "}
              <a href="https://www.linkedin.com/in/pemal/ " />{" "}
            </p>
          </div>
          <br />
        </div>
      </>
    );
  }
}
