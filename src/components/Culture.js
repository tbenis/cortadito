import react, { Component } from "react";
import $ from 'jquery';
import {add1, add2, add3, add4, add5, add6, pn1, pn2, pn3, pn4, pn5, pn6, email1, email2, email3, email4, email5, email6} from "./fakeData"

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
      const currName = localStorage.getItem("user")
      name = (
        <>
          {" "}
          Welcome { currName } 
        </>
      );
    } else {
      name = "Login/Signup to see contact Details for theses wonderful hosts";
    }
    return (
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
                  <div class="day">15</div>
                  <div class="month">Mar</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              {/* <!-- Post Content--> */}
              <div class="post-content">
                <div class="category">Food</div>
                <h1 class="title">Share Meals in Anita's Home</h1>
                <h2 class="sub_title">Let The fun Begin</h2>
                <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet pulvinar purus. Pellentesque rutrum lobortis augue sit amet aliquet. Nam id tempor massa, non iaculis nisl. 
                </p>
                <div class="post-meta">
                  < p class="timestamp"> Phone#:
                    <span>{" "}{ pn1}</span>
                  </p>
                  < p class="timestamp"> Email:
                    <span>{" "}{email1}</span>
                  </p>
                  < p class="timestamp"> Location:
                    <span>{" "} {add1}</span>, {" "}
                    <span>Miami FL, 33169</span>
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
                  <div class="month">Mar</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              {/* <!-- Post Content--> */}
              <div class="post-content">
                <div class="category">Food</div>
                <h1 class="title">Share Meals in Anita's Home</h1>
                <h2 class="sub_title">Let The fun Begin</h2>
                <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet pulvinar purus. Pellentesque rutrum lobortis augue sit amet aliquet. Nam id tempor massa, non iaculis nisl. 
                </p>
                <div class="post-meta">
                  < p class="timestamp"> Phone#:
                    <span>{" "}{ pn2}</span>
                  </p>
                  < p class="timestamp"> Email:
                    <span>{" "}{email2}</span>
                  </p>
                  < p class="timestamp"> Location:
                    <span>{" "} {add2}</span>, {" "}
                    <span>Miami FL, 33157</span>
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
                  <div class="month">Mar</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              {/* <!-- Post Content--> */}
              <div class="post-content">
                <div class="category">Food</div>
                <h1 class="title">Share Meals in Anita's Home</h1>
                <h2 class="sub_title">Let The fun Begin</h2>
                <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet pulvinar purus. Pellentesque rutrum lobortis augue sit amet aliquet. Nam id tempor massa, non iaculis nisl. 
                </p>
                <div class="post-meta">
                  < p class="timestamp"> Phone#:
                    <span>{" "}{ pn3}</span>
                  </p>
                  < p class="timestamp"> Email:
                    <span>{" "}{email3}</span>
                  </p>
                  < p class="timestamp"> Location:
                    <span>{" "} {add3}</span>, {" "}
                    <span>MMiami Beach Florida 33139</span>
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
                  <div class="month">Mar</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              {/* <!-- Post Content--> */}
              <div class="post-content">
                <div class="category">Food</div>
                <h1 class="title">Share Meals in Anita's Home</h1>
                <h2 class="sub_title">Let The fun Begin</h2>
                <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet pulvinar purus. Pellentesque rutrum lobortis augue sit amet aliquet. Nam id tempor massa, non iaculis nisl. 
                </p>
                <div class="post-meta">
                  < p class="timestamp"> Phone#:
                    <span>{" "}{ pn4}</span>
                  </p>
                  < p class="timestamp"> Email:
                    <span>{" "}{email4}</span>
                  </p>
                  < p class="timestamp"> Location:
                    <span>{" "} {add4}</span>, {" "}
                    <span>Florida(FL), 33180</span>
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
                  <div class="month">Mar</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              {/* <!-- Post Content--> */}
              <div class="post-content">
                <div class="category">Food</div>
                <h1 class="title">Share Meals in Anita's Home</h1>
                <h2 class="sub_title">Let The fun Begin</h2>
                <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet pulvinar purus. Pellentesque rutrum lobortis augue sit amet aliquet. Nam id tempor massa, non iaculis nisl. 
                </p>
                <div class="post-meta">
                  < p class="timestamp"> Phone#:
                    <span>{" "}{ pn5}</span>
                  </p>
                  < p class="timestamp"> Email:
                    <span>{" "}{email5}</span>
                  </p>
                  < p class="timestamp"> Location:
                    <span>{" "} {add5}</span>, {" "}
                    <span>Florida(FL), 33180</span>
                  </p>

                </div>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          
          {/* Card 6 */}
          <div class="column">
            {/* <!-- Post--> */}
            <div class="post-module">
              {/* <!-- Thumbnail--> */}
              <div class="thumbnail">
                <div class="date">
                  <div class="day">27</div>
                  <div class="month">Mar</div>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
              </div>
              {/* <!-- Post Content--> */}
              <div class="post-content">
                <div class="category">Food</div>
                <h1 class="title">Share Meals in Anita's Home</h1>
                <h2 class="sub_title">Let The fun Begin</h2>
                <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet pulvinar purus. Pellentesque rutrum lobortis augue sit amet aliquet. Nam id tempor massa, non iaculis nisl. 
                </p>
                <div class="post-meta">
                  < p class="timestamp"> Phone#:
                    <span>{" "}{ pn6}</span>
                  </p>
                  < p class="timestamp"> Email:
                    <span>{" "}{email6}</span>
                  </p>
                  < p class="timestamp"> Location:
                    <span>{" "} {add6}</span>, {" "}
                    <span>Florida(FL), 33169</span>
                  </p>

                </div>
              </div>
            </div>
          </div>

        </div>

        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

