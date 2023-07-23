import React, { Component } from "react";
import Slide from "react-reveal";

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;
    
    const portfolio = this.props.data.portfolioes.map(function (port) {
      return (
        <div key={port.name}>
          <h3>{port.name}</h3>
          <p className="info">
            <span>&bull;</span><a href={port.link}>{port.link}</a>
          </p>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Slide left duration={1300}>
          <div className="row">
            <div className="three columns header-col">
              <h1>
                <span>Portfolio</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{portfolio}</div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Portfolio;
