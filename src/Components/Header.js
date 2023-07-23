import React, { Component } from "react";
import { Link } from "react-scroll";
import '../css/layout.css';
import '../css/media-queries.css';

class Header extends Component {  
  render() {
    if (!this.props.data) return null;

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#about" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li>
              <Link activeClass="active" smooth spy to="about" duration={500} offset={-70}>
                About
              </Link>
            </li>

            <li>
              <Link activeClass="active" smooth spy to="resume" duration={500} offset={-70}>
                Education & Works
              </Link>
            </li>

            <li>
              <Link activeClass="active" smooth spy to="skill" duration={500} offset={-70}>
                Skills
              </Link>
            </li>

            <li>
              <Link activeClass="active" smooth spy to="portfolio" duration={500} offset={-70}>
                Portfolio
              </Link>
            </li>

            <li>
              <Link activeClass="active" smooth spy to="activity" duration={500} offset={-70}>
                Activities
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
