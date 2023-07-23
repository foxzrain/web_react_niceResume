import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Activity from "./components/Activity";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Skill data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Activity data={this.state.resumeData.activity} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
