import react, { Component } from "react";
import $ from "jquery";
import {
  add1,
  add2,
  add3,
  add4,
  add5,
  add6,
  pn1,
  pn2,
  pn3,
  pn4,
  pn5,
  pn6,
  email1,
  email2,
  email3,
  email4,
  email5,
  email6,
  loginplz,
} from "./fakeData";
import family1 from "../assets/family1.jpg";
import family2 from "../assets/family2.jpg";
import family3 from "../assets/family3.jpg";
import family4 from "../assets/family4.jpg";
import family5 from "../assets/family5.jpg";
import family6 from "../assets/family6.jpg";
import family8 from "../assets/family8.jpeg";
import family9 from "../assets/family9.jpg";
import family10 from "../assets/family10.jpeg";
import family11 from "../assets/family11.png";

import "../assets/css/card.css";
export default class Culture extends Component {
  handlerInOut(res) {
    // $(window).load(function() {
    //   $('.post-module').hover(function() {
    //     $(this).find('.description').stop().animate({
    //       height: "toggle",
    //       opacity: "toggle"
    //     }, 300);
    //   });
    // });
  }

  render() {
    let name;
    if (localStorage.getItem("user")) {
      const currName = JSON.parse(localStorage.getItem("user")).username;
      name = <> Welcome {currName}</>;
    } else {
      name = "Login/Signup to see contact details for these wonderful hosts";
    }
    return (
      <>
        <h1>
          <strong>Community Activities</strong>
        </h1>
        <div class="culture-container">
          <h1> {name} </h1>
          <div class="row">
            {/* Card 1 */}
            <div class="column">
              {/* <!-- Post--> */}
              <div class="post-module">
                {/* <!-- Thumbnail--> */}
                <div class="thumbnail">
                  <div class="date">
                    <div class="day">1</div>
                    <div class="month">April</div>
                  </div>
                  <img src={family1} />
                </div>
                {/* <!-- Post Content--> */}
                <div class="post-content">
                  <div class="category">Excursion</div>
                  <h1 class="title">Join our family on a SeaWorld adventure</h1>
                  <h2 class="sub_title">Let The Fun Begin</h2>
                  <p class="description">
                    We are a Cuban and Colombian family of four. My children
                    love animals and SeaWorld. I have a son with Autism. Looking
                    for open-minded families that are understanding of
                    disabilities and mental health. Bring your kids and let's go
                    to SeaWorld!
                  </p>
                  <div class="post-meta">
                    <p class="timestamp">
                      <span> {pn1}</span>
                    </p>
                    <p class="timestamp">
                      <span> {email1}</span>
                    </p>
                    <p class="timestamp">
                      <span> {add1}</span> <span>Miami, FL 33169</span>
                    </p>
                    <p class="timestamp">
                      <span>
                        {" "}
                        <a
                          href="http://localhost:3000/login"
                          style={{ color: "blue" }}
                        >
                          {loginplz}
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div class="column">
              {/* <!-- Post--> */}
              <div class="post-module">
                {/* <!-- Thumbnail--> */}
                <div class="thumbnail">
                  <div class="date">
                    <div class="day">27</div>
                    <div class="month">Apr</div>
                  </div>
                  <img src={family11} className="family9" />
                </div>
                {/* <!-- Post Content--> */}
                <div class="post-content">
                  <div class="category">Food</div>
                  <h1 class="title">Share Meals in Anita's Home</h1>
                  <h2 class="sub_title">Fill your belly with a smile</h2>
                  <p class="description">
                    We are a Dominican-Haitian family who wants to share our
                    culture with others through food! Come try our Caribbean
                    cuisine with mangu and platano. Let's cook together, bring
                    your fave dish and let's share our cultures!
                  </p>
                  <div class="post-meta">
                    <p class="timestamp">
                      <span> {pn2}</span>
                    </p>
                    <p class="timestamp">
                      <span> {email2}</span>
                    </p>
                    <p class="timestamp">
                      <span> {add2}</span> <span>Miami, FL 33157</span>
                    </p>
                    <p class="timestamp">
                      <span>
                        {" "}
                        <a
                          href="http://localhost:3000/login"
                          style={{ color: "blue" }}
                        >
                          {loginplz}
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div class="column">
              {/* <!-- Post--> */}
              <div class="post-module">
                {/* <!-- Thumbnail--> */}
                <div class="thumbnail">
                  <div class="date">
                    <div class="day">30</div>
                    <div class="month">May</div>
                  </div>
                  <img src={family4} />
                </div>
                {/* <!-- Post Content--> */}
                <div class="post-content">
                  <div class="category">Excursion</div>
                  <h1 class="title">Kayaking in South Beach</h1>
                  <h2 class="sub_title">Fun on the water</h2>
                  <p class="description">
                    Our family and friends from Puerto Rico love to get together
                    every month for kayaking. It is a cool and relaxing activity
                    for us. We would love to meet new people who love to kayak
                    or are willing to try it out!
                  </p>
                  <div class="post-meta">
                    <p class="timestamp">
                      <span> {pn3}</span>
                    </p>
                    <p class="timestamp">
                      <span> {email3}</span>
                    </p>
                    <p class="timestamp">
                      <span> {add3}</span> <span>Miami, Florida 33139</span>
                    </p>
                    <p class="timestamp">
                      <span>
                        {" "}
                        <a
                          href="http://localhost:3000/login"
                          style={{ color: "blue" }}
                        >
                          {loginplz}
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div class="column">
              {/* <!-- Post--> */}
              <div class="post-module">
                {/* <!-- Thumbnail--> */}
                <div class="thumbnail">
                  <div class="date">
                    <div class="day">27</div>
                    <div class="month">May</div>
                  </div>
                  <img src={family8} />
                </div>
                {/* <!-- Post Content--> */}
                <div class="post-content">
                  <div class="category">Shopping</div>
                  <h1 class="title">Shopping in Wynwood</h1>
                  <h2 class="sub_title">Come shop with me</h2>
                  <p class="description">
                    I enjoy going to Wynwood for shopping at locally-owned
                    boutiques and gift shops. I like unique items that celebrate
                    my Afro-Latinx heritage and I'd like to share it with you!
                  </p>
                  <div class="post-meta">
                    <p class="timestamp">
                      {" "}
                      <span> {pn4}</span>
                    </p>
                    <p class="timestamp">
                      {" "}
                      <span> {email4}</span>
                    </p>
                    <p class="timestamp">
                      {" "}
                      <span> {add4}</span> <span>Miami, Florida 33180</span>
                    </p>
                    <p class="timestamp">
                      <span>
                        {" "}
                        <a
                          href="http://localhost:3000/login"
                          style={{ color: "blue" }}
                        >
                          {loginplz}
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div class="column">
              {/* <!-- Post--> */}
              <div class="post-module">
                {/* <!-- Thumbnail--> */}
                <div class="thumbnail">
                  <div class="date">
                    <div class="day">27</div>
                    <div class="month">June</div>
                  </div>
                  <img src={family10} />
                </div>
                {/* <!-- Post Content--> */}
                <div class="post-content">
                  <div class="category">Language</div>
                  <h1 class="title">Language Exchange at the Winery</h1>
                  <h2 class="sub_title">
                    Wine tasting and Spanish learning in the 305. DALE!!!
                  </h2>
                  <p class="description">
                    So many of us want to learn Spanish and feel shy, so let's
                    get borracho and practice!
                  </p>
                  <div class="post-meta">
                    <p class="timestamp">
                      <span> {pn5}</span>
                    </p>
                    <p class="timestamp">
                      <span> {email5}</span>
                    </p>
                    <p class="timestamp">
                      <span> {add5}</span> <span>Miami, Florida 33180</span>
                    </p>
                    <p class="timestamp">
                      <span>
                        {" "}
                        <a
                          href="http://localhost:3000/login"
                          style={{ color: "blue" }}
                        >
                          {loginplz}
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />

            {/* Card 6 */}
            <div class="column">
              {/* <!-- Post--> */}
              <div class="post-module">
                {/* <!-- Thumbnail--> */}
                <div class="thumbnail">
                  <div class="date">
                    <div class="day">27</div>
                    <div class="month">July</div>
                  </div>
                  <img src={family6} />
                </div>
                {/* <!-- Post Content--> */}
                <div class="post-content">
                  <div class="category">Sports</div>
                  <h1 class="title">Marathon Running</h1>
                  <h2 class="sub_title">Race to the finish line</h2>
                  <p class="description">
                    We are a group of fitness-minded friends from Mexico City
                    who run 5ks and marathons. Come join us for a run for the
                    Lifetime Miami Marathon.
                  </p>
                  <div class="post-meta">
                    <p class="timestamp">
                      <span> {pn6}</span>
                    </p>
                    <p class="timestamp">
                      <span> {email6}</span>
                    </p>
                    <p class="timestamp">
                      <span> {add6}</span> <span>Miami, Florida, 33169</span>
                    </p>
                    <p class="timestamp">
                      <span>
                        {" "}
                        <a
                          href="http://localhost:3000/login"
                          style={{ color: "blue" }}
                        >
                          {loginplz}
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
        </div>
      </>
    );
  }
}
