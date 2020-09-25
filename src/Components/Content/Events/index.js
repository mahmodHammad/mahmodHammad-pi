import React from "react";
import "./index.css";

import "./index.css";

export default function Events() {
  return (
    <div className="slider">
      <div className="slides">
        <div name="slide-1">
          <div className="eventsM">
            <h2>Pi Insights</h2>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <h4>About event</h4>
                <p className="eventInfo">
                  (will be in the last week of Feb. ±1 week)<br></br>
                  <br></br>
                  Will contain +15 Experiments determined by our prototypers
                  team<br></br>
                  <br></br>
                  Our fair this year will be in the same place as the last year
                  as shown in the pictures
                </p>
              </div>
              <div className="col-md-6">
                <h4>Images from event</h4>
                <p>
                  <img
                    src="https://via.placeholder.com/200"
                    alt="Pi Insights"
                  />
                  <img
                    src="https://via.placeholder.com/200"
                    alt="Pi Insights"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div name="slide-2">
          <div className="eventsM">
            <h2>Pi workshops</h2>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <h4>About event</h4>
                <p>
                  (will be in the last week of Feb. + or – 1 week){"\n"}
                  Will contain +15 Experiments determined by our prototypers
                  team{"\n"}
                  Our fair this year will be in the same place as the last year
                  as shown in the following pictures:
                </p>
              </div>
              <div className="col-md-6">
                <h4>Images from event</h4>
                <p>
                  <img src="e1_1.png"></img>
                  <img src="e1_2.png"></img>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
