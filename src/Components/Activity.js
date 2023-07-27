import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import '../css/layout.css';
import '../css/media-queries.css';

let id = 0;
class Activity extends Component {
  render() {
    if (!this.props.data) return null;

    const activities = this.props.data.activities.map(function (activities) {
      let activityImage = "./assets/images/" + activities.image;

      return (
        <div key={id++} className="columns activity-item">
          <div className="item-wrap">
            <Zmage alt={activities.title} src={activityImage} set={activities.set}/>
            <div style={{ textAlign: "center", color: "#fff" }}>{activities.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="activity">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>My Activities.</h1>

              <div
                id="activity-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {activities}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Activity;
