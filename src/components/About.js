import react, { Component } from "react";
import natasha from "../assets/natasha.jpg";
import benis from "../assets/benis.jpeg";
import jen from "../assets/jen.jpeg";
import pema from "../assets/pema1.jpg";

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
            <p>Benis is a Computer Science Junior at University of Maryland, College Park. She has worked in the tech industry for about two years as a User Interface developer and enjoys building fun web apps in her spare time.</p>
            <p><a href="https://github.com/tbenis" className="aboutlink">https://github.com/tbenis </a>  </p>
            <p><a href="https://www.linkedin.com/in/tbenis/" className="aboutlink">https://www.linkedin.com/in/tbenis/</a>  </p>
          </div>

          <div className="each-creator">
            <h3>Jen</h3>
            <img className="aboutpic" src={jen} alt="jen"></img>
            <p>Jen is a Software Engineering student at Flatiron School. She has a background in Mental Health with a Bachelor's and Master's in Psychology. She has a passion for coding projects that contribute towards a positive impact for other people. She enjoys hiking, cooking, drawing, painting, and traveling in her free time.</p>
            <p> <a href="https://github.com/hopesunknown" className="aboutlink">https://github.com/hopesunknown</a></p>
            <p><a href="https://www.linkedin.com/in/jentchai/" className="aboutlink">https://www.linkedin.com/in/jentchai/</a>  </p>
          </div>

          <div className="each-creator">
            <h3>Natasha</h3>
            <img className="aboutpic" src={natasha} alt="natasha"></img>
            <p>Natasha is a jack of all trades. Holding a Master's in International Education and an undergraduate degree in Anthropology and music. She is always looking for a challenge and has traveled around the world picking up various languages along the way. Coding is her newest passion and she is feels like she is finally where she belongs.</p>
            <p><a href="https://github.com/KollerCode" className="aboutlink">https://github.com/KollerCode</a>  </p>
            <p><a href="https://www.linkedin.com/in/kollernatasha/" className="aboutlink">https://www.linkedin.com/in/kollernatasha/</a>  </p>
          </div>
          
          <div className="each-creator">
            <h3>Pema</h3>
            <img className="aboutpic-1" src={pema} alt="pema"></img>
            <p>Pema is a recent Computer Science graduate with experience in full stack development. When she is not in front of a screen, she is eating her way through New York City.</p>
            <p><a href="https://github.com/PemaL" className="aboutlink">https://github.com/PemaL</a>  </p>
            <p><a href="https://www.linkedin.com/in/pemal/" className="aboutlink">https://www.linkedin.com/in/pemal/</a>  </p>

          </div>
          <br />
        </div>
      </>
    );
  }
}
