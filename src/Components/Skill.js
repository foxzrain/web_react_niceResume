import React, { Component } from "react";
import Slide from "react-reveal";
import '../css/layout.css';
import '../css/media-queries.css';

class Skill extends Component {
  render() {
    if (!this.props.data) return null;
    
    const skills = this.props.data.skills.map((skills) => {
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>            
          <p className="skill">{skills.level}</p>
          <em>{skills.name}</em>
          <span style={{ width }} className={className}></span>
        </li>
      );
    });

    return (
      <section id="skill">
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Skill;
